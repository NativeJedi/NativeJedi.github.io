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

	let inProgress = false;

	function onError(content) {
		inProgress = false;
		content.html('<p class="news__danger">Sorry, we couldn\'t find news for you. Please try again later</p>');
	}

	function beforeSend() {
		inProgress = true;
		variableWidth(null, this.input);
	}

	function checkBtns(config) {
		let value = +config.input.val();

		if (value <= 1) {
			config.prevBtn.attr('disabled', true);
			config.nextBtn.attr('disabled', false);
		} else if (value >= +config.total.html()) {
			config.nextBtn.attr('disabled', true);
			config.prevBtn.attr('disabled', false);
		} else {
			config.prevBtn.attr('disabled', false);
			config.nextBtn.attr('disabled', false);
		}
	}

	function onDone(data) {
		inProgress = false;
		this.response = data.response;
		this.input.val(data.response.currentPage);
		this.total.html(data.response.pages);
		let results = data.response.results;

		for(let i = 0; i < results.length; i++) {
			let newContainer = $('<li></li>').addClass('new');
			let title = results[i].webTitle || "undefined title";

			let newTitle = $('<h3></h3>').addClass('new__title')
			.html(results[i].webTitle);
			let newHeart = $('<div></div>').addClass('new__content');

			this.content.append(newContainer);
			newContainer.append(newTitle);
			newContainer.append(newHeart);

			let newUrl = results[i].apiUrl+'?show-blocks=body&'+this.key;
			let newLink = results[i].webUrl;

			newTitle.on('click', function(e) {
				$.ajax({
					url: newUrl
				}).done(function(data) {
					newHeart.html(" ");

					let arrNews = data.response.content.blocks.body;

					newHeart[0].innerHTML += arrNews[0].bodyTextSummary +=
					`<a href="${newLink}" class="new__content-link" target="_blank">Read full news</a>`;

				}).fail(function() {
					onError(newHeart);
				})
			})
		}

		$('.new__title').spoiler();
	}

	let config = {
		content: $('.news__content'),
		input: $('#currentPage'),
		total: $('#totalPages'),
		nextBtn: $('#nextBtn'),
		prevBtn: $('#prevBtn'),
		key: 'api-key=184a93b7-1452-43b2-b9f4-0ae555113560',
		url: 'https://content.guardianapis.com/search?api-key=184a93b7-1452-43b2-b9f4-0ae555113560',
		onDone: onDone,
		onFail: onError,
		beforeSend: beforeSend
	}

	function Request() {}

	Request.prototype = Object.create(config);

	Request.prototype.send = function(url = this.url) {
		if (inProgress) return;
		this.content.html(' ');

		$.ajax({
			context: this,
			url: url,
			beforeSend: this.beforeSend,
		}).done(this.onDone).fail(function() {
			this.onFail(this.content)
		})

	}

	let request = new Request();

	request.send();

	checkBtns(config);

	$('#refresh').on('click', function(e) {
		request.send();
	});

	config.nextBtn.on('click', function(e) {
		loadPage(true);
	})

	config.prevBtn.on('click', function(e) {
		loadPage(false);	
	})


	function loadPage(increase = true) {
		if (inProgress) return;

		let pageNumb = +config.input.val();

		if (increase) {
			pageNumb++;
		} else {
			pageNumb--;
		}

		config.input.val(pageNumb);
		let url = config.url+'&page='+pageNumb;

		request.send(url);
		checkBtns(config);
	}
	config.input.on('blur keydown', function(e) {
		if (e.type ==='blur' || e.keyCode === 13 && !inProgress)  {
			let pageNumb = +$(this).val();

			if (pageNumb <=0 || !$.isNumeric(pageNumb) || pageNumb > +config.total.html()) pageNumb = 1;

			let url = config.url+'&page='+pageNumb;
			request.send(url);
			checkBtns(config);
		}
	})

	config.input.on('input', variableWidth);
	
	function variableWidth(e = {}, input = $(this)) {
		let inp = input.val().length;

		if (!inp) return;
		let w = input.outerWidth();

		input.width(inp * 10);
	}
});

