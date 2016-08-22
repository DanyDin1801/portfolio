$(document).ready(function() {


	var w = $(window).width();
	var h = $(window).height();
	$(".quoter").height(h);
	$(".quoter").width(w);

	$(window).resize(function() {
		w = $(window).width();
		h = $(window).height();
		$(".quoter").height(h);
		$(".quoter").width(w);
	});

	$('.home-text-top').textillate({
		in: {effect: "fadeInLeftBig"}
	})

	$('.home-text-top').on('inAnimationEnd.tlt', function () {
		$('.home-text-bottom').show();
		$('.home-text-bottom').textillate({ 
			loop: true,
			in: {effect: "flipInY", delay: 20},
			out: {effect: "flipOutY", shuffle: false} 
		});

	});

	var top = $(".about-me-text-top");
	var bottom =  $(".about-me-text-bottom");

	var waypoint1 = new Waypoint({
		element: top,
		handler: function() {
			top.velocity({backgroundColor: "#FFF", opacity: 0.5}, 1200, "ease-in-out");
		},
		offset: "80%"
	})


	var waypoint2 = new Waypoint({
		element: bottom,
		handler: function() {
			bottom.velocity({backgroundColor: "#FFF", opacity: 0.5}, 1200, "ease-in-out");
		},
		offset: "80%"
	})
////////////////////////////////////////
/////////PORTFOLIO HOVERS!!!!///////////
////////////////////////////////////////

$(".item").mouseover(function()
{
	$(".carousel-caption").velocity({opacity: 0.75}, 500, "ease-in-out");
});

$(".item").mouseout(function()
{

	$(".carousel-caption").velocity({opacity: 0}, 1000, "ease-in-out");
});



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



/////////////////////////////////////////
///////////CHART!!!!/////////////////////
/////////////////////////////////////////

	var ctx = $("#myChart");
	var data = {
		labels: [
		"Smartphone",
		"Tablet",
		"Desktop"
		],
		datasets: [
		{
			data: [33, 12, 55],
			backgroundColor: [
			"#FF6384",
			"#36A2EB",
			"#FFCE56"
			],
			hoverBackgroundColor: [
			"#FF6384",
			"#36A2EB",
			"#FFCE56"
			]
		}]
	};

	var myPieChart = new Chart(ctx,{
		type: 'pie',
		data: data,
		options: {
			legend: {
				display:false
			}
		}
	});



});
















