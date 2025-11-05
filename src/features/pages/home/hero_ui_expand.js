import gsap from 'gsap'

function heroUIExpand() {
  // const isDarkModeOn = localStorage.getItem('isDarkModeOn')
  const metadataHeaders = document.querySelector('.metadata-headers')

  const uiButton = document.querySelector('.metadata-toggle')
  const uiButtonText = document.querySelector('.metadata-ui-p')
  const uiButtonTextHidden = document.querySelector('.metadata-ui-p-hidden')

  const dataWrapper = document.querySelector('.data-wrapper')
  const poetryWrapper = document.querySelector('.poetry-block')

  const headerDots = document.querySelectorAll('.header-dot-cont')
  const headerTexts = document.querySelectorAll('.metadata-h')

  let isUIExpanded = false

  function expandInterface() {
    localStorage.setItem('uiIsCollapsed', 'false')
    gsap.set(metadataHeaders, {
      zIndex: 1,
    })
    gsap.to(headerTexts, {
      yPercent: -100,
      stagger: 0.02,
      opacity: 1,
      duration: 0.6,
    })
    gsap.to(headerDots, {
      stagger: 0.02,
      opacity: 1,
      duration: 0.4,
    })
    gsap.to([dataWrapper, poetryWrapper], {
      opacity: 1,
      duration: 0.6,
    })
  }

  function collapseInterface() {
    localStorage.setItem('uiIsCollapsed', 'true')
    gsap.set(metadataHeaders, {
      zIndex: -30,
    })
    gsap.to(headerTexts, {
      yPercent: 0,
      stagger: 0.02,
      opacity: 0,
      duration: 0.6,
    })
    gsap.to(headerDots, {
      stagger: 0.02,
      opacity: 0,
      duration: 0.4,
    })
    gsap.to([dataWrapper, poetryWrapper], {
      opacity: 0,
      duration: 0.6,
    })
  }

  if (!localStorage.getItem('uiIsCollapsed')) {
    localStorage.setItem('uiIsCollapsed', 'true')
  }

  if (localStorage.getItem('uiIsCollapsed') === 'true') {
    collapseInterface()
  } else {
    toggleUI(uiButton)
    expandInterface()
  }

  function toggleUI(b) {
    // recognize what ball to move
    const ball = b.firstElementChild

    if (!isUIExpanded) {
      gsap.to(ball, {
        scale: 1,
        x: 18,
        duration: 0.4,
        ease: 'power.out',
      })
      gsap.to([uiButtonText, uiButtonTextHidden], {
        yPercent: -100,
        duration: 0.6,
        ease: 'power2.inOut',
      })
      expandInterface()
    } else {
      gsap.to(ball, {
        scale: 1,
        x: 0,
        duration: 0.4,
        ease: 'power.out',
      })
      gsap.to([uiButtonText, uiButtonTextHidden], {
        yPercent: 0,
        duration: 0.6,
        ease: 'power2.inOut',
      })
      collapseInterface()
    }
    isUIExpanded = !isUIExpanded
  }

  uiButton.addEventListener('click', (e) => {
    const b = e.currentTarget
    toggleUI(b)
  })

  // Hover buttons
  function buttonHoverIn(b) {
    const ball = b.firstElementChild

    gsap.to(ball, {
      scale: 0.8,
      duration: 0.2,
    })
  }
  function buttonHoverOut(b) {
    const ball = b.firstElementChild

    gsap.to(ball, {
      scale: 1,
      duration: 0.2,
    })
  }

  uiButton.addEventListener('mouseenter', (e) => {
    const b = e.currentTarget
    buttonHoverIn(b)
  })
  uiButton.addEventListener('mouseleave', (e) => {
    const b = e.currentTarget
    buttonHoverOut(b)
  })
}

export default heroUIExpand
