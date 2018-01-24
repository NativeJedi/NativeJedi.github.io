$(document).ready(function() {

		$('.b-accord-list__item-title').on('click', function(e) {
			$('.b-accord-list__item-title').not($(this)).removeClass('active');
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

		/*$(".b-header__nav a").on("click", function(e){

			e.preventDefault();

			var id = $(this).attr('href');
			var h = $(id).offset().top;
			console.log(h);

			$('html, body').animate({
				scrollTop: h,
				easing: 'swing'
			}, 1000);
		});*/

		$("a[href*='#']").mPageScroll2id();

	});