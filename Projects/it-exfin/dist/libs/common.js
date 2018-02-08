window.onload = function() {

	/*#Credit-slider*/

	$("#ui-slider-1").slider({
		min: 750,
		max: 15000,
		range: "min",
		animate: "slow",
		slide: function( event, ui ) {
			$( "#value-1" ).val(ui.value );
			$('#slider-1 .ui-slider-val').html(ui.value + ' грн');
			$('#credit-value').html(ui.value + ' грн');
		}
	});

	$( "#value-1" ).val($( "#ui-slider-1" ).slider( "value" ));

	$("#value-1").change(function(){
		var value1 = $(this).val();

		$("#ui-slider-1").slider("value", value1);
		$('#slider-1 .ui-slider-val').html(value1 + ' грн');
		$('#credit-value').html(value1 + ' грн');
	});


	/*#Credit-slider-2*/


	$("#ui-slider-3").slider({
		min: 750,
		max: 15000,
		range: "min",
		animate: "slow",
		slide: function( event, ui ) {
			$( "#value-3" ).val(ui.value );
			$('#ui-slider-3 .ui-slider-val').html(ui.value + ' грн');
			$('#credit-value-2').html(ui.value + ' грн');
		}
	});

	$( "#value-3" ).val($( "#ui-slider-3" ).slider( "value" ));

	$("#value-3").change(function(){
		var value1 = $(this).val();

		$("#ui-slider-3").slider("value", value1);
		$('#ui-slider-3 .ui-slider-val').html(value1 + ' грн');
		$('#credit-value').html(value1 + ' грн');
	});

	/*#Credit-slider-3*/

	$("#ui-slider-5").slider({
		min: 750,
		max: 15000,
		range: "min",
		animate: "slow",
		slide: function( event, ui ) {
			$( "#value-5" ).val(ui.value );
			$('#ui-slider-5 .ui-slider-val').html(ui.value + ' грн');
			$('#credit-value-3').html(ui.value + ' грн');
		}
	});

	$( "#value-5" ).val($( "#ui-slider-5" ).slider( "value" ));

	$("#value-5").change(function(){
		var value1 = $(this).val();

		$("#ui-slider-5").slider("value", value1);
		$('#ui-slider-5 .ui-slider-val').html(value1 + ' грн');
		$('#credit-value-3').html(value1 + ' грн');
	});

	/*#Days-slider*/

	$("#ui-slider-2").slider({
		min: 56,
		max: 99,
		range: "min",
		animate: "slow",
		slide: function( event, ui ) {
			$( "#value-2" ).val(ui.value);
			$('#slider-2 .ui-slider-val').html(ui.value + ' дней');
			$('#termin-value').html(ui.value + ' дней');
		}
	});

	$("#value-2").val($( "#ui-slider-2" ).slider( "value" ));

	$("#value-2").change(function(){
		var value2 = $(this).val();
		$("#ui-slider-2").slider("value", value2);
		$('#slider-2 .ui-slider-val').html(value2 + ' дней');
		$('#termin-value').html(value2 + ' дней');
	});

	/*#Days-slider-2*/

	$("#ui-slider-4").slider({
		min: 1,
		max: 12,
		range: "min",
		animate: "slow",
		slide: function( event, ui ) {
			$( "#value-4" ).val(ui.value);
			$('#ui-slider-4 .ui-slider-val').html(ui.value + ' месяц');
			$('#termin-value-2').html(ui.value + ' месяц(ев)');
		}
	});

	$("#value-4").val($( "#ui-slider-4" ).slider( "value" ));

	$("#value-4").change(function(){
		var value2 = $(this).val();
		$("#ui-slider-4").slider("value", value2);
		$('#ui-slider-4 .ui-slider-val').html(value2 + ' месяц');
		$('#termin-value-2').html(value2 + ' месяц(ев)');
	});

	/*#Days-slider-3*/

	$("#ui-slider-6").slider({
		min: 1,
		max: 12,
		range: "min",
		animate: "slow",
		slide: function( event, ui ) {
			$( "#value-6" ).val(ui.value);
			$('#ui-slider-6 .ui-slider-val').html(ui.value + ' месяц');
			$('#termin-value-3').html(ui.value + ' месяц(ев)');
		}
	});

	$("#value-6").val($( "#ui-slider-6" ).slider( "value" ));

	$("#value-6").change(function(){
		var value2 = $(this).val();
		$("#ui-slider-6").slider("value", value2);
		$('#ui-slider-6 .ui-slider-val').html(value2 + ' месяц');
		$('#termin-value-3').html(value2 + ' месяц(ев)');
	});

	/*#Slick slider*/

	$('.s-packages-content').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 4
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

		fieldFiller(dataCity, "data-city.json", "json");

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

			fieldFiller(dataCity, "data-city.json", "json");
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


function fieldFiller (datacity, url, type) {

	$.ajax({
		url: url,
		dataType: type,
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