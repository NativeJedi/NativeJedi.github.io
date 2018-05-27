$(function() {

	$("#date").datepicker({
		showAnim: "slideDown"
	});

	class Popup {
		constructor() {
			let body = document.querySelector('body');

			this._overlay = document.createElement('div');
			this._popup = document.createElement('div');
			this._title = document.createElement('div');
			this._content = document.createElement('div');
			this._closeBtn = document.createElement('div');

			body.appendChild(this._overlay);
			this._overlay.appendChild(this._popup);
			this._popup.appendChild(this._title);
			this._popup.appendChild(this._content);
			this._popup.appendChild(this._closeBtn);

			this._overlay.classList.add('popup-overlay');
			this._popup.classList.add('popup');
			this._title.classList.add('popup__title');
			this._content.classList.add('popup__content');
			this._closeBtn.classList.add('popup__close');

			this._closeBtn.addEventListener('click', () => {
				this.close();
			});

			this._overlay.addEventListener('click', (e) => {
				if (e.target.classList.contains('popup-overlay')) {
					this.close();
				}
			});
		}

		close() {
			this._overlay.classList.remove('is-active');
		}

		open(content) {
			this._title.innerHTML = content.title;
			this._content.innerHTML = content.body;
			this._overlay.classList.add('is-active');
		}
	}

	class ComponentValidation {
		constructor(form) {
			this._form = form;
			this._requiredElements = this._form.querySelectorAll('input, select');
			this._textElements = this._form.querySelectorAll('input[type=text]');
			this._dateInput = this._form.querySelector('#date');
			this._mail = this._form.querySelector('#mail');
			this._radioWrap = this._form.querySelectorAll('.f-main__radio-wrap');

			this.pattern = {
				quotes: /\"|\'/,
				date: /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/,
				mail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			}

			this.warning = {
				void: "* The field can't be empty",
				quotes: "* The symbols \' and \" are incorrected",
				date: "* Date format should be mm/dd/yyyy",
				mail: "* E-mail should contents \"@\" and \".\". Example: mail@gmail.com",
				radio: "* You should choose one"
			}
		}

		// Helper function if element has some wrappers
		parentDelegation(element, upperElementTag, targetClass) {
			let parent = element.parentElement;

			while (parent.tagName !== upperElementTag.toUpperCase()) {
				if (parent.classList.contains(targetClass)) break;

				parent = parent.parentElement;
			}

			return parent;
		}

		displayError(element, message = 'error!') {
			let parent = this.parentDelegation(element, 'form', 'f-main__item');

			// If there is second error
			if (parent.querySelector('.danger-block') !== null) {
				parent.querySelector('.danger-block').innerHTML = message;
				return;
			}

			let dangerBlock = document.createElement('div');

			dangerBlock.classList.add('danger-block');
			parent.appendChild(dangerBlock);
			dangerBlock.innerHTML = message;
			element.classList.add('error');
		}

		removeError(element) {
			let parent = this.parentDelegation(element, 'form', 'f-main__item')
			let el = parent.querySelector('.danger-block');
			if (el == null) return;
			el.remove();
			element.classList.remove('error');
		}

		// Function validate all inputs in every radio-wrapper
		radioCheck(elems = this._radioWrap) {
			for (let wrap of elems) {
				let radio = wrap.querySelectorAll('input[type=radio]');

				let isChecked = false;

				for (let item of radio) {
					if (item.checked) {
						isChecked = true;
						break;
					} else {
						isChecked = false;
					}
				}

				if (isChecked) {
					this.removeError(radio[0], this.warning.radio);
				} else {
					this.displayError(radio[0], this.warning.radio);
				}
			}
		}

		mailCheck(mail = this._mail) {
			if (!mail.value.match(this.pattern.mail)) {
				this.displayError(mail, this.warning.mail);
			}
		}

		dateCheck(dateInput = this._dateInput) {
			if (!dateInput.value.match(this.pattern.date)) {
				this.displayError(dateInput, this.warning.date);
			}
		}

		quotesCheck(elems = this._textElements) {
			for (let item of elems) {
				if (item.value.match(this.pattern.quotes)) {
					this.displayError(item, this.warning.quotes)
				}
			}
		}

		voidCheck(elems = this._requiredElements) {
			for (let item of elems) {
				if (item.value) {
					this.removeError(item);
				} else {
					this.displayError(item, this.warning.void);
				}
			}
		}

		// Flag getter for compleating validation
		get isValid() {
			this.voidCheck();
			this.quotesCheck();
			this.dateCheck();
			this.mailCheck();
			this.radioCheck();

			return !this._form.querySelector('.error');
		}
	}

	const form = document.getElementById('form');

	const validation = new ComponentValidation(form);
	const popup = new Popup();

	form.addEventListener('submit', function(e) {
		e.preventDefault();

		if (validation.isValid) {
			popup.open({
				title: "The form was successfully sended!",
				body: "Please wait for our reply. \n Thanks for your time!"
			})
		}
	});
})