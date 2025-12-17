import gsap from 'gsap'
import { nodeName } from 'jquery'

import heroHandlerMobile from './hero_handler_mobile'
// import Anim from '../../../helpers/anim'

function heroUIMobile() {
  // DOM
  const heroCanvas = document.querySelector('#hero-canvas-mobile')
  const motionButton = document.querySelector('.motion-button')

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
  if (
    typeof DeviceMotionEvent.requestPermission === 'function' &&
    typeof DeviceMotionEvent !== 'undefined'
  ) {
    motionButton.addEventListener('click', async () => {
      gsap.to(motionButton, {
        scale: 0.97,
        duration: 0.2,
        ease: 'linear',
        onComplete: () => {
          gsap.to(motionButton, {
            scale: 1,
            duration: 0.2,
            ease: 'linear',
          })
        },
      })
      const res = await DeviceMotionEvent.requestPermission()
      if (res === 'granted') {
        gsap.to(motionButton, {
          opacity: 0,
          duration: 0.4,
          pointerEvents: nodeName,
        })
      } else {
        console.log('Motion permission denied')
        alert('motion denied!')
      }
    })
  }

  const GRAVITY = 9.8
  const SMOOTH = 0.8
  let smoothed = 0
  window.addEventListener('devicemotion', (event) => {
    const acc = event.accelerationIncludingGravity // {x, y, z} in m/s²
    if (!acc) return

    const delta = acc.y + GRAVITY // try x or z if this one feels wrong

    // Smooth it
    smoothed = SMOOTH * smoothed + (1 - SMOOTH) * delta

    // Scale down for subtle shader distortion
    accRef.current = smoothed * 0.05

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
