import gsap from 'gsap'

// import heroHandler from './hero_handler'

function darkmodeToggle() {
  const duration = 0.8
  const dark = '#101010'
  const light = '#fff4e9'

  // console.log(accentDark, accentLight)

  // body
  const body = document.body
  // shader texture
  // const darkModeOffset = { current: 0.0 }
  // texts
  const texts = document.querySelectorAll(
    'h1,h2,h3,h4,h5,h6,p,span,label,textarea,.form-field,a'
  )
  const semiTranspText = document.querySelector('.about-type-h')
  // nav logo
  const logoDark = document.querySelector('.nav-logo')
  const logoWhite = document.querySelector('.nav-logo-white')
  // buttons
  const buttons = document.querySelectorAll('.hire-button')
  const buttonCircle = document.querySelector('.fill-circle')
  const darkmodeToggle = document.querySelectorAll('.darkmode-toggle')
  const accentToggle = document.querySelectorAll('.accent-toggle')
  // lines
  const lines = document.querySelectorAll('.work-line')
  const lineOutline = document.querySelectorAll('.line-outline')
  // const circle = document.querySelectorAll('.circle-wrapper')
  // dots
  const dots = document.querySelectorAll('.metdata-dot')
  const darkmodeBall = document.querySelector('.darkmode-ball')
  const accentBall = document.querySelector('.accent-ball')
  // overlays
  const canvasOverlays = document.querySelectorAll('.canvas-overlay')
  // form
  const formFields = document.querySelectorAll('.form-field,textarea')
  const formButton = document.querySelector('.submit-button')
  // moons
  const darkMoons = document.querySelector('.black-moon-wrapper')
  const lightMoons = document.querySelector('.white-moon-wrapper')
  // arrows
  const darkArrows = document.querySelectorAll('.view-img')
  const lightArrows = document.querySelectorAll('.view-img-white')
  const darkLiveArrows = document.querySelectorAll('.live-web-wrapper')
  const lightLiveArrows = document.querySelectorAll('.live-web-wrapper-white')

  function toDark() {
    localStorage.setItem('isDarkModeOn', 'true')
    const accentDark = localStorage.getItem('accentDark')
    gsap.to(body, {
      backgroundColor: dark,
      duration: duration,
    })
    // Single elements OPACITY
    gsap.to(logoDark, {
      opacity: 0,
      duration: duration,
    })
    gsap.to(logoWhite, {
      opacity: 1,
      duration: duration,
    })
    // Node lists OPACITY
    gsap.to([darkMoons, darkArrows, darkLiveArrows], {
      opacity: 0,
      duration: duration,
    })
    gsap.to([lightMoons, lightArrows, lightLiveArrows], {
      opacity: 1,
      duration: duration,
    })
    // TEXTS
    gsap.to(texts, {
      color: light,
      duration: duration,
    })
    gsap.to(formButton, {
      color: dark,
      duration: duration,
    })
    gsap.to(semiTranspText, {
      color: '#fff4e9bf',
      duration: duration,
    })
    gsap.to([buttons, darkmodeToggle, accentToggle, formFields], {
      borderColor: light,
      duration: duration,
    })
    gsap.to(canvasOverlays, {
      backgroundColor: dark,
      duration: duration,
    })
    gsap.to([lines, lineOutline, formButton], {
      backgroundColor: light,
      duration: duration,
    })
    gsap.to([dots, darkmodeBall, accentBall, buttonCircle], {
      backgroundColor: `${accentDark}`,
      duration: duration,
    })
  }

  function toLight() {
    localStorage.setItem('isDarkModeOn', 'false')
    const accentLight = localStorage.getItem('accentLight')
    gsap.to(body, {
      backgroundColor: light,
      duration: duration,
    })
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
    gsap.to(texts, {
      color: dark,
      duration: duration,
    })
    gsap.to(formButton, {
      color: light,
      duration: duration,
    })
    gsap.to(semiTranspText, {
      color: '#101010bf',
      duration: duration,
    })
    gsap.to([buttons, darkmodeToggle, accentToggle, formFields], {
      borderColor: dark,
      duration: duration,
    })
    gsap.to(canvasOverlays, {
      backgroundColor: light,
      duration: duration,
    })
    gsap.to([lines, lineOutline, formButton], {
      backgroundColor: dark,
      duration: duration,
    })
    gsap.to([dots, darkmodeBall, accentBall, buttonCircle], {
      backgroundColor: `${accentLight}`,
      duration: duration,
    })
  }

  document.addEventListener('isDarkMode', () => {
    toDark()
  })
  document.addEventListener('isLightMode', () => {
    toLight()
  })
}

export default darkmodeToggle
