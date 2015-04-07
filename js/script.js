var current_view = 'review';

$( document ).ready(function() {
	show('daredevil-nova');
	redrawNeck();

	//pedal selection
	$('.pedal').on('click', function(){
		$('.pedal').removeClass('selected');
		$(this).addClass('selected');

		var pedal = $(this).attr('data-pedal');

		if (current_view == 'review'){
			$('.scroll-arrow').show();
		}
		showMobile(pedal);
		show(pedal);
	});

	//view change
	$('#buttons').on('click', '.button', function(){
		action = $(this).attr('data-action');

		if (action == 'review'){
			$('.scroll-arrow').show();
		}
		else{
			$('.scroll-arrow').hide();
		}

		if (action != current_view){
			$('.button').removeClass('active');
			$(this).addClass('active');

			$('.view').hide();
			$('#content-'+action).fadeIn();
		}

		current_view = action;
	});

	//remove arrow on scroll
	$('#main-view, .pedal-review').on('scroll', function(){
		$('.scroll-arrow').fadeOut();
	});

	$(window).on('resize', redrawNeck);

});

function showMobile(pedal){
	$('.pedal-section').hide();
	$('#'+pedal).show();
	$('html, body').animate({
        scrollTop: $('#'+pedal).offset().top
    }, 500);
}

function show(pedal){
	$('#content-review').html($('#'+pedal+' .pedal-review').html());
	$('#content-vid').html($('#'+pedal+' .pedal-vid').html());
	$('#content-rating').html($('#'+pedal+' .pedal-rating').html());
	$('#content-title').html($('#'+pedal+' h1').html());
}

function redrawNeck(){
	var max = 918;
	var top = $('#guitar-full-top');
	var introHeight = $('#intro').height();

	if (introHeight > max){
		top.css('margin-bottom', introHeight-700 + 'px');
		$('#guitar-full-container #red').css('height', '88%');
		$('#intro').css('top', '15%');
	}
	else{
		top.css('margin-bottom', '0px');
		$('#guitar-full-container #red').css('height', '86%');
		$('#intro').css('top', '18%');
	}

}