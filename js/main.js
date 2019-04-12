// $(document).ready(function(){
//
// 	// Init ScrollMagic
// 	var controller = new ScrollMagic.Controller();
// 	// var fadeInBg = new TimelineMax()
// 	// 		.from(".trigger", 1, {
// 	// 				autoAlpha:0
// 	// 		});
//
// 	// 1. pin the intro
// 	var pinIntroScene = new ScrollMagic.Scene({
// 		triggerElement: '#newintro',
// 		triggerHook: 0,
// 		duration: '60%'
// 	})
// 	.setPin('#newintro', {pushFollowers: true})
// 	.addIndicators()
// 	.addTo(controller);
//
// 	// // 1.5 pin background fade intro-dark
// 	// 	new ScrollMagic.Scene({
// 	// 				triggerElement: "#intro-darker",
// 	// 				triggerHook: "onLeave",
// 	// 				duration: '100%'
// 	// 	})
// 	// 	.setPin("#intro-darker", {pushFollowers: false})
// 	// 	.setTween(fadeInIntro)
// 	// 	.addIndicators()
// 	// 	.addTo(controller);
//
// 	// 2. pin intro text
// 	var pinIntroScene2 = new ScrollMagic.Scene({
// 		triggerElement: '#introText',
// 		triggerHook: 0.05,
// 		duration: '50%'
// 	})
// 	.setPin('#introText', {pushFollowers: true})
// 	.addIndicators()
// 	.addTo(controller);
//
// 	// 3. Fiona's Journey Begins...
// 	var pinPregText = new ScrollMagic.Scene({
// 		triggerElement: '#pregText',
// 		triggerHook: 0,
// 		duration: '50%'
// 	})
// 	.setPin('#pregText', {pushFollowers: true})
// 	.addIndicators()
// 	.addTo(controller);
//
// 	// 4. pin sonogram vid
// 	var pinSonogramVid = new ScrollMagic.Scene({
// 		triggerElement: '#sonogramVid',
// 		triggerHook: 0,
// 		duration: '200%'
// 	})
// 	.setPin('#sonogramVid', {pushFollowers: false})
// 	.addIndicators()
// 	.addTo(controller);
//
// 	// 5. Zoo staff captured the first-ever...
// 	var pinSonogramText = new ScrollMagic.Scene({
// 		triggerElement: '#sonogramText',
// 		triggerHook: 0,
// 		duration: '100%'
// 	})
// 	.setPin('#sonogramText', {pushFollowers: true})
// 	.addIndicators()
// 	.addTo(controller);
//
// 	// 6. explainer intro slide
// 	var pinSonogramText = new ScrollMagic.Scene({
// 		triggerElement: '#explainerIntro',
// 		triggerHook: 0,
// 		duration: '60%'
// 	})
// 	.setPin('#explainerIntro', {pushFollowers: true})
// 	.addIndicators()
// 	.addTo(controller);
//
// 	// 7. pin explainer
// 	var pinExplainer = new ScrollMagic.Scene({
// 		triggerElement: '#explainer',
// 		triggerHook: 0,
// 		duration: '100%'
// 	})
// 	.setPin('#explainer', {pushFollowers: true})
// 	.addIndicators()
// 	.addTo(controller);
//
// 	// 7. So the zoo had to help
// 	var pinZooText = new ScrollMagic.Scene({
// 		triggerElement: '#help',
// 		triggerHook: 0,
// 		duration: '60%'
// 	})
// 	.setPin('#help', {pushFollowers: true})
// 	.addIndicators()
// 	.addTo(controller);
//
//
//
//
//
//
//
//
// 	// video autoplay fix
// 		// var videoStartStop_scene = new ScrollScene({triggerElement: "#secc2"}).addTo(controller);
//
// 		var v = document.getElementsByTagName("video")[0];
// v.play();
//
//
// });



// SCROLLMAGIC
// STEP 1: initiate the controller first
$(function() {
  // Init ScrollMagic Controller
  var controller = new ScrollMagic.Controller();
    var fadeInBg = new TimelineMax()
            .from(".trigger", 1, {
                    autoAlpha:0
            });
  /* STEP 2: Create animation if desired
    var slideBox = new TimelineMax()
                });*/

  //STEP 3: build the SCENE
            new ScrollMagic.Scene({
                    triggerElement: ".trigger",
                    triggerHook: "onLeave",
                    duration: "200%"
                })
                .setPin(".pinned-cont", {pushFollowers: false})
                .setTween(fadeInBg)
                .addIndicators()
                .addTo(controller);

            new ScrollMagic.Scene({
                    triggerElement: ".trigger2",
                    triggerHook: "onLeave",
                    duration: "20%"
                })
                .setPin(".pinned-text", {pushFollowers: false})
                //.setTween(slideBox)
                .addIndicators()
                .addTo(controller);

});
