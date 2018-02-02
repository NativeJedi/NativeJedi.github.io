$( document ).ready(function() {
	$('.b-news-slider').slick({
		speed: 500,
		cssEase: 'linear'
	});

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

});
