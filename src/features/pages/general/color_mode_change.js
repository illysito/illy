import gsap from 'gsap'

import Anim from '../../helpers/anim.js'

const D = Anim.D

// import heroHandler from './hero_handler'

function colorModeChange() {
  const html = document.documentElement
  const body = document.body
  const isHome = body.classList.contains('body__home')
  const isWork = body.classList.contains('body__work')
  // const isCaseStudy = body.classList.contains('body__case')

  // General -----------------
  const logoDark = document.querySelector('.nav-logo')
  const logoWhite = document.querySelector('.nav-logo-white')
  const buttonTexts = document.querySelectorAll('.butt-text')
  const buttonTextsHidden = document.querySelectorAll('.butt-text-hidden')
  const buttonTextsArr = [buttonTexts, buttonTextsHidden]

  // Home ------------------
  // imgs
  const darkArrows = document.querySelectorAll('.view-img')
  const lightArrows = document.querySelectorAll('.view-img-white')
  const darkLiveArrows = document.querySelectorAll('.live-web-wrapper')
  const lightLiveArrows = document.querySelectorAll('.live-web-wrapper-white')
  const darkWorkArrows = document.querySelectorAll('.work-arrow')
  const lightWorkArrows = document.querySelectorAll('.work-arrow-white')
  const darkMoons = document.querySelector('.black-moon-wrapper')
  const lightMoons = document.querySelector('.white-moon-wrapper')
  const pinkFooterWrapper = document.querySelector(
    '.footer-img-wrapper.is--pink'
  )
  // buttons (need to do this because of flashy artifact)
  const hireButton = document.querySelector('.hire-button')
  const hireButton2 = document.querySelector('.hire-button-2')
  const workButton = document.querySelector('.work-button')
  const labButton = document.querySelector('.lab-button')
  const workButtonMob = document.querySelector('.work-button')
  const labButtonMob = document.querySelector('.lab-button')
  const buttonsArr = [
    hireButton,
    hireButton2,
    workButton,
    labButton,
    workButtonMob,
    labButtonMob,
  ]
  // type
  const projectHeaders = document.querySelectorAll('.work-h')
  // header dots
  // const headerDots = document.querySelectorAll('.header-dot')

  // Case studies

  const duration = D.slow

  function updateButtons() {
    const rootStyles = getComputedStyle(document.documentElement)
    const typeColor = rootStyles.getPropertyValue('--type-color').trim()
    if (isHome) {
      gsap.to(buttonTextsArr, {
        color: typeColor,
      })
      gsap.to(buttonsArr, {
        borderColor: typeColor,
      })
    }
  }

  function updateType() {
    const rootStyles = getComputedStyle(document.documentElement)
    const typeColor = rootStyles.getPropertyValue('--type-color').trim()
    if (isHome) {
      gsap.to(projectHeaders, {
        color: typeColor,
      })
    }
  }

  // function updateHeroUIButtons() {
  //   const rootStyles = getComputedStyle(document.documentElement)
  //   const typeColor = rootStyles.getPropertyValue('--type-color').trim()
  //   headerDots.forEach((h) => {
  //     if (!h.classList.contains('is--active')) {
  //       gsap.to(h, {
  //         borderColor: typeColor,
  //       })
  //     }
  //   })
  // }

  function toLight() {
    localStorage.setItem('isDarkModeOn', 'false')
    gsap.to(logoDark, {
      opacity: 1,
      duration: duration,
    })
    gsap.to(logoWhite, {
      opacity: 0,
      duration: duration,
    })
    if (isHome) {
      gsap.to([darkMoons, darkArrows, darkLiveArrows], {
        opacity: 1,
        duration: duration,
      })
      gsap.to([lightMoons, lightArrows, lightLiveArrows], {
        opacity: 0,
        duration: duration,
      })
      gsap.to(pinkFooterWrapper, {
        opacity: 0,
        duration: duration,
      })
    } else if (isWork) {
      gsap.to(darkWorkArrows, {
        opacity: 1,
        duration: duration,
      })
      gsap.to(lightWorkArrows, {
        opacity: 0,
        duration: duration,
      })
    }
    html.setAttribute('data-wf-mode', 'base')
  }

  function toLight2() {
    localStorage.setItem('isDarkModeOn', 'false')
    gsap.to(logoDark, {
      opacity: 1,
      duration: duration,
    })
    gsap.to(logoWhite, {
      opacity: 0,
      duration: duration,
    })
    if (isHome) {
      gsap.to([darkMoons, darkArrows, darkLiveArrows], {
        opacity: 1,
        duration: duration,
      })
      gsap.to([lightMoons, lightArrows, lightLiveArrows], {
        opacity: 0,
        duration: duration,
      })
      gsap.to(pinkFooterWrapper, {
        opacity: 0,
        duration: duration,
      })
    } else if (isWork) {
      gsap.to(darkWorkArrows, {
        opacity: 1,
        duration: duration,
      })
      gsap.to(lightWorkArrows, {
        opacity: 0,
        duration: duration,
      })
    }
    html.setAttribute('data-wf-mode', 'base-2')
  }

  function toDark() {
    localStorage.setItem('isDarkModeOn', 'true')
    gsap.to(logoDark, {
      opacity: 0,
      duration: duration,
    })
    gsap.to(logoWhite, {
      opacity: 1,
      duration: duration,
    })
    if (isHome) {
      gsap.to([darkMoons, darkArrows, darkLiveArrows], {
        opacity: 0,
        duration: duration,
      })
      gsap.to([lightMoons, lightArrows, lightLiveArrows], {
        opacity: 1,
        duration: duration,
      })
      gsap.to(pinkFooterWrapper, {
        opacity: 0,
        duration: duration,
      })
    } else if (isWork) {
      gsap.to(darkWorkArrows, {
        opacity: 0,
        duration: duration,
      })
      gsap.to(lightWorkArrows, {
        opacity: 1,
        duration: duration,
      })
    }
    html.setAttribute('data-wf-mode', 'dark')
  }

  function toDark2() {
    localStorage.setItem('isDarkModeOn', 'true')
    gsap.to(logoDark, {
      opacity: 0,
      duration: duration,
    })
    gsap.to(logoWhite, {
      opacity: 1,
      duration: duration,
    })
    if (isHome) {
      gsap.to([darkMoons, darkArrows, darkLiveArrows], {
        opacity: 0,
        duration: duration,
      })
      gsap.to([lightMoons, lightArrows, lightLiveArrows], {
        opacity: 1,
        duration: duration,
      })
      gsap.to(pinkFooterWrapper, {
        opacity: 1,
        duration: duration,
      })
    } else if (isWork) {
      gsap.to(darkWorkArrows, {
        opacity: 0,
        duration: duration,
      })
      gsap.to(lightWorkArrows, {
        opacity: 1,
        duration: duration,
      })
    }
    html.setAttribute('data-wf-mode', 'dark-2')
  }

  document.addEventListener('theme:light-accent1', () => {
    toLight()
    updateButtons()
    // updateHeroUIButtons()
    updateType()
  })
  document.addEventListener('theme:light-accent2', () => {
    toLight2()
    updateButtons()
    // updateHeroUIButtons()
    updateType()
  })
  document.addEventListener('theme:dark-accent1', () => {
    toDark()
    updateButtons()
    // updateHeroUIButtons()
    updateType()
  })
  document.addEventListener('theme:dark-accent2', () => {
    toDark2()
    updateButtons()
    // updateHeroUIButtons()
    updateType()
  })
}

export default colorModeChange
