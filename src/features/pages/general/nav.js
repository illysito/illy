import gsap from 'gsap'

import Anim from '../../helpers/anim.js'

const D = Anim.D
const E = Anim.E

function nav() {
  // Query elements from DOM
  function domElementsQuery() {
    return {
      nav: document.querySelector('.nav__section'),
      navLogo: document.querySelector('.nav-logo'),
      navLogoWhite: document.querySelector('.nav-logo-white'),
      letters: document.querySelectorAll('.logo-letter'),
      lettersWhite: document.querySelectorAll('.logo-letter-white'),
      lettersHidden: document.querySelectorAll('.logo-letter-hidden'),
      lettersHiddenWhite: document.querySelectorAll(
        '.logo-letter-hidden-white'
      ),
      navTextWrappers: document.querySelectorAll('.nav-link'),
      navText: document.querySelectorAll('.nav-text'),
      navTextHidden: document.querySelectorAll('.nav-text-hidden'),
    }
  }
  const domElements = domElementsQuery()

  if (localStorage.getItem('isDarkModeOn') === 'true') {
    gsap.set(domElements.navLogo, {
      opacity: 0,
    })
  } else {
    gsap.set(domElements.navLogoWhite, {
      opacity: 0,
    })
  }

  function animateLogoIn() {
    gsap.to([domElements.navLogo, domElements.navLogoWhite], {
      scale: 0.95,
      duration: D.med,
      ease: E.eio,
    })
    gsap.to(domElements.letters, {
      yPercent: -200,
      duration: D.med,
      stagger: 0.05,
      ease: E.eio,
    })
    gsap.to(domElements.lettersWhite, {
      yPercent: -200,
      duration: D.med,
      stagger: 0.05,
      ease: E.eio,
    })
    gsap.to(domElements.lettersHidden, {
      yPercent: -100,
      duration: D.med,
      stagger: 0.05,
      ease: E.eio,
    })
    gsap.to(domElements.lettersHiddenWhite, {
      yPercent: -100,
      duration: D.med,
      stagger: 0.05,
      ease: E.eio,
    })
  }

  function animateLogoOut() {
    gsap.to([domElements.navLogo, domElements.navLogoWhite], {
      scale: 1,
      duration: D.med,
      ease: E.eio,
    })
    gsap.to(domElements.lettersHidden, {
      yPercent: 0,
      duration: D.med,
      stagger: 0.05,
      ease: E.eio,
    })
    gsap.to(domElements.lettersHiddenWhite, {
      yPercent: 0,
      duration: D.med,
      stagger: 0.05,
      ease: E.eio,
    })
    gsap.to(domElements.letters, {
      yPercent: -100,
      duration: D.med,
      stagger: 0.05,
      ease: E.eio,
    })
    gsap.to(domElements.lettersWhite, {
      yPercent: -100,
      duration: D.med,
      stagger: 0.05,
      ease: E.eio,
    })
  }

  function animateNavTextIn(e) {
    const w = e.currentTarget
    const text = w.firstElementChild
    const textHidden = text.nextElementSibling
    gsap.to(text, {
      yPercent: -100,
      duration: D.med,
      ease: E.eio,
    })
    gsap.to(textHidden, {
      yPercent: -100,
      duration: D.med,
      ease: E.eio,
    })
  }

  function animateNavTextOut(e) {
    const w = e.currentTarget
    const text = w.firstElementChild
    const textHidden = text.nextElementSibling
    gsap.to(text, {
      yPercent: 0,
      duration: D.med,
      ease: E.p2io,
    })
    gsap.to(textHidden, {
      yPercent: 0,
      duration: D.med,
      ease: E.p2io,
    })
  }

  let lastScroll = 0
  let ticking = false

  function hideOrShowOnScroll() {
    const currentScroll = window.scrollY
    const scrollDirection = currentScroll - lastScroll

    if (scrollDirection > 20) {
      gsap.to(domElements.nav, {
        y: -0.14 * window.innerHeight,
        duration: 2 * D.slow,
        ease: E.eo,
      })
    } else if (scrollDirection < 0) {
      gsap.to(domElements.nav, {
        y: 0,
        duration: D.slow,
        ease: E.eo,
      })
    } else {
      ticking = false
      return
    }
    lastScroll = currentScroll
    ticking = false
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(hideOrShowOnScroll)
      ticking = true
    }
  })

  domElements.navLogo.addEventListener('mouseenter', animateLogoIn)
  domElements.navLogo.addEventListener('mouseleave', animateLogoOut)

  domElements.navTextWrappers.forEach((w) => {
    w.addEventListener('mouseenter', (e) => animateNavTextIn(e))
    w.addEventListener('mouseleave', (e) => animateNavTextOut(e))
  })
}

export default nav
