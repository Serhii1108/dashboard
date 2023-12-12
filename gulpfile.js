global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  bs: require('browser-sync').create(),
  sass: require('gulp-sass')(require('sass')),

  path: {
    tasks: require('./gulp/config/tasks.js'),
  },
};

$.path.tasks.forEach(function (taskPath) {
  require(taskPath)();
});

$.gulp.task(
  'default',
  $.gulp.series(
    $.gulp.parallel('pug', 'sass', 'scripts', 'img', 'svg', 'fonts'),
    $.gulp.parallel('watch', 'serve')
  )
);

$.gulp.task(
  'build',
  $.gulp.series($.gulp.parallel('pug', 'sass', 'scripts', 'img', 'svg', 'fonts'))
);
