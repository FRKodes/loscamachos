<?php
/**
 * The front page template file
 *
 * If the user has selected a static page for their homepage, this is what will
 * appear.
 * Learn more: https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage CODIMUBA
 * @since 1.0
 * @version 1.0
 */

get_header(); ?>

<div id="primary" class="content-area">
	<main id="main" class="site-main" role="main">
		
		<div class="container-fluid">
			<div class="row">
				<div class="main-banner-home">
					
					<h1 class="text-center paytone banner-title">
						¡VISÍTANOS HOY!<br>
						<span class="roboto">DESCUBRE LA DIVERSIÓN</span>
					</h1>

				</div>
			</div>
		</div>
		
		<div class="back-azul-00">
			<div class="container-fluid">
				<div class="row">
					<div class="home-price-block">
						<h2 class="col-xs-12 title mayus paytone">Precios</h2>
						<div class="col-xs-12">
							<div class="prices-container">
								<div class="price-item">
									<div class="big-letter paytone">G</div>
									<p class="price-title">BOLETO GENERAL</p>
									<p class="big paytone">$120.00</p>
									<figure class="olas"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/wave-3-blanco.svg" alt=""></figure>
									<p class="diclaimer">Incluye todas las atracciones.</p>
								</div>
								<!-- <div class="price-item">
									BOLETO NIÑOS $??
									*De 3 a 10 años o hasta 1.40 mt. de estatura.
									Incluye todas las atracciones.
								</div> -->
							</div>
						</div>
						<div class="image-racer-home"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/front-precios.png" alt="runner niños y precios"></div>
					</div>
				</div>
			</div>
		</div>
		

		<div class="back-azul-00 rutas-back">
			<div class="cicle-left-home"></div>
			<div class="cicle-right-home"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/wave-3-blanco.svg" alt="Olas en los camachos"></div>
			<div class="container rutas-home">
				<div class="col-xs-12">
					<h2 class="title-rutas paytone mayus">Rutas en auto</h2>
					<p class="mayus separated">¡No tendrás excusas!</p>
				</div>

				<div class="col-xs-12">
					<div class="routes-container">
						<div class="route-item">
							<div class="image"><a href="#"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/rutas-minerva.jpg" alt="ruta hacia los camachos desde la minerva"></a></div>
							<div class="title mayus paytone azul-01">La Minerva</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</main><!-- #main -->
</div><!-- #primary -->

<?php get_footer();
