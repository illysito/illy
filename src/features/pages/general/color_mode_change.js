import gsap from 'gsap'

// import heroHandler from './hero_handler'

function colorModeChange() {
  const html = document.documentElement

  // IMGS
  const darkArrows = document.querySelectorAll('.view-img')
  const lightArrows = document.querySelectorAll('.view-img-white')
  const darkLiveArrows = document.querySelectorAll('.live-web-wrapper')
  const lightLiveArrows = document.querySelectorAll('.live-web-wrapper-white')
  const darkMoons = document.querySelector('.black-moon-wrapper')
  const lightMoons = document.querySelector('.white-moon-wrapper')
  const logoDark = document.querySelector('.nav-logo')
  const logoWhite = document.querySelector('.nav-logo-white')

  const duration = 0.8

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
    gsap.to([darkMoons, darkArrows, darkLiveArrows], {
      opacity: 1,
      duration: duration,
    })
    gsap.to([lightMoons, lightArrows, lightLiveArrows], {
      opacity: 0,
      duration: duration,
    })
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
    gsap.to([darkMoons, darkArrows, darkLiveArrows], {
      opacity: 1,
      duration: duration,
    })
    gsap.to([lightMoons, lightArrows, lightLiveArrows], {
      opacity: 0,
      duration: duration,
    })
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
    gsap.to([darkMoons, darkArrows, darkLiveArrows], {
      opacity: 0,
      duration: duration,
    })
    gsap.to([lightMoons, lightArrows, lightLiveArrows], {
      opacity: 1,
      duration: duration,
    })
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
    gsap.to([darkMoons, darkArrows, darkLiveArrows], {
      opacity: 0,
      duration: duration,
    })
    gsap.to([lightMoons, lightArrows, lightLiveArrows], {
      opacity: 1,
      duration: duration,
    })
    html.setAttribute('data-wf-mode', 'dark-2')
  }

  document.addEventListener('theme:light-accent1', () => {
    toLight()
  })
  document.addEventListener('theme:light-accent2', () => {
    toLight2()
  })
  document.addEventListener('theme:dark-accent1', () => {
    toDark()
  })
  document.addEventListener('theme:dark-accent2', () => {
    toDark2()
  })
}

export default colorModeChange
