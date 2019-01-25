const path = require('path');
const fs = require('fs');
const styleguidist = require('react-styleguidist');
const config = require('./styleguide.config');

styleguidist(config).build(
  (err, config) => {
    if (err) {
      console.error(err.stack || err);
      process.exit(err.code || 1);
    }

    const versionDir = path.basename(config.styleguideDir);
    const html = `<script>location.replace('${versionDir}')</script>`;
    const distDir = path.join(config.styleguideDir, '..');
    const indexPath = path.join(distDir, 'index.html');
    fs.writeFileSync(indexPath, html);

    console.log(`Style guide published to ${config.styleguideDir}`);
  }
);
