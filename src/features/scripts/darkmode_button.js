import gsap from 'gsap'

function darkmodeButton() {
  // const isDarkModeOn = localStorage.getItem('isDarkModeOn')

  const button = document.querySelector('.darkmode-toggle')

  const isDarkMode = new Event('isDarkMode')
  const isLightMode = new Event('isLightMode')
  let isDarkModeClicked = false

  function buttonHoverIn(e) {
    const b = e.currentTarget
    const ball = b.firstElementChild

    gsap.to(ball, {
      scale: 0.8,
      duration: 0.2,
    })
  }
  function buttonHoverOut(e) {
    const b = e.currentTarget
    const ball = b.firstElementChild

    gsap.to(ball, {
      scale: 1,
      duration: 0.2,
    })
  }
  function buttonClick(e) {
    const b = e.currentTarget
    const ball = b.firstElementChild

    if (!isDarkModeClicked) {
      gsap.to(ball, {
        scale: 1,
        x: 18,
        duration: 0.4,
        ease: 'power.out',
      })
      document.dispatchEvent(isDarkMode)
    } else {
      gsap.to(ball, {
        scale: 1,
        x: 0,
        duration: 0.4,
        ease: 'power.out',
      })
      document.dispatchEvent(isLightMode)
    }

    isDarkModeClicked = !isDarkModeClicked
    console.log(isDarkModeClicked)
  }

  // if (isDarkModeOn === 'true') {
  //   document.dispatchEvent(isDarkMode)
  // } else {
  //   document.dispatchEvent(isLightMode)
  // }

  button.addEventListener('mouseenter', (e) => {
    buttonHoverIn(e)
  })
  button.addEventListener('mouseleave', (e) => {
    buttonHoverOut(e)
  })
  button.addEventListener('click', (e) => {
    buttonClick(e)
  })
}

export default darkmodeButton
