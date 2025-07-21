import gsap from 'gsap'

function nav() {
  // Query elements from DOM
  function domElementsQuery() {
    return {
      navLogo: document.querySelector('.nav-logo'),
      letters: document.querySelectorAll('.logo-letter'),
      lettersHidden: document.querySelectorAll('.logo-letter-hidden'),
      navTextWrappers: document.querySelectorAll('.is--navtext'),
      navText: document.querySelectorAll('.nav-text'),
      navTextHidden: document.querySelectorAll('.nav-text-hidden'),
    }
  }
  const domElements = domElementsQuery()

  function animateLogoIn() {
    gsap.to(domElements.navLogo, {
      scale: 0.95,
      duration: 0.4,
      ease: 'power1.inOut',
    })
    gsap.to(domElements.letters, {
      yPercent: -200,
      duration: 0.4,
      stagger: 0.05,
      ease: 'power3.inOut',
    })
    gsap.to(domElements.lettersHidden, {
      yPercent: -100,
      duration: 0.4,
      stagger: 0.05,
      ease: 'power3.inOut',
    })
  }

  function animateLogoOut() {
    gsap.to(domElements.navLogo, {
      scale: 1,
      duration: 0.4,
      ease: 'power1.inOut',
    })
    gsap.to(domElements.lettersHidden, {
      yPercent: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: 'power3.inOut',
    })
    gsap.to(domElements.letters, {
      yPercent: -100,
      duration: 0.4,
      stagger: 0.05,
      ease: 'power3.inOut',
    })
  }

  function animateNavTextIn(e) {
    const w = e.currentTarget
    const text = w.firstElementChild
    const textHidden = text.nextElementSibling
    gsap.to(text, {
      yPercent: -100,
      duration: 0.4,
      ease: 'power3.inOut',
    })
    gsap.to(textHidden, {
      yPercent: -100,
      duration: 0.4,
      ease: 'power3.inOut',
    })
  }

  function animateNavTextOut(e) {
    const w = e.currentTarget
    const text = w.firstElementChild
    const textHidden = text.nextElementSibling
    gsap.to(text, {
      yPercent: 0,
      duration: 0.4,
      ease: 'power3.inOut',
    })
    gsap.to(textHidden, {
      yPercent: 0,
      duration: 0.4,
      ease: 'power3.inOut',
    })
  }

  domElements.navLogo.addEventListener('mouseenter', animateLogoIn)
  domElements.navLogo.addEventListener('mouseleave', animateLogoOut)

  domElements.navTextWrappers.forEach((w) => {
    w.addEventListener('mouseenter', (e) => animateNavTextIn(e))
    w.addEventListener('mouseleave', (e) => animateNavTextOut(e))
  })
}

export default nav
