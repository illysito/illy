import gsap from 'gsap'

import Anim from '../../helpers/anim.js'

const D = Anim.D
const E = Anim.E

async function tatreezUI() {
  function isMobile() {
    return window.innerWidth <= 767
  }
  let downScale = 0.92
  if (isMobile()) {
    downScale = 0.82
  }

  const { default: tatreezHandler } = await import('./tatreez_handler.js')
  const tatreezCanvasWrapper = document.querySelector('.tatreez-canvas-wrapper')

  const arrowLeft = document.querySelector('.arrow-left')
  const arrowLeftMobile = document.querySelector('.arrow-left-mob')
  const arrowRight = document.querySelector('.arrow-right')
  const arrowRightMobile = document.querySelector('.arrow-right-mob')
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
      scale: downScale,
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

  // HOVER ARROWS
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

  // CLICK ARROWS
  arrowRight.addEventListener('click', () => {
    animateClick(arrowRight)
    window.dispatchEvent(rightClick)
    counter = (counter + 1) % LENGTH
    moveHeaders()
    moveTexts()
  })
  arrowRightMobile.addEventListener('click', () => {
    animateClick(arrowRightMobile)
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
  arrowLeftMobile.addEventListener('click', () => {
    animateClick(arrowLeftMobile)
    window.dispatchEvent(leftClick)
    counter = counter - 1
    if (counter < 0) counter = LENGTH - 1
    moveHeaders()
    moveTexts()
  })

  // SWIPE
  let startX = 0

  window.addEventListener('pointerdown', (e) => {
    startX = e.clientX
  })

  window.addEventListener('pointerup', (e) => {
    const deltaX = e.clientX - startX

    if (Math.abs(deltaX) < 50) return // threshold

    if (deltaX > 0) {
      window.dispatchEvent(rightClick)
      counter = (counter + 1) % LENGTH
      moveHeaders()
      moveTexts()
    } else {
      window.dispatchEvent(leftClick)
      counter = counter - 1
      if (counter < 0) counter = LENGTH - 1
      moveHeaders()
      moveTexts()
    }
  })

  // KEYS
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
