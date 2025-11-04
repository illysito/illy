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
  // BUTTONS (need to do this because of flashy artifact)
  const buttonTexts = document.querySelectorAll('.butt-text')
  const buttonTextsHidden = document.querySelectorAll('.butt-text-hidden')
  const hireButton = document.querySelector('.hire-button')
  const golPlayButton = document.querySelectorAll('.gol-play-button')
  const golSeedButton = document.querySelectorAll('.gol-seed-button')
  const buttonTextsArr = [buttonTexts, buttonTextsHidden]
  const buttonsArr = [hireButton, golPlayButton, golSeedButton]

  const duration = 0.8

  function updateButtons() {
    const rootStyles = getComputedStyle(document.documentElement)
    const typeColor = rootStyles.getPropertyValue('--type-color').trim()
    gsap.to(buttonTextsArr, {
      color: typeColor,
    })
    gsap.to(buttonsArr, {
      borderColor: typeColor,
    })
  }

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
    updateButtons()
  })
  document.addEventListener('theme:light-accent2', () => {
    toLight2()
    updateButtons()
  })
  document.addEventListener('theme:dark-accent1', () => {
    toDark()
    updateButtons()
  })
  document.addEventListener('theme:dark-accent2', () => {
    toDark2()
    updateButtons()
  })
}

export default colorModeChange
