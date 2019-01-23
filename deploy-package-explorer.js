const ghpages = require('gh-pages');
const { version } = require('./lerna.json');

ghpages.publish(
  'package-explorer/dist',
  {
    message: `Update package-explorer v${version}`,
    dest: 'packages',
    add: true,
    dotfiles: true,
  },
  (err) => {
    if (err) {
      console.error(err.stack || err.message || err);
      process.exit(err.code || 1);
    }
  },
);
