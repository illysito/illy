import gsap from 'gsap'

import heroHandler from './hero_handler'
import getMeteo from '../../../api/openWeather'

function heroUI() {
  // canvases
  // const canvasWrapper = document.querySelector('.grid-canvas')
  const heroCanvas = document.querySelector('#grid-canvas')

  const darkModeRef = { current: 0.0 }
  const offsetRef = { current: 0.0 }
  const windRef = { current: 0.0 }
  const rainRef = { current: 0.0 }

  const updateUniforms = heroHandler(
    heroCanvas,
    darkModeRef,
    offsetRef,
    windRef,
    rainRef
  )

  getMeteo().then((meteo) => {
    windRef.current = meteo.normalizedWindSpeed
    rainRef.current = meteo.normalizedRain
    updateUniforms()
  })

  let ticking = false
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY
    offsetRef.current = gsap.utils.mapRange(0, 240, 0.0, 1.0, scrollY)

    if (!ticking) {
      ticking = true
      requestAnimationFrame(() => {
        updateUniforms()
        ticking = false
      })
    }
  })

  if (localStorage.getItem('isDarkModeOn') === 'true') {
    gsap.to(darkModeRef, {
      current: 1.0,
      duration: 0.8,
      onUpdate: updateUniforms,
    })
  }

  document.addEventListener('isDarkMode', () => {
    // darkModeRef.current = 1.0
    gsap.to(darkModeRef, {
      current: 1.0,
      duration: 0.8,
      onUpdate: updateUniforms,
    })
  })
  document.addEventListener('isLightMode', () => {
    // darkModeRef.current = 0.0
    gsap.to(darkModeRef, {
      current: 0.0,
      duration: 0.8,
      onUpdate: updateUniforms,
    })
  })
}

export default heroUI
