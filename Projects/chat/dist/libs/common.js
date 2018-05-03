"use strict";

window.onload = function() {

	const chatWindow = document.querySelector('.chat__messages');
	const form = document.querySelector('.send');
	const input = document.querySelector('.send__input');
	const contacts = document.querySelectorAll('.contact');
	const menu = document.querySelector('.btn-menu');
	const searchInp = document.querySelector('.search__input');

	let options = {
		avatar: "dist/img/cageholder_4.jpg",
		type: "sended",
		chat: chatWindow
	}

	function Chat() {};

	Chat.prototype = options;
	Chat.prototype.constructor = Chat;
	Chat.prototype.sendMessage = function(text) {
		this.chat.innerHTML +=
		`<div class="message message--${this.type}">
		<img src="${this.avatar}" alt="person" class="message__img">
		<p class="message__text">${text}</p>
		</div>`
	}

	let firstContactImg = document.querySelectorAll('.contact')[0]
	.querySelector('img').src;

	function Bot() {
		this.avatar = firstContactImg,
		this.type = "received"
	}

	Bot.prototype = Object.create(options);
	Bot.prototype.constructor = Bot;
	Bot.prototype.setAvatar = function(ava) {
		this.avatar = ava;
	}
	Bot.prototype.getPhrase = function(url, callback = function() {}) {
		let request = new XMLHttpRequest();

		request.onreadystatechange = function() {
			if (request.readyState == 4 && request.status == 200) {
				callback(request.responseText);
			}
		}
		request.open('GET', url);
		request.send();
	}

	function search(contactNames) {
		let input = this.value.toLowerCase();

		for (let i = 0; i < contactNames.length; i++) {
			let str = contactNames[i].textContent.toLowerCase();

			if (str.includes(input) && input || !input) {
				contactNames[i].parentElement.style.display = "flex";
			} else {
				contactNames[i].parentElement.style.display = "none";
			}
		}
	}

	function getRandKey(obj) {
		let keys = Object.keys(obj);
		let randKey = Math.floor(Math.random() * (keys.length) + 0);

		return obj[keys[randKey]];
	}

	let bot = new Bot();
	let chat = new Chat();

	form.addEventListener('submit', function(e) {
		e.preventDefault();

		if (!input.value) return;

		chat.sendMessage(input.value);

		bot.getPhrase('json/phrases.json', function(data) {
			let json = JSON.parse(data);
			let phrase = getRandKey(json);

			setTimeout(function() {
				bot.sendMessage(phrase);
				chatWindow.scrollTo(0, chatWindow.scrollHeight);
			}, 500);
		});

		input.value = '';
	});

	/*Create obj with users message history*/

	let users = {};

	for (let i = 0; i < contacts.length; i++) {

		/*Create user name fields with current messages in users obj*/

		users[contacts[i].querySelector('.contact__name').innerHTML] = {
			history: ""
		}

		contacts[i].addEventListener('click', function(e) {
			if (this.classList.contains('is-active')) return;

			let currentUser = document.querySelector('.contact.is-active')
			.querySelector('.contact__name').innerHTML;

			let activeUser = this.querySelector('.contact__name').innerHTML;

			/*Saving current messages in users history*/

			users[currentUser].history = chatWindow.innerHTML;

			for (let i = 0; i < contacts.length; i++) {
				contacts[i].classList.remove('is-active');
			}

			this.classList.add('is-active');
			let src = this.querySelector('img').src;

			bot.setAvatar(src);

			/*Recovering user messages form user history*/

			chatWindow.innerHTML = users[activeUser].history;
			chatWindow.scrollTo(0, chatWindow.scrollHeight);

			menu.classList.remove('is-active');
		});

	}

	menu.addEventListener('click', function(e) {
		this.classList.toggle('is-active');
	});

	const contactNames = document.querySelectorAll('.contact__name');

	searchInp.addEventListener('input', function() {
		search.call(this, contactNames);
	});

};