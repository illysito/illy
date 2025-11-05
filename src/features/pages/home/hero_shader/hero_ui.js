import gsap from 'gsap'

import heroHandler from './hero_handler'
import getMeteo from '../../../api/openWeather'

function heroUI() {
  // DOM
  const heroCanvas = document.querySelector('#hero-canvas')
  const sliderBalls = document.querySelectorAll('.slider-ball')
  const sliderRails = document.querySelectorAll('.slider-hero')

  // MAIN UNIFORMS
  const darkModeRef = { current: 0.0 }
  const offsetRef = { current: 0.0 }

  // WEATHER UNIFORMS
  const windRef = { current: 0.0 }
  const rainRef = { current: 0.0 }

  // CONTROL UNIFROMS
  const distortionControlXRef = { current: 0.0, stored: 0.0 } // from 0.0 to 0.4
  const distortionControlYRef = { current: 0.0, stored: 0.0 } // from 0.0 to 0.4
  const tearRef = { current: 0.5, stored: 0.5 } // from 0.0 to 80.0
  const blocksRef = { current: 0.01, stored: 0.01 } // from 0.1 to 1.0

  // UNIFORM MANAGEMENT
  const updateUniforms = heroHandler(
    heroCanvas,
    darkModeRef,
    offsetRef,
    windRef,
    rainRef,
    blocksRef,
    distortionControlXRef,
    distortionControlYRef,
    tearRef
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

  document.addEventListener('nature-open', () => {
    gsap.to([distortionControlXRef, distortionControlYRef], {
      current: 0.0,
      duration: 0.6,
    })
    gsap.to(tearRef, {
      current: 0.5,
      duration: 0.6,
    })
    gsap.to(blocksRef, {
      current: 0.1,
      duration: 0.6,
      onUpdate: scheduleUpdate,
    })
  })
  document.addEventListener('control-open', () => {
    gsap.to(distortionControlXRef, {
      current: distortionControlXRef.stored,
      duration: 0.6,
    })
    gsap.to(distortionControlYRef, {
      current: distortionControlYRef.stored,
      duration: 0.6,
    })
    gsap.to(tearRef, {
      current: tearRef.stored,
      duration: 0.6,
    })
    gsap.to(blocksRef, {
      current: blocksRef.stored,
      duration: 0.6,
      onUpdate: scheduleUpdate,
    })
  })

  // METEO
  getMeteo().then((meteo) => {
    windRef.current = meteo.normalizedWindSpeed
    rainRef.current = meteo.normalizedRain
    scheduleUpdate()
  })

  // SLIDER LOGIC
  let isDragging = false

  const sliders = [0, 0, 0, 0]
  const minimums = [0.0, 0.5, 0.0, 0.1]
  const maximums = [0.4, 2.0, 1.0, 0.3]

  function selectSlider(index) {
    for (let i = 0; i < sliders.length; i++) {
      sliders[i] = 0
    }
    sliders[index] = 1
  }
  let sliderRect = sliderRails[0].getBoundingClientRect()
  function updateBallPosition(clientX) {
    // Calculate position relative to slider
    let currentBall
    let currentMin
    let currentMax
    let activeIndex = 0
    for (let i = 0; i < sliders.length; i++) {
      if (sliders[i] === 1) {
        currentBall = sliderBalls[i]
        currentMin = minimums[i]
        currentMax = maximums[i]
        activeIndex = i
        break
      }
    }

    let x = clientX - sliderRect.left

    // Clamp within slider bounds
    const min = 0
    const max = sliderRect.width - 12
    x = Math.min(Math.max(x, min), max)

    // Update ball position (in pixels)
    currentBall.style.left = `${x}px`

    // Optional: compute normalized value (0–1)
    const value = Math.min(x / max, 0.95)
    const mappedValue = gsap.utils.mapRange(
      0,
      0.95,
      currentMin,
      currentMax,
      value
    )

    if (activeIndex === 0) {
      distortionControlXRef.current = mappedValue
      distortionControlXRef.stored = distortionControlXRef.current
    } else if (activeIndex === 1) {
      distortionControlYRef.current = mappedValue
      distortionControlYRef.stored = distortionControlYRef.current
    } else if (activeIndex === 2) {
      tearRef.current = mappedValue
      tearRef.stored = tearRef.current
    } else if (activeIndex === 3) {
      blocksRef.current = mappedValue
      blocksRef.stored = blocksRef.current
    }

    scheduleUpdate()
  }
  sliderBalls.forEach((ball, index) => {
    ball.addEventListener('mousedown', () => {
      isDragging = true
      selectSlider(index)
    })
  })
  sliderBalls.forEach((ball) => {
    ball.addEventListener('mouseover', () => {
      gsap.to(ball, {
        scale: 1.4,
        borderRadius: 0,
        duration: 0.2,
      })
    })
    ball.addEventListener('mouseleave', () => {
      gsap.to(ball, {
        scale: 1,
        borderRadius: 120,
        duration: 0.2,
      })
    })
  })
  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return
    updateBallPosition(e.clientX)
  })
  document.addEventListener('mouseup', () => {
    // if (isDragging) restart()
    isDragging = false
    // restart()
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

export default heroUI
