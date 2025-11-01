import gsap from 'gsap'

async function golUI() {
  const { default: golHandler } = await import('./gol_handler.js')
  const golCanvasWrapper = document.querySelector('.gol-canvas-wrapper')
  const overlay = document.querySelector('.gol-overlay')

  gsap.to(overlay, {
    opacity: 0,
    duration: 1.2,
    ease: 'power2.in',
    onComplete: () => {
      gsap.set(overlay, {
        zIndex: -30,
      })
    },
  })
  golHandler(golCanvasWrapper)
}

export default golUI
