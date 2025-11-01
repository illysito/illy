import gsap from 'gsap'

function colorModeState() {
  // const isDarkModeOn = localStorage.getItem('isDarkModeOn')

  const darkmodeButton = document.querySelector('.darkmode-toggle')
  const accentButton = document.querySelector('.accent-toggle')

  const modeEvents = {
    0: new Event('theme:light-accent1'),
    1: new Event('theme:light-accent2'),
    2: new Event('theme:dark-accent1'),
    3: new Event('theme:dark-accent2'),
  }

  // 0: light or dark
  // 1: accent 1 or 2
  const states = [0, 0]
  let isDarkModeClicked = false
  let isAccentClicked = false

  function initState() {
    const darkState = localStorage.getItem('dark_state')
    const accentState = localStorage.getItem('accent_state')

    if (darkState === '1') {
      gsap.set(darkmodeButton.firstElementChild, { x: 18 })
      isDarkModeClicked = true
      states[0] = 1
    }
    if (accentState === '1') {
      gsap.set(accentButton.firstElementChild, { x: 18 })
      isAccentClicked = true
      states[1] = 1
    }
    readStates()
    // console.log(states)
  }
  initState()

  function toggleMode(b, id) {
    // recognize what ball to move
    const ball = b.firstElementChild

    // if darkmode button was clicked
    if (id === 'dark') {
      if (!isDarkModeClicked) {
        gsap.to(ball, {
          scale: 1,
          x: 18,
          duration: 0.4,
          ease: 'power.out',
        })
        states[0] = 1
        localStorage.setItem('dark_state', '1')
      } else {
        gsap.to(ball, {
          scale: 1,
          x: 0,
          duration: 0.4,
          ease: 'power.out',
        })
        states[0] = 0
        localStorage.setItem('dark_state', '0')
      }
      isDarkModeClicked = !isDarkModeClicked
    } else {
      if (!isAccentClicked) {
        gsap.to(ball, {
          scale: 1,
          x: 18,
          duration: 0.4,
          ease: 'power.out',
        })
        states[1] = 1
        localStorage.setItem('accent_state', '1')
      } else {
        gsap.to(ball, {
          scale: 1,
          x: 0,
          duration: 0.4,
          ease: 'power.out',
        })
        states[1] = 0
        localStorage.setItem('accent_state', '0')
      }
      isAccentClicked = !isAccentClicked
    }

    // console.log(states)
    readStates()
  }

  function readStates() {
    const decimal = parseInt(states.join(''), 2) // Join the array and interpret it as a binary num
    document.dispatchEvent(modeEvents[decimal])
  }

  // Click
  darkmodeButton.addEventListener('click', (e) => {
    const b = e.currentTarget
    const id = b.id
    toggleMode(b, id)
  })
  accentButton.addEventListener('click', (e) => {
    const b = e.currentTarget
    const id = b.id
    toggleMode(b, id)
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

  darkmodeButton.addEventListener('mouseenter', (e) => {
    const b = e.currentTarget
    buttonHoverIn(b)
  })
  darkmodeButton.addEventListener('mouseleave', (e) => {
    const b = e.currentTarget
    buttonHoverOut(b)
  })
  accentButton.addEventListener('mouseenter', (e) => {
    const b = e.currentTarget
    buttonHoverIn(b)
  })
  accentButton.addEventListener('mouseleave', (e) => {
    const b = e.currentTarget
    buttonHoverOut(b)
  })
}

export default colorModeState
