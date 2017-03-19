const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

const plumber = require('gulp-plumber');
const gutil = require('gulp-util');
const notify = require('gulp-notify');

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
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(sourcemaps.write('.'))
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
