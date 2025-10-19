import gsap from 'gsap'

// import heroHandler from './hero_handler'

function darkmodeToggle() {
  const duration = 0.8
  const dark = '#101010'
  const light = '#fff4e9'
  const pink = '#f83d8b'
  const blue = '#0000ff'
  // body
  const body = document.body
  // shader texture
  // const darkModeOffset = { current: 0.0 }
  // texts
  const texts = document.querySelectorAll('h1,h2,h3,h4,h5,h6,p,span')
  const semiTranspText = document.querySelector('.about-type-h')
  // buttons
  const buttons = document.querySelectorAll('.hire-button')
  const buttonCircle = document.querySelector('.fill-circle')
  const darkmodeToggle = document.querySelectorAll('.darkmode-toggle')
  // lines
  const lines = document.querySelectorAll('.work-line')
  const lineOutline = document.querySelectorAll('.line-outline')
  // dots
  const dots = document.querySelectorAll('.metdata-dot')
  const darkmodeBall = document.querySelector('.darkmode-ball')

  function toDark() {
    localStorage.setItem('isDarkModeOn', 'true')
    gsap.to(body, {
      backgroundColor: dark,
      duration: duration,
    })
    gsap.to(texts, {
      color: light,
      duration: duration,
    })
    gsap.to(semiTranspText, {
      color: '#fff4e9bf',
      duration: duration,
    })
    gsap.to([buttons, darkmodeToggle], {
      borderColor: light,
      duration: duration,
    })
    gsap.to([lines, lineOutline], {
      backgroundColor: light,
      duration: duration,
    })
    gsap.to([dots, darkmodeBall, buttonCircle], {
      backgroundColor: pink,
      duration: duration,
    })
  }

  function toLight() {
    localStorage.setItem('isDarkModeOn', 'false')
    gsap.to(body, {
      backgroundColor: light,
      duration: duration,
    })
    gsap.to(texts, {
      color: dark,
      duration: duration,
    })
    gsap.to([buttons, darkmodeToggle], {
      borderColor: dark,
      duration: duration,
    })
    gsap.to([lines, lineOutline], {
      backgroundColor: dark,
      duration: duration,
    })
    gsap.to([dots, darkmodeBall, buttonCircle], {
      backgroundColor: blue,
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
