import gsap from 'gsap'

function offCanvaBuilding() {
  let isMobile = window.innerWidth <= 767

  const offCanva = document.querySelector('.offcanva-building')
  const workButton = document.querySelector('.nav-link.is--navtextbuilding')
  const backButton = document.querySelector('.back-link-wrapper')
  const webLinks = document.querySelectorAll('.offcanva-build-link-wrapper')
  const links = document.querySelectorAll('.offcanva-build-link')
  const backLinks = document.querySelectorAll('.back-link-txt')

  let menuShown = false
  function manageMenu() {
    if (menuShown) {
      gsap.to(offCanva, {
        yPercent: 0,
        duration: 1.2,
        ease: 'expo.inOut',
      })
      gsap.to(links, {
        yPercent: -100,
        duration: 1.2,
        ease: 'expo.inOut',
      })
      gsap.to(backLinks, {
        yPercent: -100,
        duration: 1.2,
        ease: 'expo.inOut',
      })
    } else {
      gsap.to(offCanva, {
        yPercent: 100,
        duration: 1.2,
        ease: 'expo.inOut',
      })
      gsap.to(links, {
        yPercent: 0,
        duration: 1.2,
        ease: 'expo.inOut',
      })
      gsap.to(backLinks, {
        yPercent: 0,
        duration: 1.2,
        ease: 'expo.inOut',
      })
    }
    menuShown = !menuShown
  }
  workButton.addEventListener('click', manageMenu)
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
        yPercent: -100,
        duration: 0.4,
        ease: 'power2.inOut',
      })
    })
    backButton.addEventListener('mouseleave', () => {
      gsap.to([backText, backTextHidden], {
        yPercent: 0,
        duration: 0.4,
        ease: 'power2.inOut',
      })
    })
  }
}

export default offCanvaBuilding
