"use strict";

(function($) {

	//simple accordion plugin
	
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

	let config = {
		content: $('.news__content'),
		input: $('#currentPage'),
		total: $('#totalPages'),
		nextBtn: $('#nextBtn'),
		prevBtn: $('#prevBtn'),
		key: 'api-key=184a93b7-1452-43b2-b9f4-0ae555113560',
		url: 'https://content.guardianapis.com/search?api-key=184a93b7-1452-43b2-b9f4-0ae555113560'
	}

	function Request() {

		// Flag for "Mad clickers"
		
		this.inProgress = false;

		// $.ajax beforeSend function
		this.beforeSend = function() {
			this.inProgress = true;
		}

		// $.ajax onFail function
		this.onFail = function(content = this.content) {
			this.inProgress = false;
			content.html('<p class="news__danger">Sorry, we couldn\'t find news for you. Please try again later</p>');
			this.checkBtns();
		}

		// $.ajax done function
		this.onDone = function(data = {}) {
			this.inProgress = false;	
			this.response = data.response;

			this.input.val(data.response.currentPage);
			this.total.html(data.response.pages);

			let results = data.response.results;

			//Painting items
			
			for(let i = 0; i < results.length; i++) {
				let newContainer = $('<li></li>').addClass('new');
				let title = results[i].webTitle;

				let newTitle = $('<h3></h3>').addClass('new__title')
				.html(results[i].webTitle);
				let newHeart = $('<div></div>').addClass('new__content');

				this.content.append(newContainer);
				newContainer.append(newTitle);
				newContainer.append(newHeart);

				//Options for loading data when clicking on an accordion
				
				let newUrl = results[i].apiUrl+'?show-blocks=body&'+this.key;
				let newLink = results[i].webUrl;

				// Hello from ES5 :D
				
				let self = this;

				//Data download event when clicking on an accordion
				
				newTitle.on('click', function(e) {
					$.ajax({
						context: this,
						url: newUrl
					}).done(function(data) {
						newHeart.html(" ");

						//if undefined data field
		
						try {
							var arrNews = data.response.content.blocks.body;
						} catch(e) {
							self.onFail(newHeart);
						}
						
						newHeart[0].innerHTML += arrNews[0].bodyTextSummary +=
						`<a href="${newLink}" class="new__content-link" target="_blank">Read full news</a>`;

					}).fail(function() {
						self.onFail(newHeart);
					})
				})
			}

			$('.new__title').spoiler();

			this.inputWidth();
			this.checkBtns();
		}
	}

	Request.prototype = Object.create(config);

	Request.prototype.send = function(url = this.url) {

		if (this.inProgress) return;
		this.content.html(' ');

		$.ajax({
			context: this,
			url: url,
			beforeSend: this.beforeSend,
		}).done(this.onDone).fail(function() {
			this.onFail(this.content)
		})

	}

	// Checking prev/next buttons
	Request.prototype.checkBtns = function() {
		let value = +this.input.val();

		if (value <= 1) {
			this.prevBtn.attr('disabled', true);
			this.nextBtn.attr('disabled', false);
		} else if (value >= +this.total.html()) {
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
	Request.prototype.loadPage = function(increase) {
		if (this.inProgress) return;

		let pageNumb = +this.input.val();

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

		this.send(url);
	}

	//Method for variable width when entering pages
	
	Request.prototype.inputWidth = function(input = this.input) {
		let inp = input.val().length;

		if (!inp) return;

		let w = input.outerWidth();

		input.width(inp * 10);
	}

	let request = new Request();

	request.send();

	$('#refresh').on('click', function(e) {
		request.loadPage();
	});

	request.nextBtn.on('click', function(e) {
		request.loadPage(true);
	})

	request.prevBtn.on('click', function(e) {
		request.loadPage(false);	
	})

	let isLoaded = false; //Flag for only one loading after enter press

	request.input.on('blur keydown', function(e) {

		//Cheking flag
		
		if (e.type ==='keydown' && e.keyCode === 13) isLoaded = true;

		if (e.type ==='blur' && isLoaded === true) return;

		if (e.type ==='blur' || e.keyCode === 13 && !request.inProgress)  {

			let pageNumb = +$(this).val();

			//Load first page when wrong input
			if (pageNumb <=0 || !$.isNumeric(pageNumb) || 
				pageNumb > +request.total.html()) pageNumb = 1;

			let url = request.url+'&page='+pageNumb;

			request.send(url);
		}
	})

	request.input.on('input', function() {
		request.inputWidth();
		isLoaded = false;
	});

});

