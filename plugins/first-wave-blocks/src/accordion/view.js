/**
 * WordPress dependencies
 */
import { store } from "@wordpress/interactivity";

const { state } = store("first-wave/accordion", {
  state: {
    isOpen: false,
  },
  actions: {
    toggle: () => {},
  },
});
