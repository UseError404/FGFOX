import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

const tlBody = gsap.timeline();
tlBody.fromTo('.wrapper',
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1,
  },
  '+=0.5',
)
.fromTo('.header .title',
  {
    yPercent: -100,
    opacity: 0,
  },
  {
    yPercent: 0,
    duration: 0.3,
    opacity: 1,
    ease: "power1.inOut",
  },
  '-=0.5',
  )

const bonus = document.querySelectorAll('.bonus');

// Create a media query for screens that are 992 pixels wide or larger
const mediaQuery768 = window.matchMedia('(min-width: 768px)');
// Check if the media query matches
if (mediaQuery768.matches) {
// create a timeline
  const tl = gsap.timeline({repeat: -1});
// add the animation to the timeline
  tl
    .to(bonus,
      1,
      {
        y: "+=30",
        ease: "power1.inOut",
        scale: 0.8,
      })
    .to(bonus,
      1,
      {
        y: "-=30",
        ease: "power1.inOut",
        scale: 1,
      })
    .from('.promotion-box',
      {
        scrollTrigger: {
          trigger: '.section-promotion',
          start: '200 center',
          scrub: true,
        },
        y: 40,
      }
    )

  const stClub = document.querySelector('.section-club');
  gsap.from(stClub.querySelectorAll('.box'),
    {
      scrollTrigger: {
        trigger: stClub,
        start: '100 center',
      },
      duration: 1,
      opacity: 0,
      y: -40,
      stagger: 0.3,
    }
  )

  const stSupport = document.querySelector('.section-support');
  gsap.from(stSupport.querySelectorAll('.item'),
    {
      scrollTrigger: {
        trigger: stSupport,
        start: '-350 center',
      },
      duration: 1,
      opacity: 0,
      y: -40,
      stagger: 0.3,
    }
  )
}
