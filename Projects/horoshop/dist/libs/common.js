$(function() {
	
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
					} else {
						allContent.removeClass('is-active');
						content.addClass('is-active');
					}
				});

			});

			
			return this;
		}
	})(jQuery);

	$('.ordering__tab-btn').tabs({animated: false});

	$('.ordering__tab-btn').on('click', function() {
		$('.ordering__tab-btn').removeClass('is-active');

		$(this).addClass('is-active');
	})

	$('#addComent').on('click', function(e) {
		e.preventDefault();

		var prevEl = $(this).prev();

		if(prevEl[0].tagName === 'TEXTAREA'
			&& prevEl.is(':visible')) {
			alert("Don't do it again");
			return;
		}

		var textArea = $('<textarea>');
		textArea.addClass('f-order__textarea');

		$(this).before(textArea);
		textArea.css('display', 'none').fadeIn();
		textArea.focus();

		textArea.on('blur', function(e) {
			if(!this.value) {
				$(this).fadeOut();
			}

		})
	})
});