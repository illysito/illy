import gsap from 'gsap'

import heroHandler from './hero_handler'

function heroUI() {
  // canvases
  const canvasWrapper = document.querySelector('.grid-canvas')
  console.log(canvasWrapper)
  const heroCanvas = document.querySelector('#grid-canvas')

  // const p2o = 'power2.out'
  // const duration = 1

  const offsetRef = { current: 0 }
  const updateUniforms = heroHandler(heroCanvas, offsetRef)

  let ticking = false
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY
    offsetRef.current = gsap.utils.mapRange(0, 240, 0, 1, scrollY)

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
