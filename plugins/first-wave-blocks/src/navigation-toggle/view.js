/**
 * WordPress dependencies
 */
import { store, getElement } from "@wordpress/interactivity";

import { gsap } from "gsap";

const tl = gsap
  .timeline({
    paused: true,
  })
  .to(".site-header-bottom", {
    height: "auto",
    duration: 0.4,
  });

const { state } = store("first-wave/site-header", {
  state: {
    isOpen: false,
    toggleLabel: "Open Menu",
  },
  actions: {
    toggle: () => {
      state.isOpen = !state.isOpen;

      if (state.isOpen) {
        tl.play();
        state.toggleLabel = "Close Menu";
      } else {
        tl.reverse();
        state.toggleLabel = "Open Menu";
      }
    },
  },
});
