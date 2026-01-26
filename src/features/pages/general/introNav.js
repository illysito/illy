import gsap from 'gsap'
// import SplitType from 'split-type'

function introNav() {
  let dur = 0.6
  // let ease1 = 'power1.inOut'
  let ease2 = 'power2.inOut'
  // let ease3 = 'power3.inOut'
  // let ease4 = 'power4.inOut'

  function domElementsQuery() {
    return {
      // nav
      navLogo: document.querySelector('.nav-logo'),
      navLogoWhite: document.querySelector('.nav-logo-white'),
      logoLetters: document.querySelectorAll('.logo-letter'),
      logoLettersWhite: document.querySelectorAll('.logo-letter-white'),
      navWrapper: document.querySelector('.navigation__wrapper'),
    }
  }
  const domElements = domElementsQuery()

  function animateNav() {
    if (localStorage.getItem('isDarkModeOn') === 'true') {
      gsap.to(domElements.navLogoWhite, {
        opacity: 1,
        duration: dur,
        ease: ease2,
      })
    } else {
      gsap.to(domElements.navLogo, {
        opacity: 1,
        duration: dur,
        ease: ease2,
      })
    }
    gsap.to(domElements.logoLetters, {
      yPercent: -100,
      stagger: 0.1,
      duration: dur,
      ease: ease2,
    })
    gsap.to(domElements.logoLettersWhite, {
      yPercent: -100,
      stagger: 0.1,
      duration: dur,
      ease: ease2,
    })
    gsap.to(domElements.navWrapper, {
      opacity: 1,
      duration: 4 * dur,
    })
  }

  animateNav()
}

export default introNav
