var $ = require('gulp-load-plugins')();
var	gulp 				 = require('gulp'),
		sass 				 = require('gulp-sass'),
		browserSync  = require('browser-sync'),
		cssnano      = require('gulp-cssnano'),
		imagemin     = require('gulp-imagemin'),
		notify			 = require('gulp-notify'),
		pngquant		 = require('imagemin-pngquant'),
		combiner     = require('stream-combiner2').obj,
		autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function() {
	return combiner (
	gulp.src('./css/sass/**/*.+(scss|sass)'),
		sass(),
		autoprefixer(['last 3 versions'], { cascade: true }),
		gulp.dest('./css/'),
		browserSync.reload({stream: true})
	).on('error', notify.onError());
});


gulp.task('img', function() {
	return gulp.src('./css/images/**/*')
	.pipe(imagemin({
		interlaced: true,
		progressice: true,
		svgoPlugins: [{removeViewBox: false}],
		une: [pngquant()]
		}))

	.pipe(gulp.dest('./img'));
	});

gulp.task('serve', ['sass'], function(){
	browserSync.init({
		server: {
			baseDir: "./"
		}
		});
	});

gulp.task('default', ['serve'], function() {
	gulp.watch('./css/sass/**/*.+(scss|sass)', ['sass']);
	gulp.watch('./*.html', browserSync.reload);
	gulp.watch('./js/**/*.js', browserSync.reload);
	});
