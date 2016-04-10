var gulp = require('gulp');
var inject = require('gulp-inject');
var wiredep = require('wiredep').stream;
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('inject', ['css', 'fonts', 'sass', 'js', 'directives'], function () {
	var target = gulp.src('./src/index.html');
	var sources = gulp.src(['./.tmp/**/*.js', './.tmp/**/style.css'], {read: false});
	var vendorSources = gulp.src(['./.tmp/**/vendors.css', './.tmp/css/*.*'], {read: false});

	return target
		.pipe(inject(vendorSources, {ignorePath: '.tmp', starttag: '<!-- inject:cssVendors -->'}))
		.pipe(inject(sources, {ignorePath: '.tmp'}))
		.pipe(wiredep())
		.pipe(gulp.dest('./.tmp'))
		.pipe(browserSync.stream());
});

gulp.task('bootstrap-font', function () {
	return gulp.src('./bower_components/bootstrap/fonts/*.*')
		.pipe(gulp.dest('./.tmp/fonts/bootstrap'));
});

gulp.task('fonts', ['bootstrap-font'], function () {
	return gulp.src('./bower_components/font-awesome/fonts/*.*')
		.pipe(gulp.dest('./.tmp/fonts'));
});

gulp.task('css', function () {
	return gulp.src('./bower_components/font-awesome/css/*.*')
		.pipe(gulp.dest('./.tmp/css'));
});

gulp.task('directives', function() {
	return gulp.src('./src/app/**/*.html')
		.pipe(gulp.dest('./.tmp/app'));
});

gulp.task('sass', function() {
	return gulp.src('./src/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./.tmp'));
});

gulp.task('js', function() {
	return gulp.src('./src/**/*.js')
		.pipe(gulp.dest('./.tmp'));
});

gulp.task('serve', ['inject'], function() {
	browserSync.init({
		server: {
			routes: {
				'/bower_components': 'bower_components'
			},
			baseDir: './.tmp'
		}
	});

	gulp.watch('src/**/*', ['inject']);
	gulp.watch('.tmp').on('change', browserSync.reload);
});