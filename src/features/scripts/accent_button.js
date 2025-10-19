import gsap from 'gsap'

function accentButton() {
  // const isDarkModeOn = localStorage.getItem('isDarkModeOn')

  const button = document.querySelector('.accent-toggle')

  // const isAccentOne = new Event('isAccentOne')
  // const isAccentTwo = new Event('isAccentTwo')
  let isAccentTwoClicked = false

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

    if (!isAccentTwoClicked) {
      gsap.to(ball, {
        scale: 1,
        x: 18,
        duration: 0.4,
        ease: 'power.out',
      })
      localStorage.setItem('accentDark', '#08ee00') // fluor
      localStorage.setItem('accentLight', '#ffbcbf') // soft pink
      // document.dispatchEvent(isAccentTwo)
    } else {
      gsap.to(ball, {
        scale: 1,
        x: 0,
        duration: 0.4,
        ease: 'power.out',
      })
      localStorage.setItem('accentDark', '#f83d8b') // hard pink
      localStorage.setItem('accentLight', '#0000ff') // blue
      // document.dispatchEvent(isAccentOne)
    }

    isAccentTwoClicked = !isAccentTwoClicked
    // console.log(isDarkModeClicked)
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

export default accentButton
