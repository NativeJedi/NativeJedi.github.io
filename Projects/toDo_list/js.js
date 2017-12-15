var inp = document.querySelector('#input');
var btn = document.querySelector('#button');
var list = document.querySelector('#list');
var checkboxList = document.querySelectorAll('input[type=checkbox]');
var labelList = document.querySelectorAll('label');
var btnList = document.querySelectorAll('li button');

btn.onclick = function() {
	for (var i = 0; i < checkboxList.length; i++) {
		function Todo(i).addItem;
	}
}


function Todo(id) {

	this.id = id;

	this.addItem - function() {
		var li 				= document.createElement('li');
		var label 		= document.createElement("label");
		var checkbox  = document.createElement('input');
		var inpText 	= document.createTextNode(inp.value);
		var del    		= document.createElement('button');

		list.appendChild(li);
		li.appendChild(checkbox);
		li.appendChild(label);
		li.appendChild(del);
		label.appendChild(inpText);

		checkbox.type = "checkbox";
		checkbox.classList = "checkbox";
		checkbox.id = "check-" + this.id;
		label.htmlFor = "check-" + this.id;

	}
}
/*var doneList = {
	toDo: [],

	addTodo: function() {
		var li 				= document.createElement('li');
		var label 		= document.createElement("label");
		var checkbox  = document.createElement('input');
		var inpText 	= document.createTextNode(inp.value);
		var del    		= document.createElement('button');
		
		checkbox.type = "checkbox";
		checkbox.classList = "checkbox";

		list.appendChild(li);
		li.appendChild(checkbox);
		li.appendChild(label);
		li.appendChild(del);
		label.appendChild(inpText);

		var checkboxList = document.querySelectorAll('input[type=checkbox]');
		var labelList = document.querySelectorAll('label');
		var btnList = document.querySelectorAll('li button');

		for (var i = 0; i < checkboxList.length; i++) {
			checkboxList[i].id = "check-" + (i + 1);
			labelList[i].htmlFor = "check-" + (i + 1);
			btnList[i].innerHTML = "x";
			btnList[i].classList = "btn-del";
		}
	}

	removeTodo: function() {
		
	}
}

btn.onclick = doneList.addTodo;*/
