/* Add custom attribute to image block, in Sidebar */

// Enable custom attributes on Image block
const enableSidebarSelectOnBlocks = ["core/image"];

import { createHigherOrderComponent } from "@wordpress/compose";
import { PanelBody, PanelRow, TextControl } from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { addFilter } from "@wordpress/hooks";

/**
 * How to add custom block controls
 *
 * 1. Register block attributes by filtering (blocks.registerBlockType) the block attributes
 * 2.
 */

const enableAnimationGroupBlocks = [
  "core/group",
  "core/heading",
  "core/paragraph",
  "core/image",
];

/**
 * Declare our custom attribute
 */
const setSidebarAnimationGroupAttribute = (settings, name) => {
  // If current block is not allowed
  if (!enableAnimationGroupBlocks.includes(name)) {
    return settings;
  }

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      animationGroup: {
        type: "string",
        default: "",
      },
    },
  };
};

addFilter(
  "blocks.registerBlockType",
  "first-wave/animation-group",
  setSidebarAnimationGroupAttribute,
);

function Edit({ attributes, setAttributes }) {
  const setAnimationGroup = (value) => {
    setAttributes({
      animationGroup: value,
    });
  };

  return (
    <InspectorControls>
      <PanelBody title={__("Animation", "first-wave")}>
        <TextControl
          label="Group"
          value={attributes.animationGroup}
          onChange={setAnimationGroup}
          __next40pxDefaultSize="true"
          help={__(
            "Enter the animation group you want to associate this block with.",
            "first-wave",
          )}
        />
      </PanelBody>
    </InspectorControls>
  );
}
addFilter(
  "editor.BlockEdit",
  "first-wave/animation-group",
  createHigherOrderComponent((BlockEdit) => {
    return (props) => {
      // If current block is not allowed
      if (!enableAnimationGroupBlocks.includes(props.name)) {
        return <BlockEdit {...props} />;
      }

      return (
        <>
          <BlockEdit {...props} />
          <Edit {...props} />
        </>
      );
    };
  }, "withAnimationGroup"),
);
