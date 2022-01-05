import { createCommand } from 'commander';
import { make, removeDuplicateSuffix } from '../utils';

export const MakeComposable = createCommand('make:composable')
  .description(
    'Create a new composable that contains related hooks, contexts, providers, HOCs'
  )
  .argument('name', 'Name of the composable')
  .action((name?: string) => {
    if (name !== undefined) {
      name = removeDuplicateSuffix(
        name[0].toLocaleLowerCase() + name.slice(1),
        'Composable'
      );

      make('Composable', name, { Name: name });
    }
  })
  .exitOverride();
