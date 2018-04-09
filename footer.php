<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage LOS CAMACHOS
 * @since 1.0
 * @version 1.2
 */
?>
		<div class="back-azul-00">
			<div class="container">
				<div class="icons-container">
					<div class="icon-item">
						<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/atracciones-icon-banos.svg" alt="atracciones icon banos">
						<p class="mayus white mini-text">Baños</p>
					</div>
					<div class="icon-item">
						<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/atracciones-icon-estacionamiento.svg" alt="atracciones icon estacionamiento">
						<p class="mayus white mini-text">Estacionamiento</p>
					</div>
					<div class="icon-item">
						<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/no-bocinas.svg" alt="atracciones icon no bocinas">
						<p class="mayus white mini-text">No Bocinas</p>
					</div>
					<div class="icon-item">
						<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/atracciones-icon-no-alcohol.svg" alt="atracciones icon no alcohol">
						<p class="mayus white mini-text">No Alcohol</p>
					</div>
					<div class="icon-item">
						<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/atracciones-icon-no-cristal.svg" alt="atracciones icon no cristal">
						<p class="mayus white mini-text">No vidrio</p>
					</div>
					<div class="icon-item">
						<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/atracciones-icon-no-perros.svg" alt="atracciones icon no perros">
						<p class="mayus white mini-text">No mascotas</p>
					</div>
					<div class="icon-item">
						<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/atracciones-icon-restaurant.svg" alt="atracciones icon restaurant">
						<p class="mayus white mini-text">Comida</p>
					</div>
				</div>	
			</div>
		</div>


		</div><!-- #content -->

		<footer id="colophon" class="site-footer" role="contentinfo">
			<div class="back-azul-01">
				<div class="container">
					<div class="row">
						<div class="col-xs-12 col-md-4 social">
							<ul class="social-links">
								<li><a target="_blank" href="https://www.facebook.com/LCamachos" class="icon-facebook"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/facebook.svg" alt="Los camachos parque acuático en Facebook"></a></li>
								<li><a target="_blank" href="https://www.youtube.com/channel/UCybXr8rnl6k7iJiSl7aFr6w" class="icon-youtube"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/youtube.svg" alt="Los camachos parque acuático en YouTube"></a></li>
							</ul>
						</div>
						<div class="col-xs-12 col-md-4 text-center newsletter-button-container">
							<a href="http://eepurl.com/dqfEKT" target="_blank" class="btn btn-primary paytone amarillo-00 mayus btn-send newsletter">
								SUSCRÍBETE AL NEWSLETTER
							</a>
						</div>
						<div class="col-xs-12 col-md-4 text-center likes">
							<div class="fb-like" data-href="https://www.facebook.com/LCamachos/" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="back-azul-02 p-top-40 p-bottom-40">
				<div class="container">
					<div class="row">
						<div class="block-footer col-xs-12 col-sm-3 col-md-3">
							<p class="footer-title">Explorar</p>
							<div class="footer-menu-block"><?php wp_nav_menu( array('theme_location' => 'footer', 'menu_class' => 'footer-menu') ); ?></div>
						</div>

						<div class="block-footer col-xs-12 col-sm-5 col-md-5">
							<p class="footer-title">¿Dónde estamos?</p>
							<p>
								Km.19 Nva. Carretera a Saltillo, Guadalajara, Jal. 45280 <br>
								<a class="white" href="tel:01 800 080 1982">01 800 080 1982</a> <br>
								<a class="white" href="tel:31224657">3122-4657</a> <br>
								<a class="white" href="tel:31224034">3122-4034</a><br>
							</p>
						</div>
						
						<div class="block-footer col-xs-12 col-sm-4 col-md-4">
							<p class="footer-title">Abierto los 365 días del año</p>
							<p>De 8:00 a.m. a 6:00 p.m</p>
						</div>
					</div>
				</div>
				
				<div class="container">
					<div class="row">
						<div class="col-sm-6 p-top-40">
							<p>
								Diseño y Desarrollo Web &nbsp; <a class="azul-00" href="http://www.atomcreativa.com/" target="_blank">Atom</a> &nbsp; + &nbsp; <a class="azul-00" href="http://blueterrier.mx/" target="_blank">Blue Terrier Studio</a>
							</p>
						</div>
					</div>
				</div>
				<!-- <div class="credits">Desarrollado por: <a href="http://www.blueterrier.mx/" target="_blank" title="Made with love at Guadalajara Jaslico MX">BLUE TERRIER STUDIO</a></div> -->
			</div>
		</footer><!-- #colophon -->
	</div><!-- .site-content-contain -->
</div><!-- #page -->
<script src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9"></script>
<?php wp_footer(); ?>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBR2bxbHLtJj9agfUxeojUUiusyxKaxso8&callback=initMap"></script>
</body>
</html>