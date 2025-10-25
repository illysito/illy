import gsap from 'gsap'

function setAccent() {
  if (!localStorage.getItem('accentDark')) {
    localStorage.setItem('accentDark', '#08ee00')
  }
  if (!localStorage.getItem('accentLight')) {
    localStorage.setItem('accentLight', '#0000ff')
  }

  function accent() {
    let accent
    if (localStorage.getItem('isDarkModeOn') === 'true') {
      accent = localStorage.getItem('accentDark')
    } else {
      accent = localStorage.getItem('accentLight')
    }

    const metadataDots = document.querySelectorAll('.metdata-dot')
    const buttonCircle = document.querySelector('.fill-circle')
    const darkModeBall = document.querySelector('.darkmode-ball')
    const accentBall = document.querySelector('.accent-ball')

    gsap.to([buttonCircle, darkModeBall, accentBall], {
      backgroundColor: `${accent}`,
      duration: 0.6,
      ease: 'power.out',
    })
    gsap.to(metadataDots, {
      backgroundColor: `${accent}`,
      duration: 0.6,
      ease: 'power.out',
    })
  }

  document.addEventListener('isAccentOne', () => {
    accent()
  })
  document.addEventListener('isAccentTwo', () => {
    accent()
  })
}

export default setAccent
