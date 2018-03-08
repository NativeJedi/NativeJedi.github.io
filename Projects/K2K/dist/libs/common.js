window.onload = function() {
	$('.spoiler h3').on('click', function(e) {
		$('.spoiler h3').not($(this)).removeClass('is-active');
		$(this).toggleClass('is-active');
	})

	minHeight($('.question-section .container'));
	$('.select').selectmenu();


	slider('#credit-slider', 0, 10000, ' грн');
	slider('#termin-slider', 0, 50, 'дней');

	var popup = new Popup();

	$('.btnRegistration').on('click', function() {
		popup.open($('.popup #form-reg'));
	});

	$('.btnLogin').on('click', function() {
		popup.open($('.popup #form-login'));
	});

	$('.btnKeep').on('click', function(e) {
		e.preventDefault();

		popup.changeContent($('#form-confirm'));
	});
	function minHeight(selector) {
		var currentHeight = selector.height();
		console.log(currentHeight)
		selector.css({
			'min-height': currentHeight + 130 + 'px'
		})
	}
};

function slider(el, min, max, type) {
	$(el).slider({
		min: min,
		max: max,
		range: "min",
		animate: "slow",
		slide: function( event, ui) {
			$(el + ' .ui-slider-val').html(ui.value + ' ' + type);
		}
	});
}

function Popup() {
	var popup = $('.popup');
	var self = this;
	var popupFade = 200;
	var contentFade = 200;
  
	self.open = function(content) {
		self.content = content;
		popup.fadeIn(popupFade);	
		content.fadeIn(contentFade);
	}

  self.close = function(e) {
  	var targ = e.target;

  	if (!targ.classList.contains('popup') 
  	&& !targ.classList.contains('popup__close')) return;
  	$('.popup-content').fadeOut(contentFade);
  	popup.fadeOut(popupFade);
  }

  self.changeContent = function(changeEl) {
  	self.content.fadeOut(contentFade, function() {
  		changeEl.fadeIn(contentFade);
  	});
  }

  popup.on('click', self.close);
}