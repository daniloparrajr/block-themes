/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from "@wordpress/blocks";

import { InnerBlocks } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor. All other files
 * get applied to the editor only.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.scss";
import "./editor.scss";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import metadata from "./block.json";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType(metadata.name, {
  __experimentalLabel(attributes, { context }) {
    const { title } = attributes;

    const customName = attributes?.metadata?.name;

    // In the list view, use the block's content as the label.
    // If the content is empty, fall back to the default label.
    if (context === "list-view" && (customName || title)) {
      return attributes?.metadata?.name || title;
    }
  },
  /**
   * @see ./edit.js
   */
  edit: Edit,
  save: () => {
    return <InnerBlocks.Content />;
  },
});
