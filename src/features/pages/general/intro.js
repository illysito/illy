import gsap from 'gsap'
import SplitType from 'split-type'

function intro() {
  let dur = 0.6
  // let ease1 = 'power1.inOut'
  let ease2 = 'power2.inOut'
  let ease3 = 'power3.inOut'
  // let ease4 = 'power4.inOut'

  function domElementsQuery() {
    return {
      // preload
      preloaderText: document.querySelector('.preloader-text'),
      preloader: document.querySelector('.preloader__section'),
      preloaderOverlay: document.querySelectorAll('.preloader-overlay'),
      // nav
      navLogo: document.querySelector('.nav-logo'),
      logoLetters: document.querySelectorAll('.logo-letter'),
      navWrapper: document.querySelector('.navigation__wrapper'),
      // heading
      headings: document.querySelectorAll('.hero-h'),
      // img
      img: document.querySelector('.hero-img'),
      canvas_wrapper: document.querySelector('.canvas__wrapper'),
    }
  }
  const domElements = domElementsQuery()

  function setInitialPositions() {
    domElements.preloader.style.zIndex = 30
  }
  setInitialPositions()

  let countIndex = 0
  let countChar = ''
  function randomChar() {
    //prettier-ignore
    const chars = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWXxYyZzáéíóú'
    countChar = chars[countIndex]
    countIndex = (countIndex + 1) % 62
  }

  let isGeneratingName = false
  async function generateName(target) {
    return new Promise((resolve) => {
      if (isGeneratingName) return
      isGeneratingName = true

      const targetText = target
      const targetChars = targetText.split('')

      const time = 20

      let names = new Array(targetChars.length).fill(' ')
      names[0] = targetChars[0]

      let index = 1

      const interval = setInterval(() => {
        if (index < targetChars.length) {
          if (names[index] !== targetChars[index]) {
            randomChar()
            names[index] = countChar
            // if (isUpperCase(targetChars[index])) {
            //   names[index] = targetChars[index]
            // }
            if (countIndex == 12) {
              names[index] = targetChars[index]
            }
          } else {
            countIndex = 0
            index++ // Move to the next character only when correct
          }

          domElements.preloaderText.textContent = names.join('')

          // console.log(names.join(''))
        } else {
          clearInterval(interval)
          gsap.to(domElements.preloaderText, {
            opacity: 0,
            repeat: 2,
            yoyo: true,
            duration: 1.2 * dur,
            ease: ease2,
            // delay: 1,
            onComplete: () => {
              localStorage.setItem('preloaderShown', 'true')
              resolve()
            },
          })
          isGeneratingName = false
          // console.log('Match found:', names.join(''))
        }
      }, time)
    })
  }

  async function animatePreloaderOverlay() {
    return new Promise((resolve) => {
      domElements.preloaderOverlay.forEach((ov, index) => {
        const tl = gsap.timeline()
        let direction
        index === 0 ? (direction = 1) : (direction = -1)
        tl.to(ov, { yPercent: -12 * direction, duration: dur, ease: ease3 })
          .to(ov, {
            yPercent: 0 * direction,
            duration: dur,
            ease: ease3,
            onComplete: () => {
              resolve()
            },
          })
          .to(ov, {
            yPercent: -100 * direction,
            duration: 1.6 * dur,
            ease: 'power4.out',
            onComplete: () => {
              domElements.preloader.style.zIndex = -30
            },
          })
      })
    })
  }

  function animateNav() {
    gsap.to(domElements.navLogo, {
      opacity: 1,
      duration: dur,
      ease: ease2,
    })
    gsap.to(domElements.logoLetters, {
      yPercent: -100,
      stagger: 0.1,
      duration: dur,
      ease: ease2,
    })
    gsap.to(domElements.navWrapper, {
      opacity: 1,
      duration: 4 * dur,
    })
  }

  function animateHeading() {
    const splitHeading_1 = new SplitType(domElements.headings[0], {
      types: 'chars',
    })
    const splitHeading_2 = new SplitType(domElements.headings[1], {
      types: 'chars',
    })
    gsap.from(splitHeading_1.chars, {
      xPercent: -100,
      opacity: 0,
      duration: dur,
      ease: ease2,
      stagger: {
        each: 0.05,
        from: 'end', // 👈 starts from the last element
      },
    })
    gsap.from(splitHeading_2.chars, {
      xPercent: 100,
      opacity: 0,
      duration: dur,
      ease: ease2,
      stagger: 0.05,
    })
    gsap.to(domElements.headings, {
      opacity: 1,
      duration: dur,
    })
  }

  function animateImg() {
    gsap.to(domElements.canvas_wrapper, {
      scale: 1,
      duration: 2 * dur,
      ease: ease3,
    })
  }

  // INIT

  async function init() {
    await generateName('Loading_')
    await animatePreloaderOverlay()
    animateNav()
    animateHeading()
    animateImg()
  }

  init()
}

export default intro
