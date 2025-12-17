import gsap from 'gsap'

import introHome from '../../pages/home/introHome'

async function preloader() {
  let isMobile = window.innerWidth <= 767
  let imgX
  if (isMobile) {
    imgX = 60
  } else {
    imgX = 160
  }
  document.body.classList.add('no-scroll')

  // console.log('running preloader')
  let dur = 0.6
  let delay = 0.4
  // let ease1 = 'power1.inOut'
  // let ease2 = 'power2.inOut'
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

  // let countIndex = 0
  // let countChar = ''
  // function randomChar() {
  //   //prettier-ignore
  //   const chars = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWXxYyZzáéíóú0123456789'
  //   // const chars = '0123456789'
  //   countChar = chars[countIndex]
  //   countIndex = (countIndex + 1) % 62
  // }

  // let isGeneratingName = false
  // async function generateName(target) {
  //   return new Promise((resolve) => {
  //     if (isGeneratingName) return
  //     isGeneratingName = true

  //     const targetText = target
  //     const targetChars = targetText.split('')
  //     const time = 32

  //     const names = new Array(targetChars.length).fill(' ')
  //     names[0] = targetChars[0]
  //     let index = 1

  //     const interval = setInterval(() => {
  //       if (index < targetChars.length) {
  //         if (names[index] !== targetChars[index]) {
  //           randomChar()
  //           names[index] = countChar
  //           // if (isUpperCase(targetChars[index])) {
  //           //   names[index] = targetChars[index]
  //           // }
  //           if (countIndex == 24) {
  //             names[index] = targetChars[index]
  //           }
  //         } else {
  //           countIndex = 0
  //           index++ // Move to the next character only when correct
  //         }

  //         domElements.preloaderText.textContent = names.join('')

  //         // console.log(names.join(''))
  //       } else {
  //         clearInterval(interval)
  //         gsap.to(domElements.preloaderSentence1, {
  //           yPercent: 0,
  //           duration: 1.2 * dur,
  //           ease: 'power.inOut',
  //         })
  //         gsap.to(
  //           [domElements.preloaderSentence2, domElements.preloaderUnderscore],
  //           {
  //             yPercent: 0,
  //             stagger: -0.2,
  //             duration: 1.2 * dur,
  //             ease: 'power.inOut',
  //           }
  //         )
  //         gsap.to(domElements.imgWrapper, {
  //           opacity: 0,
  //           duration: 1.2 * dur,
  //           ease: 'power.inOut',
  //         })
  //         gsap.to(domElements.preloaderText, {
  //           opacity: 0,
  //           duration: 1.2 * dur,
  //           ease: ease2,
  //           // delay: 1,
  //           onComplete: () => {
  //             localStorage.setItem('preloaderShown', 'true')
  //             resolve()
  //           },
  //         })
  //         isGeneratingName = false
  //         // console.log('Match found:', names.join(''))
  //       }
  //     }, time)
  //   })
  // }

  // async function generateName(target) {
  //   return new Promise((resolve) => {
  //     const targetChars = target.split('')
  //     const names = new Array(targetChars.length).fill(' ')
  //     names[0] = targetChars[0]
  //     let index = 1

  //     function step() {
  //       if (index < targetChars.length) {
  //         randomChar()
  //         names[index] = countChar
  //         if (countIndex === 32) {
  //           names[index] = targetChars[index]
  //           index++
  //         }
  //         domElements.preloaderText.textContent = names.join('')
  //         requestAnimationFrame(step) // next frame
  //       } else {
  //         // end of animation
  //         gsap.to(domElements.preloaderSentence1, {
  //           yPercent: 0,
  //           duration: 1.2 * dur,
  //           ease: 'power.inOut',
  //         })
  //         gsap.to(
  //           [domElements.preloaderSentence2, domElements.preloaderUnderscore],
  //           {
  //             yPercent: 0,
  //             stagger: -0.2,
  //             duration: 1.2 * dur,
  //             ease: 'power.inOut',
  //           }
  //         )
  //         gsap.to(domElements.imgWrapper, {
  //           opacity: 0,
  //           duration: 1.2 * dur,
  //           ease: 'power.inOut',
  //         })
  //         gsap.to(domElements.preloaderText, {
  //           opacity: 0,
  //           duration: 1.2 * dur,
  //           ease: ease2,
  //           // delay: 1,
  //           onComplete: () => {
  //             localStorage.setItem('preloaderShown', 'true')
  //             resolve()
  //           },
  //         })
  //         // resolve()
  //       }
  //     }

  //     requestAnimationFrame(step)
  //   })
  // }

  function fadeElements() {
    gsap.to(domElements.preloaderSentence1, {
      yPercent: 0,
      duration: 1.2 * dur,
      ease: 'power.inOut',
    })
    gsap.to([domElements.preloaderSentence2, domElements.preloaderUnderscore], {
      yPercent: 0,
      stagger: -0.2,
      duration: 1.2 * dur,
      ease: 'power.inOut',
    })
    gsap.to(domElements.imgWrapper, {
      opacity: 0,
      duration: 1.2 * dur,
      ease: 'power.inOut',
      onComplete: () => {
        localStorage.setItem('preloaderShown', 'true')
        // resolve()
      },
    })
  }

  function fadePreloader() {
    gsap.to(domElements.preloader, {
      delay: delay,
      opacity: 0,
      duration: 1.2,
      ease: 'power.out',
      onComplete: () => {
        gsap.set(domElements.preloader, { zIndex: -30 })
      },
    })
  }

  function animateWords() {
    // TWEEN INITIALS
    gsap.to(domElements.preloaderSentence1, {
      delay: 2 * delay,
      yPercent: -100,
      opacity: 1,
      duration: 1.2 * dur,
      ease: 'power.inOut',
    })
    gsap.to([domElements.preloaderSentence2, domElements.preloaderUnderscore], {
      delay: 2 * delay,
      yPercent: 100,
      opacity: 1,
      stagger: -0.2,
      duration: 1.2 * dur,
      ease: 'power.inOut',
    })
    gsap.to(domElements.word1, {
      delay: 3 * delay,
      x: -imgX,
      duration: dur,
      ease: 'power.inOut',
    })
    gsap.to(domElements.word2, {
      delay: 3 * delay,
      x: imgX,
      duration: dur,
      ease: 'power.inOut',
    })
    // gsap.to(domElements.preloaderText, {
    //   delay: 2 * delay,
    //   opacity: 1,
    //   duration: dur,
    //   ease: 'power.inOut',
    // })
  }

  function animateImg() {
    gsap.from(domElements.imgWrapper, {
      delay: delay,
      scale: 0.8,
      duration: 2 * dur,
      ease: 'power2.inOut',
    })
    gsap.to(domElements.curtain1, {
      delay: delay,
      yPercent: -100,
      duration: 1.5 * dur,
      ease: 'power3.inOut',
    })
    gsap.to(domElements.curtain2, {
      delay: delay,
      yPercent: 100,
      duration: 1.5 * dur,
      ease: 'power3.inOut',
    })
  }

  function fadeMotionButton() {
    const motionButton = document.querySelector('.motion-button')
    if (motionButton) {
      gsap.to(motionButton, {
        opacity: 1,
        duration: 0.8,
        ease: 'power2.inOut',
      })
    }
  }

  // INIT
  async function init() {
    animateImg()
    animateWords()
    // await generateName('100')
    setTimeout(() => {
      fadeElements()
    }, 2400)
    setTimeout(() => {
      fadePreloader()
    }, 2800)
    setTimeout(() => {
      fadeMotionButton()
    }, 4000)

    // fadePreloader()
    document.body.classList.remove('no-scroll')
    introHome()
    localStorage.setItem('isPreloader', 'true')
  }

  return init()
}

export default preloader
