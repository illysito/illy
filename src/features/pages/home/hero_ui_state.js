import gsap from 'gsap'

function heroUIState() {
  const expandButtons = document.querySelectorAll('.header-dot')
  const expandNature = expandButtons[0]
  const expandControl = expandButtons[1]

  const modeEvents = {
    0: new Event('menus-closed'),
    1: new Event('control-open'),
    2: new Event('nature-open'),
  }

  const states = [1, 0]

  if (!localStorage.getItem('UIState')) {
    localStorage.setItem('UIState', '2')
  }
  const stateString = localStorage.getItem('UIState')
  if (stateString === '1') {
    states[0] = 0
    states[1] = 1
  } else {
    states[0] = 1
    states[1] = 0
  }
  readStates()

  let isNatureExpanded = false
  let isControlExpanded = false

  function toggleMode(id) {
    console.log(id)
    if (id == 'expand-nature') {
      states[0] = 1
      if (states[1] === 1) {
        states[1] = 0
        isControlExpanded = !isControlExpanded
      }
    } else {
      states[1] = 1
      if (states[0] === 1) {
        states[0] = 0
        isNatureExpanded = !isNatureExpanded
      }
    }

    console.log(states)
    readStates()
  }

  function readStates() {
    const decimal = parseInt(states.join(''), 2) // Join the array and interpret it as a binary num
    document.dispatchEvent(modeEvents[decimal])
    localStorage.setItem('UIState', decimal)
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
