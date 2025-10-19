import gsap from 'gsap'

function workInteraction() {
  const canvasUI = document.querySelectorAll('.work-canvas')

  const p2o = 'power2.out'
  const duration = 0.8

  function hoverIn(cardTitle, sorryHeader, viewBlock) {
    const isDarkMode = localStorage.getItem('isDarkModeOn')
    if (isDarkMode === 'true') {
      gsap.to(cardTitle, {
        color: '#f83d8b',
        duration: duration - 0.2,
        ease: p2o,
      })
      gsap.to(sorryHeader, {
        yPercent: -100,
        delay: 0.1,
        duration: duration - 0.2,
        ease: p2o,
      })
      gsap.to(viewBlock, {
        yPercent: -100,
        duration: duration - 0.2,
        ease: p2o,
      })
    } else {
      gsap.to(cardTitle, {
        color: '#0000ff',
        duration: duration - 0.2,
        ease: p2o,
      })
      gsap.to(sorryHeader, {
        yPercent: -100,
        delay: 0.1,
        duration: duration - 0.2,
        ease: p2o,
      })
      gsap.to(viewBlock, {
        yPercent: -100,
        duration: duration - 0.2,
        ease: p2o,
      })
    }
  }

  function hoverOut(cardTitle, sorryHeader, viewBlock) {
    const isDarkMode = localStorage.getItem('isDarkModeOn')
    if (isDarkMode === 'true') {
      gsap.to(cardTitle, {
        color: '#fff4e9',
        duration: duration - 0.2,
        ease: p2o,
      })
      gsap.to(sorryHeader, {
        yPercent: 0,
        delay: 0.1,
        duration: duration - 0.2,
        ease: p2o,
      })
      gsap.to(viewBlock, {
        yPercent: 0,
        duration: duration - 0.2,
        ease: p2o,
      })
    } else {
      gsap.to(cardTitle, {
        color: '#202020',
        duration: duration - 0.2,
        ease: p2o,
      })
      gsap.to(sorryHeader, {
        yPercent: 0,
        delay: 0.1,
        duration: duration - 0.2,
        ease: p2o,
      })
      gsap.to(viewBlock, {
        yPercent: 0,
        duration: duration - 0.2,
        ease: p2o,
      })
    }
  }

  canvasUI.forEach((canvas, index) => {
    if (index != 0) {
      const canvasWrapper = canvas.parentElement
      const workCard = canvasWrapper.parentElement
      const cardTitle = workCard.querySelector('.work-h')
      const workView = workCard.querySelector('.work-view')
      const sorryHeader = workView.firstElementChild
      const viewBlock = workView.lastElementChild
      canvas.addEventListener('mouseover', () => {
        hoverIn(cardTitle, sorryHeader, viewBlock)
      })

      canvas.addEventListener('mouseleave', () => {
        hoverOut(cardTitle, sorryHeader, viewBlock)
      })
    }
  })
}

export default workInteraction
