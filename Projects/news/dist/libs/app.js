"use strict";

(function($) {
	// Simple accordion plugin.
	$.fn.accordion = function() {
		var elems = this;

		this.on('click', function() {
			elems.not(this).removeClass('is-active');
			$(this).toggleClass('is-active');
		});

		return this;
	}
})(jQuery);

$(function() {
	let config = {
		key: 'api-key=184a93b7-1452-43b2-b9f4-0ae555113560',
		url: 'https://content.guardianapis.com/search?'
	}

	function NewsComponent(config) {
		this.key = config.key;
		this.url = config.url + config.key;

		this.content = $('.news__content');
		this.input = $('#currentPage');
		this.totalPages = $('#totalPages');
		this.refreshBtn = $('#refresh');
		this.nextBtn = $('#nextBtn');
		this.prevBtn = $('#prevBtn');

		// Flags for request state
		this.inProgress = false;
		this.isLoaded = false;

		// Data loading method
		this.load = function(url = this.url) {
			if (this.inProgress) return;
			this.content.html(' ');

			$.ajax({
				context: this,
				url: url,
				beforeSend: beforeSend,
			})
			.done(onDone)
			.fail(function() {
				onFail.call(this, this.content)
			})
		}

		// Private functions and const.
		const dangerPattern = '<p class="news__danger">Sorry, we couldn\'t find news for you. Please try again later</p>';

		// $.ajax before send func.
		function beforeSend() {
			this.inProgress = true;
		}

		// $.ajax.fail().
		function onFail(content = this.content) {
			this.inProgress = false;
			content.html(dangerPattern);
			this.updateButtonsState();
		}

		// $.ajax.done().
		function onDone(data) {
			this.inProgress = false;	
			this.response = data.response;

			this.input.val(data.response.currentPage);
			this.totalPages.html(data.response.pages);

			let results = data.response.results;

			for(let i = 0; i < results.length; i++) {
				let [articleTitle, articleContent] = renderItem(this.content, results[i]);
				let articleUrl = results[i].apiUrl+'?show-blocks=body&'+this.key;
				let articleLink = results[i].webUrl;
				
				componentsHendler(articleTitle, articleContent, articleUrl, articleLink);
			}

			$('.new__title').accordion();
			updateInputWidth(this.input);
			this.updateButtonsState();
		}

		// Helpers functions.
		function renderItem(body, result) {
			let articleContainer = $('<li></li>').addClass('new');
			let title = result.webTitle;

			let articleTitle = $('<h3></h3>').addClass('new__title')
			.html(result.webTitle);
			let articleContent = $('<div></div>').addClass('new__content');

			body.append(articleContainer);
			articleContainer.append(articleTitle);
			articleContainer.append(articleContent);

			return [articleTitle, articleContent];
		}	

		// Function for accordion title click event.
		function componentsHendler(articleTitle, articleContent, articleUrl, articleLink) {
			articleTitle.on('click', function(e) {
				$.ajax({
					url: articleUrl
				})
				.done(function(data) {
					articleContent.html(" ");

						// If undefined data field.
						try {
							var newsArray = data.response.content.blocks.body;
							let linkPattern = `<a href="${articleLink}" class="new__content-link" target="_blank">Read full news</a>`;

							articleContent.html(newsArray[0].bodyTextSummary + linkPattern);
						} catch(e) {
							articleContent.html(dangerPattern);
						}
					})
				.fail(function() {
					articleContent.html(dangerPattern);
				})
			})
		}

		// Function for updating input width on pages input.
		function updateInputWidth(input = this.input) {
			let inp = input.val().length;

			if (!inp) return;

			let w = input.outerWidth();

			input.width(inp * 10);
		}

		// Event hendlers
		this.nextBtn.on('click', () => {
			this.loadPage(true);
		});

		this.prevBtn.on('click', () => {
			this.loadPage(false);
		});

		this.refreshBtn.on('click', () => {
			this.loadPage();
		});

		this.input.on('blur keydown', (e) => {
			// Checking flag so that the request isn't sent twice
			if (e.type ==='keydown' && e.keyCode === 13) this.isLoaded = true;

			if (e.type ==='blur' && this.isLoaded === true) return;

			if (e.type ==='blur' || e.keyCode === 13 && !this.inProgress)  {

				let pageNumb = +this.input.val();

				//If wrong type of input => load first page.
				if (pageNumb <=0 || !$.isNumeric(pageNumb) || 
					pageNumb > +this.totalPages.html()) pageNumb = 1;			

					this.loadPage(null, pageNumb);
			}
		});

		this.input.on('input', (e) => {
			updateInputWidth.call(this);
			this.isLoaded = false;
		});
	}

	// Checking prev/next buttons
	NewsComponent.prototype.updateButtonsState = function() {
		let value = +this.input.val();

		if (value <= 1) {
			this.prevBtn.attr('disabled', true);
			this.nextBtn.attr('disabled', false);
		} else if (value >= +this.totalPages.html()) {
			this.nextBtn.attr('disabled', true);
			this.prevBtn.attr('disabled', false);
		} else {
			this.prevBtn.attr('disabled', false);
			this.nextBtn.attr('disabled', false);
		}
	}

	/**
	 * Loading of desired page
	 * @param  {bool} increase [param for loading next/prev or reloading current page]
	 */
	 NewsComponent.prototype.loadPage = function(increase, pageNumb = +this.input.val()) {
	 	if (this.inProgress) return;
	 	
	 	switch (increase) {
	 		case true:
	 		pageNumb++;	
	 		break;

	 		case false:
	 		pageNumb--;
	 		break;

	 		default:
	 		break;
	 	}

	 	this.input.val(pageNumb);
	 	let url = this.url+'&page='+pageNumb;

	 	this.load(url);
	 }

	 let news = new NewsComponent(config);

	 news.load();
	});