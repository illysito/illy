import gsap from 'gsap'

import getMeteo from '../api/openWeather'

function darkmodeButton() {
  // const isDarkModeOn = localStorage.getItem('isDarkModeOn')

  const button = document.querySelector('.darkmode-toggle')

  const isDarkMode = new Event('isDarkMode')
  const isLightMode = new Event('isLightMode')

  let isDarkModeClicked = false
  let sunsetTime = 0
  let sunriseTime = 0
  const currentTime = new Date()
  const now = Math.floor(currentTime.getTime() / 1000)

  function buttonHoverIn(b) {
    const ball = b.firstElementChild

    gsap.to(ball, {
      scale: 0.8,
      duration: 0.2,
    })
  }
  function buttonHoverOut(b) {
    const ball = b.firstElementChild

    gsap.to(ball, {
      scale: 1,
      duration: 0.2,
    })
  }
  function toggleMode(b) {
    const ball = b.firstElementChild

    if (!isDarkModeClicked) {
      gsap.to(ball, {
        scale: 1,
        x: 18,
        duration: 0.4,
        ease: 'power.out',
      })
      document.dispatchEvent(isDarkMode)
    } else {
      gsap.to(ball, {
        scale: 1,
        x: 0,
        duration: 0.4,
        ease: 'power.out',
      })
      document.dispatchEvent(isLightMode)
    }

    isDarkModeClicked = !isDarkModeClicked
    // console.log(isDarkModeClicked)
  }

  getMeteo().then((meteo) => {
    sunsetTime = meteo.sunsetTime
    sunriseTime = meteo.sunriseTime
    if (now >= sunsetTime || now < sunriseTime) {
      isDarkModeClicked = false
      toggleMode(button)
    }
  })

  if (localStorage.getItem('isDarkModeOn') === 'true') {
    toggleMode(button)
  }

  button.addEventListener('mouseenter', (e) => {
    const b = e.currentTarget
    buttonHoverIn(b)
  })
  button.addEventListener('mouseleave', (e) => {
    const b = e.currentTarget
    buttonHoverOut(b)
  })
  button.addEventListener('click', (e) => {
    const b = e.currentTarget
    toggleMode(b)
  })
}

export default darkmodeButton
