window.onload = function() {

	new Slider('#credit-slider-1', 750, 10000);

	new Slider('#termin-slider-1', 56, 99);

	new Slider('#credit-slider-2', 750, 10000);

	new Slider('#termin-slider-2', 1, 12);

	new Slider('#credit-slider-3', 750, 10000);

	new Slider('#termin-slider-3', 1, 12);

	/*#Slick slider*/

	$('.s-packages-content').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 4
	});

	$('.b-response-wrap').slick({
		dots: true,
		speed: 300,
		slidesToScroll: 1,
		slidesToShow: 3
	});

	/*#Review change*/

	$('.b-review__person').on('click', function(e) {
		$('.b-review__person').not($(this)).removeClass('active');
		$(this).addClass('active');

		var personId = $(this).attr('id');

		var arr = personId.split("-");

		$('.b-review__info p').removeClass('active');

		$('#review-' + arr[1]).addClass('active');

	});


	/*#Choose plan*/

	$('.b-section-message__item').on('click', function(e) {
		$('.b-section-message__item').removeClass('active')
		$(this).addClass('active');
	});


	/*#Cities list func*/
	
	$('.b-region-list__btn').on('click', function(e) {

		var dataCity = $(this).data('city');

		fieldFiller(dataCity, "data-city.json");

		$(this).addClass('btn-active');

		var listItems = $(this).parent().parent().html();

		$('.popup-list').html(listItems);
		
		$('.b-region-list').animate({
			opacity: "0"
		}, 500, function(){
			$('.b-region-list').css('z-index', '-1');
		});

		$('.popup').css('z-index', '100').animate({opacity: '1'}, 500);

	});

	$('.btn-show').on('click', function() {
		$('.popup').animate({opacity: '0'}, 500, function(){
			$('.b-region-list__btn').removeClass('btn-active');
			$('.popup').css('z-index', '-1');
			$('.b-region-list').css('z-index', '1').animate({opacity: 1}, 300);
		});
	});

	$('.popup-list').on('click',  function(e) {
		if(e.target.type == 'submit') {
			$('.popup-list li button').removeClass('btn-active');
			var dataCity = e.target.attributes['data-city'].value;

			fieldFiller(dataCity, "data-city.json");
		};	
	});

	$('.b-btn--secondary').on('click', function() {
		$('.b-btn--secondary').removeClass('active');
		$(this).addClass('active');
		var dataBtn = $(this).data('btn');
		var dataForm = $('[data-form='+dataBtn+']');

		var currentForm = $('form.active');

		if (dataForm.hasClass('active')) {
			return;
		}

		currentForm.animate({
			opacity: '0'
		}, 500, function() {
			$(this).removeClass('active');
			dataForm.addClass('active').animate({
				opacity: 1
			}, 500);
		});
		
	});
};

function Slider(initialId, min, max) {

	if (document.querySelector(initialId) == null) return;

	var arr = initialId.split("-");
	var id = arr[2];
	var kind = arr[0];

	var sliderValue = $(kind + "-value-" + id);
	var sliderTotal = $(kind + "-total-" + id);
	var sliderHandle = $(initialId + ' .ui-slider-val');
	var quantity = sliderHandle.html().split(" ")[1];

	$(initialId).slider({
		min: min,
		max: max,
		range: "min",
		animate: "slow",
		slide: function( event, ui) {
			sliderValue.val(ui.value);
			sliderHandle.html(ui.value + ' ' + quantity);
			sliderTotal.html(ui.value + ' ' + quantity);
		}
	});

	sliderValue.val( $(initialId).slider("value") );

	sliderValue.change(function(){
		var value = $(this).val();
		$(initialId).slider("value", value);
		sliderHandle.html(value + ' ' + quantity);
		sliderTotal.html(value + ' ' + quantity);
	});
}

function fieldFiller (datacity, url) {

	$.ajax({
		url: url,
		success: function(data) {
			for(key in data) {
				if (key === datacity) {	
					$('#data-map').attr('src', data[key].link);			
					$('#data-adress').html(data[key].adress);
					$('#data-city').html(data[key].name);
					$('#data-localAdress').html(data[key].localAdress);
					$('#data-schedule').html(data[key].schedule);
					$('#data-mail').html(data[key].mail).attr('href',
						'mailto:'+ data[key].mail);
					$('#data-phone').html(data[key].phone).attr('href',
						'tel:' + data[key].phone);
				}
			}
		}
	});
	
}