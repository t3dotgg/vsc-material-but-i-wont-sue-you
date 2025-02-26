import {
  commands as Commands,
  ExtensionContext
} from 'vscode';

import * as ThemeCommands from './commands';
import {extensionManager} from './core/extension-manager';

export async function activate(context: ExtensionContext): Promise<void> {
  context.globalState.setKeysForSync([extensionManager.VERSION_KEY]);
  await extensionManager.init(context);

  // Registering commands
  Commands.registerCommand('materialTheme.setAccent', ThemeCommands.setAccent);
}
