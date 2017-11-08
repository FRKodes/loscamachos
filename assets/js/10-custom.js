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
		ruta_371_sol_line.setMap(null);
		ruta_165_line.setMap(null);
		ruta_165_la_normal_line.setMap(null);
		ruta_631a_line.setMap(null);
		ruta_54_line.setMap(null);
		ruta_171_line.setMap(null);
		ruta_275_b_line.setMap(null);
		ruta_275_b_bandera_line.setMap(null);

		var this_element_attr = $(this).attr('class');
		$('.routes-list li').removeClass('active');
		$('.routes-disclaimer span.ruta').addClass('hidden');
		$(this).parent().addClass('active');
		
		switch(route_line){
			case 'ruta_del_sol':
				ruta_371_sol_line.setMap(map);
				ruta_165_line.setMap(map);
				$('span.ruta_del_sol').removeClass('hidden');
			break;
			case 'ruta_alamo':
				ruta_171_line.setMap(map);
				ruta_54_line.setMap(map);
				ruta_165_line.setMap(map);
				$('span.ruta_alamo').removeClass('hidden');
			break;
			case 'ruta_basilica':
				ruta_631a_line.setMap(map);
				ruta_165_la_normal_line.setMap(map);
				$('span.ruta_basilica').removeClass('hidden');
			break;
			case 'ruta_catedral':
				ruta_275_b_line.setMap(map);
				ruta_165_line.setMap(map);
				$('span.ruta_catedral').removeClass('hidden');
			break;
			case 'ruta_16_sep':
				ruta_54_line.setMap(map);
				ruta_165_line.setMap(map);
				$('span.ruta_16_sep').removeClass('hidden');
			break;
			case 'ruta_bandera':
				ruta_275_b_bandera_line.setMap(map);
				ruta_165_line.setMap(map);
				$('span.ruta_bandera').removeClass('hidden');
			break;
			default:
				ruta_371_line.setMap(map);
				ruta_165_line.setMap(map);
				$('span.ruta_minerva').removeClass('hidden');
			break;
		}
	});

	var catedral_center = new google.maps.LatLng(20.676868, -103.347393);
	var peri_center = new google.maps.LatLng(20.728333, -103.344714);
	var transito_center = new google.maps.LatLng(20.705036, -103.347034);
	var gdl_center = new google.maps.LatLng(20.677746, -103.342142);
	var glorieta_colon_center = new google.maps.LatLng(20.695660, -103.373326);
	var minerva_center = new google.maps.LatLng(20.674415, -103.387345);
	var la_normal_center = new google.maps.LatLng(20.695069, -103.348273);
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
	var contentString_bandera = '<div id="content">Plaza de la bandera</div>';
	var contentString_alamo = '<div id="content">Glorieta del Álamo</div>';
	var contentString_catedral = '<div id="content">Catedral de Guadalajara</div>';
	var contentString_basilica = '<div id="content">Basílica de Zapopan</div>';
	var contentString_delsol = '<div id="content">Plaza del Sol</div>';

	var infowindow = new google.maps.InfoWindow({content: contentString });
	var infowindow_basilica = new google.maps.InfoWindow({content: contentString_basilica });
	var infowindow_catedral = new google.maps.InfoWindow({content: contentString_catedral });
	var infowindow_alamo = new google.maps.InfoWindow({content: contentString_alamo });
	var infowindow_bandera = new google.maps.InfoWindow({content: contentString_bandera });
	var infowindow_minerva = new google.maps.InfoWindow({content: contentString_minerva });
	var infowindow_patria = new google.maps.InfoWindow({content: contentString_patria });
	var infowindow_delsol = new google.maps.InfoWindow({content: contentString_delsol });

	
	var marker = new google.maps.Marker({position: {lat: 20.695230, lng: -103.348385}, map: map, title: 'La Normal'});
	var marker_bandera = new google.maps.Marker({position: {lat: 20.663681, lng: -103.333538}, map: map, title: 'Glorieta del Álamo'});
	var marker_alamo = new google.maps.Marker({position: {lat: 20.626844, lng: -103.320748}, map: map, title: 'Glorieta del Álamo'});
	var marker_catedral = new google.maps.Marker({position: {lat: 20.676868, lng: -103.347393}, map: map, title: 'Catedral GDL'});
	var marker_basilica = new google.maps.Marker({position: {lat: 20.721151, lng: -103.391902}, map: map, title: 'Catedral GDL'});
	var marker_minerva = new google.maps.Marker({position: {lat: 20.674388, lng: -103.387294}, map: map, title: 'La Minerva'});
	var marker_plaza_del_sol = new google.maps.Marker({position: {lat: 20.650992, lng: -103.401286}, map: map, title: 'Plaza del Sol'});
	var marker_plaza_patria = new google.maps.Marker({position: {lat: 20.712319, lng: -103.378369}, map: map, title: 'Plaza Patria'});
	
	marker.addListener('click', function() {infowindow.open(map, marker); });
	marker_plaza_del_sol.addListener('click', function() {infowindow_delsol.open(map, marker_plaza_del_sol); });
	marker_bandera.addListener('click', function() {infowindow_bandera.open(map, marker_bandera); });
	marker_basilica.addListener('click', function() {infowindow_basilica.open(map, marker_basilica); });
	marker_catedral.addListener('click', function() {infowindow_catedral.open(map, marker_catedral); });
	marker_alamo.addListener('click', function() {infowindow_alamo.open(map, marker_alamo); });
	marker_plaza_patria.addListener('click', function() {infowindow_patria.open(map, marker_plaza_patria); });
	marker_minerva.addListener('click', function() {infowindow_minerva.open(map, marker_minerva); });

	var void_route = [{lat: 20.755569, lng: -103.349817}];
	var ruta_54 = [{lat: 20.663781, lng: -103.349360}, {lat: 20.668290, lng: -103.347864}, {lat: 20.670005, lng: -103.347272}, {lat: 20.672863, lng: -103.347176}, {lat: 20.677401, lng: -103.347463}, {lat: 20.684457, lng: -103.347864}, {lat: 20.689120, lng: -103.348131}, {lat: 20.694336, lng: -103.348437}, {lat: 20.694690, lng: -103.347818}, {lat: 20.695451, lng: -103.347575}, {lat: 20.695999, lng: -103.348040}, {lat: 20.696631, lng: -103.348045}, {lat: 20.698714, lng: -103.347797}, {lat: 20.703163, lng: -103.347243}, {lat: 20.703415, lng: -103.347206}];
	var ruta_171 = [{lat: 20.627201, lng: -103.321050}, {lat: 20.643515, lng: -103.331502}, {lat: 20.651949, lng: -103.336887}, {lat: 20.659095, lng: -103.345537}, {lat: 20.662454, lng: -103.348687}, {lat: 20.662655, lng: -103.349718}, {lat: 20.662829, lng: -103.349718}, {lat: 20.663774, lng: -103.349341} ];
	var ruta_631a = [{lat: 20.720239, lng: -103.387627}, {lat: 20.719789, lng: -103.387670}, {lat: 20.719789, lng: -103.387557}, {lat: 20.719840, lng: -103.387270}, {lat: 20.719794, lng: -103.386984}, {lat: 20.718248, lng: -103.384542}, {lat: 20.715479, lng: -103.380232}, {lat: 20.712918, lng: -103.376213}, {lat: 20.712604, lng: -103.375754}, {lat: 20.711523, lng: -103.374014}, {lat: 20.707840, lng: -103.368326}, {lat: 20.705126, lng: -103.364113}, {lat: 20.703307, lng: -103.361261}, {lat: 20.702913, lng: -103.360521}, {lat: 20.701221, lng: -103.357993}, {lat: 20.699295, lng: -103.354984}, {lat: 20.697340, lng: -103.351884}, {lat: 20.695637, lng: -103.349264}, {lat: 20.695071, lng: -103.349312}, {lat: 20.694586, lng: -103.349080}, {lat: 20.694389, lng: -103.348540}, {lat: 20.694697, lng: -103.347838}, {lat: 20.695132, lng: -103.347605} ];
	var ruta_165 = [{lat: 20.703299, lng: -103.347174}, {lat: 20.715518, lng: -103.345767}, {lat: 20.719079, lng: -103.345384}, {lat: 20.725403, lng: -103.345384}, {lat: 20.727795, lng: -103.344816}, {lat: 20.735288, lng: -103.342202}, {lat: 20.736776, lng: -103.341974}, {lat: 20.738370, lng: -103.342599}, {lat: 20.742143, lng: -103.346066}, {lat: 20.743791, lng: -103.346407}, {lat: 20.745651, lng: -103.345782}, {lat: 20.747404, lng: -103.343679}, {lat: 20.748892, lng: -103.342770}, {lat: 20.750114, lng: -103.342940}, {lat: 20.751549, lng: -103.343565}, {lat: 20.753143, lng: -103.343452}, {lat: 20.755322, lng: -103.342940}, {lat: 20.757155, lng: -103.343139}, {lat: 20.758483, lng: -103.342599}, {lat: 20.759361, lng: -103.341728}, {lat: 20.760550, lng: -103.339964}, {lat: 20.761820, lng: -103.339386}, {lat: 20.764985, lng: -103.339770}, {lat: 20.766549, lng: -103.339680}, {lat: 20.768155, lng: -103.339815}, {lat: 20.769846, lng: -103.340403}, {lat: 20.770860, lng: -103.340177}, {lat: 20.771325, lng: -103.339318}, {lat: 20.771537, lng: -103.338052}, {lat: 20.772255, lng: -103.337284}, {lat: 20.773396, lng: -103.337645}, {lat: 20.774326, lng: -103.339001}, {lat: 20.775214, lng: -103.339454}, {lat: 20.776228, lng: -103.339725}, {lat: 20.776989, lng: -103.341171}, {lat: 20.777665, lng: -103.342075}, {lat: 20.778891, lng: -103.342482}, {lat: 20.780243, lng: -103.343477}, {lat: 20.780985, lng: -103.343873}, {lat: 20.781886, lng: -103.343900}, {lat: 20.782716, lng: -103.343986}, {lat: 20.783441, lng: -103.344401}, {lat: 20.784291, lng: -103.345009}, {lat: 20.784598, lng: -103.346226}, {lat: 20.784301, lng: -103.348051}, {lat: 20.784503, lng: -103.349229}, {lat: 20.785404, lng: -103.351447}, {lat: 20.786611, lng: -103.353520}, {lat: 20.787391, lng: -103.354053}, {lat: 20.788096, lng: -103.354144}, {lat: 20.788826, lng: -103.353773}, {lat: 20.789289, lng: -103.353127}, {lat: 20.790200, lng: -103.351286}, {lat: 20.791292, lng: -103.349256}, {lat: 20.792333, lng: -103.347222}, {lat: 20.793269, lng: -103.346096}, {lat: 20.795056, lng: -103.344460}, {lat: 20.795594, lng: -103.344126}, {lat: 20.796520, lng: -103.344094}, {lat: 20.797421, lng: -103.344622}, {lat: 20.798302, lng: -103.345079}, {lat: 20.799218, lng: -103.344971}, {lat: 20.799615, lng: -103.344783}, {lat: 20.800509, lng: -103.343828}, {lat: 20.800930, lng: -103.343605}, {lat: 20.802211, lng: -103.343037}, {lat: 20.803268, lng: -103.341980}, {lat: 20.803427, lng: -103.341656}, {lat: 20.803596, lng: -103.340642}, {lat: 20.803913, lng: -103.340319}, {lat: 20.804583, lng: -103.339936}, {lat: 20.805184, lng: -103.339416}, {lat: 20.805725, lng: -103.339257}, {lat: 20.806270, lng: -103.339400}, {lat: 20.807789, lng: -103.339894}, {lat: 20.808826, lng: -103.339809}, {lat: 20.809283, lng: -103.339612}, {lat: 20.810290, lng: -103.338943}, {lat: 20.810970, lng: -103.338168}, {lat: 20.811834, lng: -103.337818}, {lat: 20.812434, lng: -103.337680}, {lat: 20.813347, lng: -103.336937}, {lat: 20.813987, lng: -103.336517}, {lat: 20.814608, lng: -103.336560}, {lat: 20.815570, lng: -103.336501}, {lat: 20.816697, lng: -103.335365}, {lat: 20.817004, lng: -103.335227}, {lat: 20.817506, lng: -103.335466}, {lat: 20.817659, lng: -103.336034}, {lat: 20.817248, lng: -103.336815}, {lat: 20.817114, lng: -103.337340}, {lat: 20.817193, lng: -103.337765}, {lat: 20.817228, lng: -103.337845}];
	var ruta_165_la_normal = [{lat: 20.694377, lng: -103.348413}, {lat: 20.694503, lng: -103.348116}, {lat: 20.694973, lng: -103.347667}, {lat: 20.695438, lng: -103.347581}, {lat: 20.695781, lng: -103.347970}, {lat: 20.696170, lng: -103.348073}, {lat: 20.700506, lng: -103.347581}, {lat: 20.703299, lng: -103.347174}, {lat: 20.715518, lng: -103.345767}, {lat: 20.719079, lng: -103.345384}, {lat: 20.725403, lng: -103.345384}, {lat: 20.727795, lng: -103.344816}, {lat: 20.735288, lng: -103.342202}, {lat: 20.736776, lng: -103.341974}, {lat: 20.738370, lng: -103.342599}, {lat: 20.742143, lng: -103.346066}, {lat: 20.743791, lng: -103.346407}, {lat: 20.745651, lng: -103.345782}, {lat: 20.747404, lng: -103.343679}, {lat: 20.748892, lng: -103.342770}, {lat: 20.750114, lng: -103.342940}, {lat: 20.751549, lng: -103.343565}, {lat: 20.753143, lng: -103.343452}, {lat: 20.755322, lng: -103.342940}, {lat: 20.757155, lng: -103.343139}, {lat: 20.758483, lng: -103.342599}, {lat: 20.759361, lng: -103.341728}, {lat: 20.760550, lng: -103.339964}, {lat: 20.761820, lng: -103.339386}, {lat: 20.764985, lng: -103.339770}, {lat: 20.766549, lng: -103.339680}, {lat: 20.768155, lng: -103.339815}, {lat: 20.769846, lng: -103.340403}, {lat: 20.770860, lng: -103.340177}, {lat: 20.771325, lng: -103.339318}, {lat: 20.771537, lng: -103.338052}, {lat: 20.772255, lng: -103.337284}, {lat: 20.773396, lng: -103.337645}, {lat: 20.774326, lng: -103.339001}, {lat: 20.775214, lng: -103.339454}, {lat: 20.776228, lng: -103.339725}, {lat: 20.776989, lng: -103.341171}, {lat: 20.777665, lng: -103.342075}, {lat: 20.778891, lng: -103.342482}, {lat: 20.780243, lng: -103.343477}, {lat: 20.780985, lng: -103.343873}, {lat: 20.781886, lng: -103.343900}, {lat: 20.782716, lng: -103.343986}, {lat: 20.783441, lng: -103.344401}, {lat: 20.784291, lng: -103.345009}, {lat: 20.784598, lng: -103.346226}, {lat: 20.784301, lng: -103.348051}, {lat: 20.784503, lng: -103.349229}, {lat: 20.785404, lng: -103.351447}, {lat: 20.786611, lng: -103.353520}, {lat: 20.787391, lng: -103.354053}, {lat: 20.788096, lng: -103.354144}, {lat: 20.788826, lng: -103.353773}, {lat: 20.789289, lng: -103.353127}, {lat: 20.790200, lng: -103.351286}, {lat: 20.791292, lng: -103.349256}, {lat: 20.792333, lng: -103.347222}, {lat: 20.793269, lng: -103.346096}, {lat: 20.795056, lng: -103.344460}, {lat: 20.795594, lng: -103.344126}, {lat: 20.796520, lng: -103.344094}, {lat: 20.797421, lng: -103.344622}, {lat: 20.798302, lng: -103.345079}, {lat: 20.799218, lng: -103.344971}, {lat: 20.799615, lng: -103.344783}, {lat: 20.800509, lng: -103.343828}, {lat: 20.800930, lng: -103.343605}, {lat: 20.802211, lng: -103.343037}, {lat: 20.803268, lng: -103.341980}, {lat: 20.803427, lng: -103.341656}, {lat: 20.803596, lng: -103.340642}, {lat: 20.803913, lng: -103.340319}, {lat: 20.804583, lng: -103.339936}, {lat: 20.805184, lng: -103.339416}, {lat: 20.805725, lng: -103.339257}, {lat: 20.806270, lng: -103.339400}, {lat: 20.807789, lng: -103.339894}, {lat: 20.808826, lng: -103.339809}, {lat: 20.809283, lng: -103.339612}, {lat: 20.810290, lng: -103.338943}, {lat: 20.810970, lng: -103.338168}, {lat: 20.811834, lng: -103.337818}, {lat: 20.812434, lng: -103.337680}, {lat: 20.813347, lng: -103.336937}, {lat: 20.813987, lng: -103.336517}, {lat: 20.814608, lng: -103.336560}, {lat: 20.815570, lng: -103.336501}, {lat: 20.816697, lng: -103.335365}, {lat: 20.817004, lng: -103.335227}, {lat: 20.817506, lng: -103.335466}, {lat: 20.817659, lng: -103.336034}, {lat: 20.817248, lng: -103.336815}, {lat: 20.817114, lng: -103.337340}, {lat: 20.817193, lng: -103.337765}, {lat: 20.817228, lng: -103.337845}];
	var ruta_371 = [{lat: 20.674007, lng: -103.387449}, {lat: 20.674062, lng: -103.387085}, {lat: 20.674347, lng: -103.386850}, {lat: 20.674743, lng: -103.386979}, {lat: 20.679213, lng: -103.384115}, {lat: 20.679279, lng: -103.383856}, {lat: 20.679609, lng: -103.383669}, {lat: 20.679784, lng: -103.383727}, {lat: 20.690340, lng: -103.376706}, {lat: 20.695370, lng: -103.373360}, {lat: 20.696468, lng: -103.372445}, {lat: 20.697742, lng: -103.370590}, {lat: 20.700312, lng: -103.367490}, {lat: 20.704881, lng: -103.364132}, {lat: 20.705974, lng: -103.363404}, {lat: 20.706314, lng: -103.362348}, {lat: 20.706517, lng: -103.361297}, {lat: 20.707171, lng: -103.360446}, {lat: 20.707511, lng: -103.359512}, {lat: 20.707341, lng: -103.357922}, {lat: 20.706841, lng: -103.354364}, {lat: 20.706237, lng: -103.349856}, {lat: 20.705512, lng: -103.348259}, {lat: 20.704678, lng: -103.347343}, {lat: 20.704678, lng: -103.346592}, {lat: 20.704480, lng: -103.345982}, {lat: 20.704253, lng: -103.345589}];	
	var ruta_371_sol = [{lat: 20.651014, lng: -103.402731}, {lat: 20.652731, lng: -103.401615}, {lat: 20.659196, lng: -103.397334}, {lat: 20.663162, lng: -103.394695}, {lat: 20.665932, lng: -103.392893}, {lat: 20.666011, lng: -103.392286}, {lat: 20.666584, lng: -103.392017}, {lat: 20.666895, lng: -103.392223}, {lat: 20.670525, lng: -103.389821}, {lat: 20.673246, lng: -103.388000}, {lat: 20.673775, lng: -103.387640}, {lat: 20.674007, lng: -103.387449}, {lat: 20.674062, lng: -103.387085}, {lat: 20.674347, lng: -103.386850}, {lat: 20.674743, lng: -103.386979}, {lat: 20.679213, lng: -103.384115}, {lat: 20.679279, lng: -103.383856}, {lat: 20.679609, lng: -103.383669}, {lat: 20.679784, lng: -103.383727}, {lat: 20.690340, lng: -103.376706}, {lat: 20.695370, lng: -103.373360}, {lat: 20.696468, lng: -103.372445}, {lat: 20.697742, lng: -103.370590}, {lat: 20.700312, lng: -103.367490}, {lat: 20.704881, lng: -103.364132}, {lat: 20.705974, lng: -103.363404}, {lat: 20.706314, lng: -103.362348}, {lat: 20.706517, lng: -103.361297}, {lat: 20.707171, lng: -103.360446}, {lat: 20.707511, lng: -103.359512}, {lat: 20.707341, lng: -103.357922}, {lat: 20.706841, lng: -103.354364}, {lat: 20.706237, lng: -103.349856}, {lat: 20.705512, lng: -103.348259}, {lat: 20.704678, lng: -103.347343}, {lat: 20.704678, lng: -103.346592}, {lat: 20.704480, lng: -103.345982}, {lat: 20.704253, lng: -103.345589}];	
	var ruta_275_b = [{lat: 20.703352, lng: -103.347233}, {lat: 20.696375, lng: -103.348279}, {lat: 20.694378, lng: -103.348505}, {lat: 20.682096, lng: -103.347762}, {lat:20.676675, lng: -103.347398}];
	var ruta_275_b_bandera = [{lat: 20.703352, lng: -103.347233}, {lat: 20.696375, lng: -103.348279}, {lat: 20.694378, lng: -103.348505}, {lat: 20.682096, lng: -103.347762}, {lat: 20.675168, lng: -103.347277}, {lat: 20.671689, lng: -103.347180}, {lat: 20.671720, lng: -103.346326}, {lat: 20.670760, lng: -103.344350}, {lat: 20.670479, lng: -103.343966}, {lat: 20.669023, lng: -103.340366}, {lat: 20.667430, lng: -103.335965}, {lat: 20.666966, lng: -103.335021}, {lat: 20.665320, lng: -103.333052}, {lat: 20.663505, lng: -103.333443}];
	var ruta_275_b_old = [{lat: 20.755569, lng: -103.349817}, {lat: 20.754911, lng: -103.346666}, {lat: 20.751924, lng: -103.347339}, {lat: 20.750136, lng: -103.344304}, {lat: 20.749825, lng: -103.342966}, {lat: 20.748853, lng: -103.342827}, {lat: 20.747483, lng: -103.343458}, {lat: 20.745924, lng: -103.345480}, {lat: 20.744655, lng: -103.346246}, {lat: 20.743537, lng: -103.346451}, {lat: 20.742043, lng: -103.345970}, {lat: 20.741069, lng: -103.345186}, {lat: 20.738879, lng: -103.343015}, {lat: 20.737450, lng: -103.342091}, {lat: 20.736484, lng: -103.341943}, {lat: 20.735976, lng: -103.341991}, {lat: 20.733146, lng: -103.342925}, {lat: 20.729786, lng: -103.344036}, {lat: 20.729012, lng: -103.344422}, {lat: 20.726975, lng: -103.345005}, {lat: 20.725355, lng: -103.345365}, {lat: 20.720608, lng: -103.345399}, {lat: 20.717015, lng: -103.345656}, {lat: 20.708577, lng: -103.346685}, {lat: 20.696375, lng: -103.348279}, {lat: 20.694378, lng: -103.348505}, {lat: 20.682096, lng: -103.347762}, {lat: 20.675168, lng: -103.347277}, {lat: 20.671689, lng: -103.347180}, {lat: 20.671720, lng: -103.346326}, {lat: 20.670760, lng: -103.344350}, {lat: 20.670479, lng: -103.343966}, {lat: 20.669023, lng: -103.340366}, {lat: 20.667430, lng: -103.335965}, {lat: 20.666966, lng: -103.335021}, {lat: 20.665320, lng: -103.333052}, {lat: 20.663505, lng: -103.333443}, {lat: 20.653223, lng: -103.325806}, {lat: 20.647005, lng: -103.321176}, {lat: 20.640491, lng: -103.316425}, {lat: 20.637734, lng: -103.316711}, {lat: 20.636566, lng: -103.316963}, {lat: 20.634945, lng: -103.317282}, {lat: 20.632969, lng: -103.318118}, {lat: 20.631090, lng: -103.312862}, {lat: 20.630500, lng: -103.311019}, {lat: 20.632509, lng: -103.310940}, {lat: 20.632492, lng: -103.310601}, {lat: 20.632531, lng: -103.309637}, {lat: 20.632480, lng: -103.309400}, {lat: 20.632168, lng: -103.308345}, {lat: 20.632049, lng: -103.307127}, {lat: 20.631629, lng: -103.303561}, {lat: 20.631039, lng: -103.298668}, {lat: 20.631028, lng: -103.297977}, {lat: 20.632083, lng: -103.296231}, {lat: 20.630812, lng: -103.295358}, {lat: 20.628957, lng: -103.294533}, {lat: 20.628122, lng: -103.293684}, {lat: 20.627180, lng: -103.292854}, {lat: 20.622757, lng: -103.289840}, {lat: 20.618791, lng: -103.287172}, {lat: 20.615011, lng: -103.284523}, {lat: 20.613184, lng: -103.285566}, {lat: 20.610375, lng: -103.285935}, {lat: 20.607565, lng: -103.286966}, {lat: 20.606680, lng: -103.287269}, {lat: 20.605301, lng: -103.287488}, {lat: 20.605670, lng: -103.289488}, {lat: 20.603178, lng: -103.289313}, {lat: 20.601788, lng: -103.289094}, {lat: 20.601351, lng: -103.287651}, {lat: 20.601033, lng: -103.287457}, {lat: 20.600579, lng: -103.287597}, {lat: 20.600210, lng: -103.288100}, {lat: 20.599972, lng: -103.288621}, {lat: 20.599801, lng: -103.288543}, {lat: 20.599631, lng: -103.285305}, {lat: 20.599518, lng: -103.282813}, {lat: 20.598672, lng: -103.282989}, {lat: 20.595511, lng: -103.283474}, {lat: 20.590221, lng: -103.283850}, {lat: 20.584660, lng: -103.284240}, {lat: 20.582134, lng: -103.284385}, {lat: 20.579864, lng: -103.284233}, {lat: 20.574630, lng: -103.283639}, {lat: 20.572235, lng: -103.283348}, {lat: 20.568852, lng: -103.283197}, {lat: 20.563737, lng: -103.283003}, {lat: 20.562451, lng: -103.283034}, {lat: 20.562201, lng: -103.283377}, {lat: 20.561817, lng: -103.283423}, {lat: 20.557804, lng: -103.281500}, {lat: 20.556354, lng: -103.279565}, {lat: 20.555759, lng: -103.280102}, {lat: 20.555743, lng: -103.280321}, {lat: 20.555186, lng: -103.280743}, {lat: 20.553304, lng: -103.281170}, {lat: 20.551276, lng: -103.281615}, {lat: 20.551135, lng: -103.280985}, {lat: 20.548615, lng: -103.281875}, {lat: 20.547236, lng: -103.282412}, {lat: 20.544953, lng: -103.283244}, {lat: 20.543953, lng: -103.283567}, {lat: 20.544504, lng: -103.285566}, {lat: 20.545115, lng: -103.288038}];
	
	var ruta_371_sol_line = new google.maps.Polyline({
		path: ruta_371_sol,
		geodesic: true,
		strokeColor: '#0000FF',
		strokeOpacity: 0.7,
		strokeWeight: 7
	});

	var ruta_371_line = new google.maps.Polyline({
		path: ruta_371,
		geodesic: true,
		strokeColor: '#FF0000',
		strokeOpacity: 0.7,
		strokeWeight: 7
	});
	
	ruta_371_line.setMap(map);
	
	var ruta_165_la_normal_line = new google.maps.Polyline({
		path: ruta_165_la_normal,
		geodesic: true,
		strokeColor: '#FF00FF',
		strokeOpacity: 0.7,
		strokeWeight: 7
	});

	var ruta_165_line = new google.maps.Polyline({
		path: ruta_165,
		geodesic: true,
		strokeColor: '#FF00FF',
		strokeOpacity: 0.7,
		strokeWeight: 7
	});
	ruta_165_line.setMap(map);

	var ruta_275_b_line = new google.maps.Polyline({
			path: ruta_275_b,
			geodesic: true,
			strokeColor: '#0000CC',
			strokeOpacity: 0.9,
			strokeWeight: 7
		});
	
	var ruta_275_b_bandera_line = new google.maps.Polyline({
			path: ruta_275_b_bandera,
			geodesic: true,
			strokeColor: '#BB0000',
			strokeOpacity: 0.7,
			strokeWeight: 7
		});
	
	var ruta_631a_line = new google.maps.Polyline({
			path: ruta_631a,
			geodesic: true,
			strokeColor: '#000000',
			strokeOpacity: 0.7,
			strokeWeight: 7
		});
	
	var ruta_171_line = new google.maps.Polyline({
			path: ruta_171,
			geodesic: true,
			strokeColor: '#FF00CC',
			strokeOpacity: 0.7,
			strokeWeight: 7
		});
	var ruta_54_line = new google.maps.Polyline({
			path: ruta_54,
			geodesic: true,
			strokeColor: '#000000',
			strokeOpacity: 0.7,
			strokeWeight: 7
		});

	console.log('--> ' + window.location.hash);

	var full_url = window.location.hash;
	full_url = full_url.split("#maps-container-");
	if (full_url[1] !== undefined) {
		
		ruta_371_line.setMap(null);
		ruta_371_sol_line.setMap(null);
		ruta_165_line.setMap(null);
		ruta_165_la_normal_line.setMap(null);
		ruta_631a_line.setMap(null);
		ruta_54_line.setMap(null);
		ruta_171_line.setMap(null);
		ruta_275_b_line.setMap(null);
		ruta_275_b_bandera_line.setMap(null);
		$('.routes-disclaimer span.ruta').addClass('hidden');

		$('.routes-list li').removeClass('active');
		map.zoom = 13;
		switch(full_url[1]){
			case 'minerva':
				map.center = la_normal_center;
				ruta_371_line.setMap(map);
				ruta_165_line.setMap(map);
				$('.route-minerva').parent().addClass('active');
				$('span.ruta_minerva').removeClass('hidden');
			break;
			case 'del-sol':
				map.center = glorieta_colon_center;
				ruta_371_sol_line.setMap(map);
				ruta_165_line.setMap(map);
				$('.route-del-sol').parent().addClass('active');
				$('span.ruta_del_sol').removeClass('hidden');
			break;
			case 'bandera':
				map.center = transito_center;
				ruta_275_b_bandera_line.setMap(map);
				ruta_165_line.setMap(map);
				$('.route-bandera').parent().addClass('active');
				$('span.ruta_bandera').removeClass('hidden');
			break;
			case 'basilica':
				map.center = peri_center;
				ruta_631a_line.setMap(map);
				ruta_165_la_normal_line.setMap(map);
				$('.route-basilica').parent().addClass('active');
				$('span.ruta_basilica').removeClass('hidden');
			break;
			case 'alamo':
				map.center = catedral_center;
				ruta_171_line.setMap(map);
				ruta_54_line.setMap(map);
				ruta_165_line.setMap(map);
				$('.route-alamo').parent().addClass('active');
				$('span.ruta_alamo').removeClass('hidden');
			break;
			case 'catedral':
				map.center = peri_center;
				ruta_275_b_line.setMap(map);
				ruta_165_line.setMap(map);
				$('.route-catedral').parent().addClass('active');
				$('span.ruta_catedral').removeClass('hidden');
			break;
			case 'centro-16-sep':
				map.center = peri_center;
				ruta_54_line.setMap(map);
				ruta_165_line.setMap(map);
				$('.route-16-sep').parent().addClass('active');
				$('span.ruta_16_sep').removeClass('hidden');
			break;
			case 'patria':
				map.center = patria_center;
				ruta_371_sol_line.setMap(map);
				ruta_165_line.setMap(map);
				$('.route-del-sol').parent().addClass('active');
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
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
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