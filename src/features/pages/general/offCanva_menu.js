import gsap from 'gsap'

import menuUI from './menu_shader/menu_ui'

function offCanvaMenu() {
  const button = document.querySelector('.hire-button')
  const menu = document.querySelector('.offcanva')

  menuUI()

  button.addEventListener('click', () => {
    gsap.to(menu, {
      yPercent: 120,
      duration: 0.6,
      ease: 'power.out',
    })
  })
}

export default offCanvaMenu
