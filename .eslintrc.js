module.exports = {
  root: true,
  extends: [
    './node_modules/@realtby/codestyle/eslint/prettier', // prettier first!
    './node_modules/@realtby/codestyle/eslint/base',
    './node_modules/@realtby/codestyle/eslint/typescript',
    './node_modules/@realtby/codestyle/eslint/import',
    './node_modules/@realtby/codestyle/eslint/react',
  ],
};
