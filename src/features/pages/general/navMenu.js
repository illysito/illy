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
  const cols = document.querySelectorAll('.offcanva-column')
  console.log(cols)
  // console.log(links)

  let menuShown = false
  function manageMenu() {
    if (menuShown) {
      // CLOSE MENU
      document.body.classList.remove('no-scroll')
      const tl = gsap.timeline()
      tl.to(links, {
        // delay: 0.3,
        yPercent: 0,
        stagger: -0.05,
        duration: 1.2,
        ease: 'power2.inOut',
      })
        .to(
          backLinks,
          {
            yPercent: 0,
            duration: 1.2,
            ease: 'power2.inOut',
          },
          '<'
        )
        .to(
          cols,
          {
            yPercent: 0,
            duration: 1.2,
            stagger: {
              each: 0.01,
              from: 'random',
            },
            ease: 'expo.inOut',
          },
          '-=0.9'
        )
        .to(
          offCanva,
          {
            yPercent: 0,
            duration: 1.2,
            ease: 'expo.inOut',
          },
          '-=0.3'
        )
        .to(
          body,
          {
            y: 0,
            duration: 1,
            ease: 'power2.inOut',
          },
          '<'
        )
    } else {
      // OPEN MENU
      document.body.classList.add('no-scroll')
      const tl = gsap.timeline()
      tl.to(body, {
        y: -32,
        duration: 1,
        ease: 'power2.inOut',
      })
        .to(
          offCanva,
          {
            yPercent: 120,
            duration: 1.2,
            ease: 'expo.inOut',
          },
          '<'
        )
        .to(
          cols,
          {
            yPercent: 100,
            duration: 1.2,
            stagger: {
              each: 0.01,
              from: 'random',
            },
            ease: 'expo.inOut',
          },
          '-=1'
        )
        .to(
          links,
          {
            // delay: 0.3,
            yPercent: -100,
            stagger: 0.05,
            duration: 1.2,
            ease: 'power2.inOut',
          },
          '-=0.9'
        )
        .to(
          backLinks,
          {
            delay: 0.3,
            yPercent: -100,
            duration: 1.2,
            ease: 'power2.inOut',
          },
          '<'
        )
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
