import { Command, CommanderError } from 'commander';
import { resolve } from 'path';
import { MakeComponent } from './commands/make-component.command';
import { MakePage } from './commands/make-page.command';
import { MakeService } from './commands/make-service.command';
import { MakeComposable } from './commands/make-composable.command';
import { MakeIcon } from './commands/make-icon.command';
import { MakeLayout } from './commands/make-layout.command';

const run = async () => {
  const packageJson = require(resolve(__dirname, '../package.json'));

  const program = new Command(packageJson.name)
    .version(packageJson.version)
    .option('-c, --config <path>', 'Path to config file')
    .exitOverride();

  program.addCommand(MakeComponent);
  program.addCommand(MakePage);
  program.addCommand(MakeService);
  program.addCommand(MakeComposable);
  program.addCommand(MakeIcon);
  program.addCommand(MakeLayout);

  try {
    await program.parseAsync(process.argv);
  } catch (e) {
    if (e instanceof CommanderError && e.exitCode !== 0) {
    }
  }

  process.exit(0);
};

run();
