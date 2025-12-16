import gsap from 'gsap'

// import heroHandler from './hero_handler'
import Anim from '../../helpers/anim.js'

const D = Anim.D
const E = Anim.E

function heroUIChange() {
  const sliders = document.querySelectorAll('.slider-hero')
  const sliderTexts = document.querySelectorAll('.slider-text-hero')
  const metadataPs = document.querySelectorAll('.metdata-p')
  const metadataPoetry = document.querySelectorAll('.metdata-poetry')
  const metadataPoetryControl = document.querySelectorAll(
    '.metdata-poetry-control'
  )
  const metadataUnderscores = document.querySelectorAll(
    '.underscore.is--metadata'
  )
  const moonImgs = document.querySelectorAll('.moon-img')
  const metadataContainers = document.querySelectorAll('.metadata-container')
  // const headerDots = document.querySelectorAll('.header-dot')
  const expandToggle = document.querySelector('.expand-toggle')
  const ball = expandToggle.firstElementChild
  const uiButtonText = document.querySelector('.metadata-h')
  const uiButtonTextHidden = document.querySelector('.metadata-h-hidden')

  function closeAnyMenu(arrayPos) {
    // Take actual button and rotate it
    // const rootStyles = getComputedStyle(document.documentElement)
    // const typeColor = rootStyles.getPropertyValue('--type-color').trim()
    // const actualButton = expandButtons[arrayPos]
    // actualButton.classList.remove('is--active')
    // actualButton.style.pointerEvents = 'none'
    // gsap.to(actualButton, {
    //   backgroundColor: '#00000000',
    //   borderColor: typeColor,
    //   duration: 0.2,
    //   ease: 'none',
    //   onComplete: () => {
    //     gsap.set(actualButton, {
    //       delay: 0.4,
    //       pointerEvents: 'auto',
    //     })
    //   },
    // })
    if (arrayPos === 0) {
      gsap.to(metadataPs, {
        yPercent: 0,
        stagger: 0.01,
        opacity: 0,
        duration: 0.8,
      })
      gsap.to(metadataPoetry, {
        yPercent: 0,
        stagger: 0.01,
        opacity: 0,
        duration: 0.8,
      })
      gsap.to(moonImgs, {
        yPercent: 0,
        opacity: 0,
        duration: 0.6,
      })
      gsap.to(metadataUnderscores, {
        yPercent: 0,
        stagger: 0.02,
        opacity: 0,
        duration: 0.8,
        onComplete: () => {
          gsap.set(metadataContainers[arrayPos], {
            zIndex: -30,
          })
        },
      })
    } else {
      gsap.to(metadataPoetryControl, {
        yPercent: 0,
        stagger: 0.01,
        opacity: 0,
        duration: 0.8,
      })
      gsap.to(sliderTexts, {
        yPercent: 0,
        stagger: 0.02,
        opacity: 0,
        duration: 0.8,
      })
      gsap.to(sliders, {
        yPercent: 0,
        opacity: 0,
        stagger: 0.1,
        ease: 'none',
        duration: 0.6,
        onComplete: () => {
          gsap.set(metadataContainers[arrayPos], {
            zIndex: -30,
          })
        },
      })
    }
  }

  function expandNature(arrayPos) {
    // const rootStyles = getComputedStyle(document.documentElement)
    // const accent = rootStyles.getPropertyValue('--accent').trim()
    // Take actual button and rotate it
    // Take the other button to close it
    // actualButton.style.pointerEvents = 'none'
    // actualButton.classList.add('is--active')
    // gsap.to(actualButton, {
    //   backgroundColor: accent,
    //   borderColor: accent,
    //   duration: 0.2,
    //   ease: 'none',
    //   onComplete: () => {
    //     gsap.set(actualButton, {
    //       delay: 0.4,
    //       backgroundColor: 'var(--accent)',
    //       borderColor: 'var(--accent)',
    //       pointerEvents: 'auto',
    //     })
    //   },
    // })
    gsap.set(metadataContainers[arrayPos], {
      zIndex: 0,
    })
    gsap.to([metadataPs, metadataPoetry], {
      yPercent: -100,
      stagger: 0.02,
      opacity: 1,
      duration: 0.8,
    })
    gsap.to(moonImgs, {
      yPercent: -100,
      opacity: 1,
      duration: 0.6,
    })
    gsap.to(metadataUnderscores, {
      yPercent: -100,
      stagger: 0.02,
      opacity: 1,
      duration: 0.8,
    })
  }

  function expandControl(arrayPos) {
    // const rootStyles = getComputedStyle(document.documentElement)
    // const accent = rootStyles.getPropertyValue('--accent').trim()
    // Take actual button and rotate it
    // Take the other button to close it
    // actualButton.classList.add('is--active')
    // actualButton.style.pointerEvents = 'none'
    // gsap.to(actualButton, {
    //   backgroundColor: accent,
    //   borderColor: accent,
    //   duration: 0.2,
    //   ease: 'none',
    //   onComplete: () => {
    //     gsap.set(actualButton, {
    //       delay: 0.4,
    //       backgroundColor: 'var(--accent)',
    //       borderColor: 'var(--accent)',
    //       pointerEvents: 'auto',
    //     })
    //   },
    // })
    gsap.set(metadataContainers[arrayPos], {
      zIndex: 0,
    })
    gsap.to(sliderTexts, {
      yPercent: -100,
      stagger: 0.02,
      opacity: 1,
      duration: 0.8,
    })
    gsap.to(sliders, {
      yPercent: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 1,
      ease: 'none',
    })
    gsap.to(metadataPoetryControl, {
      yPercent: -100,
      stagger: 0.02,
      opacity: 1,
      duration: 0.8,
    })
  }

  document.addEventListener('nature-open', () => {
    gsap.to(ball, {
      scale: 1,
      x: 0,
      duration: D.med,
      ease: E.p2o,
    })
    gsap.to(uiButtonText, {
      opacity: 1,
    })
    gsap.to([uiButtonText, uiButtonTextHidden], {
      yPercent: 0,
      duration: 0.6,
      ease: 'power2.inOut',
    })
    closeAnyMenu(1)
    setTimeout(() => {
      expandNature(0)
    }, 300)
  })
  document.addEventListener('control-open', () => {
    gsap.to(ball, {
      scale: 1,
      x: 18,
      duration: D.med,
      ease: E.p2o,
    })
    gsap.to([uiButtonText, uiButtonTextHidden], {
      yPercent: -100,
      duration: 0.6,
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.to(uiButtonText, {
          opacity: 0,
        })
      },
    })
    closeAnyMenu(0)
    setTimeout(() => {
      expandControl(1)
    }, 300)
  })
}

export default heroUIChange
