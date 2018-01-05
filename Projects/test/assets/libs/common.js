window.onload = function() {

	var btn = document.querySelector('.btn-get');
	var inp = document.querySelector('.search');

	inp.addEventListener('input', function() {
		search();
	});

	//loading data on button click 

	btn.addEventListener('click', function() {

		ajaxGet('test.json', function(data) {

			// Sould to convert json to js-object at first

			
			var table = document.querySelector('.table-data tbody');

			if(table.innerText) { 
				alert('Data is already loaded!');
				return false;
			}

			var json = JSON.parse(data);

			//counting variable for currency value

			var currency = 0;

			// Loop for creating table-rows 

			for(let i = 0, length1 = json.length; i < length1; i++){
				let obj = json[i];

				//There is string for saving data from obj

				let item = '';
				
				for (var key in obj) {
					item +='<td>' + obj[key] + '</td>';
					currency += obj['currency'];
				}

				table.innerHTML += '<tr><td>' + i + '</td>' + item 
				+ '</tr>';

				item = '';
			}

			// Currency value after rows creating

			table.innerHTML += '<tr><td colspan="5" >Currency: '
			+ currency + '</td><tr>';
		});

	});

}


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

function search() {

	var input = document.querySelector('.search').value;
	var table = document.querySelector('.table-data');
	var td = document.querySelectorAll('.table-data td');
	var tr = document.querySelectorAll('.table-data tr');

	// Input to lower case for rigth searching

	var inp = input.toLowerCase();

	// Loop for searching table-data items

	for(var i = 0, length1 = td.length; i < length1; i++){
		var str = td[i].textContent.toLowerCase();
	
		if (str.indexOf(inp) + 1 && inp) {
			td[i].classList.add('active');
		} else if (str.indexOf(inp) == -1 || !inp) {
			td[i].classList.remove('active');
		}
	}

	// Loop for hiding rows which don't have searching data

	for(var i = 1; i < tr.length; i++) {
		for(var j = 0; j < tr[i].children.length; j++) {
			if (tr[i].children[j].classList.contains('active') || !inp) {
				tr[i].style.display = 'table-row';
				break;
			} else {
				tr[i].style.display = 'none';
			}
		}
	}

}