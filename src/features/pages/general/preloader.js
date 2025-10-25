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
      preloaderSentence1: document.querySelector('.preloader-text-1'),
      preloaderSentence2: document.querySelector('.preloader-text-2'),
      preloaderUnderscore: document.querySelector('.underscore.is--preloader'),
      word1: document.querySelector('.preloader-word-1'),
      word2: document.querySelector('.preloader-word-2'),
      imgWrapper: document.querySelector('.preloader-img-wrapper'),
      curtain1: document.querySelector('.preloader-curtain-1'),
      curtain2: document.querySelector('.preloader-curtain-2'),
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

      const time = 48

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
          gsap.to(domElements.preloaderSentence1, {
            yPercent: 0,
            duration: 1.2 * dur,
            ease: 'power.inOut',
          })
          gsap.to(
            [domElements.preloaderSentence2, domElements.preloaderUnderscore],
            {
              yPercent: 0,
              stagger: -0.2,
              duration: 1.2 * dur,
              ease: 'power.inOut',
            }
          )
          gsap.to(domElements.preloaderText, {
            opacity: 0,
            repeat: 1,
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

  function animateWords() {
    // TWEEN INITIALS
    gsap.to(domElements.preloaderSentence1, {
      delay: 0.4,
      yPercent: -100,
      opacity: 1,
      duration: 1.2 * dur,
      ease: 'power.inOut',
    })
    gsap.to([domElements.preloaderSentence2, domElements.preloaderUnderscore], {
      delay: 0.4,
      yPercent: 100,
      opacity: 1,
      stagger: -0.2,
      duration: 1.2 * dur,
      ease: 'power.inOut',
    })
    gsap.to(domElements.word1, {
      delay: 0.8,
      x: -200,
      duration: 0.6,
      ease: 'power.inOut',
    })
    gsap.to(domElements.word2, {
      delay: 0.8,
      x: 200,
      duration: 0.6,
      ease: 'power.inOut',
    })
  }

  function animateImg() {
    gsap.from(domElements.imgWrapper, {
      scale: 0.8,
      duration: 1,
      ease: 'power2.inOut',
    })
    gsap.to(domElements.curtain1, {
      yPercent: -100,
      duration: 0.8,
      ease: 'power3.inOut',
    })
    gsap.to(domElements.curtain2, {
      yPercent: 100,
      duration: 0.8,
      ease: 'power3.inOut',
    })
  }

  // INIT
  async function init() {
    animateImg()
    animateWords()
    await generateName('100')
    await fadePreloader()
    document.body.classList.remove('no-scroll')
    introHome()
    localStorage.setItem('isPreloader', 'true')
  }

  return init()
}

export default preloader
