var form = document.querySelector(".todo-list");
var btn = document.querySelector(".todo-list__btn");

var list = new makeTodo();

btn.onclick = function () {
	list.add();
}


function makeTodo() {
	var i = 1;

	this.rmBtns = [];

	this.add = function() {
		var inputText = document.querySelector(".todo-list__input").value;
		var div 	= document.createElement("div");
		var checkbox = document.createElement("input");
		var label = document.createElement("label");
		var btn 	= document.createElement("button");

		form.appendChild(div);
		div.id = "item-" + i;
		div.classList.add("item");

		var div = document.querySelector("#item-" + i);

		div.appendChild(checkbox);
		checkbox.type="checkbox";
		checkbox.id = "check-" + i;
		checkbox.classList.add("item__checkbox");

		div.appendChild(label);
		label.htmlFor ="check-" + i;
		label.id ="label-" + i;
		label.classList.add("item__label");
		label.innerText = inputText;

		div.appendChild(btn);
		btn.id = "rm-" + i;
		btn.classList.add("item__btn");
		var rmBtn = document.querySelectorAll(".item__btn");

		btn.onclick = function() {
			var id = this.id.substr(-1);
			var div = document.querySelector("#item-" + id);
			console.log(div);
			form.removeChild(div);
			
		}

		i++;
	}


}






