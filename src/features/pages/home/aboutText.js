import gsap from 'gsap'
import SplitType from 'split-type'

function aboutText() {
  const aboutH = document.querySelectorAll('.about-type-h')

  const splitH = new SplitType(aboutH, {
    types: 'words',
  })

  gsap.set(splitH.words, {
    opacity: 0,
  })

  gsap.to(splitH.words, {
    opacity: 1,
    stagger: 0.01,
    duration: 0.1,
    scrollTrigger: {
      trigger: aboutH,
      start: 'top bottom',
      // end: 'top 80%',
      scrub: 1,
    },
  })
}

export default aboutText
