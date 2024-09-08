<?php
/**
 * Title: Header
 * Slug: first-wave/header
 * Description: Header with nav and social icons
 * Categories: header
 * Keywords: header, nav, links, button
 * Viewport Width: 1500
 * Block Types: core/template-part/header
 * Post Types: wp_template
 * Inserter: true
 */
?>

<!-- wp:group {"metadata":{"name":"Top header"},"className":"site-header-top","layout":{"type":"constrained"}} -->
<div class="wp-block-group site-header-top"><!-- wp:group {"align":"wide","style":{"spacing":{"padding":{"top":"var:preset|spacing|large"}}},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"space-between"}} -->
	<div class="wp-block-group alignwide" style="padding-top:var(--wp--preset--spacing--large)"><!-- wp:site-title /-->

		<!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"}} -->
		<div class="wp-block-group"><!-- wp:buttons -->
			<div class="wp-block-buttons"><!-- wp:button -->
				<div class="wp-block-button"><a class="wp-block-button__link wp-element-button">Contact</a></div>
				<!-- /wp:button --></div>
			<!-- /wp:buttons -->

			<!-- wp:first-wave/navigation-toggle /--></div>
		<!-- /wp:group --></div>
	<!-- /wp:group --></div>
<!-- /wp:group -->

<!-- wp:group {"metadata":{"name":"Bottom header"},"className":"site-header-bottom","style":{"elements":{"link":{"color":{"text":"var:preset|color|base"}}},"spacing":{"padding":{"top":"0"},"blockGap":"0"}},"backgroundColor":"contrast","textColor":"base","layout":{"type":"constrained"}} -->
<div class="wp-block-group site-header-bottom has-base-color has-contrast-background-color has-text-color has-background has-link-color" style="padding-top:0"><!-- wp:group {"align":"wide","style":{"spacing":{"padding":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|large"}}},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"space-between"}} -->
	<div class="wp-block-group alignwide" style="padding-top:var(--wp--preset--spacing--large);padding-bottom:var(--wp--preset--spacing--large)"><!-- wp:site-title {"level":0} /-->

		<!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"}} -->
		<div class="wp-block-group"><!-- wp:buttons -->
			<div class="wp-block-buttons"><!-- wp:button {"className":"is-style-button-base"} -->
				<div class="wp-block-button is-style-button-base"><a class="wp-block-button__link wp-element-button">Contact</a></div>
				<!-- /wp:button --></div>
			<!-- /wp:buttons -->

			<!-- wp:first-wave/navigation-toggle {"className":"is-style-navigation-toggle-base"} /--></div>
		<!-- /wp:group --></div>
	<!-- /wp:group -->

	<!-- wp:group {"align":"wide","style":{"spacing":{"padding":{"bottom":"var:preset|spacing|large"}}},"layout":{"type":"default"}} -->
	<div class="wp-block-group alignwide" style="padding-bottom:var(--wp--preset--spacing--large)"><!-- wp:navigation {"ref":4,"textColor":"base","backgroundColor":"contrast","overlayMenu":"never","className":"is-style-navigation-grid is-text-wide","style":{"spacing":{"blockGap":"0"}},"fontSize":"3xl"} /-->

		<!-- wp:heading {"level":4,"style":{"spacing":{"margin":{"top":"var:preset|spacing|large"}},"elements":{"link":{"color":{"text":"var:preset|color|base"}}}},"textColor":"base"} -->
		<h4 class="wp-block-heading has-base-color has-text-color has-link-color" style="margin-top:var(--wp--preset--spacing--large)">Follow us</h4>
		<!-- /wp:heading -->

		<!-- wp:social-links {"iconColor":"base","iconColorValue":"#ffffff","size":"has-normal-icon-size","className":"is-style-logos-only","style":{"spacing":{"blockGap":{"left":"var:preset|spacing|medium"}}}} -->
		<ul class="wp-block-social-links has-normal-icon-size has-icon-color is-style-logos-only"><!-- wp:social-link {"url":"#","service":"facebook"} /-->

			<!-- wp:social-link {"url":"#","service":"github","label":""} /-->

			<!-- wp:social-link {"url":"#","service":"linkedin"} /-->

			<!-- wp:social-link {"url":"#","service":"instagram"} /--></ul>
		<!-- /wp:social-links --></div>
	<!-- /wp:group --></div>
<!-- /wp:group -->