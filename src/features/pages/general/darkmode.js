import gsap from 'gsap'

// import heroHandler from './hero_handler'

function darkmodeToggle() {
  const duration = 0.6
  const dark = '#101010'
  const light = '#fff4e9'
  const pink = '#f83d8b'
  // const blue = '#0000ff'
  // body
  const body = document.body
  // shader texture
  // const darkModeOffset = { current: 0.0 }
  // texts
  const texts = document.querySelectorAll('h1,h2,h3,h4,h5,h6,p')
  // buttons
  const buttons = document.querySelectorAll('.hire-button')
  const darkmodeToggle = document.querySelectorAll('.darkmode-toggle')
  // lines
  const lines = document.querySelectorAll('.work-line')
  const lineOutline = document.querySelector('.line-outline')
  // dots
  const dots = document.querySelectorAll('.metdata-dot')
  const darkmodeBall = document.querySelector('.darkmode-ball')

  function toDark() {
    gsap.to(body, {
      backgroundColor: dark,
      duration: duration,
    })
    gsap.to(texts, {
      color: light,
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
    gsap.to([dots, darkmodeBall], {
      backgroundColor: pink,
      duration: duration,
    })
    // gsap.to(darkModeOffset, {
    //   current: 1.0,
    //   duration: duration,
    //   onComplete: updateUniforms,
    // })
  }
  toDark()
}

export default darkmodeToggle
