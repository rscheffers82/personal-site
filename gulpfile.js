var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var notify = require('gulp-notify');

// var gulp_src = gulp.src;
// gulp.src = function() {
//   return gulp_src.apply(gulp, arguments)
//     .pipe(plumber(function(error) {
//       // Output an error message
//       gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.message));
//       // emit the end event, to properly end the task
//       this.emit('end');
//     })
//   );
// };

gulp.task('sass', function(){
	return gulp.src('app/scss/**/*.scss')
		// Converts Sass to CSS with gulp-sass
		.pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
	browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

// Gulp watch syntax
gulp.task('watch', ['browserSync'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('app/**/*.+(html|js)', browserSync.reload);
  //gulp.watch('app/**/*.js', browserSync.reload);
  // Other watchers
})
