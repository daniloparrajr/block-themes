/**
 * WordPress dependencies
 */
import { store, getContext } from "@wordpress/interactivity";

store("first-wave/navigation-toggle", {
  actions: {
    toggle: () => {
      const context = getContext();
      context.isOpen = !context.isOpen;

      document.body.classList.toggle("navigation-is-open");
    },
  },
  callbacks: {
    logIsOpen: () => {
      const { isOpen } = getContext();
      // Log the value of `isOpen` each time it changes.
      console.log(`Is open: ${isOpen}`);
    },
  },
});
