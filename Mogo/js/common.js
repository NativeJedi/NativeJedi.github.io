$(document).ready(function() {

	$('ul.b-accord-list li > p').click(function() {
		if(!$(this).hasClass('active')) {
			$('ul.b-accord-list li > p').removeClass('active').next('div').slideUp();
			$(this).addClass('active');
			$(this).next('div').slideDown(200);
		} else {
			$(this).removeClass('active').next('div').slideUp();
			}
		});

		$('#accord-1').click(function() {
			$('#accord-arrow-1').toggleClass('icon--arrow-up');
		});

		$('#accord-2').click(function() {
			$('#accord-arrow-2').toggleClass('icon--arrow-up');
		});

		$('#accord-3').click(function() {
			$('#accord-arrow-3').toggleClass('icon--arrow-up');
		});

		$('.b-quote__slider').slick();

		$('.header__slider').slick({
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