'use strict';
/*
 * Script creates components that depend on svg.
 * Opportunities:
 *   - generate components named like svg and depends on svg;
 *   - generate index.ts with collected components in folder;
 *   - used prettier to format the generated output.
 * How to use:
 *   $ node <path>/generate-components-from-svg.js </path/to/svg/folder>
 */
const { join, relative } = require('path');
const { readdir, readFile, writeFile } = require('fs').promises;
const { transform } = require('@svgr/core');
const prettierConfig = require('../.prettierrc.cjs');

const SVG_EXT = '.optimized.svg';
const TSX_EXT = '.tsx';

const PATH_TO_SVG_FOLDER = join(process.cwd(), process.argv.slice(-1)[0]);
const PATH_TO_CORE = join(process.cwd(), 'src', 'core');

const svgrTemplate = (variables, { tpl }) => {
  const pathToCore = relative(PATH_TO_SVG_FOLDER, PATH_TO_CORE);

  return tpl`
      import * as React from 'react';
      import type { IconProps } from '${pathToCore}';
      import { castIconProps } from '${pathToCore}';

      const ${variables.componentName} = (property: IconProps): ReturnType<React.FC> => {
        const props = castIconProps(property);

        return ${variables.jsx};
      }

      ${variables.componentName}.defaultProps = {
        height: 16,
        width: 16,
      }

      export default ${variables.componentName};
    `;
};

const componentNameFromKebab = fileName =>
  fileName
    .split('-')
    .map(str => str[0].toUpperCase() + str.slice(1))
    .join('');

const createExportFromTsxFile = fileName =>
  `export { default as ${componentNameFromKebab(fileName)}Icon } from './${fileName}';`;

const createComponentForSvg = async fileName => {
  const componentName = componentNameFromKebab(fileName);
  const outFilePath = join(PATH_TO_SVG_FOLDER, `${fileName}${TSX_EXT}`);
  const svgPath = join(PATH_TO_SVG_FOLDER, `${fileName}${SVG_EXT}`);
  // Generate Uniq id Prefix for svg
  const perFilePrefix = Math.random().toString(36).substr(2, 3);

  try {
    const svgContent = await readFile(svgPath, 'utf8');

    const componentContent = await transform(
      svgContent,
      {
        template: svgrTemplate,
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
        typescript: true,
        prettier: true,
        prettierConfig: { ...prettierConfig, parser: 'babel' },
        svgo: true,
        svgoConfig: {
          plugins: [
            'removeXMLNS',
            {
              name: 'prefixIds',
              params: {
                prefix: () => perFilePrefix,
                delim: '-',
              },
            },
            {
              name: 'removeAttrs',
              params: {
                attrs: '(height|width)',
              },
            },
          ],
        },
      },
      {
        componentName,
      }
    );

    await writeFile(outFilePath, componentContent, { encoding: 'utf-8' });
    console.log(`> Generated: ${outFilePath}`);

    return fileName;
  } catch (e) {
    console.error(e);
  }
};

const createIndexFileForTsxComponents = async tsxFileNames => {
  const exportList = [];
  const outFilePath = join(PATH_TO_SVG_FOLDER, 'index.tsx');

  for (const fileName of tsxFileNames) {
    exportList.push(createExportFromTsxFile(fileName));
  }

  try {
    await writeFile(outFilePath, exportList.join('\n'), { encoding: 'utf-8' });
    console.log(`> Generated: ${outFilePath}`);
  } catch (e) {
    console.error(e);
  }
};

void (async function main() {
  console.log('> Generate components from svg');

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

  const diffFiles = svgFileNames.reduce((diffList, svgFile) => {
    if (!setTsxFiles.has(svgFile)) {
      diffList.push(svgFile);
    }

    return diffList;
  }, []);

  let generatedFileNames = [];

  if (diffFiles.length) {
    generatedFileNames = await Promise.all(
      diffFiles.map(fileName => createComponentForSvg(fileName))
    );
  } else {
    console.log('> Has no files to generate');
  }

  const allTsxFileNames = tsxFileNames.concat(generatedFileNames);

  if (allTsxFileNames.length && !setTsxFiles.has('index')) {
    await createIndexFileForTsxComponents(allTsxFileNames);
  }
})();
