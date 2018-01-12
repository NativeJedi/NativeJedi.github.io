window.onload = function() {

	var menu = document.querySelector('.b-menu');
	var menuOpen = document.querySelector('.b-menu-toggle');
	var menuClose = document.querySelector('.b-menu__close');
	var menuLinks  = document.querySelectorAll('.b-menu__nav a');

	for(let i = 0; i < menuLinks.length; i++) {
		menuLinks[i].addEventListener('click', function() {
			menu.classList.remove('b-menu-active');
		});
	}

	menuClose.addEventListener('click', function() {
		menu.classList.remove('b-menu-active');
	});

	menuOpen.addEventListener('click', function() {
		menu.classList.add('b-menu-active');
	});

	$('.s-second-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		arrows: true,
		autoplaySpeed: 2000,
		responsive: [
		{
			breakpoint: 441,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]

	});

	$(".b-menu__nav a").mPageScroll2id();

	var sliderSettings = {
		slider: document.querySelector('.s-main-slider'),
		images: document.querySelectorAll('.s-main-slider__item'),
		btnNext: document.querySelector('.s-main-slider__btn-next'),
		btnPrev: document.querySelector('.s-main-slider__btn-prev'),
		dots: true,
		onImgClick: false,
		autoplay: false
	}

	var slider = new Slider(sliderSettings);

	var popupConfig = {
		btn: document.querySelector('.btn-popup'),
		content: 'This is popup'
	}

	var popup = new Popup(popupConfig);

}


function Slider(set) {
	let i = 0;
	let that = this;

	that.btnNext 	= set.btnNext;
	that.btnPrev 	= set.btnPrev;
	that.body  	 	= set.slider;
	that.dots 	 	= set.dots;
	that.images   = set.images;
	that.autoplay = set.autoplay;
	that.onImgClick = set.onImgClick;

	that.next = function() {
		that.images[i].classList.remove("active");
		i++;
		if (i >= that.images.length) {
			i = 0;
		}
		that.images[i].classList.add("active");
	};

	that.prev = function() {		
		that.images[i].classList.remove("active");
		i--;
		if (i === -1) {
			i = that.images.length - 1;
		}
		that.images[i].classList.add("active");
	};

	that.btnNext.addEventListener('click', that.next);

	that.btnPrev.addEventListener('click', that.prev);

	if(that.dots) {
		var wrap = document.createElement('div');
		wrap.className = 's-main-slider__dots';
		that.body.appendChild(wrap);

		for(let i = 0; i < that.images.length; i++) {

			var span = document.createElement('span');
			wrap.appendChild(span);
			span.className = 's-main-slider__dots-item';
			span.id = i;

			if (i === 0) {
				span.classList.add('dot-active');
			}

			span.addEventListener('click',function() {
				var dots = document.querySelectorAll('.s-main-slider__dots-item');

				for(let j = 0; j < that.images.length;  j++) {
					that.images[j].classList.remove('active');
					dots[j].classList.remove('dot-active');
				}

				this.classList.add('dot-active');
				that.images[this.id].classList.add('active');		
			});
		}
	}
	

	if (that.autoplay) {
		var timeId;

		timeId = setInterval(that.next, set.autoplay);

		that.body.addEventListener('mouseover', function() {
			clearInterval(timeId);
		});

		that.body.addEventListener('mouseout', function() {
			timeId = setInterval(that.next, set.autoplay);
		});
	}


	if (that.onImgClick) {
		for( let j = 0; j < that.images.length; j++) {
			that.images[j].addEventListener('click', that.next);
		}
	}

}

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

	self.btn.addEventListener('click', function() {
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