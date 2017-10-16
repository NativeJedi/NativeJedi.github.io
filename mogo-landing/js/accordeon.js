$(document).ready(function() {

	$('ul.accordeon li > p').click(function() {
		if(!$(this).hasClass('active')) {
			$('ul.accordeon li > p').removeClass('active').next('div').slideUp();
			$(this).addClass('active');
			$(this).next('div').slideDown(200);
		} else {
			$(this).removeClass('active').next('div').slideUp();
			}
		});

		$("ul.accordeon li.accord1").bind("click", function() {
      var src = ($("#accord_arrow1").attr("src") === "images/sservice-ARROW _ DOWN.png")
                    ? "images/ARROW_UP.png" 
                    : "images/sservice-ARROW _ DOWN.png";
      $("#accord_arrow1").attr("src", src);
		});
		
		$("ul.accordeon li.accord2").bind("click", function() {
      var src = ($("#accord_arrow2").attr("src") === "images/sservice-ARROW _ DOWN.png")
                    ? "images/ARROW_UP.png" 
                    : "images/sservice-ARROW _ DOWN.png";
      $("#accord_arrow2").attr("src", src);
		});
		
		$("ul.accordeon li.accord3").bind("click", function() {
      var src = ($("#accord_arrow3").attr("src") === "images/sservice-ARROW _ DOWN.png")
                    ? "images/ARROW_UP.png" 
                    : "images/sservice-ARROW _ DOWN.png";
      $("#accord_arrow3").attr("src", src);
		});

		$('.slick-1').slick();
	});