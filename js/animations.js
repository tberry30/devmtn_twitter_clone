$(document).ready(function(){

	$('.tweet-compose').attr('maxlength', '150');


	$('.tweet-compose').on('click', function(){
		$(this).css( 'height', '5em' );
		$('#tweet-controls').css('display', 'block');
	});


	function resetTweeter() {
		$('.tweet-compose').css( 'height', '2.5em' );
		$('#tweet-controls').css('display', 'none');
		$('.tweet-compose').val('');
	}


	$('.tweet-compose').keyup(function(){
		var tweetRemaining = 140 - $(this).val().length;
		if (tweetRemaining <= 0) {
			$('#char-count').text('0');
		} else {
			$('#char-count').text(tweetRemaining);
		}
	
		if (tweetRemaining <= 10) {
			$('#char-count').css('color', '#A00000');
		} else {
			$('#char-count').css('color', '#999');
		}


		if (tweetRemaining < 0) {
			$('#tweet-submit').prop('disabled', true);
		} else {
			$('#tweet-submit').prop('disabled', false);
		}

	});


	function addTweet() {
		var userTweet = $('.tweet-compose').val();

		var $tpl = $('<div class="tweet">' +
				'<div class="content">' +
				'<img class="avatar" src="img/alagoon.jpg" />' +
				'<strong class="fullname">Tim B </strong>' +
				'<span class="username">@DevMtn</span>' +
				'<p class="tweet-text">none</p>' +
				'</div>' +
				'</div><!-- .tweet -->');

		$tpl.find('.tweet-text').text(userTweet);
		$('#stream').prepend($tpl);
	}

	$('.tweet-compose').on('blur', function(){
		$('.tweet-compose').css( 'height', '2.5em' );
		$('#tweet-controls').css('display', 'none');
	});



	// $('#tweet-submit').live("mousedown", function(e){
	// 	$('#tweet-submit').on('click', addTweet());
	// });


	$('.tweet-compose').on('keyup', function(event){
		if (event.which == 13) {
			addTweet();
			$('.tweet-compose').val('');
		}
	});


	$('.tweet').hover(function() {
		$('.tweet-actions').show();
	}, function() {
		$('.tweet-actions').hide();
	});

	$('.tweet').click(function() {
		$('.stats').show();
		$('.reply').show();
	})


})