import { createCommand, OptionValues } from 'commander';
import { add, make, removeDuplicateSuffix } from '../utils';

export interface MakeComponentOptions extends OptionValues {
  append?: string;
}

export const MakeComponent = createCommand('make:component')
  .description('Create a new component')
  .argument('name', 'Name of the component')
  .option(
    '-a, --append <file>',
    'Append the new component to the file instead of creating a new file'
  )
  .action((name: string | undefined, options: MakeComponentOptions) => {
    if (name !== undefined && name !== '') {
      name = removeDuplicateSuffix(
        name[0].toUpperCase() + name.slice(1),
        'Component'
      );

      if (options.append) {
        add('AddComponent', name, { Name: name }, options.append);
      } else {
        make('Component', name, {
          Name: name,
        });
      }
    }
  })
  .exitOverride();
