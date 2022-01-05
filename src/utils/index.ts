import { execSync } from 'child_process';
import fs from 'fs';
import { dirname, resolve } from 'path';
import config from '../techo.config';

export const removeDuplicateSuffix = (source: string, suffix: string) => {
  return source.endsWith(suffix)
    ? source.slice(0, source.length - suffix.length)
    : source;
};

// Allow only aplhanumeric characters and underscores
export const sanitizeVariableName = (str: string) => {
  return str.replace(/[^a-zA-Z0-9_]/g, '');
};

export type StubDynamicVariables<KeyEnum extends string> = {
  [key in KeyEnum]: string;
};

export const createFileFromStub = <KeyEnum extends string>(
  stubPath: string,
  newFilePath: string,
  variables: StubDynamicVariables<KeyEnum>
) => {
  addToFileFromStub(stubPath, newFilePath, variables);
};

export const addToFileFromStub = <KeyEnum extends string>(
  stubPath: string,
  toPath: string,
  variables: StubDynamicVariables<KeyEnum>
) => {
  try {
    fs.mkdirSync(dirname(toPath), { recursive: true });
  } catch (e) {
    let errnoException = e as NodeJS.ErrnoException;
    if (errnoException.code !== 'EEXIST') {
      throw e;
    }
  }

  const isKeyEnum = (key: string): key is KeyEnum => {
    return Object.keys(variables).includes(key);
  };

  const regex = new RegExp(
    `(${Object.keys(variables)
      .map(name => `{${sanitizeVariableName(name)}}`)
      .join('|')})`,
    'g'
  );

  let content = fs.readFileSync(stubPath).toString();
  content = content.replace(regex, subString => {
    // Remove the curly braces
    // TODO: This is a hacky way to do this
    subString = subString.slice(1, -1);
    if (isKeyEnum(subString)) {
      return variables[subString];
    }
    throw new Error(`Unknown variable ${subString}`);
  });

  fs.appendFileSync(toPath, content);
};

export const make = <KeyEnum extends string>(
  stubType: keyof typeof config.stubs,
  name: string,
  variables: StubDynamicVariables<KeyEnum>
) => {
  let { name: stubName, newFilePath, stubPath } = config.stubs[stubType];

  stubPath = resolve(__dirname, stubPath);
  newFilePath = resolve(newFilePath.replace('{Name}', name));

  createFileFromStub(stubPath, newFilePath, variables);

  console.log(`Created ${stubName.toLowerCase()}: ${name}`);

  if (process.env['NODE_ENV'] !== 'test') {
    if (config.editor) {
      execSync(`${config.editor} ${newFilePath}`);
    }
  }
};

export const add = <KeyEnum extends string>(
  stubType: keyof typeof config.addStubs,
  name: string,
  variables: StubDynamicVariables<KeyEnum>,
  toPath: string
) => {
  let { name: stubName, stubPath } = config.addStubs[stubType];

  stubPath = resolve(__dirname, stubPath);
  toPath = resolve(toPath);

  addToFileFromStub(stubPath, toPath, variables);

  console.log(`Added ${stubName.toLowerCase()}: ${name} to ${toPath}`);

  if (process.env['NODE_ENV'] !== 'test') {
    if (config.editor) {
      execSync(`${config.editor} ${toPath}`);
    }
  }
};
