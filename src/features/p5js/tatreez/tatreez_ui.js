import gsap from 'gsap'

import Anim from '../../helpers/anim.js'

const D = Anim.D
const E = Anim.E

async function tatreezUI() {
  const { default: tatreezHandler } = await import('./tatreez_handler.js')
  const tatreezCanvasWrapper = document.querySelector('.tatreez-canvas-wrapper')

  const arrowLeft = document.querySelector('.arrow-left')
  const arrowRight = document.querySelector('.arrow-right')
  const tatreezHeaders = document.querySelectorAll('.tatreez-arabic-h')
  const tatreezTxts = document.querySelectorAll('.tatreez-explanation')
  const LENGTH = 3

  let counter = 0

  function moveHeaders() {
    gsap.to(tatreezHeaders, {
      yPercent: -100 * counter,
      duration: D.slow,
      ease: E.eio,
    })
  }

  function moveTexts() {
    gsap.to(tatreezTxts, {
      yPercent: -100 * counter,
      duration: D.slow,
      ease: E.eio,
    })
  }

  const rightClick = new CustomEvent('right-click')
  const leftClick = new CustomEvent('left-click')

  function animateClick(button) {
    gsap.to(button, {
      scale: 0.92,
      duration: D.fast,
      ease: E.linear,
      onComplete: () => {
        gsap.to(button, {
          scale: 0.96,
          duration: D.fast,
          ease: E.linear,
        })
      },
    })
  }

  arrowRight.addEventListener('mouseover', () => {
    gsap.to(arrowRight, {
      scale: 0.96,
      // x: 2,
      duration: D.fast,
    })
  })

  arrowRight.addEventListener('mouseleave', () => {
    gsap.to(arrowRight, {
      scale: 1,
      x: 0,
      duration: D.fast,
    })
  })

  arrowLeft.addEventListener('mouseover', () => {
    gsap.to(arrowLeft, {
      scale: 0.96,
      // x: -2,
      duration: D.fast,
    })
  })

  arrowLeft.addEventListener('mouseleave', () => {
    gsap.to(arrowLeft, {
      scale: 1,
      x: 0,
      duration: D.fast,
    })
  })

  arrowRight.addEventListener('click', () => {
    animateClick(arrowRight)
    window.dispatchEvent(rightClick)
    counter = (counter + 1) % LENGTH
    moveHeaders()
    moveTexts()
  })

  arrowLeft.addEventListener('click', () => {
    animateClick(arrowLeft)
    window.dispatchEvent(leftClick)
    counter = counter - 1
    if (counter < 0) counter = LENGTH - 1
    moveHeaders()
    moveTexts()
  })

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      window.dispatchEvent(rightClick)
      counter = (counter + 1) % LENGTH
      moveHeaders()
      moveTexts()
    }

    if (e.key === 'ArrowLeft') {
      window.dispatchEvent(leftClick)
      counter = counter - 1
      if (counter < 0) counter = LENGTH - 1
      moveHeaders()
      moveTexts()
    }
  })

  tatreezHandler(tatreezCanvasWrapper)
}

export default tatreezUI
