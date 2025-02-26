export interface ISettingsChangedMessage {
  type: 'settingsChanged';
  config: Record<string, unknown>;
}

export interface ISaveSettingsMessage {
  type: 'saveSettings';
  changes: {
    [key: string]: any;
  };
  removes: string[];
  scope: 'user' | 'workspace';
  uri: string;
}

export type Message = ISaveSettingsMessage | ISettingsChangedMessage;
export type Invalidates = 'all' | 'config' | undefined;

export interface IBootstrap {
  config: Record<string, unknown>;
}

export interface ISettingsBootstrap extends IBootstrap {
  scope: 'user' | 'workspace';
  scopes: Array<['user' | 'workspace', string]>;
  defaults: Record<string, unknown>;
}

declare global {
  interface Window {
    bootstrap: IBootstrap | ISettingsBootstrap | Record<string, unknown>;
  }
}
