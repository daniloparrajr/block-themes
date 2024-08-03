<?php
/**
 * Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Blocky
 * @since 1.0.0
 */

namespace First_Wave;

/**
 * Enqueue the style.css file.
 *
 * @since 1.0.0
 */
function enqueue_style_sheet(): void {
	wp_enqueue_style( sanitize_title( __NAMESPACE__ ), get_template_directory_uri() . '/style.css', array(), wp_get_theme()->get( 'Version' ) );
}
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\enqueue_style_sheet' );

/**
 * Add the following to a theme's functions.php file.
 */
function enqueue_block_variations() {
	wp_enqueue_script(
		'first-wave-enqueue-block-variations',
		get_template_directory_uri() . '/assets/scripts/variations.js',
		array( 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' )
	);
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_block_variations' );

/**
 * Add block style variations.
 */
function register_block_styles() {

	$block_styles = array(
		'core/navigation' => array(
			'navigation-grid' => __( 'Grid', 'first-wave' ),
		),
	);

	foreach ( $block_styles as $block => $styles ) {
		foreach ( $styles as $style_name => $style_label ) {
			register_block_style(
				$block,
				array(
					'name'  => $style_name,
					'label' => $style_label,
				)
			);
		}
	}
}
add_action( 'init', __NAMESPACE__ . '\register_block_styles' );

/**
 * Load custom block styles only when the block is used.
 */
function enqueue_custom_block_styles() {

	// Scan our styles folder to locate block styles.
	$files = glob( get_template_directory() . '/build/styles/*.css' );

	foreach ( $files as $file ) {

		// Get the filename and core block name.
		$filename   = basename( $file, '.css' );
		$block_name = str_replace( 'core-', 'core/', $filename );

		$asset = include get_theme_file_path( "build/styles/{$filename}.asset.php" );

		wp_enqueue_block_style(
			$block_name,
			array(
				'handle' => "first-wave-block-{$filename}",
				'src'    => get_theme_file_uri( "build/styles/{$filename}.css" ),
				'path'   => get_theme_file_path( "build/styles/{$filename}.css" ),
				'deps'   => $asset['dependencies'],
				'ver'    => $asset['version'],
			)
		);

		// TODO: proper way to enqueue rtl styles for blocks.
	}
}
add_action( 'after_setup_theme', __NAMESPACE__ . '\enqueue_custom_block_styles' );
