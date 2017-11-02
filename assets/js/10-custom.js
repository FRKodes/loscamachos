function initMap() {
	var map = new google.maps.Map(document.getElementById('map0'), {
		zoom: 14,
		center: {lat: 20.695178, lng: -103.348580},
		mapTypeControl: false,
		mapTypeId: 'terrain'
	});


	// var map1 = new google.maps.Map(document.getElementById('map1'), {
	// 	zoom: 14,
	// 	center: {lat: 0, lng: -180},
	// 	mapTypeControl: false,
	// 	mapTypeId: 'terrain'
	// });


	var flightPlanCoordinates = [
		{lat: 20.694408, lng: -103.348398},
		{lat: 20.689070, lng: -103.348150},
		{lat: 20.688777, lng: -103.353855},
		{lat: 20.679398, lng: -103.354185}
	];
	
	var flightPath = new google.maps.Polyline({
		path: flightPlanCoordinates,
		geodesic: true,
		strokeColor: '#FF0000',
		strokeOpacity: 1.0,
		strokeWeight: 2
	});
	
	flightPath.setMap(map);

}




(function($) {
	$(document).ready(function() {
		/* IF YOU WANT TO APPLY SOME BASIC JQUERY TO REMOVE THE VIDEO BACKGROUND ON A SPECIFIC VIEWPORT MANUALLY
		 var is_mobile = false;
		if( $('.player').css('display')=='none') {
			is_mobile = true;       
		}
		if (is_mobile == true) {
			//Conditional script here
			$('.big-background, .small-background-section').addClass('big-background-default-image');
		}else{
			$(".player").mb_YTPlayer(); 
		}
		});
		*/
		/*  IF YOU WANT TO USE DEVICE.JS TO DETECT THE VIEWPORT AND MANIPULATE THE OUTPUT  */

		//Device.js will check if it is Tablet or Mobile - http://matthewhudson.me/projects/device.js/
		if (!device.tablet() && !device.mobile()) {
			$(".player").mb_YTPlayer();
		} else {
			//jQuery will add the default background to the preferred class 
			$('.big-background, .small-background-section').addClass('big-background-default-image');
		}
	});
})(jQuery);

$('.prices-container').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true
});

$('.routes-container').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
	{
	  breakpoint: 992,
	  settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots: true
	  }
	}
	// You can unslick at a given breakpoint now by adding:
	// settings: "unslick"
	// instead of a settings object
  ]
});


$('.photos-container').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true
});

$('.atracciones-gallery').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true
});



$('.zones-container').slick({
  dots: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
	{
	  breakpoint: 768,
	  settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots: true
	  }
	}
	// You can unslick at a given breakpoint now by adding:
	// settings: "unslick"
	// instead of a settings object
  ]
});



$('.tickets-container').slick({
  dots: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
	{
	  breakpoint: 768,
	  settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots: true
	  }
	}
	// You can unslick at a given breakpoint now by adding:
	// settings: "unslick"
	// instead of a settings object
  ]
});