window.onload = function() {
	$('.spoiler h3').on('click', function(e) {
		$('.spoiler h3').not($(this)).removeClass('is-active');
		$(this).toggleClass('is-active');
	})

	minHeight($('.question-section .container'));
	$('.select').selectmenu();


	slider('#credit-slider', 0, 10000, ' грн');
	slider('#termin-slider', 0, 50, 'дней');

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
