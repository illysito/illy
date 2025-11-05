import gsap from 'gsap'

import heroHandlerMobile from './hero_handler_mobile'
import getMeteo from '../../../api/openWeather'
import Anim from '../../../helpers/anim'

function heroUIMobile() {
  // DOM
  const heroCanvas = document.querySelector('#hero-canvas-mobile')

  // MAIN UNIFORMS
  const darkModeRef = { current: 0.0 }
  const offsetRef = { current: 0.0 }

  // WEATHER UNIFORMS
  const windRef = { current: 0.0 }
  const rainRef = { current: 0.0 }

  // UNIFORM MANAGEMENT
  const updateUniforms = heroHandlerMobile(
    heroCanvas,
    darkModeRef,
    offsetRef,
    windRef,
    rainRef
  )

  let ticking = false
  function scheduleUpdate() {
    if (!ticking) {
      ticking = true
      requestAnimationFrame(() => {
        ticking = false
        updateUniforms()
      })
    }
  }

  // const D = Anim.D
  // const E = Anim.E

  // METEO
  getMeteo().then((meteo) => {
    windRef.current = meteo.normalizedWindSpeed
    rainRef.current = meteo.normalizedRain
    scheduleUpdate()
  })

  // SCROLL
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY
    offsetRef.current = gsap.utils.mapRange(0, 240, 0.0, 1.0, scrollY)
    scheduleUpdate()
  })

  // COLOR STATES
  if (localStorage.getItem('dark_state') === '1') {
    gsap.to(darkModeRef, {
      current: 1.0,
      duration: 0.8,
      onUpdate: scheduleUpdate,
    })
  }
  document.addEventListener('theme:dark-accent1', () => {
    // darkModeRef.current = 1.0
    gsap.to(darkModeRef, {
      current: 1.0,
      duration: 0.8,
      onUpdate: scheduleUpdate,
    })
  })
  document.addEventListener('theme:dark-accent2', () => {
    // darkModeRef.current = 1.0
    gsap.to(darkModeRef, {
      current: 1.0,
      duration: 0.8,
      onUpdate: scheduleUpdate,
    })
  })
  document.addEventListener('theme:light-accent1', () => {
    // darkModeRef.current = 0.0
    gsap.to(darkModeRef, {
      current: 0.0,
      duration: 0.8,
      onUpdate: scheduleUpdate,
    })
  })
  document.addEventListener('theme:light-accent2', () => {
    // darkModeRef.current = 0.0
    gsap.to(darkModeRef, {
      current: 0.0,
      duration: 0.8,
      onUpdate: scheduleUpdate,
    })
  })
}

export default heroUIMobile
