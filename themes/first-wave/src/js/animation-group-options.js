/* Add custom attribute to image block, in Sidebar */

// Enable custom attributes on Image block
const enableSidebarSelectOnBlocks = ["core/image"];

import { createHigherOrderComponent } from "@wordpress/compose";
import { PanelBody, SelectControl } from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";
import { Fragment } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { addFilter } from "@wordpress/hooks";

import classnames from "classnames";

/**
 * Declare our custom attribute
 */
const setSidebarSelectAttribute = (settings, name) => {
  // Do nothing if it's another block than our defined ones.
  if (!enableSidebarSelectOnBlocks.includes(name)) {
    return settings;
  }

  return Object.assign({}, settings, {
    attributes: Object.assign({}, settings.attributes, {
      imageAttribute: { type: "string" },
    }),
  });
};

addFilter(
  "blocks.registerBlockType",
  "custom-attributes/set-sidebar-select-attribute",
  setSidebarSelectAttribute,
);

/**
 * Add Custom Select to Image Sidebar
 */
const withSidebarSelect = createHigherOrderComponent((BlockEdit) => {
  return (props) => {
    // If current block is not allowed
    if (!enableSidebarSelectOnBlocks.includes(props.name)) {
      return <BlockEdit {...props} />;
    }

    const { attributes, setAttributes } = props;
    const { imageAttribute } = attributes;

    return (
      <Fragment>
        <BlockEdit {...props} />
        <InspectorControls>
          <PanelBody title={__("Image Custom Attributes")}>
            <SelectControl
              label={__("Custom Attribute")}
              value={imageAttribute}
              size="__unstable-large"
              options={[
                {
                  label: __("None"),
                  value: "",
                },
                {
                  label: __("One"),
                  value: "one",
                },
              ]}
              onChange={(value) => {
                setAttributes({
                  imageAttribute: value,
                });
              }}
            />
          </PanelBody>
        </InspectorControls>
      </Fragment>
    );
  };
}, "withSidebarSelect");

addFilter(
  "editor.BlockEdit",
  "custom-attributes/with-sidebar-select",
  withSidebarSelect,
);

/**
 * Add custom class to block in Edit
 */
const withSidebarSelectProp = createHigherOrderComponent((BlockListBlock) => {
  return (props) => {
    // If current block is not allowed
    if (!enableSidebarSelectOnBlocks.includes(props.name)) {
      return <BlockListBlock {...props} />;
    }

    const { attributes } = props;
    const { imageAttribute } = attributes;

    if (imageAttribute) {
      return (
        <BlockListBlock {...props} className={"has-option-" + imageAttribute} />
      );
    } else {
      return <BlockListBlock {...props} />;
    }
  };
}, "withSidebarSelectProp");

addFilter(
  "editor.BlockListBlock",
  "custom-attributes/with-sidebar-select-prop",
  withSidebarSelectProp,
);

/**
 * Save our custom attribute
 */
const saveSidebarSelectAttribute = (extraProps, blockType, attributes) => {
  // Do nothing if it's another block than our defined ones.
  if (enableSidebarSelectOnBlocks.includes(blockType.name)) {
    const { imageAttribute } = attributes;
    if (imageAttribute) {
      extraProps.className = classnames(
        extraProps.className,
        "has-option-" + imageAttribute,
      );
    }
  }

  return extraProps;
};

addFilter(
  "blocks.getSaveContent.extraProps",
  "custom-attributes/save-sidebar-select-attribute",
  saveSidebarSelectAttribute,
);
