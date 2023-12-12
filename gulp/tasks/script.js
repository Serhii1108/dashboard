module.exports = function () {
  $.gulp.task('scripts', function () {
    return $.gulp
      .src('src/static/js/main.js')
      .pipe($.gulp.dest('build/js/'))
      .pipe(
        $.bs.reload({
          stream: true,
        })
      );
  });
};
