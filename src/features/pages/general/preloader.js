import gsap from 'gsap'

async function preloader() {
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
    }
  }
  const domElements = domElementsQuery()

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

  // INIT
  async function init() {
    await generateName('Loading_')
    await animatePreloaderOverlay()
    localStorage.setItem('isPreloader', 'true')
  }

  return init()
}

export default preloader
