import gsap from 'gsap'

import heroHandlerMobile from './hero_handler_mobile'
// import Anim from '../../../helpers/anim'

function heroUIMobile() {
  // DOM
  const heroCanvas = document.querySelector('#hero-canvas-mobile')

  // MAIN UNIFORMS
  const darkModeRef = { current: 0.0 }
  const offsetRef = { current: 0.0 }
  const accRef = { current: 0.0 }

  // UNIFORM MANAGEMENT
  const updateUniforms = heroHandlerMobile(
    heroCanvas,
    darkModeRef,
    offsetRef,
    accRef
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

  // SHAKE
  window.addEventListener('devicemotion', (event) => {
    const acc = event.accelerationIncludingGravity // {x, y, z} in m/s²
    accRef.current = acc.y
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
