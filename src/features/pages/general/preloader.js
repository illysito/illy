import gsap from 'gsap'

import introHome from '../../pages/home/introHome'

async function preloader() {
  // let isMobile = window.innerWidth <= 767

  document.body.classList.add('no-scroll')

  // console.log('running preloader')
  let dur = 0.6
  let delay = 0.4
  // let ease1 = 'power1.inOut'
  // let ease2 = 'power2.inOut'
  // let ease4 = 'power4.inOut'

  function domElementsQuery() {
    return {
      preloader: document.querySelector('.preloader__section'),
      preloaderSentence1: document.querySelector('.preloader-text-1'),
      preloaderSentence2: document.querySelector('.preloader-text-2'),
      word1: document.querySelector('.preloader-word-1'),
      word2: document.querySelector('.preloader-word-2'),
      columns: document.querySelectorAll('.preloader-column'),
    }
  }
  const domElements = domElementsQuery()

  function animateWordsIn() {
    // TWEEN INITIALS
    gsap.to(domElements.preloaderSentence1, {
      delay: 2 * delay,
      yPercent: -100,
      opacity: 1,
      duration: 1.2 * dur,
      ease: 'power1.inOut',
    })
    gsap.to(domElements.preloaderSentence2, {
      delay: 2 * delay,
      yPercent: 100,
      opacity: 1,
      duration: 1.2 * dur,
      ease: 'power1.inOut',
    })
  }

  function fadeElementsOut() {
    gsap.to(domElements.preloaderSentence1, {
      yPercent: -200,
      opacity: 0,
      duration: 1.2 * dur,
      ease: 'power1.inOut',
    })
    gsap.to(domElements.preloaderSentence2, {
      yPercent: 200,
      opacity: 0,
      duration: 1.2 * dur,
      ease: 'power1.inOut',
    })
  }

  function fadePreloaderOut() {
    let fadeDirection = -1
    // const directionBias = Math.random()
    // if (directionBias < 0.5) {
    //   fadeDirection = 1
    // } else {
    //   fadeDirection = -1
    // }
    gsap.to(domElements.columns, {
      delay: delay,
      yPercent: 100 * fadeDirection,
      // opacity: 0,
      stagger: {
        each: 0.01,
        from: 'random',
      },
      duration: 1,
      ease: 'power3.inOut',
      onComplete: () => {
        gsap.set(domElements.preloader, { zIndex: -30 })
      },
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
    animateWordsIn()
    // await generateName('100')
    setTimeout(() => {
      fadeElementsOut()
    }, 2600)
    setTimeout(() => {
      fadePreloaderOut()
      document.body.classList.remove('no-scroll')
    }, 2800)
    setTimeout(() => {
      fadeMotionButton()
    }, 4000)

    // fadePreloader()
    setTimeout(() => {
      introHome()
    }, 3800)
    localStorage.setItem('isPreloader', 'true')
  }

  return init()
}

export default preloader
