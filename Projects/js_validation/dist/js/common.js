"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(function () {

	$("#date").datepicker({
		showAnim: "slideDown"
	});

	var Popup = function () {
		function Popup() {
			var _this = this;

			_classCallCheck(this, Popup);

			var body = document.querySelector('body');

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

			this._closeBtn.addEventListener('click', function () {
				_this.close();
			});

			this._overlay.addEventListener('click', function (e) {
				if (e.target.classList.contains('popup-overlay')) {
					_this.close();
				}
			});
		}

		_createClass(Popup, [{
			key: "close",
			value: function close() {
				this._overlay.classList.remove('is-active');
			}
		}, {
			key: "open",
			value: function open(content) {
				this._title.innerHTML = content.title;
				this._content.innerHTML = content.body;
				this._overlay.classList.add('is-active');
			}
		}]);

		return Popup;
	}();

	var ComponentValidation = function () {
		function ComponentValidation(form) {
			_classCallCheck(this, ComponentValidation);

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
			};

			this.warning = {
				void: "* The field can't be empty",
				quotes: "* The symbols \' and \" are incorrected",
				date: "* Date format should be mm/dd/yyyy",
				mail: "* E-mail should contents \"@\" and \".\". Example: mail@gmail.com",
				radio: "* You should choose one"
			};
		}

		// Helper function if element has some wrappers


		_createClass(ComponentValidation, [{
			key: "parentDelegation",
			value: function parentDelegation(element, upperElementTag, targetClass) {
				var parent = element.parentElement;

				while (parent.tagName !== upperElementTag.toUpperCase()) {
					if (parent.classList.contains(targetClass)) break;

					parent = parent.parentElement;
				}

				return parent;
			}
		}, {
			key: "displayError",
			value: function displayError(element) {
				var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'error!';

				var parent = this.parentDelegation(element, 'form', 'f-main__item');

				// If there is second error
				if (parent.querySelector('.danger-block') !== null) {
					parent.querySelector('.danger-block').innerHTML = message;
					return;
				}

				var dangerBlock = document.createElement('div');

				dangerBlock.classList.add('danger-block');
				parent.appendChild(dangerBlock);
				dangerBlock.innerHTML = message;
				element.classList.add('error');
			}
		}, {
			key: "removeError",
			value: function removeError(element) {
				var parent = this.parentDelegation(element, 'form', 'f-main__item');
				var el = parent.querySelector('.danger-block');
				if (el == null) return;
				el.remove();
				element.classList.remove('error');
			}

			// Function validate all inputs in every radio-wrapper

		}, {
			key: "radioCheck",
			value: function radioCheck() {
				var elems = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._radioWrap;
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = elems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var wrap = _step.value;

						var radio = wrap.querySelectorAll('input[type=radio]');

						var isChecked = false;

						var _iteratorNormalCompletion2 = true;
						var _didIteratorError2 = false;
						var _iteratorError2 = undefined;

						try {
							for (var _iterator2 = radio[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
								var item = _step2.value;

								if (item.checked) {
									isChecked = true;
									break;
								} else {
									isChecked = false;
								}
							}
						} catch (err) {
							_didIteratorError2 = true;
							_iteratorError2 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion2 && _iterator2.return) {
									_iterator2.return();
								}
							} finally {
								if (_didIteratorError2) {
									throw _iteratorError2;
								}
							}
						}

						if (isChecked) {
							this.removeError(radio[0], this.warning.radio);
						} else {
							this.displayError(radio[0], this.warning.radio);
						}
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
			}
		}, {
			key: "mailCheck",
			value: function mailCheck() {
				var mail = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._mail;

				if (!mail.value.match(this.pattern.mail)) {
					this.displayError(mail, this.warning.mail);
				}
			}
		}, {
			key: "dateCheck",
			value: function dateCheck() {
				var dateInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._dateInput;

				if (!dateInput.value.match(this.pattern.date)) {
					this.displayError(dateInput, this.warning.date);
				}
			}
		}, {
			key: "quotesCheck",
			value: function quotesCheck() {
				var elems = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._textElements;
				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;

				try {
					for (var _iterator3 = elems[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var item = _step3.value;

						if (item.value.match(this.pattern.quotes)) {
							this.displayError(item, this.warning.quotes);
						}
					}
				} catch (err) {
					_didIteratorError3 = true;
					_iteratorError3 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion3 && _iterator3.return) {
							_iterator3.return();
						}
					} finally {
						if (_didIteratorError3) {
							throw _iteratorError3;
						}
					}
				}
			}
		}, {
			key: "voidCheck",
			value: function voidCheck() {
				var elems = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._requiredElements;
				var _iteratorNormalCompletion4 = true;
				var _didIteratorError4 = false;
				var _iteratorError4 = undefined;

				try {
					for (var _iterator4 = elems[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
						var item = _step4.value;

						if (item.value) {
							this.removeError(item);
						} else {
							this.displayError(item, this.warning.void);
						}
					}
				} catch (err) {
					_didIteratorError4 = true;
					_iteratorError4 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion4 && _iterator4.return) {
							_iterator4.return();
						}
					} finally {
						if (_didIteratorError4) {
							throw _iteratorError4;
						}
					}
				}
			}

			// Flag getter for compleating validation

		}, {
			key: "isValid",
			get: function get() {
				this.voidCheck();
				this.quotesCheck();
				this.dateCheck();
				this.mailCheck();
				this.radioCheck();

				return !this._form.querySelector('.error');
			}
		}]);

		return ComponentValidation;
	}();

	var form = document.getElementById('form');

	var validation = new ComponentValidation(form);
	var popup = new Popup();

	form.addEventListener('submit', function (e) {
		e.preventDefault();

		if (validation.isValid) {
			popup.open({
				title: "The form was successfully sended!",
				body: "Please wait for our reply. \n Thanks for your time!"
			});
		}
	});
});