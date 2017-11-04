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
	<a class="navbar-brand" href="//<?php echo $_SERVER['HTTP_HOST'] ?>/loscamachos"><img src="<?php echo get_stylesheet_directory_uri() ?>/images/logo-los-camachos.svg" alt="Logo los camachos"></a>

	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
	<span class="navbar-toggler-icon"></span>
	</button>

	<?php wp_nav_menu( array(
	'theme_location' 	=> 'header',
	'menu_id'        	=> 'navbarCollapse',
	'menu_class' 		=> 'collapse navbar-collapse'
	) ); ?>

	<!-- <div class="collapse navbar-collapse" id="navbarCollapse">
	<ul class="navbar-nav mr-auto">
	<li class="nav-item active">
	<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
	</li>
	<li class="nav-item">
	<a class="nav-link" href="#">Link</a>
	</li>
	<li class="nav-item">
	<a class="nav-link disabled" href="#">Disabled</a>
	</li>
	</ul>
	<form class="form-inline mt-2 mt-md-0">
	<input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
	<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
	</form>
	</div> -->
</nav>