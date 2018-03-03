$(document).ready(function() {

	$("#portfolio-grid").mixItUp();

	$(".popup").magnificPopup({type:"image"});
	$(".popup-content").magnificPopup({type:"inline", midClick: true});

	$(".animation-1").animated("flipInY", "fadeOutY");
	$(".animation-2").animated("fadeInLeft", "fadeOut");
	$(".animation-3").animated("fadeInRight", "fadeOut");

	$(".left .resume-item").animated("fadeInLeft", "fadeOut");
	$(".right .resume-item").animated("fadeInRight", "fadeOut");
	
	$(".header__main-title").animated("fadeInDown", "fadeOutUp");
	$(".header__main-description, .section__header").animated("fadeInUp", "fadeOutDown");


	/*function heightDetect(){

		$(".header").css("height", $(window).height());
		$(".header-main").css("height", $(window).height()); 
		
	};

	heightDetect();

	$(window).resize(function() {
		heightDetect();
	});*/

	$(".btn-menu").click(function(e) {
		e.stopPropagation();
		$(".btn-menu").toggleClass("active");
	});

	$(".top-nav__menu-link").click(function() {
		$(".top-nav").fadeOut(600);
		$(".btn-menu").toggleClass("active");
	});

	$(".btn-menu").click(function() {
		if ($(".top-nav").is(":visible")) {
			$(".header-main").removeClass("h_opacify");
			$(".top-nav").fadeOut(600);
			$(".top-nav__menu-link").removeClass("fadeInUp animated");
		} else {
			$(".header-main").addClass("h_opacify");
			$(".top-nav").fadeIn(600);
			$(".top-nav__menu-link").addClass("fadeInUp animated");
		};
	});

	$("input, select, textarea").jqBootstrapValidation();-
	$(".top-nav__menu-link").mPageScroll2id();

});

$(window).load(function() { 
	$(".loader:after").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});