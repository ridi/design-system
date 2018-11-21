/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-dynamic-require */

const chalk = require('chalk');
const chokidar = require('chokidar');
const debounce = require('debounce-async').default;
const decache = require('decache');
const path = require('path');

const reimport = moduleName => {
  decache(moduleName);
  return require(moduleName);
};

const startWatch = async ({
  paths,
  ignored,
  build,
  delay = 100,
  onBuildStart = () => {},
  onBuildFinish = () => {},
  onBuildError = err => { throw err; },
} = {}) => {
  const buildManaged = async () => {
    try {
      onBuildStart();
      await build();
      onBuildFinish();
    } catch (err) {
      onBuildError(err);
    }
  };

  await buildManaged();

  const watcher = chokidar.watch(paths, {
    ignored,
    ignoreInitial: true,
  });

  // Build should be delayed when several files are added or removed at once
  const buildDebounced = debounce(buildManaged, delay);

  const handleEvent = async () => {
    try {
      await buildDebounced();
    } catch (err) {
      if (err === 'canceled') {
        return;
      }
      throw err;
    }
  };

  watcher.on('add', handleEvent);
  watcher.on('change', handleEvent);
  watcher.on('unlink', handleEvent);
  watcher.on('error', console.error);
};

const watch = (options = {}) => startWatch({
  paths: [
    path.join(__dirname, '../src'),
    path.join(__dirname, '../templates'),
  ],
  build: () => reimport('./build')(),
  ...options,
});

if (process.mainModule.filename === __filename) {
  // noinspection JSIgnoredPromiseFromCall
  watch({
    onBuildFinish: () => {
      console.log(chalk.bold.green('Build finished!'));
    },
  });
} else {
  module.exports = watch;
}
