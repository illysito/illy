import gsap from 'gsap'

function offCanvaMenu() {
  const body = document.body

  let isMobile = window.innerWidth <= 767

  const offCanva = document.querySelector('.offcanva-building')
  const menuButton = document.querySelector('.navigation__wrapper-mobile')
  const backButton = document.querySelector('.back-link-wrapper')
  const webLinks = document.querySelectorAll('.offcanva-build-link-wrapper')
  const links = document.querySelectorAll('.offcanva-build-link')
  const backLinks = document.querySelectorAll('.back-link-txt')
  console.log(links)

  let menuShown = false
  function manageMenu() {
    if (menuShown) {
      document.body.classList.remove('no-scroll')
      gsap.to(offCanva, {
        delay: 0.3,
        yPercent: 0,
        duration: 1.2,
        ease: 'expo.inOut',
      })
      gsap.to(links, {
        yPercent: 0,
        duration: 1.2,
        stagger: -0.05,
        ease: 'power2.inOut',
      })
      gsap.to(backLinks, {
        yPercent: 0,
        duration: 1.2,
        ease: 'power2.inOut',
      })
      gsap.to(body, {
        y: 0,
        duration: 1.2,
        ease: 'power2.inOut',
      })
    } else {
      document.body.classList.add('no-scroll')
      gsap.to(body, {
        y: -32,
        duration: 1.2,
        ease: 'power2.inOut',
      })
      gsap.to(offCanva, {
        yPercent: 120,
        duration: 1.2,
        ease: 'expo.inOut',
      })
      gsap.to(links, {
        delay: 0.3,
        yPercent: -100,
        stagger: 0.05,
        duration: 1.2,
        ease: 'power2.inOut',
      })
      gsap.to(backLinks, {
        delay: 0.3,
        yPercent: -100,
        duration: 1.2,
        ease: 'power2.inOut',
      })
    }
    menuShown = !menuShown
  }
  menuButton.addEventListener('click', manageMenu)
  backButton.addEventListener('click', manageMenu)

  if (!isMobile) {
    webLinks.forEach((l) => {
      // const text = l.firstElementChild
      // const textHidden = text.nextElementSibling
      l.addEventListener('mouseover', () => {
        gsap.to(l, {
          x: 12,
          duration: 0.4,
        })
      })
      l.addEventListener('mouseleave', () => {
        gsap.to(l, {
          x: 0,
          duration: 0.4,
        })
      })
    })
  }

  if (!isMobile) {
    const backText = backButton.firstElementChild
    const backTextHidden = backText.nextElementSibling
    backButton.addEventListener('mouseover', () => {
      gsap.to([backText, backTextHidden], {
        yPercent: -200,
        duration: 0.4,
        ease: 'power2.inOut',
      })
    })
    backButton.addEventListener('mouseleave', () => {
      gsap.to([backText, backTextHidden], {
        yPercent: -100,
        duration: 0.4,
        ease: 'power2.inOut',
      })
    })
  }
}

export default offCanvaMenu
