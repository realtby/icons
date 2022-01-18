'use strict';
/*
 * Script creates optimized svgs from the svg folder.
 * Opportunities:
 *   - replace .svg to .optimized.svg to mark optimized svgs;
 *   - used svgo to optimize image.
 * How to use:
 *   $ node <path>/optimize-svg.js </path/to/svg/folder>
 */
const { optimize } = require('svgo');
const { join } = require('path');
const { readdir, writeFile, readFile, rename } = require('fs').promises;

const SVG_EXT = '.svg';
const OPTIMIZED_SVG_EXT = '.optimized.svg';

const PATH_TO_SVG_FOLDER = join(process.cwd(), process.argv.slice(-1)[0]);
const SVGO_CONFIG = {};

// Rewire to stream if possible
const optimizeSvg = async svgFileName => {
  const outSvgFileName = svgFileName.replace(SVG_EXT, OPTIMIZED_SVG_EXT);
  const pathToSvgFile = join(PATH_TO_SVG_FOLDER, svgFileName);
  const pathToOutFile = join(PATH_TO_SVG_FOLDER, outSvgFileName);

  try {
    const svgString = await readFile(pathToSvgFile);
    const result = optimize(svgString, SVGO_CONFIG);
    await writeFile(pathToSvgFile, result.data, { encoding: 'utf-8' });
    await rename(pathToSvgFile, pathToOutFile);
    console.log(`> Optimize: ${pathToOutFile}`);
  } catch (e) {
    console.log(e);
  }
};

void (async function main() {
  console.log('> Optimize svg');

  if (process.argv.length !== 3) {
    console.warn('> Please add correct argument to command: <path/to/svg/folder>');

    return;
  }

  const fileNames = await readdir(PATH_TO_SVG_FOLDER);

  const svgFileNames = fileNames.filter(file => file.endsWith(SVG_EXT));
  const svgNotOptimizedFileName = svgFileNames.filter(file => !file.endsWith(OPTIMIZED_SVG_EXT));

  if (svgNotOptimizedFileName.length) {
    await Promise.all(svgNotOptimizedFileName.map(fileName => optimizeSvg(fileName)));
  } else {
    console.log('> Not svg found for optimization');
  }
})();
