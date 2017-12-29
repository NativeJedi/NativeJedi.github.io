
var sliderSettings = {
	slider: document.querySelector('.slider'),
	images: document.querySelectorAll('.slider img'),
	btnNext: document.querySelector('.btn--next'),
	btnPrev: document.querySelector('.btn--prev'),
	autoplay: 3000
}

var slider = new Slider(sliderSettings);

function Slider(set) {
	let i = 0;
	let that = {};

	this.btnNext = set.btnNext;
	this.btnPrev = set.btnPrev;
	this.body  	 = set.slider;

	that.images  = set.images;

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

	this.btnNext.addEventListener('click', that.next);

	this.btnPrev.addEventListener('click', that.prev);

	if (set.autoplay) {
		var timeId;

		timeId = setInterval(that.next, set.autoplay);

		this.body.addEventListener('mouseover', function() {
			clearInterval(timeId);
		});

		this.body.addEventListener('mouseout', function() {
			timeId = setInterval(that.next, set.autoplay);
		});
	}

	for( let j = 0; j < that.images.length; j++) {
		that.images[j].addEventListener('click', that.next);
	}

}

