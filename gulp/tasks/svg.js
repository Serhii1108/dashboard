module.exports = function () {
  $.gulp.task('svg', function () {
    return (
      $.gulp
        .src('src/static/img/svg/*.svg')
        // minify svg
        .pipe(
          $.gp.svgmin({
            js2svg: {
              pretty: true,
            },
          })
        )
        // build svg sprite
        .pipe(
          $.gp.svgSprite({
            mode: {
              symbol: {
                sprite: '../sprite.svg',
              },
            },
          })
        )
        .pipe($.gulp.dest('build/img/svg/'))
    );
  });
};
