<div class="container-fluid">
	<div class="row">
		<div class="main-banner-home contacto">
			
			<h1 class="text-center paytone banner-title">
				CONTÁCTANOS<br>
				<span class="roboto">CON GUSTO TE ATENDEMOS</span>
			</h1>

		</div>
	</div>
</div>


<div class="maps-container container" id="maps-container">
	<div class="row" id="maps-container-minerva">
		<div class="maps-left hidden d-md-block col-md-3" id="maps-container-basilica">
			<p class="mayus amarillo-00 paytone text-center routes-title" id="maps-container-del-sol">rutas</p>
			<ul class="routes-list" id="maps-container-alamo">
				<li class="active" id="maps-container-catedral"><a class="route-minerva" route-line="ruta_minerva" href="#show-route">LA MINERVA</a></li>
				<li id="maps-container-centro-16-sep"><a class="mayus route-del-sol" route-line="ruta_del_sol" href="#show-route">Plaza del Sol</a></li>
				<li><a class="mayus route-basilica" route-line="ruta_basilica" href="#show-route">la Basílica Zapopan</a></li>
				<li><a class="mayus route-alamo" route-line="ruta_alamo" href="#show-route">Glorieta del Álamo</a></li>
				<li><a class="mayus route-catedral" route-line="ruta_catedral" href="#show-route">Catedral GDL</a></li>
				<li><a class="mayus route-16-sep" route-line="ruta_16_sep" href="#show-route">16 de Sep y niños héroes</a></li>
				<li><a class="mayus route-bandera" route-line="ruta_bandera" href="#show-route">Plaza de la Bandera</a></li>
			</ul>
		</div>

		<div class="maps-right col-xs-12 col-md-9 relative" id="maps-container-bandera">
			<div class="routes-selector paytone mayus">
				<a href="#ver-rutas" class="ver-mas-rutas amarillo-00">VER RUTAS</a>
				<div class="inner-routes-list-container">
					<ul class="inner-routes-list">
						<li><a class="mayus route-minerva" route-line="ruta_minerva" href="#show-route">La minerva</a></li>
						<li><a class="mayus route-del-sol" route-line="ruta_del_sol" href="#show-route">Plaza del sol</a></li>
						<li><a class="mayus route-basilica" route-line="ruta_basilica" href="#show-route">Basilica zapopan</a></li>
						<li><a class="mayus route-alamo" route-line="ruta_alamo" href="#show-route">El Álamo</a></li>
						<li><a class="mayus route-catedral" route-line="ruta_catedral" href="#show-route">Catedral GDL</a></li>
						<li><a class="mayus route-16-sep" route-line="ruta_16_sep" href="#show-route">16 sep y niños héroes</a></li>
						<li><a class="mayus route-bandera" route-line="ruta_bandera" href="#show-route">Plaza de la bandera</a></li>
					</ul>
				</div>
			</div>
			<div class="routes-disclaimer">

				<p class="text-center azul-01">
					<span class="ruta hidden ruta_minerva red">Toma el 371 hasta tránsito, de ahí tomas la 165 ó 167 ¡hasta Los Camachos!</span>
					<span class="ruta hidden ruta_del_sol red">Toma el 371 hasta tránsito, de ahí tomas la 165 ó 167 ¡hasta Los Camachos!</span>
					<span class="ruta hidden ruta_basilica red">Toma la 631-A hasta tránsito, de ahí tomas la 165 ó 167 ¡hasta Los Camachos!</span>
					<span class="ruta hidden ruta_alamo red">Toma la ruta 171 que lleva a 16 de Septiembre y Niños Héroes, de ahí el 54 hasta tránsito, luego tomas la 165 ó 167 ¡hasta Los Camachos!</span>
					<span class="ruta hidden ruta_catedral red">Toma la ruta 275-B hasta tránsito, de ahí tomas la 165 ó 167 ¡hasta Los Camachos!</span>
					<span class="ruta hidden ruta_16_sep red">Toma la ruta 54 hasta tránsito, de ahí tomar la 165 ó 167 ¡hasta Los Camachos!</span>
					<span class="ruta hidden ruta_bandera red">Toma la ruta 275-B hasta tránsito, de ahí tomas la 165 ó 167 ¡hasta Los Camachos!</span>
					<span>Los camiones salen cada hora y media a partir de las 6:20 a.m. El último camión de regreso sale a las 7:00 p.m.</span>
				</p>	
			</div>

			<div id="map0" class="map route-371 d-xs-block"></div>
			<!-- <div id="map1" class="map hide-this route-275-B">275</div>
			<div id="map2" class="map hide-this route-647">647</div>
			<div id="map3" class="map hide-this route-63">63</div>
			<div id="map4" class="map hide-this route-622">622</div>
			<div id="map5" class="map hide-this route-24">24</div> -->
		</div>
	</div>
</div>

<div class="container">
	<div class="row contact-container">
		<div class="col-xs-12 col-md-6 azul-01 contact-text">
			<p>En Los Camachos abrimos <strong>TODO el año</strong> de 8 de la mañana a 6 de la tarde.</p>
			<p>¡Vente con toda la familia a disfrutar del parque acuático!</p> 
			<p>O llámanos de lunes a viernes de 9 a 2 y de 4 a 6 pm a los teléfonos <strong>01800-080-1982</strong>, <strong>3122-4657</strong> ó <strong>3122-4034</strong>.</p> 
		</div>
		<div class="col-xs-12 col-md-6 form">
			<div class="form">
				<form action="/sendmail" method="post" id="contactForm">
					<div class="form-group">
						<label for="nombre">Nombre</label>
						<input type="text" name="nombre" class="form-control" data-validate="required">
					</div>
					<div class="form-group">
						<label for="correo">Correo</label>
						<input type="text" name="correo" class="form-control" data-validate="required|email">
					</div>
					<div class="form-group">
						<label for="Mensaje">Escribe aquí tu mensaje</label>
						<textarea name="mensaje" id="mensaje" class="form-control" data-validate="required" cols="30" rows="10"></textarea>
					</div>
					<div class="form-group"><input type="submit" class="btn btn-primary paytone amarillo-00 mayus btn-send" value="Enviar"></div>
				</form>
				<div class="sent_mail_alert paytone mayus overflow-hidden">
					Gracias! <br>
					Tu mensaje ha sido enviado exitosamente, en breve nos pondremos en contacto contigo.
				</div>
			</div>
		</div>
	</div>
</div>