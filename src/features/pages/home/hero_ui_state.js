import gsap from 'gsap'

function heroUIState() {
  const expandToggle = document.querySelector('.expand-toggle')
  const b = expandToggle.firstElementChild

  const modeEvents = {
    0: new Event('menus-closed'),
    1: new Event('control-open'),
    2: new Event('nature-open'),
  }

  const states = [0, 1]

  if (!localStorage.getItem('UIState')) {
    localStorage.setItem('UIState', '2')
  }
  const stateString = localStorage.getItem('UIState')
  let isNatureExpanded

  if (stateString === '1') {
    states[0] = 0
    states[1] = 1
    isNatureExpanded = true
  } else {
    states[0] = 1
    states[1] = 0
    isNatureExpanded = false
  }
  readStates()

  function toggleMode() {
    if (isNatureExpanded) {
      states[0] = 1
      if (states[1] === 1) {
        states[1] = 0
        // isControlExpanded = !isControlExpanded
      }
    } else {
      states[1] = 1
      if (states[0] === 1) {
        states[0] = 0
        // isNatureExpanded = !isNatureExpanded
      }
    }
    isNatureExpanded = !isNatureExpanded

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
  expandToggle.addEventListener('click', () => {
    // const b = e.currentTarget
    // const id = b.id
    toggleMode()
  })
  // expandControl.addEventListener('click', (e) => {
  //   const b = e.currentTarget
  //   const id = b.id
  //   toggleMode(id)
  // })

  // Hover buttons
  function buttonHoverIn() {
    gsap.to(b, {
      scale: 0.8,
      duration: 0.2,
    })
  }
  function buttonHoverOut() {
    gsap.to(b, {
      scale: 1,
      duration: 0.2,
    })
  }

  expandToggle.addEventListener('mouseenter', () => {
    buttonHoverIn()
  })
  expandToggle.addEventListener('mouseleave', () => {
    buttonHoverOut()
  })
}

export default heroUIState
