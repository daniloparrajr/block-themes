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
?>

<details
	<?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'fwb-pane' ) ) ); ?>
	name="<?php echo esc_attr( $block->context['first-wave/accordion'] ); ?>"
>
	<?php if ( isset( $attributes['title'] ) ) : ?>
		<summary class="fwb-pane__title"><?php echo esc_html( $attributes['title'] ); ?></summary>
	<?php endif; ?>

	<?php if ( $content ) : ?>
		<div class="fwb-pane__content"><?php echo wp_kses_post( $content ); ?></div>
	<?php endif; ?>
</details>
