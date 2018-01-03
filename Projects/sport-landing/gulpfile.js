var $            = require('gulp-load-plugins')();
var gulp 				 = require('gulp'),
browser      = require('browser-sync').create(),
autoprefixer = require('autoprefixer'),
postcss 		 = require('gulp-postcss'),
combiner     = require('stream-combiner2').obj,
pngquant		 = require('imagemin-pngquant'),
iconfont     = require('gulp-iconfont'),
consolidate  = require('gulp-consolidate'),
svgstore     = require('gulp-svgstore'),
svgmin       = require('gulp-svgmin'),
rename       = require('gulp-rename'),
inject       = require('gulp-inject'),
pug          = require('pug');

var svgWatch            = './web/webroot/WEB-INF/_svg-src/*.svg';
var svgIconsSource      = './web/webroot/WEB-INF/tags/responsive/template/svg.html';
var svgIconsDestination = './web/webroot/WEB-INF/tags/responsive/template';

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
  });