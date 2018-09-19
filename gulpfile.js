const cssnano = require('cssnano');
const gulp = require('gulp');
const clean = require('gulp-dest-clean');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const shell = require('gulp-shell');
const sourcemaps = require('gulp-sourcemaps');
const _ = require('lodash');
const atImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');
const url = require('postcss-url');
const runSequence = require('run-sequence');

const config = {
  css: {
    src: '_css/index.css',
    dest: 'assets/css',
  },
};

gulp.task('css:build', () => {
  return (
    gulp.src(config.css.src)
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(postcss([
        atImport({
          resolve: id => _.trimStart(id, '~/'),
          path: [process.cwd()],
        }),
        postcssPresetEnv({
          stage: 0,
          features: {
            'color-mod-function': true,
          },
        }),
        cssnano(),
        url([
          {
            filter: asset => _.startsWith(asset.url, '/'),
            url: 'inline',
            basePath: process.cwd(),
          },
          {
            url: 'inline',
          },
        ]),
      ]))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(config.css.dest))
      .pipe(clean(config.css.dest))
  );
});
gulp.task('css:watch', ['css:build'], () => {
  gulp.watch([
    '**/*.css',
    '!_site/**/*.css',
    `!${config.css.dest}/**/*.css`,
  ], ['css:build']);
});

gulp.task('jekyll:build', shell.task('bundle exec jekyll build'));
gulp.task('jekyll:serve', shell.task('bundle exec jekyll liveserve'));

gulp.task('build', callback => runSequence('css:build', 'jekyll:build', callback));
gulp.task('start', ['css:watch', 'jekyll:serve']);
