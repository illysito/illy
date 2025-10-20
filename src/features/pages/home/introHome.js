import gsap from 'gsap'
// import SplitType from 'split-type'

function introHome() {
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
      // heading
      headings: document.querySelectorAll('.hero-h'),
      // img
      canvas_wrapper: document.querySelector('.hero-canvas'),
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

  function animateCanvas() {
    gsap.to(domElements.canvas_wrapper, {
      opacity: 1,
      scale: 1,
      duration: 3 * dur,
      ease: 'power.out',
    })
  }

  // function animateHeading() {
  //   const splitHeading_1 = new SplitType(domElements.headings[0], {
  //     types: 'chars',
  //   })
  //   // const splitHeading_2 = new SplitType(domElements.headings[1], {
  //   //   types: 'chars',
  //   // })
  //   gsap.from(splitHeading_1.chars, {
  //     xPercent: -100,
  //     opacity: 0,
  //     duration: dur,
  //     ease: ease2,
  //     stagger: {
  //       each: 0.05,
  //       from: 'end', // 👈 starts from the last element
  //     },
  //   })
  //   // gsap.from(splitHeading_2.chars, {
  //   //   xPercent: 100,
  //   //   opacity: 0,
  //   //   duration: dur,
  //   //   ease: ease2,
  //   //   stagger: 0.05,
  //   // })
  //   gsap.to(domElements.headings, {
  //     opacity: 1,
  //     duration: dur,
  //   })
  // }

  // function animateImg() {
  //   gsap.to(domElements.canvas_wrapper, {
  //     scale: 1,
  //     duration: 2 * dur,
  //     ease: ease3,
  //   })
  // }

  // INIT
  function init() {
    animateNav()
    // animateHeading()
    animateCanvas()
  }

  init()
}

export default introHome
