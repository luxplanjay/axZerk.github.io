var gulp 					= require('gulp'),
		sass 					= require('gulp-sass'),
		concat 				= require('gulp-concat'),
		browserSync		= require('browser-sync'),
		del 					= require('del'),
		imagemin			= require('gulp-imagemin'),
		pngquant 			= require('imagemin-pngquant'),
		cache 				= require('gulp-cache'),
		autoprefixer 	= require('gulp-autoprefixer'),
		plugins 			= require('gulp-load-plugins')();

var paths = {
  	srcSass    : ['./app/blocks/**/*.sass'],
  	srcJs      : ['./app/blocks/**/*.js'],
  	srcHtml    : './app/index.html',
  	destCss    : './app/style',
  	destJs     : './app/js'
};

gulp.task('bundleCss' , function(){
	gulp.src(paths.srcSass)
	.pipe(plugins.sass({outputStyle: 'expanded'}).on('error', plugins.sass.logError))
	.pipe(plugins.concat('style.css'))
	.pipe(plugins.uncss({html: [paths.srcHtml]}))
	.pipe(autoprefixer(['last 15 versions', '> 1%']))
	.pipe(gulp.dest(paths.destCss))
	.pipe(browserSync.reload({
		stream: true
	}))
});

gulp.task('bundleJs', function() {
	gulp.src(paths.srcJs)
		.pipe(plugins.concat('common.js'))
		.pipe(gulp.dest(paths.destJs))
});


gulp.task('watch', function(){
	gulp.watch(paths.srcSass, ['bundleCss'])
	gulp.watch(paths.srcHtml, browserSync.reload);
	gulp.watch(paths.srcJs, browserSync.reload);
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('clean-dist', function() {
	del.sync('dist');
});

gulp.task('clean-cache', function() {
	cache.clearAll();
});

gulp.task('bundleImg', function() {
	gulp.src('app/img/**/*')
	.pipe(cache(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	})))
	.pipe(gulp.dest('dist/img'));
});

gulp.task ('build', ['clean-dist', 'bundleImg', 'bundleCss'], function() {
	var buildCss = gulp.src('app/css/style.css')
		.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('app/js/*')
		.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('app/*.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['browser-sync', 'bundleCss', 'bundleJs', 'watch']);
