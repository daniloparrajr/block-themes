/**
 * WordPress dependencies
 */
import { store } from "@wordpress/interactivity";

const gsap = window.gsap;

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
