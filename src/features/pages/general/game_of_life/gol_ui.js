import gsap from 'gsap'

import golHandler from './gol_handler'

function golUI() {
  const golCanvasWrapper = document.querySelector('.gol-canvas-wrapper')
  const overlay = document.querySelector('.gol-button-wrapper')
  const button = document.querySelector('.gol-button')

  button.addEventListener('click', () => {
    gsap.to(overlay, {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.in',
    })
    golHandler(golCanvasWrapper)
  })
}

export default golUI
