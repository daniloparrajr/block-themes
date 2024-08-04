<?php
/**
 * Plugin Name:       First-wave Blocks
 * Description:       Custom blocks for the First-wave block theme
 * Version:           0.1.0
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
	);

	foreach ( $blocks as $block ) {
		register_block_type_from_metadata( __DIR__ . '/build/' . $block );
	}
}
add_action( 'init', __NAMESPACE__ . '\block_init' );
