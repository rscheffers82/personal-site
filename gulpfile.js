const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

var spawn = require('child_process').spawn;
// var shell = require('./shellHelper');

const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const del = require('del');
const runSequence = require('run-sequence');
const useref = require('gulp-useref');

// --- Global vars and functions --- \\

const dist = 'royschefferscom';
var issue = false;

// const i = process.argv.indexOf("-m");
// const commitMessage = (i>-1) ? process.argv[i+1] : undefined;

function displayError(msg) {
	issue = true;
	console.log(`ERROR: ${msg}`);
}

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

// gulp.task('add', function() {
// 	const add = spawn('git', ['add', '.']);
// 	add.on('close', (code) => {
// 		if (code == 0 ) console.log(`\nAll files are added.`);
// 		else displayError('Unable to add files');
// 	});
// });

// gulp.task('commit', function() {
// 	// var commitMessage = 'Added automated build and deploy to gulp process';
// 	const gitCommit = spawn('git', ['commit', '--message', '"' + commitMessage + '"']);
//
// 	gitCommit.stderr.on('data', (data) => {
// 		console.log(`gitCommit stderr: ${data}`);
// 	});
//
// 	gitCommit.on('close', (code) => {
// 		if (code == 0 ) console.log(`commit done with message "${commitMessage}".`);
// 		else displayError('Unable to commit');
// 	});
// });

gulp.task('push', function() {
	if (issue) return;
	const push = spawn('git', ['push', 'ftp', 'master']);
	push.on('close', (code) => {
		if (code == 0 ) console.log(`Upload and deployment succesful! :)`);
		else displayError('Unable to push');
	});
});

// gulp.task('git', function() {
// 	// execute multiple commands in series
// 	const wrappedMessage = 'test commit';
// 	console.log('wrappedMessage: ', wrappedMessage);
// 	shell.series([
// 			'git add .',
// 			'git commit -m ' + wrappedMessage,
// 			'git push ftp master'
// 		], function(err){
// 			console.log('executed many commands in a row');
// 			if (err) console.log('Error: ', err);
// 	});
// });

// Main task to build & deploy \\

gulp.task('build', function(done) {
	// if(!commitMessage){
	// 	console.log('\nPlease provide a commit message');
	// 	console.log("Usage: gulp build -m 'commit message'\n");
	// 	return;
	// }

	runSequence(
		'clean:dist',
		['sass', 'useref', 'images', 'fonts', 'testimonial-plugin', 'contact-form', 'htaccess'],
		// 'add',
		// 'commit',
		'push',
		done
	);
});

gulp.task('default', function (callback) {
	runSequence(['serve'], callback);
});
