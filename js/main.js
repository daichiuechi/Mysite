$(function() {
	$('#pagepiling').pagepiling({
		sectionsColor: ['#2C3E50', '#7BAABE', '#7BAABE', '#2C3E50'],
		anchors: ['main', 'profile', 'progress', 'contact'],
		menu: '#myMenu'
	});

	// PROFILE modal start
	$('.btn.cubic .hovering').click(function(){
		$('#about-modal').fadeIn();
	});

	$('#close-modal, .modal-end').click(function(){
		$('#about-modal').fadeOut();
	});
	// PROFILE modal finish

	// PROGRESS modal start
	var scrollPos;
	$('.complete').click(function(){
		scrollPos = $(window).scrollTop();
		$('#complete').fadeIn();
		$('body').addClass('fixed').css({top: -scrollPos});
		return false
	});
	$('.close-modal, .modal-end').click(function(){
		$('#complete').fadeOut();
		$('body').removeClass('fixed').css({top: 0});
		$(window).scrollTop(scrollPos);
		return false;
	});

	$('.incomplete').click(function(){
		scrollPos = $(window).scrollTop();
		$('#incomplete').fadeIn();
		$('body').addClass('fixed').css({top: -scrollPos});
		return false
	});
	$('.close-modal, .modal-end').click(function(){
		$('#incomplete').fadeOut();
		$('body').removeClass('fixed').css({top: 0});
		$(window).scrollTop(scrollPos);
		return false;
	});
	// PROGRESS modal finish

	$('.contact-form form').submit(function(){
		var errorFlag = false;
		$(this).children('input, textarea').each(function(){
			if($(this).val() !== '') {
				$(this).prev().text('');
			} else {
				errorFlag = true;
				$(this).prev().text('入力してください');
			}
		});

		console.log(errorFlag);
		return false;
	});
});
