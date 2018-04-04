$( document ).ready(function() {
	$('.b-news-slider').slick({
		speed: 500,
		cssEase: 'linear'
	});

	$('.shop__slider').slick();

	
	$('.shop__checkbox').off().on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		var attr = $(this).find('input')[0].checked;

		if(attr) {
			$(this).find('input')[0].checked = false;
		} else {
			$(this).find('input')[0].checked = true;
		}
		$(this).parent().toggleClass('is-active');
		
	});

	$('.shop__block').on('click', function(e) {
		var attr = $(this).find('.shop__checkbox input')[0].checked;
		
		if(attr) {
			$(this).find('.shop__checkbox input')[0].checked = false;
		} else {
			$(this).find('.shop__checkbox input')[0].checked = true;
		}

		$(this).toggleClass('is-active');
	})

	var popup = new Popup(400);

	$('.shop__btn').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		var content = $(this).parent().find($('.shop__info'));
		popup.open(content)
	});
	/*(function($) {
		var img = document.querySelectorAll('#slider-img');
		var slider = document.querySelector('.b-news-slider');
		var div = document.createElement('div');
		div.className = 'slider-counter';
		slider.appendChild(div);
		var lengthImg = img.length;
		div.innerHTML = '1 of ' + lengthImg;

		$('.slick-arrow').on('click', function() {
			newsCounter();
		});

		function newsCounter() {
			var div = $('.slider-counter');
			var img = $('.slick-active img');
			div.html(img.data('count') + ' of ' + lengthImg);
		}
	})($);*/
	
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

