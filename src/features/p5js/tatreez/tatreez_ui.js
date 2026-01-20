// import gsap from 'gsap'

// import Anim from '../../helpers/anim.js'

// const D = Anim.D
// const E = Anim.E

async function tatreezUI() {
  const { default: tatreezHandler } = await import('./tatreez_handler.js')
  const tatreezCanvasWrapper = document.querySelector('.tatreez-canvas-wrapper')

  tatreezHandler(tatreezCanvasWrapper)
}

export default tatreezUI
