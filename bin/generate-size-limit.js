'use strict';
/*
 * Generate .size-limit.icons.cjs
 */
const { join } = require('path');
const { writeFile, access, constants } = require('fs').promises;
const prettier = require('prettier');
const prettierConfig = require('../.prettierrc.cjs');

const PATH_TO_DIST_ICON = join(process.cwd(), 'dist', 'icons.js');
const PATH_TO_SIZE_LIMIT_ICONS = join(process.cwd(), '.size-limit.icons.cjs');

const sizeLimitIconConstructor = iconName => ({
  name: `> tree-shaking: ${iconName}`,
  path: './dist/icons.esm.js',
  import: `{ ${iconName} }`,
  running: false,
});

const sizeLimitIconsFileTemplate = limits =>
  prettier.format(`module.exports = ${JSON.stringify(limits)}`, {
    ...prettierConfig,
    parser: 'babel',
  });

void (async function main() {
  console.log('> Generate .size-limit.icons.cjs');

  const icons = require(PATH_TO_DIST_ICON);
  const sizeLimitIcons = require(PATH_TO_SIZE_LIMIT_ICONS);

  const existSizeLimitIconsSet = new Set(
    sizeLimitIcons.map(sizeLimit => sizeLimit.import.replace('{ ', '').replace(' }', ''))
  );
  const newSizeLimitValues = Object.keys(icons).reduce((acc, iconName) => {
    if (!existSizeLimitIconsSet.has(iconName)) {
      acc.push(sizeLimitIconConstructor(iconName));
    }

    return acc;
  }, []);

  try {
    if (newSizeLimitValues.length) {
      await writeFile(
        PATH_TO_SIZE_LIMIT_ICONS,
        sizeLimitIconsFileTemplate(sizeLimitIcons.concat(newSizeLimitValues))
      );
      console.log(`> Updated: ${PATH_TO_SIZE_LIMIT_ICONS}`);
    }
  } catch (e) {
    console.error(e);
  }
})();
