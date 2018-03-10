window.onload = function() {
	var popup = new Popup();
	$('.btn-play').on('click', function() {
		console.log(1)
		popup.open($('.popup #site-video'));
	});

};

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
