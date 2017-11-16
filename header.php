<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage LOS CAMACHOS
 * @since 1.0
 * @version 1.0
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg">
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link href="https://fonts.googleapis.com/css?family=Paytone+One|Roboto:100,400,700" rel="stylesheet">
<?php wp_head(); ?>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-84802922-10"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-84802922-10');
</script>
</head>

<body <?php body_class(); ?>>
	<div id="fb-root"></div>
	<script>(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=528338034026476';
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));</script>
	<div class="fb-livechat">
		<div class="ctrlq fb-overlay"></div>
		<div class="fb-widget">
			<div class="ctrlq fb-close"></div>
			<div class="fb-page" data-href="https://www.facebook.com/LCamachos/" data-tabs="messages" data-width="360" data-height="400" data-small-header="true" data-hide-cover="true" data-show-facepile="false">
				<blockquote cite="https://www.facebook.com/digital.inspiration/" class="fb-xfbml-parse-ignore"> </blockquote>
			</div>
			<div id="fb-root"></div>
		</div>
		<a href="https://m.me/LCamachos" title="Mándanos un mensaje en Facebook" class="ctrlq fb-button"></a>
	</div>

	<div id="page" class="site">
		<header id="masthead" class="site-header" role="banner">
			<?php get_template_part( 'template-parts/navigation/navigation', 'top' ); ?>	
		</header>

		<div class="site-content-contain">
			<div id="content" class="site-content">