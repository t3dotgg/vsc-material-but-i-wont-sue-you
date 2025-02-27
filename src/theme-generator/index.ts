import fs from 'fs';
import {VscodeThemeGenerator} from './vscode-theme-generator';
import type {IColorSet} from './interfaces';

export function generateTheme(themeName: string, colorSet: IColorSet, outputFile: string): void {
  const themeJson = new VscodeThemeGenerator().generateTheme(themeName, colorSet);
  fs.writeFileSync(outputFile, themeJson);
}

