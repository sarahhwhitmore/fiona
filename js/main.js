$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// pin the intro
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#newintro',
		triggerHook: 0,
		duration: '70%'
	})
	.setPin('#newintro', {pushFollowers: false})
	.addIndicators()
	.addTo(controller);

	// pin the intro
	var pinIntroScene2 = new ScrollMagic.Scene({
		triggerElement: '#introText',
		triggerHook: 0.05,
		duration: '70%'
	})
	.setPin('#introText', {pushFollowers: true})
	.addIndicators()
	.addTo(controller);

});
