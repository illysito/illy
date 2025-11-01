import gsap from 'gsap'

function workInteraction() {
  const canvasUI = document.querySelectorAll('.work-canvas')

  const lightLiveArrows = document.querySelectorAll('.live-web-wrapper-white')

  const p2o = 'power2.out'
  const duration = 0.8

  function hoverIn(cardTitles, cardTitlesHidden, sorryHeader, viewBlock) {
    const rootStyles = getComputedStyle(document.documentElement)
    const accent = rootStyles.getPropertyValue('--accent').trim()
    gsap.to([cardTitles, cardTitlesHidden], {
      color: accent,
      yPercent: -100,
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

  function hoverOut(cardTitles, cardTitlesHidden, sorryHeader, viewBlock) {
    const rootStyles = getComputedStyle(document.documentElement)
    const typeColor = rootStyles.getPropertyValue('--type-color').trim()
    gsap.to([cardTitles, cardTitlesHidden], {
      color: typeColor,
      yPercent: 0,
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

  canvasUI.forEach((canvas, index) => {
    if (index != 0) {
      const canvasWrapper = canvas.parentElement
      const workCard = canvasWrapper.parentElement
      const cardTitles = workCard.querySelectorAll('.work-h')
      const cardTitlesHidden = workCard.querySelectorAll('.work-h-hidden')
      const workView = workCard.querySelector('.work-view')
      const sorryHeader = workView.firstElementChild
      const viewBlock = workView.lastElementChild
      canvas.addEventListener('mouseover', () => {
        hoverIn(cardTitles, cardTitlesHidden, sorryHeader, viewBlock)
      })

      canvas.addEventListener('mouseleave', () => {
        hoverOut(cardTitles, cardTitlesHidden, sorryHeader, viewBlock)
      })
    }
  })

  lightLiveArrows.forEach((a) => {
    const lightArrow = a.firstElementChild
    const darkArrowWrapper = a.previousElementSibling
    const darkArrow = darkArrowWrapper.firstElementChild
    lightArrow.addEventListener('mouseover', () => {
      gsap.to([lightArrow, darkArrow], {
        scale: 0.95,
        rotation: 12,
        duration: 0.4,
      })
    })
    lightArrow.addEventListener('mouseleave', () => {
      gsap.to([lightArrow, darkArrow], {
        scale: 1,
        rotation: 0,
        duration: 0.4,
      })
    })
  })
}

export default workInteraction
