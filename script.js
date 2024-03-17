let tl = gsap.timeline();

tl.from(".nav ,.page1 h1,.page1 h3", {
  y: "-100",

  duration: 1,
  stagger: 0.5,
  scale: 0,
});

tl.from(".page1 h2", {
  opacity: 0,
  duration: 2,
});

tl.to(".page1 h2", {
  transform: "translateX(-100%)",
  fontWeight: "100",
  scrollTrigger: {
    trigger: ".page1",
    scroller: "body",
    markers: true,
    start: "top 0",
    end: "top -400%",
    scrub: 3,
    pin: true,
  },
});
