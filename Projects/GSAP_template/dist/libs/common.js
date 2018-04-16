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

});

/**
	@html 
	<div class="popup">
		<div class="popup__content">
			Content for modal window
			<span class="popup__close"></span>
		</div>
	</div>

	@css 
	.popup {
		display: none;
	}
	*/
	function Popup(fade) {
		var popup = $('.overlay');
		var self = this;
		var popupFade = fade || 200;
		var contentFade = fade || 200;

		self.open = function(content) {
			self.content = content;
			popup.fadeIn(popupFade);	
			content.fadeIn(contentFade);
		}

		self.close = function(e) {
			var targ = e.target;

			if (!targ.classList.contains('overlay') 
				&& !targ.classList.contains('popup__close')) return;
				$('.popup').fadeOut(contentFade);
			popup.fadeOut(popupFade);
		}

		self.changeContent = function(changeEl) {
			self.content.fadeOut(contentFade, function() {
				changeEl.fadeIn(contentFade);
			});
		}

		popup.on('click', self.close);
	}
