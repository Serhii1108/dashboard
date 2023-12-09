module.exports = function () {
  $.gulp.task('sass', function () {
    return $.gulp
      .src('src/static/css/main.scss')
      .pipe($.sass())
      .pipe($.gp.csso())
      .pipe($.sass({ outputStyle: 'expanded' }))
      .pipe($.gp.sourcemaps.write('./'))
      .pipe($.gulp.dest('build/css/'))
      .pipe($.sass({ outputStyle: 'compressed' }))
      .pipe($.gp.sourcemaps.write('./'))
      .pipe($.gulp.dest('build/css/'))
      .on('end', $.bs.reload);
  });
};
