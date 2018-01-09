var popupConfig = {
	btn: document.querySelector('.btn-popup'),
	content: document.querySelector('.some-content')
}

var popupConfig2 = {
	btn: document.querySelectorAll('.btn-popup')[1],
	content: document.querySelector('.another-content')
}

var popup = new Popup(popupConfig);
var popup2 = new Popup(popupConfig2);

function Popup(config) {
	var body = document.querySelector('body');

	var self = this;
	self.btn = config.btn;
	self.content = config.content;
	self.content.parentElement.removeChild(self.content);

	if (document.querySelector('.overlay') == null) {
		var overlay = document.createElement('div');
		overlay.classList.add('overlay');
		body.appendChild(overlay);
	} else {
		var overlay = document.querySelector('.overlay');
	}

	var closeBtn = document.createElement('span');
	closeBtn.className = 'popup__close';

	body.appendChild(self.content);
	self.content.classList.add('popup');
	self.content.appendChild(closeBtn);

	self.open = function() {
		overlay.classList.add('active');
		self.content.classList.add('active');
	}

	self.close = function(e) {
		overlay.classList.remove('active');
		self.content.classList.remove('active');
	}

	self.btn.addEventListener('click', function() {
		self.open();
	});

	overlay.addEventListener('click', function(e) {
			self.close();
	});

	closeBtn.addEventListener('click', function(e) {
		self.close();
	});
	
}


