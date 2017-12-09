function newItem() {
	var list		  = document.getElementById("list")
	var li 	      = document.createElement("li");
	var inputText = document.getElementById("input").value;
	var text      = document.createTextNode(inputText);
	var check 		= document.createElement("input");
	var label 		= document.createElement("label");
	
	if (inputText === '') {
		alert("You must write something!");
	} else {

		check.type 		= "checkbox";
		check.className = "checkbox";
		li.appendChild(check);
		li.appendChild(label);
		label.appendChild(text);
		list.appendChild(li);

		var lb = document.getElementsByTagName("label");
		var cb = document.getElementsByClassName("checkbox");

		for (var i = 0; i < lb.length; i++) {
			cb[i].id = "checkbox-" + (i+1);
			lb[i].htmlFor = "checkbox-" + (i+1);
		}
	}

	document.getElementById("input").value = "";
}

var btn = document.getElementById("button");

btn.onclick = newItem;

var inp = document.getElementById("input");
inp.onkeypress = function(event) {
	if (event.keyCode == 13) {
		newItem();
	}
}