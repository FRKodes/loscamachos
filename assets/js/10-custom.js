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

	$('.inner-routes-list a, .routes-list a').on('click', function () {
		var route_line = $(this).attr('route-line');
		console.log(route_line);
		ruta_371_line.setMap(null);
		ruta_275_b_line.setMap(null);
		ruta_622_line.setMap(null);
		ruta_24_line.setMap(null);
		ruta_647_line.setMap(null);
		ruta_63_line.setMap(null);

		var this_element_attr = $(this).attr('class');
		$('.routes-list li').removeClass('active');
		$(this).parent().addClass('active');
		
		switch(route_line){
			case 'ruta_371':
				ruta_371_line.setMap(map);
			break;
			case 'ruta_275':
				ruta_275_b_line.setMap(map);
			break;
			case 'ruta_647':
				ruta_647_line.setMap(map);
			break;
			case 'ruta_622':
				ruta_622_line.setMap(map);
			break;
			case 'ruta_63':
				ruta_63_line.setMap(map);
			break;
			case 'ruta_24':
				ruta_24_line.setMap(map);
			break;
			default:
				ruta_371_line.setMap(map);
			break;
		}
	});

	var gdl_center = new google.maps.LatLng(20.677746, -103.342142);
	var minerva_center = new google.maps.LatLng(20.674415, -103.387345);
	var del_sol_center = new google.maps.LatLng(20.650330, -103.402100);
	var patria_center = new google.maps.LatLng(20.712383, -103.378166);


	var map = new google.maps.Map(document.getElementById('map0'), {
		zoom: 13,
		center: gdl_center,
		mapTypeControl: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var contentString = '<div id="content">La Normal</div>';
	var contentString_minerva = '<div id="content">La Minerva</div>';
	var contentString_patria = '<div id="content">Plaza Patria</div>';
	var contentString_delsol = '<div id="content">Plaza del Sol</div>';

	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	var infowindow_minerva = new google.maps.InfoWindow({
		content: contentString_minerva
	});

	var infowindow_patria = new google.maps.InfoWindow({
		content: contentString_patria
	});

	var infowindow_delsol = new google.maps.InfoWindow({
		content: contentString_delsol
	});

	var marker = new google.maps.Marker({
		position: {lat: 20.695230, lng: -103.348385},
		map: map,
		title: 'La Normal'
	});

	var marker_minerva = new google.maps.Marker({
		position: {lat: 20.674388, lng: -103.387294},
		map: map,
		title: 'La Minerva'
	});

	var marker_plaza_del_sol = new google.maps.Marker({
		position: {lat: 20.650992, lng: -103.401286},
		map: map,
		title: 'Plaza del Sol'
	});

	var marker_plaza_patria = new google.maps.Marker({
		position: {lat: 20.712319, lng: -103.378369},
		map: map,
		title: 'Plaza Patria'
	});

	marker.addListener('click', function() {
		infowindow.open(map, marker);
	});

	marker_plaza_del_sol.addListener('click', function() {
		infowindow_delsol.open(map, marker_plaza_del_sol);
	});

	marker_plaza_patria.addListener('click', function() {
		infowindow_patria.open(map, marker_plaza_patria);
	});

	marker_minerva.addListener('click', function() {
		infowindow_minerva.open(map, marker_minerva);
	});

	var void_route = [{lat: 20.755569, lng: -103.349817}];
	var ruta_371 = [{lat: 20.672358, lng: -103.275316}, {lat: 20.665347, lng: -103.276701}, {lat: 20.660536, lng: -103.277339}, {lat: 20.660059, lng: -103.277613}, {lat: 20.660434, lng: -103.278506}, {lat: 20.661679, lng: -103.280202}, {lat: 20.662669, lng: -103.287057}, {lat: 20.662652, lng: -103.288771}, {lat: 20.663999, lng: -103.298179}, {lat: 20.652040, lng: -103.300111}, {lat: 20.651539, lng: -103.300255}, {lat: 20.651000, lng: -103.300885}, {lat: 20.649175, lng: -103.304471}, {lat: 20.646779, lng: -103.303137}, {lat: 20.645536, lng: -103.302666}, {lat: 20.644355, lng: -103.305109}, {lat: 20.644320, lng: -103.306198}, {lat: 20.645942, lng: -103.310886}, {lat: 20.644541, lng: -103.313708}, {lat: 20.643824, lng: -103.314494}, {lat: 20.640483, lng: -103.316436}, {lat: 20.638391, lng: -103.316663}, {lat: 20.635599, lng: -103.317118}, {lat: 20.632969, lng: -103.318122}, {lat: 20.628912, lng: -103.319871}, {lat: 20.629696, lng: -103.321986}, {lat: 20.629164, lng: -103.322435}, {lat: 20.627129, lng: -103.323941}, {lat: 20.627007, lng: -103.323482}, {lat: 20.626905, lng: -103.323253}, {lat: 20.626970, lng: -103.322984}, {lat: 20.626830, lng: -103.322016}, {lat: 20.626671, lng: -103.321647}, {lat: 20.626316, lng: -103.321567}, {lat: 20.625840, lng: -103.321786}, {lat: 20.625131, lng: -103.322385}, {lat: 20.624767, lng: -103.322984}, {lat: 20.625185, lng: -103.326812}, {lat: 20.625452, lng: -103.327609}, {lat: 20.629748, lng: -103.334265}, {lat: 20.630442, lng: -103.334866}, {lat: 20.630553, lng: -103.335128}, {lat: 20.630039, lng: -103.335575}, {lat: 20.629038, lng: -103.347375}, {lat: 20.628406, lng: -103.348716}, {lat: 20.632141, lng: -103.358905}, {lat: 20.634993, lng: -103.366477}, {lat: 20.638778, lng: -103.376434}, {lat: 20.641111, lng: -103.389580}, {lat: 20.641619, lng: -103.390770}, {lat: 20.642322, lng: -103.395134}, {lat: 20.642382, lng: -103.395637}, {lat: 20.642292, lng: -103.396141}, {lat: 20.641926, lng: -103.396828}, {lat: 20.641859, lng: -103.397675}, {lat: 20.642322, lng: -103.398738}, {lat: 20.643452, lng: -103.400600}, {lat: 20.645037, lng: -103.399601}, {lat: 20.645867, lng: -103.399569}, {lat: 20.648278, lng: -103.401068}, {lat: 20.649246, lng: -103.401777}, {lat: 20.647704, lng: -103.404500}, {lat: 20.647763, lng: -103.404906}, {lat: 20.656307, lng: -103.399300}, {lat: 20.664559, lng: -103.393808}, {lat: 20.665904, lng: -103.392911}, {lat: 20.665903, lng: -103.392607}, {lat: 20.666098, lng: -103.392180}, {lat: 20.666570, lng: -103.392063}, {lat: 20.666933, lng: -103.392192}, {lat: 20.673787, lng: -103.387649}, {lat: 20.674007, lng: -103.387449}, {lat: 20.674062, lng: -103.387085}, {lat: 20.674347, lng: -103.386850}, {lat: 20.674743, lng: -103.386979}, {lat: 20.679213, lng: -103.384115}, {lat: 20.679279, lng: -103.383856}, {lat: 20.679609, lng: -103.383669}, {lat: 20.679784, lng: -103.383727}, {lat: 20.690340, lng: -103.376706}, {lat: 20.695370, lng: -103.373360}, {lat: 20.696468, lng: -103.372445}, {lat: 20.697742, lng: -103.370590}, {lat: 20.700312, lng: -103.367490}, {lat: 20.704881, lng: -103.364132}, {lat: 20.705974, lng: -103.363404}, {lat: 20.706314, lng: -103.362348}, {lat: 20.706517, lng: -103.361297}, {lat: 20.707171, lng: -103.360446}, {lat: 20.707511, lng: -103.359512}, {lat: 20.707341, lng: -103.357922}, {lat: 20.706841, lng: -103.354364}, {lat: 20.706237, lng: -103.349856}, {lat: 20.705512, lng: -103.348259}, {lat: 20.704678, lng: -103.347343}, {lat: 20.704678, lng: -103.346592}, {lat: 20.704480, lng: -103.345982}, {lat: 20.699911, lng: -103.336026}, {lat: 20.697144, lng: -103.329968}, {lat: 20.693805, lng: -103.323088}, {lat: 20.692147, lng: -103.312538}, {lat: 20.690467, lng: -103.303957}, {lat: 20.688714, lng: -103.295694}, {lat: 20.688145, lng: -103.294863}, {lat: 20.687508, lng: -103.294539}, {lat: 20.687405, lng: -103.294333}, {lat: 20.687745, lng: -103.294080}, {lat: 20.688529, lng: -103.293804}, {lat: 20.691733, lng: -103.292681}, {lat: 20.692821, lng: -103.292238}, {lat: 20.692902, lng: -103.292040}, {lat: 20.690823, lng: -103.285507}, {lat: 20.689499, lng: -103.281316}, {lat: 20.689060, lng: -103.279955}, {lat: 20.688802, lng: -103.279561}, {lat: 20.688381, lng: -103.278544}, {lat: 20.688398, lng: -103.278512}, {lat: 20.689442, lng: -103.278283}, {lat: 20.689825, lng: -103.278263}, {lat: 20.691121, lng: -103.278661}, {lat: 20.691885, lng: -103.279204}, {lat: 20.692537, lng: -103.279677}, {lat: 20.693876, lng: -103.279991}, {lat: 20.693784, lng: -103.277836}, {lat: 20.693819, lng: -103.275802}, {lat: 20.693830, lng: -103.274446}, {lat: 20.693852, lng: -103.273935}, {lat: 20.693991, lng: -103.272947}, {lat: 20.693170, lng: -103.272918}, {lat: 20.691716, lng: -103.272900}, {lat: 20.691716, lng: -103.272900}, {lat: 20.688878, lng: -103.272834}, {lat: 20.687906, lng: -103.272617}, {lat: 20.687868, lng: -103.272081}, {lat: 20.686408, lng: -103.272307}, {lat: 20.684543, lng: -103.272631}, {lat: 20.683332, lng: -103.272785}, {lat: 20.683275, lng: -103.272287}, {lat: 20.683026, lng: -103.271589}, {lat: 20.682839, lng: -103.271404}, {lat: 20.682432, lng: -103.271968}, {lat: 20.682178, lng: -103.272493}, {lat: 20.681870, lng: -103.272660}, {lat: 20.681234, lng: -103.272597}, {lat: 20.680445, lng: -103.273029}, {lat: 20.679970, lng: -103.273791}, {lat: 20.678718, lng: -103.274195}, {lat: 20.678481, lng: -103.274229}, {lat: 20.675372, lng: -103.273583}, {lat: 20.675037, lng: -103.274691}, {lat: 20.674660, lng: -103.274781}, {lat: 20.674166, lng: -103.274881}, {lat: 20.673546, lng: -103.275017}, {lat: 20.673094, lng: -103.275101}];
	var ruta_275_b = [{lat: 20.755569, lng: -103.349817}, {lat: 20.754911, lng: -103.346666}, {lat: 20.751924, lng: -103.347339}, {lat: 20.750136, lng: -103.344304}, {lat: 20.749825, lng: -103.342966}, {lat: 20.748853, lng: -103.342827}, {lat: 20.747483, lng: -103.343458}, {lat: 20.745924, lng: -103.345480}, {lat: 20.744655, lng: -103.346246}, {lat: 20.743537, lng: -103.346451}, {lat: 20.742043, lng: -103.345970}, {lat: 20.741069, lng: -103.345186}, {lat: 20.738879, lng: -103.343015}, {lat: 20.737450, lng: -103.342091}, {lat: 20.736484, lng: -103.341943}, {lat: 20.735976, lng: -103.341991}, {lat: 20.733146, lng: -103.342925}, {lat: 20.729786, lng: -103.344036}, {lat: 20.729012, lng: -103.344422}, {lat: 20.726975, lng: -103.345005}, {lat: 20.725355, lng: -103.345365}, {lat: 20.720608, lng: -103.345399}, {lat: 20.717015, lng: -103.345656}, {lat: 20.708577, lng: -103.346685}, {lat: 20.696375, lng: -103.348279}, {lat: 20.694378, lng: -103.348505}, {lat: 20.682096, lng: -103.347762}, {lat: 20.675168, lng: -103.347277}, {lat: 20.671689, lng: -103.347180}, {lat: 20.671720, lng: -103.346326}, {lat: 20.670760, lng: -103.344350}, {lat: 20.670479, lng: -103.343966}, {lat: 20.669023, lng: -103.340366}, {lat: 20.667430, lng: -103.335965}, {lat: 20.666966, lng: -103.335021}, {lat: 20.665320, lng: -103.333052}, {lat: 20.663505, lng: -103.333443}, {lat: 20.653223, lng: -103.325806}, {lat: 20.647005, lng: -103.321176}, {lat: 20.640491, lng: -103.316425}, {lat: 20.637734, lng: -103.316711}, {lat: 20.636566, lng: -103.316963}, {lat: 20.634945, lng: -103.317282}, {lat: 20.632969, lng: -103.318118}, {lat: 20.631090, lng: -103.312862}, {lat: 20.630500, lng: -103.311019}, {lat: 20.632509, lng: -103.310940}, {lat: 20.632492, lng: -103.310601}, {lat: 20.632531, lng: -103.309637}, {lat: 20.632480, lng: -103.309400}, {lat: 20.632168, lng: -103.308345}, {lat: 20.632049, lng: -103.307127}, {lat: 20.631629, lng: -103.303561}, {lat: 20.631039, lng: -103.298668}, {lat: 20.631028, lng: -103.297977}, {lat: 20.632083, lng: -103.296231}, {lat: 20.630812, lng: -103.295358}, {lat: 20.628957, lng: -103.294533}, {lat: 20.628122, lng: -103.293684}, {lat: 20.627180, lng: -103.292854}, {lat: 20.622757, lng: -103.289840}, {lat: 20.618791, lng: -103.287172}, {lat: 20.615011, lng: -103.284523}, {lat: 20.613184, lng: -103.285566}, {lat: 20.610375, lng: -103.285935}, {lat: 20.607565, lng: -103.286966}, {lat: 20.606680, lng: -103.287269}, {lat: 20.605301, lng: -103.287488}, {lat: 20.605670, lng: -103.289488}, {lat: 20.603178, lng: -103.289313}, {lat: 20.601788, lng: -103.289094}, {lat: 20.601351, lng: -103.287651}, {lat: 20.601033, lng: -103.287457}, {lat: 20.600579, lng: -103.287597}, {lat: 20.600210, lng: -103.288100}, {lat: 20.599972, lng: -103.288621}, {lat: 20.599801, lng: -103.288543}, {lat: 20.599631, lng: -103.285305}, {lat: 20.599518, lng: -103.282813}, {lat: 20.598672, lng: -103.282989}, {lat: 20.595511, lng: -103.283474}, {lat: 20.590221, lng: -103.283850}, {lat: 20.584660, lng: -103.284240}, {lat: 20.582134, lng: -103.284385}, {lat: 20.579864, lng: -103.284233}, {lat: 20.574630, lng: -103.283639}, {lat: 20.572235, lng: -103.283348}, {lat: 20.568852, lng: -103.283197}, {lat: 20.563737, lng: -103.283003}, {lat: 20.562451, lng: -103.283034}, {lat: 20.562201, lng: -103.283377}, {lat: 20.561817, lng: -103.283423}, {lat: 20.557804, lng: -103.281500}, {lat: 20.556354, lng: -103.279565}, {lat: 20.555759, lng: -103.280102}, {lat: 20.555743, lng: -103.280321}, {lat: 20.555186, lng: -103.280743}, {lat: 20.553304, lng: -103.281170}, {lat: 20.551276, lng: -103.281615}, {lat: 20.551135, lng: -103.280985}, {lat: 20.548615, lng: -103.281875}, {lat: 20.547236, lng: -103.282412}, {lat: 20.544953, lng: -103.283244}, {lat: 20.543953, lng: -103.283567}, {lat: 20.544504, lng: -103.285566}, {lat: 20.545115, lng: -103.288038}];
	var ruta_647 = [
		{lat: 20.736333, lng: -103.358345},
		{lat: 20.556451, lng: -103.347255}
		];
	var ruta_622 = [
		{lat: 20.669594, lng: -103.452610},
		{lat: 20.639154, lng: -103.247075}
		];
	var ruta_63 = [
		{lat: 20.721466, lng: -103.436345},
		{lat: 20.627391, lng: -103.204932}
		];
	var ruta_24 = [
		{lat: 20.733285, lng: -103.433979},
		{lat: 20.581655, lng: -103.335102}
		];
	
	
	
	var ruta_371_line = new google.maps.Polyline({
		path: ruta_371,
		geodesic: true,
		strokeColor: '#FF0000',
		strokeOpacity: 0.7,
		strokeWeight: 7
	});
	ruta_371_line.setMap(map);

	var ruta_275_b_line = new google.maps.Polyline({
			path: ruta_275_b,
			geodesic: true,
			strokeColor: '#FF00AA',
			strokeOpacity: 0.7,
			strokeWeight: 7
		});
	
	var ruta_647_line = new google.maps.Polyline({
			path: ruta_647,
			geodesic: true,
			strokeColor: '#FF00CC',
			strokeOpacity: 0.7,
			strokeWeight: 7
		});
	var ruta_622_line = new google.maps.Polyline({
			path: ruta_622,
			geodesic: true,
			strokeColor: '#FF00BB',
			strokeOpacity: 0.7,
			strokeWeight: 7
		});

	var ruta_63_line = new google.maps.Polyline({
			path: ruta_63,
			geodesic: true,
			strokeColor: '#000000',
			strokeOpacity: 0.7,
			strokeWeight: 7
		});

	var ruta_24_line = new google.maps.Polyline({
			path: ruta_24,
			geodesic: true,
			strokeColor: '#FF00FF',
			strokeOpacity: 0.7,
			strokeWeight: 7
		});

	console.log('--> ' + window.location.hash);

	var full_url = window.location.hash;
	full_url = full_url.split("#maps-container-");
	if (full_url[1] !== undefined) {
		map.zoom = 16;
		switch(full_url[1]){
			case 'minerva':
				map.center = minerva_center;
			break;
			case 'del-sol':
				map.center = del_sol_center;
			break;
			case 'patria':
				map.center = patria_center;
			break;
			default:
					map.center = gdl_center;
			break;
		}
	}

}




(function($) {

	var $fb = {
		delay: 125,
		overlay: $(".fb-overlay"),
		widget: $(".fb-widget"),
		button: $(".fb-button")
	};
	setTimeout(function() {
		$("div.fb-livechat").fadeIn();
	}, $fb.delay * 8);
	$(".ctrlq").on('click', function(e) {
		e.preventDefault();
		if ($fb.overlay.is(":visible")) {
			$fb.overlay.fadeOut($fb.delay);
			$fb.widget.stop().animate({
				bottom: 0,
				opacity: 0
			}, $fb.delay * 2, function() {
				$(this).hide('slow');
				$fb.button.show();
			});
		} else {
			$fb.button.fadeOut('medium', function() {
				$fb.widget.stop().show().animate({
					bottom: "30px",
					opacity: 1
				}, $fb.delay * 2);
				$fb.overlay.fadeIn($fb.delay);
			});
		}
	});

	$('.ver-mas-rutas').on('click', function () {
		console.log('clicked!!');
		$('.inner-routes-list-container').toggleClass('opened');
	});

	$('.inner-routes-list a, .routes-list a').on('click', function () {
		var this_element_attr = $(this).attr('class');
		// $('.routes-list li').removeClass('active');
		// $(this).parent().addClass('active');
		// $('.map').hide();
		// $('.' + this_element_attr).show();
		// $('.inner-routes-list-container').removeClass('opened');
		

		// $.getJSON("callback=initMap",
		//     function(json) {
		//         console.log(json);              
		//         userLat = (json.latitude);
		//         userLng = (json.longitude);
		//         var newPos = new google.maps.LatLng(userLat, userLng);
		//         map.setOptions({
		//             center: newPos
		//         });
		//     }
		// );
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