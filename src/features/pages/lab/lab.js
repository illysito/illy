import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Anim from '../../helpers/anim.js'

const D = Anim.D
const E = Anim.E

// // import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

async function lab() {
  function isMobile() {
    return window.innerWidth <= 767
  }

  function domQuery() {
    return {
      caseSection: document.querySelector('.case-section'),
      overlays: document.querySelectorAll('.lab-img-overlay'),
      imgs: document.querySelectorAll('.lab-img'),
    }
  }
  const DOM = domQuery()

  let delay = 0.1

  // overlays
  DOM.overlays.forEach((o, index) => {
    gsap.to(o, {
      delay: delay * index,
      duration: 1.2,
      yPercent: 100,
      ease: 'power3.inOut',
    })
  })

  // parallax
  DOM.imgs.forEach((img) => {
    gsap.to(img, {
      y: -20,
      duration: 1.2,
      scrollTrigger: {
        trigger: img,
        start: 'top 8%',
        end: 'bottom top',
        scrub: true,
      },
    })
  })

  // hover
  if (!isMobile()) {
    DOM.imgs.forEach((img) => {
      const imgWrapper = img.parentElement
      const txtWrapper = imgWrapper.nextElementSibling
      const overflowHiddenWrapper = txtWrapper.firstElementChild
      const title = overflowHiddenWrapper.firstElementChild
      const titleHidden = title.nextElementSibling
      console.log(title)

      img.addEventListener('mouseover', () => {
        gsap.to(img, {
          scale: 1.1,
          duration: 1.2,
          ease: 'power2.out',
        })
        gsap.to([title, titleHidden], {
          yPercent: -100,
          duration: D.med,
          ease: E.eio,
        })
      })

      img.addEventListener('mouseleave', () => {
        gsap.to(img, {
          scale: 1,
          duration: 1.2,
          ease: 'power2.out',
        })
        gsap.to([title, titleHidden], {
          yPercent: 0,
          duration: D.med,
          ease: E.eio,
        })
      })
    })
  }
}

export default lab
