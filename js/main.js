$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// 1. pin the intro
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#newintro',
		triggerHook: 0,
		duration: '60%'
	})
	.setPin('#newintro', {pushFollowers: true})
	.addIndicators()
	.addTo(controller);

	// 2. pin intro text
	var pinIntroScene2 = new ScrollMagic.Scene({
		triggerElement: '#introText',
		triggerHook: 0.05,
		duration: '50%'
	})
	.setPin('#introText', {pushFollowers: true})
	.addIndicators()
	.addTo(controller);

	// 3. Fiona's Journey Begins...
	var pinPregText = new ScrollMagic.Scene({
		triggerElement: '#pregText',
		triggerHook: 0.5,
		duration: '50%'
	})
	.setPin('#pregText', {pushFollowers: true})
	.addIndicators()
	.addTo(controller);

	// 4. pin sonogram vid
	var pinSonogramVid = new ScrollMagic.Scene({
		triggerElement: '#sonogramVid',
		triggerHook: 0,
		duration: '200%'
	})
	.setPin('#sonogramVid', {pushFollowers: false})
	.addIndicators()
	.addTo(controller);

	// 5. Zoo staff captured the first-ever...
	var pinSonogramText = new ScrollMagic.Scene({
		triggerElement: '#sonogramText',
		triggerHook: 0,
		duration: '100%'
	})
	.setPin('#sonogramText', {pushFollowers: true})
	.addIndicators()
	.addTo(controller);

	// 6. explainer intro slide
	var pinSonogramText = new ScrollMagic.Scene({
		triggerElement: '#explainerIntro',
		triggerHook: 0,
		duration: '100%'
	})
	.setPin('#explainerIntro', {pushFollowers: true})
	.addIndicators()
	.addTo(controller);







	// video autoplay fix
		// var videoStartStop_scene = new ScrollScene({triggerElement: "#secc2"}).addTo(controller);

		var v = document.getElementsByTagName("video")[0];
v.play();


});
