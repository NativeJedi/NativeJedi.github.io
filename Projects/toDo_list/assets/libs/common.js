var toDo = {
	input : document.querySelector(".todo-list__input"),
	form : document.querySelector(".todo-list"),
	btn : document.querySelector(".todo-list__btn"),
	itemsLeft : document.querySelector(".todo-list__counter"),
	tabAll : document.querySelector("#tab-all"),
	tabDone : document.querySelector("#tab-done"),
	tabActive : document.querySelector("#tab-active"),
	dealsBlock: document.querySelector(".todo-list__deals")
}

var list = new makeTodo(toDo);

function makeTodo(set) {

	var self = this;
	self.dealList = [];
	self.form = set.form;
	self.input = set.input;
	self.dealsBlock = set.dealsBlock;
	self.itemsLeft = set.itemsLeft; 
	self.tabAll = set.tabAll; 
	self.tabDone = set.tabDone; 
	self.tabActive = set.tabActive; 

	self.add = function() {
		var deal = {};
		var inputText = self.input.value;
		var div 		 	= document.createElement("div");
		var checkbox 	= document.createElement("input");
		var label 	 	= document.createElement("label");
		var btn 	   	= document.createElement("button");

		if (!inputText) { 
			alert("Enter some deal, pls!");
			return false;
		};

		self.dealsBlock.appendChild(div);
		div.classList.add("item");
		deal.div = div;

		div.appendChild(checkbox);
		checkbox.type="checkbox";
		checkbox.classList.add("item__checkbox");
		deal.checkbox = checkbox;

		div.appendChild(label);
		label.classList.add("item__label");
		label.innerText = inputText;
		deal.label = label;

		div.appendChild(btn);
		btn.classList.add("item__btn");	
		deal.btn = btn;

		deal.btn.addEventListener('click', function(e) {
			e.preventDefault();

			let arr = e.target.id.split('del-');
			let id = arr[1];

			self.dealsBlock.removeChild(e.target.parentNode);
			self.dealList.splice(id, 1);
			self.idRender();
			self.left();
		});

		self.dealList.push(deal);
		self.input.value = '';
	}
	
	self.idRender = function() {
		for (var i = 0; i < self.dealList.length; i++) {
			self.dealList[i].div.id = 'deal-' + i;
			self.dealList[i].checkbox.id = 'check-' + i;
			self.dealList[i].label.htmlFor = 'check-' + i;
			self.dealList[i].btn.id = 'del-' + i;
		}
	}

	self.left = function () {
		var count = 0;

		for (var i = 0; i < self.dealList.length; i++) {
			if (!self.dealList[i].div.classList.contains('item-unactive')) {
				count++;
			}
		}

		self.itemsLeft.innerText = 'Items: ' + count;
	};

	self.tabDone.addEventListener('click', function(e) {
		e.preventDefault();

		self.tabActive.classList.remove('tab-active');
		self.tabAll.classList.remove('tab-active');
		this.classList.add('tab-active');

		for (var i = 0; i < self.dealList.length; i++) {
			if (!self.dealList[i].checkbox.checked) {
				self.dealList[i].div.classList.add('item-unactive');
			} else {
				self.dealList[i].div.classList.remove('item-unactive');
			};
		}

		self.left();
	});


	self.tabActive.addEventListener('click', function(e) {
		e.preventDefault();

		self.tabDone.classList.remove('tab-active');
		self.tabAll.classList.remove('tab-active');
		this.classList.add('tab-active');

		for (var i = 0; i < self.dealList.length; i++) {
			if (self.dealList[i].checkbox.checked) {
				self.dealList[i].div.classList.add('item-unactive');
			} else {
				self.dealList[i].div.classList.remove('item-unactive');
			};
		}

		self.left();
	});

	self.tabAll.addEventListener('click', function(e) {
		e.preventDefault();

		self.tabActive.classList.remove('tab-active');
		self.tabDone.classList.remove('tab-active');
		this.classList.add('tab-active');

		for (var i = 0; i < self.dealList.length; i++) {
				self.dealList[i].div.classList.remove('item-unactive');
		}

		self.left();
	});


	self.form.addEventListener('submit', function(e){
		e.preventDefault();
		self.add();
		self.idRender();
		self.left();
	});

}






