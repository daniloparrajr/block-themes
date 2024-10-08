<?php
/**
 * Plugin Name:       First-wave Blocks
 * Description:       Custom blocks for the First-wave block theme
 * Version:           0.1.2
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       first-wave-blocks
 *
 * @package           first-wave
 */

namespace First_Wave_Blocks;

use WP_HTML_Tag_Processor;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function block_init(): void {
	$blocks = array(
		'navigation-toggle',
		'accordion',
		'accordion/pane',
	);

	foreach ( $blocks as $block ) {
		register_block_type_from_metadata( __DIR__ . '/build/' . $block );
	}
}
add_action( 'init', __NAMESPACE__ . '\block_init' );

/**
 * Enable interactivity on the header to toggle navigation open/close state.
 *
 * @param string $block_content The block content.
 * @param array  $block         The full block, including name and attributes.
 *
 * @return string
 */
function site_header_template_part_attributes( string $block_content, array $block ): string {

	if (
		( array_key_exists( 'attrs', $block ) && is_array( $block['attrs'] ) ) &&
		array_key_exists( 'className', $block['attrs'] ) &&
		str_contains( $block['attrs']['className'], 'site-header' )
	) {
		$tags = new WP_HTML_Tag_Processor( $block_content );

		if ( $tags->next_tag( 'header' ) ) {
			$tags->set_attribute( 'data-wp-interactive', 'first-wave/site-header' );
		}

		return $tags->get_updated_html();
	}

	return $block_content;
}
add_action( 'render_block_core/template-part', __NAMESPACE__ . '\site_header_template_part_attributes', 10, 2 );

/**
 * Add accessibility attributes to the bottom header.
 *
 * @param string $block_content The block content.
 * @param array  $block         The full block, including name and attributes.
 *
 * @return string
 */
function site_header_bottom_group_attributes( string $block_content, array $block ): string {

	if (
		( array_key_exists( 'attrs', $block ) && is_array( $block['attrs'] ) ) &&
		array_key_exists( 'className', $block['attrs'] ) &&
		str_contains( $block['attrs']['className'], 'site-header-bottom' )
	) {
		$tags = new WP_HTML_Tag_Processor( $block_content );

		if ( $tags->next_tag( array( 'class_name' => 'site-header-bottom' ) ) ) {
			$tags->set_attribute( 'data-wp-bind--aria-hidden', '!state.isOpen' );
			$tags->set_attribute( 'data-wp-bind--inert', '!state.isOpen' );
		}

		return $tags->get_updated_html();
	}

	return $block_content;
}
add_action( 'render_block_core/group', __NAMESPACE__ . '\site_header_bottom_group_attributes', 10, 2 );


/**
 * Register block styles.
 *
 * @return void
 */
function register_block_styles(): void {
	register_block_style(
		'first-wave/navigation-toggle',
		array(
			'name'         => 'navigation-toggle-base',
			'label'        => __( 'Base', 'first-wave-blocks' ),
			'inline_style' => '
			.wp-block-first-wave-navigation-toggle.is-style-navigation-toggle-base > .fw-navigation-toggle-button {
				color: var(--wp--preset--color--base);
			}

			.wp-block-first-wave-navigation-toggle.is-style-navigation-toggle-base > .fw-navigation-toggle-button:hover,
			.wp-block-first-wave-navigation-toggle.is-style-navigation-toggle-base > .fw-navigation-toggle-button:focus {
				background-color: var(--wp--preset--color--contrast-2);
			}
			',
		)
	);
}
add_action( 'init', __NAMESPACE__ . '\register_block_styles' );
