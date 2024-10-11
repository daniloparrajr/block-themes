/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
  RichText,
  useBlockProps,
  useInnerBlocksProps,
  BlockControls,
} from "@wordpress/block-editor";

import { ToolbarButton, ToolbarGroup } from "@wordpress/components";
import { useDispatch, useSelect } from "@wordpress/data";
import { createBlock } from "@wordpress/blocks";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes, clientId }) {
  const blockProps = useBlockProps({
    className: "fwb-pane",
  });

  const innerBlocksProps = useInnerBlocksProps({
    className: "fwb-pane__content",
  });

  // Get the dispatch function from the context.
  const { insertBlock } = useDispatch("core/block-editor");
  const { title } = attributes;

  // Get the block parent client ID
  const parentBlock = useSelect((select) => {
    let parentBlock = select("core/block-editor").getBlockParentsByBlockName(
      clientId,
      "first-wave/accordion",
    );
    parentBlock = select("core/block-editor").getBlock(parentBlock[0]);
    return parentBlock;
  });

  // Insert a new slide block
  const insertSlide = () => {
    insertBlock(
      createBlock("first-wave/pane"),
      parentBlock.innerBlocks.length,
      parentBlock.clientId,
    );
  };

  return (
    <>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton onClick={insertSlide}>
            {__("Add Pane", "first-wave-blocks")}
          </ToolbarButton>
        </ToolbarGroup>
      </BlockControls>
      <details {...blockProps}>
        <RichText
          className="fwb-pane__title"
          tagName="summary"
          allowedFormats={[]}
          placeholder={__("Add Title", "first-wave-blocks")}
          onChange={(val) => setAttributes({ title: val })}
          value={title}
          keepPlaceholderOnFocus
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
        <div {...innerBlocksProps} />
      </details>
    </>
  );
}
