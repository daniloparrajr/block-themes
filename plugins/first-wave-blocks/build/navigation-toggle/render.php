<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// Generate unique id for aria-controls.
$unique_id = wp_unique_id( 'p-' );

// TODO: add accessibility for aria controls.
?>

<div
	<?php echo get_block_wrapper_attributes(); ?>
	data-wp-interactive="first-wave/site-header"
>
	<button
		type="button"
		data-wp-on--click="actions.toggle"
		data-wp-bind--aria-expanded="state.isOpen"
		data-wp-class--is-active="state.isOpen"
		aria-controls="<?php echo esc_attr( $unique_id ); ?>"
		class="hamburger hamburger--spring wp-element-button"
	>
		<span class="screen-reader-text" data-wp-text="state.toggleLabel">
			<?php esc_html_e( 'Open Menu', 'first-wave-blocks' ); ?>
		</span>
		<span class="hamburger-box">
		    <span class="hamburger-inner"></span>
		</span>
	</button>
</div>
