import gsap from "first-wave-gsap";
import ScrollTrigger from "first-wave-scroll-trigger";

gsap.registerPlugin(ScrollTrigger);

const animatedElements = document.querySelectorAll("[data-fw-animation-group]");
let animationKeys = [];

animatedElements.forEach((el) => {
  animationKeys.push(el.dataset.fwAnimationGroup);
});

animationKeys = new Set(animationKeys);

animationKeys.forEach((key) => {
  gsap.to(`[data-fw-animation-group="${key}"]`, {
    scrollTrigger: `[data-fw-animation-group="${key}"]`,
    opacity: 1,
    y: 0,
    stagger: 0.2,
    ease: "sine.out",
  });
});
