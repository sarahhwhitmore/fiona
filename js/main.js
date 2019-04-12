$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// 1. pin the intro
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#newintro',
		triggerHook: 0,
		duration: '70%'
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
	var pinSonogram = new ScrollMagic.Scene({
		triggerElement: '#pregText',
		triggerHook: 0.25,
		duration: '40%'
	})
	.setPin('#pregText', {pushFollowers: true})
	.addIndicators()
	.addTo(controller);

		// 4. sonogram text fade in

		var fadein_tween = TweenMax
		.fromTo('.sonogramText', 1, { yPercent:100 , opacity:0.5 }, { yPercent:0 , opacity:1 , ease:Power1.easeInOut  });

		var scene = new ScrollMagic.Scene({
		  triggerElement: "#sonogramText",
		  trigerHook:"onEnter",
		  duration: "50%"
		})
		.setTween(fadein_tween)
		.addTo(controller);


});
