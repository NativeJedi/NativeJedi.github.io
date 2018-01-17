$(document).ready(function() {

		$('.b-accord-list__item-title').on('click', function(e) {
			$('.b-accord-list__item-title').removeClass('active');
			$(this).toggleClass('active');
		});

		$('.b-quote__slider').slick();

		$('#main-slider').slick({
			arrows: false,
			autoplay: true,
			autoplaySpeed: 5000
		});

		$(".popup").magnificPopup({type:"iframe"});
		$(".popup_content").magnificPopup({
			type:"inline",
			midClick: true
		});

		$("a[href*='#']").mPageScroll2id();

	});