var $            = require('gulp-load-plugins')();
var gulp 				 = require('gulp'),
		browser      = require('browser-sync').create(),
		autoprefixer = require('autoprefixer'),
		postcss 		 = require('gulp-postcss'),
		combiner     = require('stream-combiner2').obj,
		pngquant		 = require('imagemin-pngquant'),
		iconfont     = require('gulp-iconfont'),
		cssnano      = require('gulp-cssnano'), 
		consolidate  = require('gulp-consolidate'),
		svgstore     = require('gulp-svgstore'),
		svgmin       = require('gulp-svgmin'),
		rename       = require('gulp-rename'),
		inject       = require('gulp-inject');


gulp.task('svgstore', function () {

	var svgs = gulp

	.src('assets/icons/*.svg')
	.pipe(rename({prefix: 'svg-'}))
	.pipe(svgmin())
	.pipe(svgstore({ inlineSvg: true }));

	function fileContents (filePath, file) {
		return file.contents.toString();
	}

	return gulp

	.src('./index.html')
	.pipe(inject(svgs, { transform: fileContents }))
	.pipe(gulp.dest('./'));

});

gulp.task("build:icons", function() {
    return gulp.src(["./assets/icons/*.svg"]) //path to svg icons
    .pipe(iconfont({
    	fontName: "myicons",
    	formats: ["ttf", "eot", "woff", "svg"],
    	centerHorizontally: true,
    	fixedWidth: true,
    	normalize: true,
    	fontHeight: 500
    }))
    .on("glyphs", (glyphs) => {

        gulp.src("./assets/icons/util/*.scss") // Template for scss files
        .pipe(consolidate("lodash", {
        	glyphs: glyphs,
        	fontName: "myicons",
        	fontPath: "../fonts/"
        }))
            .pipe(gulp.dest("./assets/scss/icons/")); // generated scss files with classes
          })
      .pipe(gulp.dest("./dist/fonts/")); //icon font destination
    });

gulp.task('img', function() {
	return combiner(
		gulp.src('./assets/img/**/*'),
		$.imagemin({
			interlaced: true,
			progressice: true,
			svgoPlugins: [{removeViewBox: false}],
			une: [pngquant()]
		}),
		gulp.dest('./dist/img')
		).on('error', $.notify.onError());
});

gulp.task('sass', function () {
	return combiner(
		gulp.src('assets/scss/**/*.scss'),
		$.sourcemaps.init(),
		$.sass({
			output_style: 'compressed',
			includePaths: ['node_modules/foundation-sites/scss']
		}),
		postcss([ autoprefixer({ browsers: ['last 3 version'] }) ]),
		$.sourcemaps.write('.'),
		gulp.dest('./dist/css'),
		browser.stream({match: '**/*.css'})
		).on('error', $.notify.onError());
});

gulp.task('build:css', ['sass'], function() {
	return gulp.src('dist/css/style.css') // Выбираем файл для минификации
		.pipe(cssnano()) // Сжимаем
		.pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
		.pipe(gulp.dest('dist/css')); // Выгружаем в папку app/css
	});

gulp.task('build:scripts', function() {
	return gulp.src([ // Берем все необходимые библиотеки
		'assets/libs/common.js'// Берем Magnific Popup
		])
		.pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
		.pipe(uglify()) // Сжимаем JS файл
		.pipe(gulp.dest('dist/js')); // Выгружаем в папку app/js
	});


// Starts a BrowerSync instance
gulp.task('serve', ['sass'], function(){
	browser.init({
		server: {
			baseDir: "./"
		}
	});
});


// Runs all of the above tasks and then waits for files to change
gulp.task('default', ['serve'], function() {
	gulp.watch(['assets/scss/**/*.scss'], ['sass']);
	gulp.watch('./**/*.html').on('change', browser.reload);
	gulp.watch('assets/libs/common.js').on('change', browser.reload);
});