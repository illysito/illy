import gsap from 'gsap'

function heroUIState() {
  // const isDarkModeOn = localStorage.getItem('isDarkModeOn')

  const expandButtons = document.querySelectorAll('.header-dot')
  const expandNature = expandButtons[0]
  const expandControl = expandButtons[1]

  const modeEvents = {
    0: new Event('menus-closed'),
    1: new Event('control-open'),
    2: new Event('nature-open'),
    // 2: new Event('control-open'),
  }

  // 0: light or dark
  // 1: accent 1 or 2
  const states = [0, 0]
  let isNatureExpanded = false
  let isControlExpanded = false

  // function initState() {
  //   const darkState = localStorage.getItem('dark_state')
  //   const accentState = localStorage.getItem('accent_state')

  //   if (darkState === '1') {
  //     gsap.set(darkmodeButton.firstElementChild, { x: 18 })
  //     isDarkModeClicked = true
  //     states[0] = 1
  //   }
  //   if (accentState === '1') {
  //     gsap.set(accentButton.firstElementChild, { x: 18 })
  //     isAccentClicked = true
  //     states[1] = 1
  //   }
  //   readStates()
  //   // console.log(states)
  // }
  // initState()

  function toggleMode(id) {
    console.log(id)
    if (id == 'expand-nature') {
      if (!isNatureExpanded) {
        states[0] = 1
        if (states[1] === 1) {
          states[1] = 0
          isControlExpanded = !isControlExpanded
        }
        // localStorage.setItem('dark_state', '1')
      } else {
        states[0] = 0
        // localStorage.setItem('dark_state', '0')
      }
      isNatureExpanded = !isNatureExpanded
    } else {
      if (!isControlExpanded) {
        states[1] = 1
        if (states[0] === 1) {
          states[0] = 0
          isNatureExpanded = !isNatureExpanded
        }
        // localStorage.setItem('accent_state', '1')
      } else {
        states[1] = 0
        // localStorage.setItem('accent_state', '0')
      }
      isControlExpanded = !isControlExpanded
    }

    console.log(states)
    readStates()
  }

  function readStates() {
    const decimal = parseInt(states.join(''), 2) // Join the array and interpret it as a binary num

    document.dispatchEvent(modeEvents[decimal])
    // console.log(modeEvents[decimal])
  }

  // Click
  expandNature.addEventListener('click', (e) => {
    const b = e.currentTarget
    const id = b.id
    toggleMode(id)
  })
  expandControl.addEventListener('click', (e) => {
    const b = e.currentTarget
    const id = b.id
    toggleMode(id)
  })

  // Hover buttons
  function buttonHoverIn(b) {
    gsap.to(b, {
      scale: 0.9,
      duration: 0.2,
    })
  }
  function buttonHoverOut(b) {
    gsap.to(b, {
      scale: 1,
      duration: 0.2,
    })
  }

  expandNature.addEventListener('mouseenter', (e) => {
    const b = e.currentTarget
    buttonHoverIn(b)
  })
  expandNature.addEventListener('mouseleave', (e) => {
    const b = e.currentTarget
    buttonHoverOut(b)
  })
  expandControl.addEventListener('mouseenter', (e) => {
    const b = e.currentTarget
    buttonHoverIn(b)
  })
  expandControl.addEventListener('mouseleave', (e) => {
    const b = e.currentTarget
    buttonHoverOut(b)
  })
}

export default heroUIState
