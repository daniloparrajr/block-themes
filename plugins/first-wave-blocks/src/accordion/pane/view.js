/**
 * WordPress dependencies
 */
import { store } from "@wordpress/interactivity";

const { state } = store("first-wave/pane", {
  state: {
    isOpen: false,
  },
  actions: {
    toggle: () => {},
  },
});
