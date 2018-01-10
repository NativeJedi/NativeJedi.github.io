window.onload = function() {
	var btn = document.querySelector('.b-btn');
	var content = document.querySelector('.b-content');
	var  i = 0;

	btn.addEventListener('click', function(e) {
		
		ajaxGet('dist/application/test.json', function(data) {
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

			console.log(json.data[i].title);
			console.log(json.data[i].icon);

			img.setAttribute('src', json.data[i].icon);
			h3.innerHTML = json.data[i].title;

			i++;

		});



	});
};

function ajaxGet(url, callback) {

	var f = callback || function(data) {};

	var request = new XMLHttpRequest();

	request.onreadystatechange = function() {

		// cheking of data loading

		if (request.readyState == 4 && request.status == 200) {
			f(request.responseText);
		}

	}

	request.open('GET', url);
	request.send();
}

