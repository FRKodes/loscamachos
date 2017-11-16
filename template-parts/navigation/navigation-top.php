<?php
/**
 * Displays top navigation
 *
 * @package WordPress
 * @subpackage LOS CAMACHOS
 * @since 1.0
 * @version 1.0
 */

?>
<!-- <nav id="site-navigation" class="main-navigation navbar navbar-expand-md fixed-top" role="navigation" aria-label="Top Menu">
	

</nav>-->


<nav class="navbar navbar-expand-md navbar-dark fixed-top">
	<a class="navbar-brand" href="/"><img src="<?php echo get_stylesheet_directory_uri() ?>/images/logo-los-camachos.svg" alt="Logo los camachos"></a>

	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
	<span class="navbar-toggler-icon"></span>
	</button>

	<?php wp_nav_menu( array(
	'theme_location' 	=> 'header',
	'menu_id'        	=> 'navbarCollapse',
	'menu_class' 		=> 'collapse navbar-collapse'
	) ); ?>

</nav>