import { createCommand } from 'commander';
import { make, removeDuplicateSuffix } from '../utils';

export const MakeLayout = createCommand('make:layout')
  .description('Create a new layout')
  .argument('name', 'Name of the layout')
  .action((name?: string) => {
    if (name !== undefined) {
      name = removeDuplicateSuffix(
        name[0].toUpperCase() + name.slice(1),
        'Layout'
      );

      make('Layout', name, { Name: name });
    }
  })
  .exitOverride();
