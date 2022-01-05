import { createCommand } from 'commander';
import { make, removeDuplicateSuffix } from '../utils';

export const MakePage = createCommand('make:page')
  .description('Create a new page')
  .argument('name', 'Name of the page')
  .action((name?: string) => {
    if (name !== undefined) {
      name = removeDuplicateSuffix(
        name[0].toUpperCase() + name.slice(1),
        'Page'
      );

      make('Page', name, { Name: name });
    }
  })
  .exitOverride();
