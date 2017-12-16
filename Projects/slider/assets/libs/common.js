var images = document.querySelectorAll('.slider__gallery img');
var next = document.querySelector('.btn--next');
var prev = document.querySelector('.btn--prev');
var slider = new Slider(images);

next.onclick = function() {
	slider.next();
};

prev.onclick = function() {
	slider.prev();
}



function Slider(images) {
	var i = 0;

	this.images = images;

	this.next = function() {
		this.images[i].classList.remove("active");
		i++;
		if (i >= this.images.length) {
			i = 0;
		}
		this.images[i].classList.add("active");
	}

	this.prev = function() {
		this.images[i].classList.remove("active");
		i--;
		if (i === 0) {
			i = this.images.length - 1;
		}
		this.images[i].classList.add("active");
	}
}
