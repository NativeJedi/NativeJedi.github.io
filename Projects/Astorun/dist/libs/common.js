$( document ).ready(function() {

	if(lightbox) {
		lightbox.option({
			'resizeDuration': 200,
			'wrapAround': true,
			'showImageNumberLabel': false
		})
	}

	$('.b-news-slider').slick({
		speed: 500,
		cssEase: 'linear'
	});

	$('.shop__slider').slick();

	$('.product__checkbox').on('change', function(e) {
		$(this).parent().toggleClass('is-active');
	});

	$('.product').on('click', function(e) {
		console.log(e.target);
		
		if(!e.target.classList.contains('product')) return;
		let input = $(this).find('.product__checkbox input')[0];
		input.checked = !input.checked;
		$(this).toggleClass('is-active');
	})

	var popup = new Popup(400);

	$('.product__btn.info').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		var content = $(this).parent().parent().find($('.product__info'));
		popup.open(content)
	});
	$('.product__btn.overview').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		const link = $(this).parent().parent().find($('.product__overwiev')).find($('a:first-child'));
		link.click();	
	});

	function Popup(fade) {
		var overlay = $('.overlay');
		var popup = $('.popup');
		var self = this;
		var popupFade = fade || 200;

		self.open = function(content) {
			popup.empty();
			self.content = content.clone();
			self.content.addClass('is-active');
			popup.append(self.content);
			overlay.fadeIn(popupFade);	
			$('.blur').addClass('is-active');
		}

		self.close = function(e) {
			var targ = e.target;

			if (!targ.classList.contains('overlay') 
				&& !targ.classList.contains('popup__close')) return;
				overlay.fadeOut(popupFade);
			$('.blur').removeClass('is-active');
		}

		overlay.on('click', self.close);
	}
});

