<div class="container-fluid">
	<div class="row">
		<div class="main-banner-home precios">
			
			<h1 class="text-center paytone banner-title">
				PRECIOS<br>
				<span class="roboto">ACCESIBLES PARA TU FAMILIA</span>
			</h1>

		</div>
	</div>
</div>

<div class="container-fluid">
	<div class="row">
		
		<div class="col-xs-12 col-sm-6 price-block back-azul-01">
			<div class="price-block-container">
				<div class="photo">
					<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/precios-niños-los-camachos.jpg" alt="precios niños los camachos">
				</div>
				<div class="price-item">
					<div class="big-letter paytone">N</div>
					<p class="price-title text-center">BOLETO NIÑOS</p>
					<div class="info-inner-container">
						<p class="big paytone">$60.00</p>
						<figure class="olas"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/wave-3-blanco.svg" alt="Olas los camachos"></figure>
					</div>
					<p class="diclaimer">*De 3 a 10 años o hasta 1.40 mt. de estatura. <br><strong>Incluye todas las atracciones.</strong></p>
				</div>
			</div>
		</div>

		<div class="col-xs-12 col-sm-6 price-block back-azul-00">
			<div class="price-block-container right-block">
				<div class="photo">
					<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/precios-adulto-los-camachos.jpg" alt="precios adultos los camachos">
				</div>
				<div class="price-item">
					<div class="big-letter paytone">G</div>
					<p class="price-title text-center">BOLETO ADULTO</p>
					<div class="info-inner-container">
						<p class="big paytone">$120.00</p>
						<figure class="olas"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/wave-3-blanco.svg" alt="Olas los camachos"></figure>
					</div>
					<p class="diclaimer"><strong>Incluye todas las atracciones.</strong></p>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="container-fluid block-groups">
	<div class="row">
		<div class="block-groups azul-01 text-center">
			<p>Además tenemos precio especial para grupos a partir de 25 adultos. Llámanos previo a tu visita <strong>3122-4657</strong>.</p>
		</div>
	</div>
</div>

<div class="back-azul-01">
	<div class="container relative">
		<div class="cicle-right-home prices"></div>
		<div class="tickets-container">

			<?php
			$the_query_main = new WP_Query( array('post_type' => 'cupon', 'posts_per_page' => 10, 'orderby'=> 'order_menu','order'=>'ASC') );

			while ( $the_query_main->have_posts() ) : $the_query_main->the_post();?>
				<div class="ticket-item">
					<figure><?php the_post_thumbnail('large'); ?></figure>
					<p class="coupon-title"><?php the_title(); ?></p>
					<div class="white text-center coupon-text"><?php the_content(); ?></div>
					<div class="download"><a class="paytone" href="<?php the_field('pdf'); ?>" target="_blank">Descargar</a></div>
					<div class="share"><a target="_blank" class="paytone icon-facebook" href="mailto:?subject=Hey!+Mira+este+cupón+vamos+a+los+camachos.&body=Descarga+este+cupón+para+ir+a+Los+Camachos+parque+acuático,+la+pasaremos+genial!!!.%0D%0A%0D%0ALink+de+descarga:+%0D%0A%0D%0A+<?php the_field('pdf');?>.">Enviar a un amigo</a></div>
				</div><?php 
			wp_reset_postdata();
			endwhile;?>
		</div>
		
	</div>

	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-md-8 mr-auto ml-auto text-center p-top-40 p-bottom-40 white">
				<p>Cada mes te sorprendemos con un nuevo cupón ¡Encuéntralos aquí, descárgalos, imprímelos y llévalos en tu próxima visita!</p>
			</div>
		</div>
	</div>

</div>

<div class="convenios-container">
	<div class="cicle-left-home"></div>
	<div class="container p-bottom-40 p-top-40">
		<div class="col-xs-12">
			<h2 class="paytone mayus azul-01 text-center">Convenios</h2>
			<p class="text-center azul-01 mayus separated">Únete a nosotros</p>
		</div>

		<div class="col-xs-12 col-sm-10 col-md-8 ml-auto mr-auto">
			<img class="convenios" src="<?php echo get_stylesheet_directory_uri(); ?>/images/precios-convenios-los-camachos.png" alt="precios convenios los camachos">
		</div>

		<div class="col-xs-12 col-sm-10 col-md-8 ml-auto mr-auto">
			<p class="text-center azul-01">¡Suma a tu empresa! Con nuestros convenios ofrecemos a tus empleados 2x1 en el ingreso de hasta 6 personas en total, por visita. ¡Pide información al correo <a href="mailto:convenios@loscamachos.com.mx" class="amarillo-00">convenios@loscamachos.com.mx</a> *Promoción nula viernes y sábado santo, así como el 1 de mayo.</p>
		</div>
	</div>
</div>

<div class="container p-bottom-40 p-top-40 text-center">

	<?php
	$the_query_convenio = new WP_Query( array('post_type' => 'logo_convenio', 'posts_per_page' => 50, 'orderby'=> 'order_menu','order'=>'ASC') );

	while ( $the_query_convenio->have_posts() ) : $the_query_convenio->the_post();?>
		<div class="logo-item">
			<figure><?php the_post_thumbnail(); ?></figure>
		</div><?php 
		wp_reset_postdata();
	endwhile;?>
		
		<!-- <div class="logo-item">
			<figure><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/precios-logo-infra.svg" alt="precios logo infra"></figure>
		</div>
		<div class="logo-item">
			<figure><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/precios-logo-proyeccion-administracion-empresarial.svg" alt="precios logo-proyeccion administracion empresarial"></figure>
		</div> -->

	<!-- <div class="logo-item">
		<figure><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/precios-logo-sistecozome.svg" alt="precios logo sistecozome"></figure>
	</div>
	<div class="logo-item">
		<figure><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/precios-logo-walmart.svg" alt="precios logo walmart"></figure>
	</div> -->
</div>