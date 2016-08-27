$(document).ready(function() {

//////Close collapsed menu om click of item:
	$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

//////Close collapsed menu on click of toggle:
$(document).on('click','.navbar-collapse',function(e) {
	console.log("clicked toggle");
	 $('.navbar-collapse.in').collapse('hide');
});


	$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});
	
	var w = $(window).width();
	var h = $(window).height();



	$('.home-text-top').textillate({
		in: {effect: "fadeInLeftBig"}
	})

	$('.home-text-top').on('inAnimationEnd.tlt', function () {
		console.log("TEXTILLATIN");
		$('.home-text-bottom').show();
		$('.home-text-bottom').textillate({ 
			loop: true,
			in: {effect: "flipInY", delay: 20},
			out: {effect: "flipOutY", shuffle: false} 
		});

	});





	var top = $(".about-me-text-top");
	var bottom =  $(".about-me-text-bottom");

	top.waypoint({
		handler: function() {
			top.velocity({backgroundColorAlpha: 0.5}, 1200, "ease-in-out");
		},
		offset: "80%"
	})


	bottom.waypoint({
		handler: function() {
			bottom.velocity({backgroundColorAlpha: 0.5}, 1200, "ease-in-out");
		},
		offset: "80%"
	})
////DANDY//////

var playing = false;

  console.log("butt");

  var play = function() {
    tl = new TimelineLite();
    for (i = 1; i < 13; i++) {
      var petal = document.getElementById("innerpetal" + i + "");
      var delay = 0.3 * Math.floor(Math.random() * 7) + 1;
      var hor = 30 * Math.floor(Math.random() * 8) + 1;
      var ver = 70 * Math.floor(Math.random() * 9) + 1;
      var flip = Math.floor(Math.random() * 2);
      if (flip == 1) {
        ver = -ver;
      }
      console.log(ver);
      tl.add(TweenMax.to(petal, 7, {
        delay: delay,
        rotation: 720,
        transformOrigin: "50% 50%",
        x: -1200 - hor,
        y: 100 + ver,
        opacity:0
      }), 0);

    }

    for (i = 1; i < 25; i++) {
      if (i != 16) {
        var petal = document.getElementById("outerpetal" + i + "");
        var delay = 0.3 * Math.floor(Math.random() * 7) + 1;
        tl.add(TweenMax.to(petal, 7, {
          delay: delay,
          rotation: 720,
          transformOrigin: "50% 50%",
          x: -1200 - hor,
          y: 100 + ver,
          opacity: 0
        }), 0);
      }
    }

  };

  $('#dandybutt').click(function() {
    console.log("butt");

    if (playing) {
      tl.pause(0);
      playing = false;
      document.getElementById("dandybutt").innerHTML = "PLAY";
    } else {
      console.log("was paused");
      play();
      playing = true;
      document.getElementById("dandybutt").innerHTML = "RESET";
    }

  });

 //////DANDY/////////
 console.log("loadedup here");
              var m = 10;
              var shortSide = 7.65 * m,
              longSide = 18.48 * m,
              evenSide = 14.14 * m,
              longestSide = 20 * m,
              negShortSide = -7.65 * m,
              negLongSide = -18.48 * m,
              negEvenSide = -14.14 * m,
              negLongestSide = -20 * m;
              var short = shortSide + " px",
              long = longestSide + " px",
              even = evenSide + " px",
              longest = longestSide + " px";
              negShort = negShortSide + " px",
              negLong = negLongestSide + " px",
              negEven = negEvenSide + " px",
              negLongest = negLongestSide + " px";
              var dur = 800,
              del = 200;
              function animate() {
                $("#petal1").velocity({translateY: negLongest},{duration: 1000}).velocity("reverse");
                $("#petal2").velocity({translateY: negLong, translateX: short},{duration: dur, delay: del}).velocity("reverse");
                $("#petal3").velocity({translateY: negEven, translateX: even},{duration: dur, delay: del*2}).velocity("reverse");
                $("#petal4").velocity({translateY: negShort, translateX: long},{duration: dur, delay: del*3}).velocity("reverse");
                $("#petal5").velocity({translateY: 0, translateX: longest},{duration: dur, delay: del*4}).velocity("reverse");
                $("#petal6").velocity({translateY: short, translateX: long},{duration: dur, delay: del*5}).velocity("reverse");
                $("#petal7").velocity({translateY: even, translateX: even},{duration: dur, delay: del*6}).velocity("reverse");
                $("#petal8").velocity({translateY: long, translateX: short},{duration: dur, delay: del*7}).velocity("reverse");
                $("#petal9").velocity({translateY: longest, translateX: 0},{duration: dur, delay: del*8}).velocity("reverse");
                $("#petal10").velocity({translateY: long, translateX: negShort},{duration: dur, delay: del*9}).velocity("reverse");
                $("#petal11").velocity({translateY: even, translateX: negEven},{duration: dur, delay: del*10}).velocity("reverse");
                $("#petal12").velocity({translateY: short, translateX: negLong},{duration: dur, delay: del*11}).velocity("reverse");
                $("#petal13").velocity({translateY: 0, translateX: negLongest},{duration: dur, delay: del*12}).velocity("reverse");
                $("#petal14").velocity({translateY: negShort, translateX: negLong},{duration: dur, delay: del*13}).velocity("reverse");
                $("#petal15").velocity({translateY: negEven, translateX: negEven},{duration: dur, delay: del*14}).velocity("reverse");
                $("#petal16").velocity({translateY: negLong, translateX: negShort},{duration: dur, delay: del*15}).velocity("reverse");

              }

              animate;

              var button = document.getElementById("butt");
              button.addEventListener("click", animate);


////////////////////////////////////////
/////////PORTFOLIO HOVERS!!!!///////////
////////////////////////////////////////

/*
$("#myCarousel").mouseover(function()
{
	$(".carousel-caption").velocity({opacity: 0.8}, 500, "ease-in-out");
});

$("#myCarousel").mouseout(function()
{

	$(".carousel-caption").velocity({opacity: 0}, 1000, "ease-in-out");
});
*/


$("#quoter").hover(function()
{
	console.log("house!");
});

$("#wikiviewer").hover(function()
{
	console.log("wiki!");
});

$("#header29").hover(function()
{
	console.log("29dig!");
});


	var portfolio = $("#portfolio");
		var home = $("#homehook");
		var aboutMe = $("#about-me");
		var aboutUs = $("#about-us");
		var contact = $("#contact");


		portfolio.waypoint({
		
		handler: function() {
			$(".nav").find(".active").removeClass("active");
			$("#portfolio-link").addClass("active");
		},
		offset: "30%"
	})

		aboutMe.waypoint({
		
		handler: function() {
			$(".nav").find(".active").removeClass("active");
			$("#about-me-link").addClass("active");
		},
		offset: "30%"
	})

			aboutUs.waypoint({
		
		handler: function() {
			$(".nav").find(".active").removeClass("active");
			$("#about-us-link").addClass("active");
		},
		offset: "30%"
	})

	home.waypoint({
	
		handler: function() {
			$(".nav").find(".active").removeClass("active");
			$("#home-link").addClass("active");
		},
		offset: "-20%"
	})

	contact.waypoint({
	
		handler: function() {
			$(".nav").find(".active").removeClass("active");
			$("#contact-link").addClass("active");
		},
		offset: "30%"
	})


});
















