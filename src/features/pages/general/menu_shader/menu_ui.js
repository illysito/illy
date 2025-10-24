// import gsap from 'gsap'

import menuHandler from './menu_handler'

function menuUI() {
  // canvases
  // const canvasWrapper = document.querySelector('.grid-canvas')
  const heroCanvas = document.querySelector('#offcanva-canvas')

  const offsetRef = { current: 0.0 }

  const updateUniforms = menuHandler(heroCanvas, offsetRef)
  updateUniforms()
}

export default menuUI
