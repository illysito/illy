import gsap from 'gsap'

function offCanvaMenu() {
  let isMobile = window.innerWidth <= 767

  const offCanva = document.querySelector('.offcanva-building')
  const menuButton = document.querySelector('.navigation__wrapper-mobile')
  const backButton = document.querySelector('.back-link-wrapper')
  const webLinks = document.querySelectorAll('.offcanva-build-link-wrapper')
  const links = document.querySelectorAll('.offcanva-build-link')
  const backLinks = document.querySelectorAll('.back-link-txt')
  const cols = document.querySelectorAll('.offcanva-column')
  // const heroImg = document.querySelector('.hero-img-wrapper-mobile') // only on HERO! I need this to happen an all pages

  function preventScroll(e) {
    e.preventDefault()
  }

  function lockScroll() {
    window.addEventListener('wheel', preventScroll, { passive: false })
    window.addEventListener('touchmove', preventScroll, { passive: false })
  }

  function unlockScroll() {
    window.removeEventListener('wheel', preventScroll)
    window.removeEventListener('touchmove', preventScroll)
  }

  function animateButtonIn() {
    const burgerWrapper = menuButton.firstElementChild
    const line1 = burgerWrapper.firstElementChild
    const line2 = line1.nextElementSibling
    gsap.to(line1, {
      rotate: 180,
      duration: 1.2,
      ease: 'power2.inOut',
    })
    gsap.to(line2, {
      rotate: -180,
      duration: 1.2,
      ease: 'power2.inOut',
    })
  }

  function animateButtonOut() {
    const burgerWrapper = menuButton.firstElementChild
    const line1 = burgerWrapper.firstElementChild
    const line2 = line1.nextElementSibling
    gsap.to(line1, {
      rotate: 0,
      duration: 1.2,
      ease: 'power2.inOut',
    })
    gsap.to(line2, {
      rotate: 0,
      duration: 1.2,
      ease: 'power2.inOut',
    })
  }

  let scrollY = 0
  function moveFuckingOverlayNavOmgICantBelieveIHaveToDoThisShit() {
    offCanva.style.top = scrollY
    requestAnimationFrame(moveFuckingOverlayNavOmgICantBelieveIHaveToDoThisShit)
  }
  moveFuckingOverlayNavOmgICantBelieveIHaveToDoThisShit()

  window.addEventListener('scroll', (e) => {
    scrollY = e.scrollY
  })

  let menuShown = false
  function manageMenu() {
    if (menuShown) {
      // CLOSE MENU
      menuButton.style.poinerEvents = 'auto'
      animateButtonOut()
      const tl = gsap.timeline()
      tl.to(links, {
        // delay: 0.3,
        yPercent: 0,
        stagger: -0.05,
        duration: 1.2,
        ease: 'power2.inOut',
      })
        // .to(
        //   heroImg,
        //   {
        //     y: 0,
        //     duration: 1,
        //     ease: 'power2.inOut',
        //   },
        //   '<'
        // )
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
            onComplete: () => {
              unlockScroll()
            },
          },
          '-=0.9'
        )
        .to(
          offCanva,
          {
            // backgroundColor: '#10101000',
            yPercent: 0,
            duration: 1.2,
            ease: 'expo.inOut',
            onComplete: () => {
              gsap.set(offCanva, {
                zIndex: -30,
              })
            },
          },
          '-=0.3'
        )
    } else {
      // OPEN MENU
      // document.body.classList.add('no-scroll')
      menuButton.style.poinerEvents = 'none'
      animateButtonIn()
      lockScroll()
      gsap.set(offCanva, {
        zIndex: 130,
      })
      const tl = gsap.timeline()
      // tl.to(heroImg, {
      //   y: -32,
      //   duration: 1,
      //   ease: 'power2.inOut',
      // })
      tl.to(
        offCanva,
        {
          // backgroundColor: '#101010',
          yPercent: 100,
          duration: 1.2,
          ease: 'expo.inOut',
        },
        '<-=0.6'
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
          '-=0.6'
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
            yPercent: -100,
            duration: 1.2,
            ease: 'power2.inOut',
          },
          '<+=0.3'
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
