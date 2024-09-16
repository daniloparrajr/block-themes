import gsap from "first-wave-gsap";
import ScrollTrigger from "first-wave-scroll-trigger";

gsap.registerPlugin(ScrollTrigger);

const animatedElements = document.querySelectorAll(".is-animated");
const elements = [];

animatedElements.forEach((animatedElement) => {
  elements.push(animatedElement);
});

gsap.to(".is-animated", {
  scrollTrigger: ".is-animated", // start animation when ".box" enters the viewport
  opacity: 1,
  y: 0,
  stagger: 0.2,
  ease: "sine.out",
});
