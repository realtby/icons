'use strict';
/*
 * Find svg in folder and remove generated component
 * Opportunities:
 *   - remove component by svg name;
 * How to use:
 *   $ node <path>/remove-components-from-svg.js </path/to/svg/folder>
 */
const { join } = require('path');
const { readdir, rm } = require('fs').promises;

const SVG_EXT = '.optimized.svg';
const TSX_EXT = '.tsx';

const PATH_TO_SVG_FOLDER = join(process.cwd(), process.argv.slice(-1)[0]);

const removeFile = async fileName => {
  const pathToTsxFile = join(PATH_TO_SVG_FOLDER, `${fileName}${TSX_EXT}`);

  try {
    await rm(pathToTsxFile);
    console.log(`> Removed: ${pathToTsxFile}`);
  } catch (e) {
    console.error(e);
  }
};

void (async function main() {
  console.log('> Removing components from svg');

  if (process.argv.length !== 3) {
    console.warn('> Please add correct argument to command: <path/to/svg/folder>');

    return;
  }

  const fileNames = await readdir(PATH_TO_SVG_FOLDER);

  const svgFileNames = fileNames
    .filter(fileName => fileName.endsWith(SVG_EXT))
    .map(fileName => fileName.replace(SVG_EXT, ''));
  const tsxFileNames = fileNames
    .filter(fileName => fileName.endsWith(TSX_EXT))
    .map(fileName => fileName.replace(TSX_EXT, ''));

  const setTsxFiles = new Set(tsxFileNames);

  await Promise.all(
    svgFileNames.reduce((removeList, svgFileName) => {
      if (setTsxFiles.has(svgFileName)) {
        removeList.push(removeFile(svgFileName));
      }

      return removeList;
    }, [])
  );

  if (setTsxFiles.has('index')) {
    await removeFile('index');
  }
})();
