let tl = gsap.timeline();

function timer() {
  var a = 0;
  setInterval(() => {
    a = a + Math.floor(Math.random() * 20);
    if (a < 100) {
      document.querySelector(".loader h1").innerHTML = a + "%";
      console.log(a);
    } else {
      a = 100;
      document.querySelector(".loader h1").innerHTML = a + "%";
    }
  }, 150);
}

tl.to(".loader", {
  delay: 1,
  duration: 0.5,
  onStart: timer(),
});

tl.to(".loader", {
  y: -1500,
  delay: 0.5,
  duration: 1,
});

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
  transform: "translateX(-80%)",
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
