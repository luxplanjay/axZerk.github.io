var gulp 								= require('gulp'),
		sass 								= require('gulp-sass'),
		concat 							= require('gulp-concat'),
		cssnano             = require('gulp-cssnano'),
		browserSync					= require('browser-sync'),
		del 								= require('del'),
		imagemin						= require('gulp-imagemin'),
		pngquant 						= require('imagemin-pngquant'),
		cache 							= require('gulp-cache'),
		autoprefixer 				= require('gulp-autoprefixer'),
		plugins 						= require('gulp-load-plugins')();

var paths = {
		srcSass: ['./src/blocks/core/*.scss', './src/blocks/**/*.scss'],
  	srcJs: './src/blocks/**/*.js',
  	srcHtml: './src/index.html',
		srcSvg: './src/**/*.svg',
  	destCss: './src/css',
  	destJs: './src/js',
		destSvg: './src/img'
};

// Assembling .scss files
gulp.task('bundleCss' , function(){
	gulp.src(paths.srcSass)
		.pipe(plugins.concat('style.css'))
		.pipe(plugins.sass({
				outputStyle: 'expanded',
				includePaths: ['node_modules/susy/sass']
		}).on('error', plugins.sass.logError))
		.pipe(autoprefixer({browsers: ['last 5 versions', 'IE 8', 'IE 9'], cascade: true }))
		.pipe(plugins.cssnano())
		.pipe(gulp.dest(paths.destCss))
		.pipe(browserSync.reload({ stream: true }));
});

// Assembling .js files
gulp.task('bundleJs', function() {
	gulp.src(paths.srcJs)
		.pipe(plugins.concat('common.js'))
		.pipe(gulp.dest(paths.destJs))
		.pipe(browserSync.reload({ stream: true }));
});


gulp.task('watch', function(){
	gulp.watch(paths.srcHtml, browserSync.reload);
	gulp.watch(paths.srcSass, {cwd: './'}, ['bundleCss']);
	gulp.watch(paths.srcJs, {cwd: './'}, ['bundleJs']);
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'src'
		},
		notify: false
	});
});

// Cleaning Dist folder
// gulp.task('clean-dist', function() {
// 	return del.sync('dist');
// });

// Clearning cache
// gulp.task('clean-cache', function() {
// 	cache.clearAll();
// });

// gulp.task('bundleImg', function() {
// 	gulp.src('src/img/**/*')
// 	.pipe(cache(imagemin({
// 		interlaced: true,
// 		progressive: true,
// 		svgoPlugins: [{removeViewBox: false}],
// 		use: [pngquant()]
// 	})))
// 	.pipe(gulp.dest('dist/img'));
// });

// Building our app
// gulp.task ('build', ['clean-dist', 'bundleImg', 'bundleCss'], function() {
// 	var buildCss = gulp.src('app/css/style.css')
// 		.pipe(gulp.dest('dist/css'));
//
// 	var buildFonts = gulp.src('app/fonts/**/*')
// 		.pipe(gulp.dest('dist/fonts'));
//
// 	var buildJs = gulp.src('app/js/*')
// 		.pipe(gulp.dest('dist/js'));
//
// 	var buildHtml = gulp.src('app/*.html')
// 		.pipe(gulp.dest('dist'));
// });

gulp.task('default', ['browser-sync', 'bundleCss', 'bundleJs', 'watch']);
