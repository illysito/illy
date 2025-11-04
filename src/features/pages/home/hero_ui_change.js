import gsap from 'gsap'

// import heroHandler from './hero_handler'

function heroUIChange() {
  const sliders = document.querySelectorAll('.slider-hero')
  const sliderTexts = document.querySelectorAll('.slider-text-hero')
  const metadataPs = document.querySelectorAll('.metdata-p')
  const metadataUnderscores = document.querySelectorAll(
    '.underscore.is--metadata'
  )
  const moonImgs = document.querySelectorAll('.moon-img')
  const metadataContainers = document.querySelectorAll('.metadata-container')
  // const headerDots = document.querySelectorAll('.header-dot')
  const expandButtons = document.querySelectorAll('.header-dot')
  // const expandNature = expandButtons[0]
  // const expandControl = expandButtons[1]

  function closeAnyMenu(arrayPos) {
    // Take actual button and rotate it
    const rootStyles = getComputedStyle(document.documentElement)
    const typeColor = rootStyles.getPropertyValue('--type-color').trim()
    const actualButton = expandButtons[arrayPos]
    gsap.to(actualButton, {
      backgroundColor: '#00000000',
      borderColor: typeColor,
      duration: 0.2,
      ease: 'none',
      onComplete: () => {
        gsap.set(actualButton, {
          borderColor: 'var(--type-color)',
        })
      },
    })
    if (arrayPos === 0) {
      gsap.to(metadataPs, {
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
    const rootStyles = getComputedStyle(document.documentElement)
    const accent = rootStyles.getPropertyValue('--accent').trim()
    // Take actual button and rotate it
    // Take the other button to close it
    const actualButton = expandButtons[arrayPos]
    gsap.set(metadataContainers[arrayPos], {
      zIndex: 0,
    })
    gsap.to(actualButton, {
      backgroundColor: accent,
      borderColor: accent,
      duration: 0.2,
      ease: 'none',
      onComplete: () => {
        gsap.set(actualButton, {
          backgroundColor: 'var(--accent)',
          borderColor: 'var(--accent)',
        })
      },
    })
    gsap.to(metadataPs, {
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
    const rootStyles = getComputedStyle(document.documentElement)
    const accent = rootStyles.getPropertyValue('--accent').trim()
    // Take actual button and rotate it
    // Take the other button to close it
    const actualButton = expandButtons[arrayPos]
    gsap.set(metadataContainers[arrayPos], {
      zIndex: 0,
    })
    gsap.to(actualButton, {
      backgroundColor: accent,
      borderColor: accent,
      duration: 0.2,
      ease: 'none',
      onComplete: () => {
        gsap.set(actualButton, {
          backgroundColor: 'var(--accent)',
          borderColor: 'var(--accent)',
        })
      },
    })
    gsap.to(sliderTexts, {
      yPercent: -100,
      stagger: 0.02,
      opacity: 1,
      duration: 0.8,
    })
    gsap.to(sliders, {
      yPercent: -100,
      opacity: 1,
      stagger: 0.1,
      duration: 1,
      ease: 'none',
    })
  }

  document.addEventListener('menus-closed', () => {
    closeAnyMenu(0)
    closeAnyMenu(1)
  })
  document.addEventListener('nature-open', () => {
    closeAnyMenu(1)
    setTimeout(() => {
      expandNature(0)
    }, 300)
  })
  document.addEventListener('control-open', () => {
    closeAnyMenu(0)
    setTimeout(() => {
      expandControl(1)
    }, 300)
  })
}

export default heroUIChange
