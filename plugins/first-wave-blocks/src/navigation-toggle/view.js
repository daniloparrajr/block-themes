/**
 * WordPress dependencies
 */
import { store, getContext } from "@wordpress/interactivity";

import { gsap } from "gsap";

const tl = gsap
  .timeline({
    paused: true,
  })
  .to(".site-header-bottom", {
    height: "auto",
    duration: 0.4,
  });

store("first-wave/navigation-toggle", {
  actions: {
    toggle: () => {
      const context = getContext();
      context.isOpen = !context.isOpen;

      if (context.isOpen) {
        tl.play();
      } else {
        tl.reverse();
      }
    },
  },
});
