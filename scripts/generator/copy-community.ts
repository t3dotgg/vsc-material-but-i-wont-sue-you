import * as fs from 'fs-extra';

import {COMMUNITY_THEMES_FOLDER_PATH} from '../../src/env';
import {THEME_BUILD_PATH} from '.';

const run = async (): Promise<void> => {
  try {
    fs.copySync(COMMUNITY_THEMES_FOLDER_PATH, THEME_BUILD_PATH);
  } catch (error) {
    console.error('ERROR build:copy-community', error);
    process.exit(1);
  }
};

void run();
