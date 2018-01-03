var flipArr = document.querySelectorAll('.b-flip__item');
var span = document.querySelector('.s-main__title span');

for (var i = 0; i < flipArr.length; i++) {
	flipArr[i].addEventListener('click', function() {
		this.classList.toggle('flip');
		counter();
	});
}

var counter = function() {
	var count = 0;
	for (var i = 0; i < flipArr.length; i++) {
		if (flipArr[i].classList.contains('flip')) {
			count++;
		}
	}

	span.innerText = count;
}
