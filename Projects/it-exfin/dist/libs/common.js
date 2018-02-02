window.onload = function() {
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


	$("#ui-slider-2").slider({
		min: 56,
		max: 112,
		range: "min",
		animate: "slow",
		slide: function( event, ui ) {
			$( "#value-2" ).val(ui.value);
			$('#slider-2 .ui-slider-val').html(ui.value + ' дней');
			$('#termin-value').html(ui.value + ' дней');
		}
	});

	$( "#value-2" ).val($( "#ui-slider-2" ).slider( "value" ));

	$("#value-2").change(function(){
		var value2 = $(this).val();

		$("#ui-slider-2").slider("value", value2);
		$('#slider-2 .ui-slider-val').html(value2 + ' дней');
		$('#termin-value').html(value2 + ' дней');
	});

	$('.s-packages-content').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 4
	});

	$('.b-review__person').on('click', function(e) {
		$('.b-review__person').not($(this)).removeClass('active');
		$(this).addClass('active');

		var personId = $(this).attr('id');

		var arr = personId.split("-");

		$('.b-review__info p').removeClass('active');

		$('#review-' + arr[1]).addClass('active');

	});

	$('.b-section-message__item').on('click', function(e) {
		$('.b-section-message__item').removeClass('active')
		$(this).addClass('active');
	})
};
