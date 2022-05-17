// "use strict";
//scroll reveal
// let ScrollReveal = require("scrollreveal");
import ScrollReveal from 'scrollreveal'
let slideDownHeader = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  interval: 200,
  cleanup: true,
};

ScrollReveal().reveal(".headerContent", slideDownHeader);

let slideDownMain = {
  distance: "70px",
  origin: "bottom",
  duration: 1000,
  interval: 300,
  cleanup: true,
  delay: 100,
};
ScrollReveal().reveal(".mainContent", slideDownMain);

const timelineContent = {
  distance: "50px",
  origin: "right",
  duration: 1000,
  interval: 100,
  delay: 100,
  cleanup: true,
};

ScrollReveal().reveal(".timelineSlide", timelineContent);









