window.onload = function() {

	var btn = document.querySelector('.btn-get');
	var input = document.querySelector('.search');
	var table = document.querySelector('.table-data');

	//Data seaching on input event

	input.addEventListener('input', function() {
		search();
	});

	//loading data on button click 

	btn.addEventListener('click', function(e) {

		ajaxGet('test.json', function(data) {
			
			var table = document.querySelector('.table-data tbody');

			if(table.innerText) { 
				alert('Data is already loaded!');
				return false;
			}

			// Sould to convert json to js-object at first

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

			table.innerHTML += '<tr><td id="total" colspan="5" >Currency: '
			+ currency + '</td></tr>';
		});

	});


	//Sorting data

	table.addEventListener('click', function(e){
		if (e.target.tagName != 'TH') return;

		sortTable(e.target.cellIndex, e.target.getAttribute('data-type'), this);

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
				tr[i].classList.remove('hide');
				break;
			} else {
				tr[i].classList.add('hide');
			}

		}
	}

}

function sortTable(colNum, type, table) {

	var tbody = table.querySelector('tbody');

	//The variable which contains currency row HTML

	var total = tbody.querySelector('#total').outerHTML;

	//We need to remove row with currency value for sorting
	//only data

	tbody.removeChild(tbody.lastChild);

	//Array which contains rows of data

	var rowsArray = [].slice.call(tbody.rows);
	

	//This I took from learn.js in the best traditions 
	// of the communnism:D
	//But I little bit changed algoritm of string-sorting

	//The function is determined by data-type

	var compare;

	switch (type) {
		case 'number':
		compare = function(rowA, rowB) {

			//function is compating only data with the same 
			//index as table header

			return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
		};
		break;

		case 'string':

		compare = function(rowA, rowB) {
			if (rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML) {
				return 1;
			} else if (rowA.cells[colNum].innerHTML < rowB.cells[colNum].innerHTML) {
				return -1;
			} else { return 0; }
		};

		break;
	}

	rowsArray.sort(compare);

	//Removing body for data rendering

	table.removeChild(tbody);

	//creating body again with sort data

	for (var i = 0; i < rowsArray.length; i++) {
		tbody.appendChild(rowsArray[i]);
	}

	table.appendChild(tbody);

	// And creating total value

	tbody.innerHTML += total;

}