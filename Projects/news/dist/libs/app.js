"use strict";
(function($) {
	$.fn.spoiler = function() {

		var elems = this;

		this.on('click', function() {
			elems.not(this).removeClass('is-active');
			$(this).toggleClass('is-active');
		});

		return this;
	}
})(jQuery);

$(function() {
	let key = '184a93b7-1452-43b2-b9f4-0ae555113560';

	let config = {
		content: document.querySelector('.news__content'),
		url: 'https://content.guardianapis.com/search?api-key='+key,
		onDone: function(results) {
			for(let i = 0; i <= results.length - 1; i++) {
				let newContainer = $('<li></li>').addClass('new');

				this.content.append(newContainer[0]);

				let newTitle = $('<h3></h3>').addClass('new__title')
				.html(results[i].webTitle);

				newContainer.append(newTitle);

				let newHeart = $('<div></div>').addClass('new__content');

				newContainer.append(newHeart);

				let contentUrl = results[i].apiUrl+'?show-blocks=body&api-key='+key;
				
				newTitle.on('click', function(e) {
					$.ajax({
						cache: false,
						url: contentUrl
					}).done(function(data) {
						newHeart[0].innerHTML = "";
						let arrNews = data.response.content.blocks.body;

						for(let i = 0; i < arrNews.length; i++) {
							newHeart[0].innerHTML += arrNews[i].bodyHtml;
						}
					}).fail(function(e) {
						newHeart[0].innerHTML = '<p class="news__danger">Sorry, we couldn\'t find news for you. Please try again later</p>'
					})
				})
			}

			$('.new__title').spoiler();
		},
		onError: function() {
			this.content.innerHTML = '<p class="news__danger">Sorry, we couldn\'t find news for you. Please try again later</p>';
		}
	}

	let request = new Request(config);

	request.send();

	const refreshBtn = $('#refresh');

	refreshBtn.on('click', function(e) {
		request.refresh();
	});
});

function Request(config = {}) {
	this._config = config;
}

Request.prototype.send = function() {
	$.ajax({
		context: this,
		url: this._config.url
	})
	.done(function(data) {
		let results = data.response.results;
		this._config.onDone(results)
	})
	.fail(function() {
		this._config.onError();
	})
}

Request.prototype.refresh = function() {
	this._config.content.innerHTML = "";
	this.send();
}
