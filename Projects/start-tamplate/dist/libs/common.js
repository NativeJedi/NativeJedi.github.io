(function($) {

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
		$.fn.scroll = function(settings) {
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

})(jQuery);

function Popup() {
	var popup = $('.popup');
	var self = this;
	var popupFade = 200;
	var contentFade = 200;

	self.open = function(content) {
		self.content = content;
		popup.fadeIn(popupFade);	
		content.fadeIn(contentFade);
	}

	self.close = function(e) {
		var targ = e.target;

		if (!targ.classList.contains('popup') 
			&& !targ.classList.contains('popup__close')) return;
			$('.popup-content').fadeOut(contentFade);
		popup.fadeOut(popupFade);
	}

	self.changeContent = function(changeEl) {
		self.content.fadeOut(contentFade, function() {
			changeEl.fadeIn(contentFade);
		});
	}

	popup.on('click', self.close);
}
