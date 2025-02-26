import {extensions, workspace, window, Uri, ExtensionContext} from 'vscode';
import {posix} from 'path';
import {CONFIG_FILE_NAME, USER_CONFIG_FILE_NAME, MATERIAL_THEME_EXT_ID} from '../env';

type MaterialThemeConfig = {
  accents: Record<string, string>;
  accentsProperties: Record<string, {alpha: number; value: null }>;
  changelog?: { lastversion?: string };
};

type PackageJSON = {
  version: string;
  contributes: {
    themes: Array<{
      label: string;
    }>;
  };
};

export interface IExtensionManager {
  init: (context: ExtensionContext) => Promise<void>;
  getPackageJSON: () => PackageJSON;
  getConfig: () => MaterialThemeConfig;
  updateConfig: (config: Partial<MaterialThemeConfig>) => Promise<void>;
  VERSION_KEY: string;
}

class ExtensionManager implements IExtensionManager {
  get VERSION_KEY() {
    return 'vsc-material-theme.version';
  }

  private readonly configFileUri: Uri;
  private readonly userConfigFileUri: Uri;
  private configJSON: MaterialThemeConfig;

  constructor() {
    const extensionFolderUri = Uri.file(extensions.getExtension(MATERIAL_THEME_EXT_ID).extensionPath);
    this.configFileUri = extensionFolderUri.with({path: posix.join(extensionFolderUri.path, CONFIG_FILE_NAME)});
    this.userConfigFileUri = extensionFolderUri.with({path: posix.join(extensionFolderUri.path, USER_CONFIG_FILE_NAME)});
  }

  getPackageJSON(): PackageJSON {
    return extensions.getExtension(MATERIAL_THEME_EXT_ID).packageJSON;
  }

  getConfig(): MaterialThemeConfig {
    return this.configJSON;
  }

  async updateConfig(config: Partial<MaterialThemeConfig>): Promise<void> {
    const newConfig = {...this.configJSON, ...config};
    await workspace.fs.writeFile(this.configFileUri, Buffer.from(JSON.stringify(newConfig), 'utf-8'));
  }

  async init(context: ExtensionContext): Promise<void> {
    try {
      const packageJSON = this.getPackageJSON();

      // Load configuration
      const configBuffer = await workspace.fs.readFile(this.configFileUri);
      const configContent = Buffer.from(configBuffer).toString('utf8');
      this.configJSON = JSON.parse(configContent) as MaterialThemeConfig;

      // Update version in user config
      const userConfigUpdate = {...this.configJSON, changelog: {lastversion: packageJSON.version}};
      await workspace.fs.writeFile(
        this.userConfigFileUri,
        Buffer.from(JSON.stringify(userConfigUpdate), 'utf-8')
      );

      // Store version in global state
      await context.globalState.update(this.VERSION_KEY, packageJSON.version);
    } catch (error) {
      this.configJSON = {accentsProperties: {}, accents: {}};
      await window
        .showErrorMessage(`Material Theme: there was an error while loading the configuration. Please retry or open an issue: ${String(error)}`);
    }
  }
}

export const extensionManager = new ExtensionManager();
