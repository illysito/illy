import gsap from 'gsap'

import heroHandler from './hero_handler'
import getWind from '../../../api/wind'

function heroUI() {
  // canvases
  // const canvasWrapper = document.querySelector('.grid-canvas')
  const heroCanvas = document.querySelector('#grid-canvas')

  const offsetRef = { current: 0.0 }
  const windRef = { current: 0.0 }
  getWind().then((windValue) => {
    windRef.current = windValue.normalizedWindSpeed
    updateUniforms()
  })

  const updateUniforms = heroHandler(heroCanvas, offsetRef, windRef)

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
}

export default heroUI
