$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// pin the intro
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#intro',
		triggerHook: 0,
		duration: '160%'
	})
	.setPin('#intro', {pushFollowers: false})
	.addIndicators()
	.addTo(controller);

	// pin the intro
	var pinIntroScene2 = new ScrollMagic.Scene({
		triggerElement: '#introText',
		triggerHook: 0.8,
		duration: '30%'
	})
	.setPin('#introText', {pushFollowers: false})
	.addIndicators()
	.addTo(controller);

});
