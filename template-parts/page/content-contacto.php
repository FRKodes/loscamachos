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
		<div class="maps-left hidden d-md-block col-md-3" id="maps-container-patria">
			<p class="mayus amarillo-00 paytone text-center routes-title" id="maps-container-del-sol">rutas</p>
			<ul class="routes-list">
				<li class="active"><a class="route-371" route-line="ruta_371" href="#show-route">371</a></li>
				<li><a class="route-275-B" route-line="ruta_275" href="#show-route">275-B</a></li>
				<li><a class="route-647" route-line="ruta_647" href="#show-route">647</a></li>
				<li><a class="route-63" route-line="ruta_63" href="#show-route">63</a></li>
				<li><a class="route-622" route-line="ruta_622" href="#show-route">622</a></li>
				<li><a class="route-24" route-line="ruta_24" href="#show-route">24</a></li>
			</ul>
		</div>

		<div class="maps-right col-xs-12 col-md-9 relative">
			<div class="routes-selector paytone mayus">
				<a href="#ver-rutas" class="ver-mas-rutas amarillo-00">VER RUTAS</a>
				<div class="inner-routes-list-container">
					<ul class="inner-routes-list">
						<li><a class="route-371" route-line="ruta_371" href="#">371</a></li>
						<li><a class="route-275-B" route-line="ruta_275" href="#">275-B</a></li>
						<li><a class="route-647" route-line="ruta_647" href="#">647</a></li>
						<li><a class="route-63" route-line="ruta_63" href="#">63</a></li>
						<li><a class="route-622" route-line="ruta_622" href="#">622</a></li>
						<li><a class="route-24" route-line="ruta_24" href="#">24</a></li>
					</ul>
				</div>
			</div>
			<div class="routes-disclaimer">
				<p class="text-center azul-01">Los camiones salen cada hora y media a partir de las 6:20 a.m. El último camión de regreso sale a las 7:00 p.m.</p>	
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
						<input type="text" name="mensaje" class="form-control" data-validate="required">
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