(function($) {
	$.fn.tabs = function(options) {
		var settings = $.extend({
			'duration' : 300,
			'animated' : true
		}, options);

		var allContent = $('[data-content]');

		this.each(function(index) {
			var dataTab = $(this).data('tab');
			var content = $('[data-content='+ dataTab +']');

			$(this).on('click', function(e) {

				if(content.hasClass('is-active')) return;
				
				if(settings.animated) {
					allContent.stop(true).animate({
						'opacity' : 0
					}, settings.duration , function() {
						$(this).removeClass('is-active')

						content.addClass('is-active')
						.stop(true)
						.animate({
							'opacity': 1
						}, settings.duration)
					})
				}else {
					allContent.removeClass('is-active');
					content.addClass('is-active');
				}
			});

		});

		
		return this;
	}
})(jQuery);

(function($) {
	$.fn.spoiler = function() {
		
		var elems = this;

		this.on('click', function() {
			elems.not(this).removeClass('is-active');
			$(this).toggleClass('is-active');
		});

		return this;
	}
})(jQuery);

(function($) {
	$.fn.scroll = function() {
		var elems = this;

		this.on('click', function(e) { 
			e.preventDefault();

			var href = $(this).attr('href');
			var dist = $(href).offset().top;
			var time = Math.round(dist/5);

			$('body, html').animate({
				scrollTop: dist
			}, time);
		});
	}
})(jQuery);