const { execSync } = require('child_process');
const ghpages = require('gh-pages');
const { version } = require('./lerna.json');

const gitHash = execSync('git rev-parse HEAD');

ghpages.publish(
  'package-explorer/dist',
  {
    message: `Update package-explorer v${version}\n\nFrom git hash: ${gitHash}`,
    dest: 'packages',
    add: true,
    dotfiles: true,
  },
  (err) => {
    if (err) {
      console.error(err.stack || err);
      process.exit(err.code || 1);
    }
  },
);
