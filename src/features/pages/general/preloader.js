import gsap from 'gsap'

import introHome from '../../pages/home/introHome'

async function preloader() {
  document.body.classList.add('no-scroll')

  // console.log('running preloader')
  let dur = 0.6
  // let ease1 = 'power1.inOut'
  let ease2 = 'power2.inOut'
  // let ease4 = 'power4.inOut'

  function domElementsQuery() {
    return {
      // preload
      preloaderText: document.querySelector('.percentage-block-p'),
      preloader: document.querySelector('.preloader__section'),
      preloaderSentence: document.querySelector('.preloader-text'),
      preloaderUnderscore: document.querySelector('.underscore.is--preloader'),
    }
  }
  const domElements = domElementsQuery()

  let countIndex = 0
  let countChar = ''
  function randomChar() {
    //prettier-ignore
    const chars = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWXxYyZzáéíóú0123456789'
    // const chars = '0123456789'
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

      const time = 32

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
            if (countIndex == 24) {
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
          gsap.to(
            [domElements.preloaderSentence, domElements.preloaderUnderscore],
            {
              yPercent: 100,
              stagger: -0.2,
              duration: 1.2 * dur,
              ease: 'power.inOut',
            }
          )
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

  async function fadePreloader() {
    gsap.to(domElements.preloader, {
      opacity: 0,
      duration: 1.2,
      ease: 'power.out',
      onComplete: () => {
        domElements.preloader.style.zIndex = -30
      },
    })
  }

  // INIT
  async function init() {
    await generateName('100')
    await fadePreloader()
    document.body.classList.remove('no-scroll')
    introHome()
    localStorage.setItem('isPreloader', 'true')
  }

  return init()
}

export default preloader
