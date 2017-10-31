(function(){
	function initMap() {
		var map = new google.maps.Map(document.getElementById('map0'), {
			zoom: 3,
			center: {lat: 0, lng: -180},
			mapTypeId: 'terrain'
		});


		var flightPlanCoordinates = [
			{lat: 37.772, lng: -122.214},
			{lat: 21.291, lng: -157.821},
			{lat: -18.142, lng: 178.431},
			{lat: -27.467, lng: 153.027}
		];
		
		var flightPath = new google.maps.Polyline({
		path: flightPlanCoordinates,
		geodesic: true,
		strokeColor: '#FF0000',
		strokeOpacity: 1.0,
		strokeWeight: 2
	});
})();



flightPath.setMap(map);
}

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