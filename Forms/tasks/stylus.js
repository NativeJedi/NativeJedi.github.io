var $            = require('gulp-load-plugins')();
var gulp 				 = require('gulp'),
		browser      = require('browser-sync').create(),
		autoprefixer = require('autoprefixer'),
		postcss 		 = require('gulp-postcss'),
    combiner     = require('stream-combiner2').obj;

module.exports = function(options) {

	return function() {

		return gulp.src(options.src)
    	.pipe($.sourcemaps.init())
			.pipe($.stylus())
    	.pipe(postcss([ autoprefixer({ browsers: ['last 3 version'] }) ]))
    	.pipe($.remember('stylus'))
    	.pipe($.sourcemaps.write('.'))
			.pipe($.concat('main.css'))
			gulp.dest('./dist/css'),
    	browser.stream({match: '**/*.css'}).on('error', $.notify.onError())
	};
	  
};gulp.task('stylus', function() {
  return combiner (
    gulp.src('assets/stylus/**/*.styl'),
    $.sourcemaps.init(),
    $.stylus(),
    postcss([ autoprefixer({ browsers: ['last 3 version'] }) ]),
    $.sourcemaps.write('.'),
    $.concat('main.css'),
    gulp.dest('./dist/css'),
    browser.stream({match: '**/*.css'})
  ).on('error', $.notify.onError());
});

function lazyReq(taskName, path, options) {
  options = options || {};
  options.taskName = taskName;
  gulp.task(taskName, function(callback) {
      let task = require(path).call(this, options);
      return task(callback);
    });
}

lazyReq('stylu', './tasks/stylus', {
    src: 'assets/stylus/**/*.styl'
  });

gulp.task('clean', function() {
  return del('./dist/css');
});


gulp.task('build', ['clean', 'stylus']);