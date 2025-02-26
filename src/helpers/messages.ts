import {
  window as Window
} from 'vscode';

export const MESSAGES = {
  INSTALLATION: {
    message: 'Thank you for using Material Theme!'
  }
};

export const installationMessage = async (): Promise<string> =>
  Window.showInformationMessage(
    MESSAGES.INSTALLATION.message
  );
