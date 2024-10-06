/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import { ToolbarButton, ToolbarGroup } from "@wordpress/components";
import { useDispatch } from "@wordpress/data";
import { createBlock } from "@wordpress/blocks";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
  useBlockProps,
  useInnerBlocksProps,
  BlockControls,
} from "@wordpress/block-editor";

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
export default function Edit(props) {
  const blockProps = useBlockProps();
  const innerBlocksProps = useInnerBlocksProps(blockProps, {
    allowedBlocks: ["first-wave/pane"],
    template: [["first-wave/pane"]],
    defaultBlock: {
      name: "first-wave/pane",
    },
    directInsert: true,
  });

  // Get the dispatch function from the context.
  const { insertBlock } = useDispatch("core/block-editor");

  const insertSlide = () => {
    // TODO: Insert the block at the end of block instead of first item.
    insertBlock(createBlock("first-wave/pane"), null, props.clientId);
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
      <div {...innerBlocksProps}></div>
    </>
  );
}
