$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// pin the intro
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#newintro',
		triggerHook: 0,
		duration: '140%'
	})
	.setPin('#newintro', {pushFollowers: true})
	.addIndicators()
	.addTo(controller);

	// pin the intro
	var pinIntroScene2 = new ScrollMagic.Scene({
		triggerElement: '#introText',
		triggerHook: 0.18,
		duration: '60%'
	})
	.setPin('#introText', {pushFollowers: true})
	.addIndicators()
	.addTo(controller);
});
