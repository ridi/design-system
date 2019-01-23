const ghpages = require('gh-pages');

ghpages.publish(
  'docs',
  {
    message: 'Update website',
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
