import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

function aboutText() {
  const aboutH = document.querySelectorAll('.about-type-h')
  const aboutCanvas = document.querySelector('.work-canvas.is--about')

  const splitH = new SplitType(aboutH, {
    types: 'words',
  })

  gsap.set(splitH.words, {
    opacity: 0,
  })

  gsap.to(splitH.words, {
    opacity: 1,
    stagger: 0.01,
    duration: 0.05,
    scrollTrigger: {
      trigger: aboutH,
      start: 'top 92%',
      end: 'top 44%',
      scrub: 0.8,
    },
  })

  gsap.to(aboutCanvas, {
    y: -160,
    scale: 1.2,
    scrollTrigger: {
      trigger: aboutCanvas,
      start: 'top 98%',
      end: 'bottom 12%',
      scrub: 1.2,
      markers: false,
    },
  })
}

export default aboutText
