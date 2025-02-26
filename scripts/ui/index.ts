import * as fs from 'fs-extra';
import * as path from 'path';

import {BUILD_FOLDER_PATH} from '../../src/env';

const UI_FOLDER_BUILD_PATH = path.join(BUILD_FOLDER_PATH, 'ui');

const run = async (): Promise<void> => {
  try {
    await fs.mkdirp(UI_FOLDER_BUILD_PATH);
  } catch (error) {
    console.error('ERROR build:ui:', error);
    process.exit(1);
  }
};

void run();
