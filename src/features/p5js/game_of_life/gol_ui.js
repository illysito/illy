import gsap from 'gsap'

import Anim from '../../helpers/anim.js'

const D = Anim.D
const E = Anim.E

async function golUI() {
  const { default: golHandler } = await import('./gol_handler.js')
  const golCanvasWrapper = document.querySelector('.gol-canvas-wrapper')
  const overlay = document.querySelector('.gol-overlay')

  gsap.to(overlay, {
    opacity: 0,
    duration: D.ultra_slow,
    ease: E.p2io,
    onComplete: () => {
      gsap.set(overlay, {
        zIndex: -30,
      })
    },
  })
  golHandler(golCanvasWrapper)
}

export default golUI
