var gulp = require('gulp');
var inject = require('gulp-inject');
var wiredep = require('wiredep').stream;
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('inject', ['sass', 'js', 'directives'], function () {
	var target = gulp.src('./src/index.html');
	var sources = gulp.src(['./.tmp/**/*.js', './.tmp/**/style.css'], {read: false});
	var vendorSources = gulp.src(['./.tmp/**/vendors.css'], {read: false});

	return target
		.pipe(inject(vendorSources, {ignorePath: '.tmp', starttag: '<!-- inject:cssVendors -->'}))
		.pipe(inject(sources, {ignorePath: '.tmp'}))
		.pipe(wiredep())
		.pipe(gulp.dest('./.tmp'))
		.pipe(browserSync.stream());
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