$(document).ready(function(){
	var newImg, newAuthor

	$('.cards').on('click', '.card', function(){
		$(this).toggleClass('card--open');
	})

	$('.cards').on('click', '.card__like', function(e){
		e.preventDefault();
		e.stopPropagation();
		$(this).toggleClass('card__like--red');
	})

	if ($('.cards').find('.card__follow').children('button').hasClass('card__follow-btn--following')) {
		$('.card__follow-btn--following').text('Siguiendo')
	}

	$('.cards').on('click', '.card__follow-btn', function(e){
		e.stopPropagation();
		$(this).toggleClass('card__follow-btn--following');
		if ($(this).hasClass('card__follow-btn--following')){
			$(this).text('Siguiendo')
		} else {
			$(this).text('Seguir')
		}
	})

	$("#image").on('change', function(e){
		newImg = $('.create__image .create__img').attr('src', 'assets/images/squared/' + $(this).val());
	})

	$("#author").on('change', function(e){
		newAuthor = $('.create__profile .create__img').attr('src', `assets/images/profiles/${ $(this).val() }`);
	})

	$(".create__form").on('submit', function(e){
		e.preventDefault();

		var titulo = $('#name').val();
		var newImgSrc = newImg.attr('src');
		var newAuthorImg = newAuthor.attr('src');
		var authorText = $('#author').children(':selected').text();
		var newFollowers = $('#followers').val();
		var newLike = $('#likes').val();
		var newFollowing = $('#following').val();
		var html = '<li class="card">' +
				'<div class="card__highlight">' +
				'<img class="card__img" src="'+ newImgSrc +'" alt="">' +
				'</div>' +
				'<div class="card__content">' +
				'<div class="card__profile-container">' +
				'<img class="card__profile" src="'+ newAuthorImg +'" alt="">' +
				'</div>' +
				'<div class="card__title">' +
				'<h2>'+ titulo +'</h2>' +
				'</div>' +
				'<div class="card__author">' +
				'<h3 class="card__author-name">' + authorText + '</h3>' +
				'</div>' +
				'<a class="card__like" href="#">' +
				'<i class="fas fa-heart"></i>' +
				'</a>' +
				'<div class="card__hidden">' +
				'<ul class="social">' +
				'<li class="social__element">' +
				'<div class="social__number">'+ newFollowers +'</div>' +
				'<div class="social__text">Followers</div>' +
				'</li>' +
				'<li class="social__element">' +
				'<div class="social__number">'+ newLike +'</div>' +
				'<div class="social__text">Likes</div>' +
				'</li>' +
				'<li class="social__element">' +
				'<div class="social__number">'+ newFollowing +'</div>' +
				'<div class="social__text">Following</div>' +
				'</li>' +
				'</ul>' +
				'<div class="card__follow">' +
				'<button class="card__follow-btn">Seguir</button>' +
				'</div>' +
				'</div>' +
				'</div>' +
				'</li>'

	$('.cards').append(html)

	// CARD SUBMIT RESET
		titulo = $('#name').val('');
		newImg.attr('src', 'assets/images/squared/uk.png');
		$('#image').val('uk.png')
		newAuthor.attr('src', 'assets/images/profiles/uk.png');
		authorText = $('#author').val('uk.png');
		newFollowers = $('#followers').val('');
		newLike = $('#likes').val('');
		newFollowing = $('#following').val('');
	})

});