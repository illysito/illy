import gsap from 'gsap'

import golHandler from './gol_handler'

function golUI() {
  const golCanvasWrapper = document.querySelector('.gol-canvas-wrapper')
  const overlay = document.querySelector('.gol-button-wrapper')
  const button = document.querySelector('.gol-button')
  const restartButton = document.querySelector('.gol-restart')

  button.addEventListener('click', () => {
    gsap.to(overlay, {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.in',
      zIndex: -30,
    })
    gsap.to(restartButton, {
      opacity: 1,
      duration: 0.6,
      ease: 'power2.in',
      zIndex: 0,
    })
    golHandler(golCanvasWrapper)
  })
}

export default golUI
