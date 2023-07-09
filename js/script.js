$(document).ready(function() {
	$('.header__burger').click(function(){
		$('.header__burger').toggleClass('active');
		$('.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.menu__link').click(function(){
		$('.header__menu').removeClass('active');
		$('.header__burger').removeClass('active');
		$('body').removeClass('lock');
	});
});
