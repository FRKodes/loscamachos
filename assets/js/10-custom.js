$(function(){	
	var formSettings = {
		singleError : function($field, rules){ 
			$field.closest('.form-group').removeClass('valid').addClass('error');
			$('.alert_fields').fadeIn();
		},
		singleSuccess : function($field, rules){ 
			$field.closest('.form-group').removeClass('error').addClass('valid');
			$('.alert_fields').fadeOut();
		},
		overallSuccess : function(){
			var form    	= $('#contactForm'),
				nombre		= form.find( "input[name='nombre']").val(),
				correo		= form.find( "input[name='correo']").val(),
				mensaje		= form.find( "textarea[name='mensaje']").val(),
				action		= form.attr( "action"),
				url			= action;

			var posting = $.post(
				url, { n: nombre, c: correo, m: mensaje }
			);
			posting.done(function( data ){
				console.log('email sent! \n' + data );
				$('#contactForm')[0].reset();
				$('.sent_mail_alert').fadeIn().delay(3000).fadeOut();
			});
		},
		overallError : function($form, fields){ /*Do nothing, just show the error fields*/ },
			autoDetect : true, debug : true
		};
	var $validate = $('#contactForm').validate(formSettings).data('validate');
});
function initMap() {
	var map = new google.maps.Map(document.getElementById('map0'), {
		zoom: 14,
		center: {lat: 20.695178, lng: -103.348580},
		mapTypeControl: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});


	var map1 = new google.maps.Map(document.getElementById('map1'), {
		zoom: 14,
		center: {lat: 20.695178, lng: -103.348580},
		mapTypeControl: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});


	var map2 = new google.maps.Map(document.getElementById('map2'), {
		zoom: 3,
		center: {lat: 20.695178, lng: -103.348580},
		mapTypeControl: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});


	var map3 = new google.maps.Map(document.getElementById('map3'), {
		zoom: 5,
		center: {lat: 20.695178, lng: -103.348580},
		mapTypeControl: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});


	var map4 = new google.maps.Map(document.getElementById('map4'), {
		zoom: 7,
		center: {lat: 20.695178, lng: -103.348580},
		mapTypeControl: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});


	var map5 = new google.maps.Map(document.getElementById('map5'), {
		zoom: 9,
		center: {lat: 20.695178, lng: -103.348580},
		mapTypeControl: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});



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

	$('.ver-mas-rutas').on('click', function () {
		console.log('clicked!!');
		$('.inner-routes-list-container').toggleClass('opened');
	});

	$('.inner-routes-list a, .routes-list a').on('click', function () {
		var this_element_attr = $(this).attr('class');
		$('.routes-list li').removeClass('active');
		$(this).parent().addClass('active');
		$('.map').hide();
		$('.' + this_element_attr).show();
		$('.inner-routes-list-container').removeClass('opened');
	});

	setTimeout(function(){
		$('.hide-this').addClass('hidden');
	}, 1000);



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
  ]
});