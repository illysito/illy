import gsap from 'gsap'

import heroHandler from './hero_handler'
import getMeteo from '../../../api/openWeather'

function heroUI() {
  // canvases
  // const canvasWrapper = document.querySelector('.grid-canvas')
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
  const blocksRef = { current: 0.1 } // from 0.1 to 1.0
  const distortionControlRef = { current: 0.0 } // from 0.0 to 0.4
  const driftControlRef = { current: 1.0 } // from 0.5 to 5.0
  const rainControlRef = { current: 0.0 } // from 0.0 to 80.0

  const updateUniforms = heroHandler(
    heroCanvas,
    darkModeRef,
    offsetRef,
    windRef,
    rainRef,
    blocksRef,
    distortionControlRef,
    driftControlRef,
    rainControlRef
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

  if (localStorage.getItem('dark_state') === '1') {
    gsap.to(darkModeRef, {
      current: 1.0,
      duration: 0.8,
      onUpdate: updateUniforms,
    })
  }

  document.addEventListener('theme:dark-accent1', () => {
    // darkModeRef.current = 1.0
    gsap.to(darkModeRef, {
      current: 1.0,
      duration: 0.8,
      onUpdate: updateUniforms,
    })
  })
  document.addEventListener('theme:dark-accent2', () => {
    // darkModeRef.current = 1.0
    gsap.to(darkModeRef, {
      current: 1.0,
      duration: 0.8,
      onUpdate: updateUniforms,
    })
  })
  document.addEventListener('theme:light-accent1', () => {
    // darkModeRef.current = 0.0
    gsap.to(darkModeRef, {
      current: 0.0,
      duration: 0.8,
      onUpdate: updateUniforms,
    })
  })
  document.addEventListener('theme:light-accent2', () => {
    // darkModeRef.current = 0.0
    gsap.to(darkModeRef, {
      current: 0.0,
      duration: 0.8,
      onUpdate: updateUniforms,
    })
  })

  let isDragging = false

  const sliders = [0, 0, 0, 0]
  const minimums = [0.1, 0.0, 0.5, 0.0]
  const maximums = [1.0, 0.4, 5.0, 80.0]

  function selectSlider(index) {
    for (let i = 0; i < sliders.length; i++) {
      sliders[i] = 0
    }
    sliders[index] = 1
  }

  function updateBallPosition(clientX) {
    // Calculate position relative to slider
    let currentSlider
    let currentBall
    let currentMin
    let currentMax
    let count = 0
    for (let i = 0; i < sliders.length; i++) {
      count++
      if (sliders[i] === 1) {
        currentSlider = sliderRails[i]
        currentBall = sliderBalls[i]
        currentMin = minimums[i]
        currentMax = maximums[i]
        break
      }
    }

    let sliderRect = currentSlider.getBoundingClientRect()
    let x = clientX - sliderRect.left

    // Clamp within slider bounds
    const min = 0
    const max = sliderRect.width - 12
    x = Math.min(Math.max(x, min), max)

    // Update ball position (in pixels)
    currentBall.style.left = `${x}px`

    // Optional: compute normalized value (0–1)
    const value = Math.min(x / sliderRect.width, 0.95)
    const mappedValue = gsap.utils.mapRange(
      0,
      0.95,
      currentMin,
      currentMax,
      value
    )
    if (count == 1) {
      // gsap.to(blocksRef, {
      //   current: mappedValue,
      //   duration: 0.6,
      //   onUpdate: () => {
      //     updateUniforms()
      //     console.log('blocks: ', mappedValue)
      //   },
      // })
      blocksRef.current = mappedValue
    } else if (count == 2) {
      // gsap.to(distortionControlRef, {
      //   current: mappedValue,
      //   duration: 0.6,
      //   onUpdate: () => {
      //     updateUniforms()
      //     console.log('distortion: ', mappedValue)
      //   },
      // })
      distortionControlRef.current = mappedValue
    } else if (count == 3) {
      // gsap.to(driftControlRef, {
      //   current: mappedValue,
      //   duration: 0.6,
      //   onUpdate: () => {
      //     updateUniforms()
      //     console.log('drift: ', mappedValue)
      //   },
      // })
      driftControlRef.current = mappedValue
    } else if (count == 4) {
      // gsap.to(rainControlRef, {
      //   current: mappedValue,
      //   duration: 0.6,
      //   onUpdate: () => {
      //     updateUniforms()
      //     console.log('rain: ', mappedValue)
      //   },
      // })
      rainControlRef.current = mappedValue
    }
    updateUniforms()
  }

  sliderBalls.forEach((ball, index) => {
    ball.addEventListener('mousedown', () => {
      isDragging = true
      selectSlider(index)
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
}

export default heroUI
