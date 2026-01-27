import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
// import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

async function caseStudiesMisc() {
  function domQuery() {
    return {
      underscores: document.querySelectorAll('.underscore'),
      caseImgs: document.querySelectorAll('.case-img'),
      caseTitle: document.querySelector('.case-title'),
      caseSubtitles: document.querySelectorAll('.case-subtitle'),
      caseMetaH: document.querySelectorAll('.meta-h'),
      caseMetaP: document.querySelectorAll('.meta-p'),
      caseEnding: document.querySelectorAll('.case-ending'),
    }
  }
  const DOM = domQuery()

  // underscores
  gsap.to(DOM.underscores, {
    opacity: 0,
    duration: 0.6,
    repeat: -1,
    ease: 'power4.inOut',
    yoyo: true,
  })

  // parallax
  DOM.caseImgs.forEach((img) => {
    gsap.to(img, {
      yPercent: -12,
      scrollTrigger: {
        trigger: img,
        start: 'top 72%',
        end: 'bottom 20%',
        scrub: true,
        markers: false,
      },
    })
  })

  // reveal
  gsap.to([DOM.caseTitle, DOM.caseSubtitles, DOM.caseMetaH, DOM.caseMetaP], {
    yPercent: -100,
    duration: 1.2,
    ease: 'power2.out',
  })
  gsap.to(DOM.caseImgs, {
    opacity: 1,
    duration: 1.2,
    ease: 'power1.inOut',
  })
  DOM.caseEnding.forEach((ending) => {
    gsap.to(ending, {
      yPercent: -100,
      scrollTrigger: {
        trigger: ending,
        start: 'top 90%',
        end: 'top 40%',
      },
    })
  })
}

export default caseStudiesMisc
