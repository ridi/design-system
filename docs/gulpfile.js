const gulp = require('gulp');
const clean = require('gulp-dest-clean');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const shell = require('gulp-shell');
const postcssPresetEnv = require('postcss-preset-env');

const config = {
  css: {
    src: '_css/*.css',
    dest: 'assets/css',
  },
};

gulp.task('css:build', () => {
  return (
    gulp.src(config.css.src)
      .pipe(plumber())
      .pipe(postcss([
        postcssPresetEnv({
          stage: 0,
          features: {
            'color-mod-function': true,
          },
        }),
      ]))
      .pipe(clean(config.css.dest))
      .pipe(gulp.dest(config.css.dest))
  );
});
gulp.task('css:watch', () => {
  gulp.watch(config.css.src, { ignoreInitial: false }, gulp.parallel('css:build'));
});

gulp.task('jekyll:build', shell.task('bundle exec jekyll build'));
gulp.task('jekyll:serve', shell.task('bundle exec jekyll liveserve'));

gulp.task('clean', shell.task('git clean -xdf --exclude=node_modules .'));
gulp.task('build', gulp.series('css:build', 'jekyll:build'));
gulp.task('start', gulp.parallel('css:watch', 'jekyll:serve'));
