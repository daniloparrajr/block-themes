import { __ } from "@wordpress/i18n";
import {
  registerBlockVariation,
  unregisterBlockVariation,
} from "@wordpress/blocks";

import domReady from "@wordpress/dom-ready";

/**
 * Add the following to a variations.js file located in the theme's assets/js/ folder.
 */
domReady(function () {
  /**
   * A Navigation block variation with grid links layout
   */
  registerBlockVariation("core/navigation", {
    name: "navigation-grid",
    title: __("Navigation - Grid", "first-wave"),
    description: __("A navigation links with a grid layout", "first-wave"),
    isDefault: false,
    isActive: ["className"],
    attributes: {
      className: "is-style-navigation-grid",
      overlayMenu: "never",
      style: {
        spacing: {
          blockGap: "0",
        },
      },
      layout: {
        type: "flex",
        flexWrap: "wrap",
        justifyContent: "left",
      },
    },
  });

  /**
   * Disable all unused icon variations in the Social Icons block.
   */
  const unusedSocialIcons = [
    "fivehundredpx",
    "amazon",
    "bandcamp",
    "behance",
    "chain",
    "codepen",
    "deviantart",
    "dribbble",
    "dropbox",
    "etsy",
    "feed",
    "flickr",
    "foursquare",
    "goodreads",
    "google",
    "instagram",
    "lastfm",
    "mastodon",
    "meetup",
    "medium",
    "patreon",
    "pinterest",
    "pocket",
    "reddit",
    "skype",
    "snapchat",
    "soundcloud",
    "spotify",
    "telegram",
    "tiktok",
    "tumblr",
    "twitch",
    "vimeo",
    "vk",
    "whatsapp",
    "yelp",
    "youtube",
  ];
  unusedSocialIcons.forEach((icon) =>
    unregisterBlockVariation("core/social-link", icon),
  );
});
