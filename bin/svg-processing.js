'use strict';

const { execSync } = require('child_process');
const { join } = require('path');

const svgFolderPath = process.argv.slice(-1)[0];

const pathToProcessing = join(process.cwd(), 'bin');
const pathToOptimizeSvg = join(pathToProcessing, 'optimize-svg.js');
const pathToGenerateComponentsFromSvg = join(pathToProcessing, 'generate-components-from-svg.js');
const pathToRemoveComponentsFromSvg = join(pathToProcessing, 'remove-components-from-svg.js');

if (process.argv.length !== 3) {
  console.warn('> Please add correct argument to command: <path/to/svg/folder>');

  return;
}

execSync(`node ${pathToOptimizeSvg} ${svgFolderPath}`, { stdio: 'inherit' });

execSync(`node ${pathToRemoveComponentsFromSvg} ${svgFolderPath}`, { stdio: 'inherit' });

execSync(`node ${pathToGenerateComponentsFromSvg} ${svgFolderPath}`, { stdio: 'inherit' });
