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
		max: 99,
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

	$('.b-region-list__btn').on('click', function(e) {
		console.log(1);
		$('.b-region-list__btn').removeClass('btn-active');
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

	$('.popup-list').on('click', function(e) {
		if(e.target.type == 'submit') {
			$('.popup-list li button').removeClass('btn-active');
		};	
	});


};


function Popup(config) {
	var body = document.querySelector('body');

	var self = this;
	self.btn = config.btn;
	self.content = config.content;


	if (document.querySelector('.overlay') == null) {
		var overlay = document.createElement('div');
		overlay.classList.add('overlay');
		body.appendChild(overlay);
	} else {
		var overlay = document.querySelector('.overlay');
	}

	var popup = document.createElement('div');

	var closeBtn = document.createElement('span');
	closeBtn.className = 'popup__close';

	body.appendChild(popup);
	popup.classList.add('popup');
	popup.appendChild(closeBtn);

	var popupContent = document.createElement('div');
	popupContent.className = 'popup__content';
	popup.appendChild(popupContent);

	popupContent.innerHTML = self.content;

	self.open = function() {
		overlay.classList.add('active');
		popup.classList.add('active');
	}

	self.close = function(e) {
		overlay.classList.remove('active');
		popup.classList.remove('active');
	}

	self.btn.addEventListener('click', function(e) {
		e.preventDefault();
		self.open();
	});

	overlay.addEventListener('click', function(e) {
		self.close();
	});

	closeBtn.addEventListener('click', function(e) {
		console.log(1);
		self.close();
	});
	
}