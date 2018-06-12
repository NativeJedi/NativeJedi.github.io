var gulp         = require('gulp'),
browser      		 = require('browser-sync').create(),
autoprefixer 		 = require('autoprefixer'),
postcss      		 = require('gulp-postcss'),
combiner     		 = require('stream-combiner2').obj,
pngquant     		 = require('imagemin-pngquant'),
imagemin 				 = require('gulp-imagemin'),
iconfont     		 = require('gulp-iconfont'),
consolidate  		 = require('gulp-consolidate'),
svgstore     		 = require('gulp-svgstore'),
rename       		 = require('gulp-rename'),
svgmin       		 = require('gulp-svgmin'),
inject       		 = require('gulp-inject'),
notify					 = require('gulp-notify'),
plumber 				 = require("gulp-plumber"),
pug  						 = require('gulp-pug'),
pugBEMify 			 = require('pug-bemify'),
browserify       = require('browserify'),
watchify         = require('watchify'),
source           = require('vinyl-source-stream'),
sourcemaps 			 = require('gulp-sourcemaps'),
sass             = require('gulp-sass');

/*#Build plugins*/
var csso = require('gulp-csso'),
useref 	 = require('gulp-useref'),
concat 	 = require('gulp-concat'),
gulpif   = require('gulp-if'),
uglify 	 = require('gulp-uglify'),
babel    = require('gulp-babel');

var svgWatch            = './dist/img/svgstore/icons/*.svg';
var svgIconsSource      = './sprite.svg';
var svgIconsDestination = './';

gulp.task('svgstore', function () {
	var svgs = gulp
	.src(svgWatch)  
	.pipe(rename({prefix: 'svg-'}))
	.pipe(svgmin())
	.pipe(svgstore({ inlineSvg: true }));

	function fileContents (filePath, file) {
		return file.contents.toString();
	}

	return gulp
	.src(svgIconsSource)
	.pipe(inject(svgs, { transform: fileContents }))
	.pipe(gulp.dest(svgIconsDestination));
});

function errorFunction(error) {
	return "Message to the notifier: " + error.message;
}

gulp.task('pug', function() {
	return combiner(
		gulp.src('pug/*.pug'),
		plumber(),
		pug({
			plugins : [pugBEMify()],
			pretty: true
		}),
		gulp.dest('./')
		).on("error", notify.onError(errorFunction))
	});

gulp.task("build:icons", function() {
    return gulp.src(["./assets/icons/*.svg"]) //path to svg icons
    .pipe(iconfont({
    	fontName: "myicons",
    	formats: ["ttf", "eot", "woff", "svg"],
    	centerHorizontally: true,
    	fixedWidth: true,
    	normalize: true,
    	fontHeight: 1500
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
		imagemin({
			interlaced: true,
			progressice: true,
			svgoPlugins: [{removeViewBox: false}],
			une: [pngquant()]
		}),
		gulp.dest('./dist/img')
		).on('error', notify.onError(errorFunction));
});

gulp.task('sass', function () {
	return combiner(
		gulp.src('assets/scss/**/*.scss'),
		sourcemaps.init(),
		sass({
			output_style: 'compressed'
		}),
		postcss([ autoprefixer({ browsers: ['last 3 version'] }) ]),
		sourcemaps.write('.'),
		gulp.dest('./dist/css'),
		browser.stream({match: '**/*.css'})
		).on('error', notify.onError(errorFunction));
});


// Starts a BrowerSync instance
gulp.task('serve', ['sass', 'babel'], function(){
	browser.init({
		server: {
			baseDir: "./"
		}
	});
});

var sourceFile = './assets/common.js',
destFolder = './dist/libs/',
destFile = 'app.js';

gulp.task('browserify', function() {

	var b = browserify({
		entries: ['./assets/common.js'],
		cache: {},
		packageCache: {},
		plugin: [watchify]
	});

	b.on('update', rebundle);

	function rebundle() {
		return b.bundle()
		.pipe(source(destFile))
		.pipe(gulp.dest(destFolder));
	}

	return rebundle();
});

gulp.task('build:css', ['sass'], function() {
	return gulp.src('./dist/css/styles.css')
	.pipe(csso({
		restructure: false,
		sourceMap: true,
		debug: true
	}))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('./dist/css/'));
});

gulp.task('babel', function() {
	return combiner(
		gulp.src('assets/js/*.js'),
		babel({presets: ['es2015']}),
		gulp.dest('dist/js/')
	).on('error', notify.onError(errorFunction))
})

gulp.task('build:js', ['babel'], function() {
	return gulp.src([
		'dist/libs/**/*.js', 
		'dist/js/*.js'
		])
	.pipe(sourcemaps.init())
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/libs/'));
});

gulp.task('build', ['img', 'build:css', 'build:js']);

gulp.task('default', ['serve'], function() {
	gulp.watch('pug/**/*.pug', ['pug']);
	gulp.watch(['assets/scss/**/*.scss'], ['sass']);
	gulp.watch('./**/*.html').on('change', browser.reload);
	gulp.watch(['assets/libs/**/*.js'], ['babel']).on('change', browser.reload);
});