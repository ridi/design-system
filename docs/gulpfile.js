const del = require('del');
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const shell = require('gulp-shell');

const config = {
  css: {
    src: '_css/*.css',
    dest: 'assets/css',
  },
};

gulp.task('css:build', async () => {
  await del(config.css.dest);
  return (
    gulp.src(config.css.src)
      .pipe(postcss(() => ({})))
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
