// SCROLLMAGIC
// STEP 1: initiate the controller first
$(function() {
  // Init ScrollMagic Controller
  var controller = new ScrollMagic.Controller();
  // 1. fade in color
  var fadeInBg = new TimelineMax()
    .from(".trigger", 1, {
      autoAlpha: 0
    });

  // 2 fade black sonogram
  var fadeInBlack = new TimelineMax()
    .from(".trigger2", 1, {
      autoAlpha: 0
    });

  // 3 fade blue explainer
  var fadeInBlue = new TimelineMax()
    .from(".trigger3", 1, {
      autoAlpha: 0
    });

  // 4 fade over image
  var fadeInBlack2 = new TimelineMax()
    .from(".trigger4", 1, {
      autoAlpha: 0
    });


  // 5 fade over image,
  var fadeInBlack3 = new TimelineMax()
    .from(".trigger5", 1, {
      autoAlpha: 0
    });

    // 6 quick fade
    var fade = new TimelineMax()
      .from(".trigger6", 1, {
        autoAlpha: 0
      });

  /* STEP 2: Create animation if desired
    var slideBox = new TimelineMax()
                });*/

  // 1. fade in color
  new ScrollMagic.Scene({
      triggerElement: ".trigger",
      triggerHook: "onLeave",
      duration: "200%"
    })
    .setPin(".pinned-cont", {
      pushFollowers: false
    })
    .setTween(fadeInBg)
    .addTo(controller);

  //  2. pin the intro
  new ScrollMagic.Scene({
      triggerElement: '#newintro',
      triggerHook: 0,
      duration: '70%'
    })
    .setPin('#newintro', {
      pushFollowers: true
    })

    .addTo(controller);

  //  3. pin intro text
  new ScrollMagic.Scene({
      triggerElement: '#introText',
      triggerHook: 0,
      duration: '50%'
    })
    .setPin('#introText', {
      pushFollowers: true
    })
    .addTo(controller);

  //  5. pin sonogram vid
  new ScrollMagic.Scene({
      triggerElement: '#sonogramVid',
      triggerHook: 0,
      duration: '200%'
    })
    .setPin('#sonogramVid', {
      pushFollowers: false
    })
    .addTo(controller);

  // 6. fade to darker sonogram
  new ScrollMagic.Scene({
      triggerElement: ".trigger2",
      triggerHook: "0",
      duration: "100%"
    })
    .setPin(".pinned-cont2", {
      pushFollowers: false
    })
    .setTween(fadeInBlack)
    .addTo(controller);

  // 8. Zoo staff captured the first-ever...
  new ScrollMagic.Scene({
      triggerElement: '#sonogramText',
      triggerHook: 0.4,
      duration: '50%'
    })
    .setPin('#sonogramText', {
      pushFollowers: true
    })
    .addTo(controller);

  // pin birth video
  new ScrollMagic.Scene({
      triggerElement: '#birth',
      triggerHook: 0,
      duration: '200%'
    })
    .setPin('#birth', {
      pushFollowers: false
    })
    .addTo(controller);

  // 6. fade into explainer
  new ScrollMagic.Scene({
      triggerElement: ".trigger3",
      triggerHook: "0",
      duration: "50%"
    })
    .setTween(fadeInBlue)
    .addTo(controller);

  // 6. pin explainer?
  new ScrollMagic.Scene({
      triggerElement: ".trigger3",
      triggerHook: "0",
      duration: "150%"
    })
    .setPin(".pinned-cont3", {
      pushFollowers: false
    })
    .addTo(controller);

  // pin bottle pic
  new ScrollMagic.Scene({
      triggerElement: '#ch2',
      triggerHook: 0,
      duration: '350%'
    })
    .setPin('#ch2', {
      pushFollowers: false
    })
    .addTo(controller);

  // fade bottle pic
  new ScrollMagic.Scene({
      triggerElement: ".trigger4",
      triggerHook: "onLeave",
      duration: "200%"
    })

    .setPin(".pinned-cont4", {
      pushFollowers: false
    })
    .setTween(fadeInBlack2)
    .addTo(controller);

  // pin happy family pic
  new ScrollMagic.Scene({
      triggerElement: '#ch4',
      triggerHook: 0,
      duration: '300%'
    })
    .setPin('#ch4', {
      pushFollowers: false })
    .addTo(controller);

  // fade in over happy family
  new ScrollMagic.Scene({
      triggerElement: ".trigger5",
      triggerHook: "onLeave",
      duration: "200%"
    })

    .setPin(".pinned-cont5", {
      pushFollowers: false
    })
    .setTween(fadeInBlack3)
    .addTo(controller);


  //  pin happy ending text
  new ScrollMagic.Scene({
      triggerElement: '#happyText',
      triggerHook: 0,
      duration: '100%'
    })
    .setPin('#happyText', {
      pushFollowers: false
    })
    .addTo(controller);


    // quick fade to impact intro
    // new ScrollMagic.Scene({
    //     triggerElement: ".trigger6",
    //     triggerHook: "0",
    //     duration: "50%"
    //   })
    //   .setTween(fade)
    //   .addTo(controller);


  // // Fiona Floating Head
  // new ScrollMagic.Scene({
  //   triggerElement: '#FionaFloatingHead',
  //   triggerHook: 0.25,
  //   duration: '85%'
  // })
  // .setPin('#FionaFloatingHead', {pushFollowers: false})
  // .addIndicators()
  // .addTo(controller);

});
