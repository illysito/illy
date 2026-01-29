import gsap from 'gsap'

function offCanvaMenu() {
  const button = document.querySelector('.navigation__wrapper-mobile')
  const closeButton = document.querySelector('.close-button')
  const menu = document.querySelector('.offcanva-building')
  const body = document.body

  button.addEventListener('click', () => {
    gsap.to(body, {
      y: -32,
      duration: 1.2,
      ease: 'power2.inOut',
    })
    gsap.to(menu, {
      yPercent: 118,
      // opacity: 1,
      duration: 1.2,
      ease: 'power3.inOut',
    })
  })
  closeButton.addEventListener('click', () => {
    gsap.to(body, {
      y: 0,
      duration: 1.2,
      ease: 'power3.inOut',
    })
    gsap.to(menu, {
      yPercent: 0,
      duration: 1.2,
      ease: 'power3.inOut',
    })
  })
}

export default offCanvaMenu
