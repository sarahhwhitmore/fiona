$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// pin the intro
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#intro',
		triggerHook: 0,
		duration: '200%'
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller);

	// pin again
	var pinIntroScene2 = new ScrollMagic.Scene({
		triggerElement: '#project01',
		triggerHook: 0.4
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller);

	// loop through each .project element
	$('.project').each(function(){
	});

});
