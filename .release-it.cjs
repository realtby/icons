module.exports = {
  npm: {
    publish: true,
  },
  'only-version': true,
  git: {
    changelog: 'auto-changelog --stdout --commit-limit false -u > /dev/null',
    commitMessage: 'release(*): ${version}',
  },
  hooks: {
    'before:init': ['npm run lint', 'make build'],
    'after:bump': 'auto-changelog -p',
    'after:release': 'echo "successfully released ${name} v${version} to ${repo.repository}"',
  },
};
