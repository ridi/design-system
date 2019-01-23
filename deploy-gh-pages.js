const fse = require('fs-extra');
const path = require('path');
const ghpages = require('gh-pages');

fse.copySync(
  path.join(__dirname, 'package-explorer/dist'),
  path.join(__dirname, 'docs/packages'),
);

ghpages.publish(
  'docs',
  {
    dotfiles: true,
    push: false,
  },
  (err) => {
    if (err) {
      console.error(err.stack || err.message || err);
      process.exit(err.code || 1);
    }
  },
);
