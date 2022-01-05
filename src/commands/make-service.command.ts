import { createCommand } from 'commander';
import { make, removeDuplicateSuffix } from '../utils';

export const MakeService = createCommand('make:service')
  .description('Create a new service')
  .argument('name', 'Name of the service')
  .action((name?: string) => {
    if (name !== undefined) {
      name = removeDuplicateSuffix(
        name[0].toLowerCase() + name.slice(1),
        'Service'
      );

      make('Service', name, { Name: name });
    }
  })
  .exitOverride();
