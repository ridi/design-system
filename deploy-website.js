const { execSync } = require('child_process');
const ghpages = require('gh-pages');

const gitHash = execSync('git rev-parse HEAD');

ghpages.publish(
  'docs',
  {
    message: `Update website\n\nFrom git hash: ${gitHash}`,
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
