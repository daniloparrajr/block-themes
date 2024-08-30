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

const ASSETS_DIR  = '/assets';
const STYLES_DIR  = ASSETS_DIR . '/css';
const SCRIPTS_DIR = ASSETS_DIR . '/js';

/**
 * Set up additional theme supports.
 *
 * @return void
 */
function theme_setup(): void {
	add_theme_support( 'editor-styles' );

	add_editor_style( STYLES_DIR . '/editor.css' );

	// Remove core block patterns.
	remove_theme_support( 'core-block-patterns' );
}
add_action( 'after_setup_theme', __NAMESPACE__ . '\theme_setup' );

/**
 * Enqueue the style.css file.
 *
 * @since 1.0.0
 * @return void
 */
function enqueue_style_sheet(): void {
	wp_enqueue_style(
		sanitize_title( __NAMESPACE__ ),
		get_template_directory_uri() . STYLES_DIR . '/main.css',
		array(),
		wp_get_theme()->get( 'Version' )
	);
}
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\enqueue_style_sheet' );

/**
 * Add the following to a theme's functions.php file.
 *
 * @return void
 */
function enqueue_block_variations(): void {
	$asset = include get_theme_file_path( SCRIPTS_DIR . '/block-variations.asset.php' );

	wp_enqueue_script(
		'first-wave-enqueue-block-variations',
		get_template_directory_uri() . SCRIPTS_DIR . '/block-variations.js',
		$asset['dependencies'],
		$asset['version'],
		array( 'strategy' => 'defer' )
	);
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_block_variations' );

/**
 * Add block style variations.
 *
 * @return void
 */
function register_block_styles(): void {

	$block_styles = array(
		'core/navigation'    => array(
			'navigation-grid' => __( 'Grid', 'first-wave' ),
		),
		'core/button'        => array(
			'button-base' => __( 'Base', 'first-wave' ),
		),
		'core/list'          => array(
			'list-plain' => __( 'Plain', 'first-wave' ),
		),
		'core/heading'       => array(
			'heading-line' => __( 'Line', 'first-wave' ),
		),
		'core/post-template' => array(
			'equal-grid-height' => __( 'Equal Grid Height', 'first-wave' ),
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
 *
 * @return void
 */
function enqueue_custom_block_styles(): void {

	// Scan our styles folder to locate block styles.
	$files = glob( get_template_directory() . STYLES_DIR . '/blocks/core/*.css' );

	foreach ( $files as $file ) {

		// Get the filename and core block name.
		$filename   = basename( $file, '.css' );
		$block_name = "core/$filename";

		$asset = include get_theme_file_path( STYLES_DIR . "/blocks/core/{$filename}.asset.php" );

		wp_enqueue_block_style(
			$block_name,
			array(
				'handle' => "first-wave-theme-{$filename}",
				'src'    => get_theme_file_uri( STYLES_DIR . "/blocks/core/{$filename}.css" ),
				'path'   => get_theme_file_path( STYLES_DIR . "/blocks/core/{$filename}.css" ),
				'deps'   => $asset['dependencies'],
				'ver'    => $asset['version'],
			)
		);
	}
}
add_action( 'after_setup_theme', __NAMESPACE__ . '\enqueue_custom_block_styles' );
