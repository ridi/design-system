const cssnano = require('cssnano');
const gulp = require('gulp');
const clean = require('gulp-dest-clean');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const shell = require('gulp-shell');
const sourcemaps = require('gulp-sourcemaps');
const _ = require('lodash');
const path = require('path');
const colorHwb = require('postcss-color-hwb');
const atImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');
const scss = require('postcss-scss');
const url = require('postcss-url');
const runSequence = require('run-sequence');

const config = {
  css: {
    src: 'assets/_css/index.css',
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
        colorHwb(),
        postcssPresetEnv({
          stage: 0,
        }),
        url([
          {
            filter: asset => _.startsWith(asset.url, '~'),
            url: asset => {
              asset.pathname = path.join('/node_modules', _.trimStart(asset.url, '~'));
              return asset.pathname;
            },
            multi: true,
          },
          {
            filter: asset => _.startsWith(asset.url, '/') || _.startsWith(asset.url, '~'),
            url: 'inline',
            basePath: process.cwd(),
          },
          {
            url: 'inline',
          },
        ]),
        cssnano({
          preset: ['default', {
            svgo: {
              plugins: [
                {
                  addAttributesToSVGElement: {
                    attributes: [
                      { xmlns: 'http://www.w3.org/2000/svg' },
                    ],
                  },
                },
              ],
            },
          }],
        }),
      ], {
        parser: scss,
      }))
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
gulp.task('jekyll:serve', shell.task('bundle exec jekyll liveserve --host=0.0.0.0'));

gulp.task('build', callback => runSequence('css:build', 'jekyll:build', callback));
gulp.task('start', ['css:watch', 'jekyll:serve']);
