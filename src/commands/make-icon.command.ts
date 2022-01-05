import { createCommand, OptionValues } from 'commander';
import { add, make, removeDuplicateSuffix } from '../utils';

export interface MakeIconOptions extends OptionValues {
  append?: string;
}

export const MakeIcon = createCommand('make:icon')
  .description('Create a new icon')
  .argument('name', 'Name of the icon')
  .option(
    '-a, --append <file>',
    'Append the new icon to the file instead of creating a new file'
  )
  .action((name: string | undefined, options: MakeIconOptions) => {
    if (name !== undefined && name !== '') {
      name = removeDuplicateSuffix(
        name[0].toUpperCase() + name.slice(1),
        'Icon'
      );

      if (options.append) {
        add('AddIcon', name, { Name: name }, options.append);
      } else {
        make('Icon', name, {
          Name: name,
        });
      }
    }
  })
  .exitOverride();
