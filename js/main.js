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

	var controller = new ScrollMagic.Controller();

	// pin the intro
	var pinIntroScene2 = new ScrollMagic.Scene({
		triggerElement: '#intro',
		triggerHook: 0,
		duration: '200%'
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller);

	// pin the intro
	var pinIntroScene3 = new ScrollMagic.Scene({
		triggerElement: '#intro',
		triggerHook: 0,
		duration: '200%'
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller);

});
