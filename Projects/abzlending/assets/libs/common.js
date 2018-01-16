window.onload = function() {

	var btn = document.querySelector('.b-btn');
	var content = document.querySelector('.b-content');
	var  i = 0;

	btn.addEventListener('click', function(e) {
		
		ajaxGet('//504080.com/api/v1/services/categories', function(data) {
			var json = JSON.parse(data);

			if(!(json.data[i])) {
				alert('No new service yet');
				return;
			}

			var item = document.createElement('div');
			item.className = 'b-content-item';
			content.appendChild(item);

			var img = document.createElement('img');
			item.appendChild(img);

			var h3 = document.createElement('h3');
			h3.className = 'b-content-item__name';
			item.appendChild(h3);

			img.setAttribute('src', json.data[i].icon);
			h3.innerHTML = json.data[i].title;

			i++;


		});
	});
};

var popup = new Popup();

function ajaxGet(url, callback) {

	var f = callback || function(data) {};

	var request = new XMLHttpRequest();

	request.onreadystatechange = function() {

		// cheking of data loading

		if (request.readyState == 4) {

			switch (request.status) {
				case 401:
				popup.open('<h2>Error: 401</h2><p>Autoriztion error. Please, Log in to the site and try again</p>');
				break;

				case 500:
				popup.open('<h2>Error: 500</h2><p>Server error. Try to add service later, please!</p>');
				break;

				default:
				f(request.responseText);
				break;
			}
		}

	}

	request.open('GET', url);
	request.setRequestHeader('Authorization', '2b6e782f9194d9010bb62326635dd352fa9e751d');
	request.send();
}

function Popup() {
	var body = document.querySelector('body');
	var pop = this;

	if (document.querySelector('.overlay') == null) {
		var overlay = document.createElement('div');
		overlay.classList.add('overlay');
		body.appendChild(overlay);
	} else {
		var overlay = document.querySelector('.overlay');
	}

	var closeBtn = document.createElement('span');
	closeBtn.className = 'popup__close';
	var popup = document.createElement('div');
	popup.classList.add('popup');
	var info = document.createElement('div');
	info.classList.add('popup__content');

	body.appendChild(popup);
	popup.appendChild(closeBtn);
	popup.appendChild(info);

	pop.open = function(content) {
		overlay.classList.add('active');
		popup.classList.add('active');
		info.innerHTML = content;
	}

	pop.close = function(e) {
		overlay.classList.remove('active');
		popup.classList.remove('active');
	}

	overlay.addEventListener('click', function(e) {
		pop.close();
	});

	closeBtn.addEventListener('click', function(e) {
		pop.close();
	});

}



