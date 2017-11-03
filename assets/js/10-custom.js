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
		zoom: 13,
		center: {lat: 20.677746, lng: -103.342142},
		mapTypeControl: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var contentString = '<div id="content">LA NORMAL</div>';

	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	var marker = new google.maps.Marker({
		position: {lat: 20.695230, lng: -103.348385},
		map: map,
		title: 'La Normal'
	});

	marker.addListener('click', function() {
		infowindow.open(map, marker);
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



	var ruta_371 = [
		{lat: 20.672358, lng: -103.275316},
		{lat: 20.665347, lng: -103.276701},
		{lat: 20.660536, lng: -103.277339},
		{lat: 20.660059, lng: -103.277613},
		{lat: 20.660434, lng: -103.278506},
		{lat: 20.661679, lng: -103.280202},
		{lat: 20.662669, lng: -103.287057},
		{lat: 20.662652, lng: -103.288771},
		{lat: 20.663999, lng: -103.298179},
		{lat: 20.652040, lng: -103.300111},
		{lat: 20.651539, lng: -103.300255},
		{lat: 20.651000, lng: -103.300885},
		{lat: 20.649175, lng: -103.304471},
		{lat: 20.646779, lng: -103.303137},
		{lat: 20.645536, lng: -103.302666},
		{lat: 20.644355, lng: -103.305109},
		{lat: 20.644320, lng: -103.306198},
		{lat: 20.645942, lng: -103.310886},
		{lat: 20.644541, lng: -103.313708},
		{lat: 20.643824, lng: -103.314494},
		{lat: 20.640483, lng: -103.316436},
		{lat: 20.638391, lng: -103.316663},
		{lat: 20.635599, lng: -103.317118},
		{lat: 20.632969, lng: -103.318122},
		{lat: 20.628912, lng: -103.319871},
		{lat: 20.629696, lng: -103.321986},
		{lat: 20.629164, lng: -103.322435},
		{lat: 20.627129, lng: -103.323941},
		{lat: 20.627007, lng: -103.323482},
		{lat: 20.626905, lng: -103.323253},
		{lat: 20.626970, lng: -103.322984},
		{lat: 20.626830, lng: -103.322016},
		{lat: 20.626671, lng: -103.321647},
		{lat: 20.626316, lng: -103.321567},
		{lat: 20.625840, lng: -103.321786},
		{lat: 20.625131, lng: -103.322385},
		{lat: 20.624767, lng: -103.322984},
		{lat: 20.625185, lng: -103.326812},
		{lat: 20.625452, lng: -103.327609},
		{lat: 20.629748, lng: -103.334265},
		{lat: 20.630442, lng: -103.334866},
		{lat: 20.630553, lng: -103.335128},
		{lat: 20.630039, lng: -103.335575},
		{lat: 20.629038, lng: -103.347375},
		{lat: 20.628406, lng: -103.348716},
		{lat: 20.632141, lng: -103.358905},
		{lat: 20.634993, lng: -103.366477},
		{lat: 20.638778, lng: -103.376434},
		{lat: 20.641111, lng: -103.389580},
		{lat: 20.641619, lng: -103.390770},
		{lat: 20.642322, lng: -103.395134},
		{lat: 20.642382, lng: -103.395637},
		{lat: 20.642292, lng: -103.396141},
		{lat: 20.641926, lng: -103.396828},
		{lat: 20.641859, lng: -103.397675},
		{lat: 20.642322, lng: -103.398738},
		{lat: 20.643452, lng: -103.400600},
		{lat: 20.645037, lng: -103.399601},
		{lat: 20.645867, lng: -103.399569},
		{lat: 20.648278, lng: -103.401068},
		{lat: 20.649246, lng: -103.401777},
		{lat: 20.647704, lng: -103.404500},
		{lat: 20.647763, lng: -103.404906},
		{lat: 20.656307, lng: -103.399300},
		{lat: 20.664559, lng: -103.393808},
		{lat: 20.665904, lng: -103.392911},
		{lat: 20.665903, lng: -103.392607},
		{lat: 20.666098, lng: -103.392180},
		{lat: 20.666570, lng: -103.392063},
		{lat: 20.666933, lng: -103.392192},
		{lat: 20.673787, lng: -103.387649},
		{lat: 20.674007, lng: -103.387449},
		{lat: 20.674062, lng: -103.387085},
		{lat: 20.674347, lng: -103.386850},
		{lat: 20.674743, lng: -103.386979},
		{lat: 20.679213, lng: -103.384115},
		{lat: 20.679279, lng: -103.383856},
		{lat: 20.679609, lng: -103.383669},
		{lat: 20.679784, lng: -103.383727},
		{lat: 20.690340, lng: -103.376706},
		{lat: 20.695370, lng: -103.373360},
		{lat: 20.696468, lng: -103.372445},
		{lat: 20.697742, lng: -103.370590},
		{lat: 20.700312, lng: -103.367490},
		{lat: 20.704881, lng: -103.364132},
		{lat: 20.705974, lng: -103.363404},
		{lat: 20.706314, lng: -103.362348},
		{lat: 20.706517, lng: -103.361297},
		{lat: 20.707171, lng: -103.360446},
		{lat: 20.707511, lng: -103.359512},
		{lat: 20.707341, lng: -103.357922},
		{lat: 20.706841, lng: -103.354364},
		{lat: 20.706237, lng: -103.349856},
		{lat: 20.705512, lng: -103.348259},
		{lat: 20.704678, lng: -103.347343},
		{lat: 20.704678, lng: -103.346592},
		{lat: 20.704480, lng: -103.345982},
		{lat: 20.699911, lng: -103.336026},
		{lat: 20.697144, lng: -103.329968},
		{lat: 20.693805, lng: -103.323088},
		{lat: 20.692147, lng: -103.312538},
		{lat: 20.690467, lng: -103.303957},
		{lat: 20.688714, lng: -103.295694},
		{lat: 20.688145, lng: -103.294863},
		{lat: 20.687508, lng: -103.294539},
		{lat: 20.687405, lng: -103.294333},
		{lat: 20.687745, lng: -103.294080},
		{lat: 20.688529, lng: -103.293804},
		{lat: 20.691733, lng: -103.292681},
		{lat: 20.692821, lng: -103.292238},
		{lat: 20.692902, lng: -103.292040},
		{lat: 20.690823, lng: -103.285507},
		{lat: 20.689499, lng: -103.281316},
		{lat: 20.689060, lng: -103.279955},
		{lat: 20.688802, lng: -103.279561},
		{lat: 20.688381, lng: -103.278544},
		{lat: 20.688398, lng: -103.278512},
		{lat: 20.689442, lng: -103.278283},
		{lat: 20.689825, lng: -103.278263},
		{lat: 20.691121, lng: -103.278661},
		{lat: 20.691885, lng: -103.279204},
		{lat: 20.692537, lng: -103.279677},
		{lat: 20.693876, lng: -103.279991},
		{lat: 20.693784, lng: -103.277836},
		{lat: 20.693819, lng: -103.275802},
		{lat: 20.693830, lng: -103.274446},
		{lat: 20.693852, lng: -103.273935},
		{lat: 20.693991, lng: -103.272947},
		{lat: 20.693170, lng: -103.272918},
		{lat: 20.691716, lng: -103.272900},
		{lat: 20.691716, lng: -103.272900},
		{lat: 20.688878, lng: -103.272834},
		{lat: 20.687906, lng: -103.272617},
		{lat: 20.687868, lng: -103.272081},
		{lat: 20.686408, lng: -103.272307},
		{lat: 20.684543, lng: -103.272631},
		{lat: 20.683332, lng: -103.272785},
		{lat: 20.683275, lng: -103.272287},
		{lat: 20.683026, lng: -103.271589},
		{lat: 20.682839, lng: -103.271404},
		{lat: 20.682432, lng: -103.271968},
		{lat: 20.682178, lng: -103.272493},
		{lat: 20.681870, lng: -103.272660},
		{lat: 20.681234, lng: -103.272597},
		{lat: 20.680445, lng: -103.273029},
		{lat: 20.679970, lng: -103.273791},
		{lat: 20.678718, lng: -103.274195},
		{lat: 20.678481, lng: -103.274229},
		{lat: 20.675372, lng: -103.273583},
		{lat: 20.675037, lng: -103.274691},
		{lat: 20.674660, lng: -103.274781},
		{lat: 20.674166, lng: -103.274881},
		{lat: 20.673546, lng: -103.275017},
		{lat: 20.673094, lng: -103.275101}

	];
	
	var ruta_371_line = new google.maps.Polyline({
		path: ruta_371,
		geodesic: true,
		strokeColor: '#FF0000',
		strokeOpacity: 0.7,
		strokeWeight: 7
	});
	
	ruta_371_line.setMap(map);

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