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
		</div><!-- #content -->

		<footer id="colophon" class="site-footer" role="contentinfo">
			<div class="back-azul-01">
				<div class="container">
					<div class="row">
						<div class="col-xs-12 col-md-6 social">
							<ul class="social-links">
								<li><a target="_blank" href="https://www.facebook.com/LCamachos" class="icon-facebook"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/facebook.svg" alt="Los camachos parque acuático en Facebook"></a></li>
								<li><a target="_blank" href="https://www.youtube.com/channel/UCybXr8rnl6k7iJiSl7aFr6w" class="icon-youtube"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/youtube.svg" alt="Los camachos parque acuático en YouTube"></a></li>
							</ul>
						</div>
						<div class="col-xs-12 col-md-6 text-center likes">
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
								33 00 22 11 55 <br>
								33 66 99 77 44
							</p>
						</div>
						
						<div class="block-footer col-xs-12 col-sm-4 col-md-4">
							<p class="footer-title">Abierto los 365 días del año</p>
							<p>De 8:00 a.m. a 6:00 p.m</p>
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