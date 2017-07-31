const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

var spawn = require('child_process').spawn;

const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const del = require('del');
const runSequence = require('run-sequence');

const dist = 'royschefferscom';
// const plumber = require('gulp-plumber');
// const gutil = require('gulp-util');
// const notify = require('gulp-notify');

const useref = require('gulp-useref');

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

// gulp.task('sass', function(){
// 	return gulp.src('app/scss/**/*.scss')
// 		.pipe(sourcemaps.init())
// 		.pipe(sass().on('error', sass.logError))
// 		.pipe(autoprefixer())
// 		.pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest('app/css/'))
//     .pipe(browserSync.reload({
//       stream: true
//     }))
// });
//
// gulp.task('browserSync', function() {
// 	browserSync.init({
//     server: {
//       baseDir: 'app'
//     },
//   })
// })

gulp.task('sass', function(){
	return gulp.src('app/scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('app/css/'))
    .pipe(browserSync.stream({ match: '**/*.css' }))
		.on('error', function(err) {
			console.error('Error!', err.message);
		});
});

gulp.task('serve', ['sass'], function() {

	browserSync.init({
		server: {
			baseDir: 'app'
		},
	});


  gulp.watch('app/scss/**/*.scss', ['sass']);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('app/**/*.+(html|js)').on('change', browserSync.reload);
  //gulp.watch('app/**/*.js', browserSync.reload);
  // Other watchers
	// add babel support - https://www.npmjs.com/package/gulp-babel
});

gulp.task('useref', function() {
	return gulp.src('app/*.html')
		.pipe(useref())
		.pipe(gulpIf('app/js/*.js', uglify()))
		.pipe(gulpIf('*.css', cssnano()))
		.pipe(gulp.dest( dist ));
});

gulp.task('images', function() {
	return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
		.pipe(cache(imagemin({
			interlaced: true
		})))
		.pipe(gulp.dest(`${dist}/images`));
});

gulp.task('fonts', function() {
	return gulp.src('app/fonts/**/*')
	.pipe(gulp.dest(`${dist}/fonts`));
});

gulp.task('testimonial-plugin', function() {
	return gulp.src('app/slick/**/*')
	.pipe(gulp.dest(`${dist}/slick`));
});

gulp.task('contact-form', function() {
	return gulp.src('app/php/**/*')
	.pipe(gulp.dest(`${dist}/php`));
});

gulp.task('htaccess', function() {
	return gulp.src('app/.htaccess')
	.pipe(gulp.dest(`${dist}/`));
});

gulp.task('clean:dist', function() {
	return del.sync( dist );
});

gulp.task('cache:clear', function (callback) {
	return cache.clearAll(callback);
});

gulp.task('build', function(callback) {
	runSequence(
		'clean:dist',
		['sass', 'useref', 'images', 'fonts', 'testimonial-plugin', 'contact-form', 'htaccess'],
		callback
	);
});

gulp.task('default', function (callback) {
	runSequence(['serve'], callback);
});

gulp.task('upload', function() {
	const push = spawn('git', ['push', 'ftp', 'master']);
	push.stdout.setEncoding('utf8');

	push.stdout.on('data', (data) => {
		console.log(data.toString());
	});

	push.on('close', (code) => {
		console.log(`child process exited with code ${code}`);
	});
});
