$(function() {

	var tl = new TimelineLite();

	var logo = $('.logo img');
	var elems = $('.animation__element');

	tl.to(logo, 3, {
		scale: "2",
		xPercent: 100,
		yPercent: 100,
		rotation: 720,
		opacity: 1,
		boxShadow: "inset 0 0 100px green, 0 0 100px green",
		ease: Bounce.easeOut
	}).to(logo, 3, {
		xPercent: 200
	});


	var count = 0;

	var el1 = $('#el-1');
	var el2 = $('#el-2');
	var el3 = $('#el-3');
	var el4 = $('#el-4');

	/*#Animation params*/

	/*#Animation functions*/

	function play(timeL, callback) {
		timeL.play();
		callback = callback || function() {};
		callback();
	};

	function pause(timeL, callback) {
		timeL.pause();
		callback = callback || function() {};
		callback();
	};

	function resume(timeL, callback) {
		timeL.resume();
		callback = callback || function() {};
		callback();
	};

	function reverse(timeL, callback) {
		timeL.reverse();
		callback = callback || function() {};
		callback();
	};

	function timeScale(timeL, t, callback) {
		timeL.timeScale(t);
		callback = callback || function() {};
		callback();
	};

	function seek(timeL, seekT, callback) {
		timeL.seek(seekT);
		callback = callback || function() {};
		callback();
	};

	function progress(timeL, pT, callback) {
		timeL.progress(pT);
		callback = callback || function() {};
		callback();
	};	

	function restart(timeL, callback) {
		timeL.restart();
		callback = callback || function() {};
		callback();
	};

	tl.to(el1, 3, {
		yPercent: 100,

		onStart: function() {
			el1.html('start');
		},
		onUpdate: function() {
			el1.html(count++);
		},
		onComplete: function() {
			el1.html('finish');
			count = 0;
		}
	})

	$('.play').on('click', function() {
		play(tl);
	});

	$('.pause').on('click', function() {
		pause(tl);
	})

	$('.resume').on('click', function() {
		resume(tl);
	})

	$('.reverse').on('click', function() {
		reverse(tl);
	})

	$('.speedUp').on('click', function() {
		timeScale(tl, 2);
	})

	$('.slowDown').on('click', function() {
		timeScale(tl, 0.5);
	})

	$('.seek').on('click', function() {
		seek(tl, 3);
	})

	$('.progress').on('click', function() {
		progress(tl, 0.5);
	})

	$('.restart').on('click', function() {
		restart(tl, function() {
			counter = 1;
			$('#el-1').html('0');
		});
	})
});

/**
	@html 
	<div class="popup">
		<div class="popup__content">
			Content for modal window
			<span class="popup__close"></span>
		</div>
	</div>

	@css 
	.popup {
		display: none;
	}
	*/
	function Popup(fade) {
		var popup = $('.overlay');
		var self = this;
		var popupFade = fade || 200;
		var contentFade = fade || 200;

		self.open = function(content) {
			self.content = content;
			popup.fadeIn(popupFade);	
			content.fadeIn(contentFade);
		}

		self.close = function(e) {
			var targ = e.target;

			if (!targ.classList.contains('overlay') 
				&& !targ.classList.contains('popup__close')) return;
				$('.popup').fadeOut(contentFade);
			popup.fadeOut(popupFade);
		}

		self.changeContent = function(changeEl) {
			self.content.fadeOut(contentFade, function() {
				changeEl.fadeIn(contentFade);
			});
		}

		popup.on('click', self.close);
	}
