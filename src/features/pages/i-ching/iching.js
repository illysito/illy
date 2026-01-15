import gsap from 'gsap'
import SplitType from 'split-type'

import HEXAGRAMS from './hexagrams'

function iChing() {
  function githubToJsDelivr(permalink) {
    return permalink
      .replace('github.com', 'cdn.jsdelivr.net/gh')
      .replace('/blob/', '@')
  }

  //#region DOM
  // general
  const introSection = document.querySelector('.intro-section')
  const iChingSection = document.querySelector('.i-ching-section')
  const infoSection = document.querySelector('.info-section')
  const iChingHeader = document.querySelector('.i-ching-header')
  const infoChars = document.querySelectorAll('.info-char')
  const hexContainers = document.querySelectorAll('.hexagram-container')
  const imgs = document.querySelectorAll('.chinese-txtr')
  const titles = document.querySelectorAll('.hexagram-title')
  const trigramHeadings = document.querySelectorAll('.trigram-h')
  const readingSection = document.querySelector('.explanation-section')
  const readingHs = document.querySelectorAll('.reading-h')
  const dict = document.querySelector('.is--dictamen')
  const imagen = document.querySelector('.is--imagen')
  const linesBlock = document.querySelector('.lines-block')
  const readingColumn = document.querySelector('.col-center-reading')
  // coins
  const coinsWrapper = document.querySelector('.coins-img-wrapper')
  const yangCoins = document.querySelectorAll('.coin-yang')
  const yinCoins = document.querySelectorAll('.coin-yin')
  // buttons
  const buttons = document.querySelectorAll('.is-butt')
  const startButton = document.querySelector('.start-button')
  const infoButton = document.querySelector('.info-button')
  const infoBackButton = document.querySelector('.is--expl')
  const coinButton = document.querySelector('.coins-button')
  const explanationButton = document.querySelector('.explanation-button')
  const mutableButton = document.querySelector('.mutable-button')
  const originalButton = document.querySelector('.original-button')
  const backButton = document.querySelector('.backtohex-button')

  //#endregion

  let lineCounter = 0
  let binaryCounter = 0b000000
  let mutableLines = [0, 0, 0, 0, 0, 0]
  let splitH
  let splitIntroH
  let isBlocked = false
  // const svh = window.innerHeight * 0.01

  function blockButton() {
    // gsap.to(coinButton, {
    //   // opacity: 0.4,
    //   pointerEvents: 'none',
    //   duration: 0.2,
    // })
    // isBlocked = true
    // setTimeout(() => {
    //   gsap.to(coinButton, {
    //     // opacity: 1,
    //     pointerEvents: 'auto',
    //     duration: 0.2,
    //   })
    //   isBlocked = false
    // }, 3400)
    console.log('off for a while')
  }

  function lockScroll() {
    document.body.style.position = 'fixed'
    document.body.style.top = '0'
  }

  function unlockScroll() {
    document.body.style.position = 'static'
    document.body.style.top = '0'
  }

  function init() {
    gsap.to(introSection, {
      delay: 0.6,
      opacity: 1,
      duration: 1.2,
      ease: 'power2.inOut',
    })
    splitLines()
    lockScroll()
  }
  init()

  function overlapReading() {
    readingSection.style.position = 'relative'
    infoSection.style.position = 'absolute'
  }

  // function overlapInfo() {
  //   readingSection.style.position = 'absolute'
  //   infoSection.style.position = 'relative'
  // }

  function start() {
    gsap.to(splitIntroH.lines, {
      yPercent: 100,
      duration: 1.2,
      ease: 'power2.inOut',
    })
    gsap.to(iChingHeader, {
      // opacity: 0,
      yPercent: 100,
      duration: 1.2,
      ease: 'power2.inOut',
    })
    gsap.to(introSection, {
      yPercent: -100,
      duration: 2.4,
      ease: 'power2.inOut',
    })
    gsap.to(introSection, {
      opacity: 0,
      duration: 1.2,
      ease: 'power2.inOut',
    })
    gsap.to(iChingSection, {
      opacity: 1,
      delay: 1.2,
      duration: 1.2,
      ease: 'power2.inOut',
    })
    overlapReading()
  }

  function info() {
    unlockScroll()
    gsap.to(splitIntroH.lines, {
      yPercent: 100,
      duration: 1.2,
      ease: 'power2.inOut',
    })
    gsap.to(iChingHeader, {
      // opacity: 0,
      yPercent: 100,
      duration: 1.2,
      ease: 'power2.inOut',
    })
    gsap.to(introSection, {
      yPercent: -100,
      duration: 2.4,
      ease: 'power2.inOut',
    })
    gsap.to(introSection, {
      opacity: 0,
      duration: 1.2,
      ease: 'power2.inOut',
    })
    gsap.to(infoSection, {
      opacity: 1,
      zIndex: 99,
      delay: 1.2,
      duration: 1.2,
      ease: 'power2.inOut',
    })
    gsap.to([readingHs], {
      yPercent: -100,
      delay: 1.4,
      duration: 1.8,
      ease: 'power2.inOut',
    })
    gsap.to(splitH.lines, {
      yPercent: 0,
      delay: 1.4,
      duration: 1.8,
      ease: 'power2.inOut',
    })
    gsap.to([infoChars, infoBackButton], {
      opacity: 1,
      duration: 1.2,
      delay: 1.8,
    })
  }

  function backFromInfo() {
    gsap.to([infoChars, infoBackButton], {
      opacity: 0,
      duration: 1.2,
      // delay: 1.4,
    })
    gsap.to(splitIntroH.lines, {
      delay: 1.2,
      yPercent: 0,
      duration: 1.2,
      ease: 'power2.inOut',
    })
    gsap.to(iChingHeader, {
      delay: 1.2,
      // opacity: 0,
      yPercent: 0,
      duration: 1.2,
      ease: 'power2.inOut',
    })
    gsap.to(introSection, {
      yPercent: 0,
      duration: 2.4,
      ease: 'power2.inOut',
    })
    gsap.to(introSection, {
      delay: 1.4,
      opacity: 1,
      duration: 1.2,
      ease: 'power2.inOut',
    })
    gsap.to(infoSection, {
      opacity: 0,
      zIndex: -1,
      // delay: 1.2,
      duration: 2.4,
      ease: 'power2.inOut',
      onComplete: () => {
        lockScroll()
      },
    })
    gsap.to([readingHs], {
      yPercent: 0,
      // delay: 1.4,
      duration: 1.2,
      ease: 'power2.inOut',
    })
    gsap.to(splitH.lines, {
      yPercent: 100,
      duration: 1.2,
      ease: 'power2.inOut',
    })
  }

  function throwCoins() {
    let lineIndex = 5 - lineCounter
    let value = 0
    const coin1Value = Math.random()
    const coin2Value = Math.random()
    const coin3Value = Math.random()
    if (coin1Value > 0.5) {
      gsap.to(yangCoins[0], {
        opacity: 1,
        duration: 0.6,
      })
      gsap.to(yinCoins[0], {
        opacity: 0,
        duration: 0.6,
      })
      value += 3
    } else {
      gsap.to(yangCoins[0], {
        opacity: 0,
        duration: 0.6,
      })
      gsap.to(yinCoins[0], {
        opacity: 1,
        duration: 0.6,
      })
      value += 2
    }
    if (coin2Value > 0.5) {
      gsap.to(yangCoins[1], {
        opacity: 1,
        duration: 0.6,
        delay: 0.2,
      })
      gsap.to(yinCoins[1], {
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
      })
      value += 3
    } else {
      gsap.to(yangCoins[1], {
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
      })
      gsap.to(yinCoins[1], {
        opacity: 1,
        duration: 0.6,
        delay: 0.2,
      })
      value += 2
    }
    if (coin3Value > 0.5) {
      gsap.to(yangCoins[2], {
        opacity: 1,
        duration: 0.6,
        delay: 0.4,
      })
      gsap.to(yinCoins[2], {
        opacity: 0,
        duration: 0.6,
        delay: 0.4,
      })
      value += 3
    } else {
      gsap.to(yangCoins[2], {
        opacity: 0,
        duration: 0.6,
        delay: 0.4,
      })
      gsap.to(yinCoins[2], {
        opacity: 1,
        duration: 0.6,
        delay: 0.4,
      })
      value += 2
    }
    if (value == 6) {
      createMutableYinLine()
      binaryCounter |= 0 << lineIndex
      mutableLines[lineCounter] = 1
    } else if (value == 8) {
      createYinLine()
      binaryCounter |= 0 << lineIndex
    } else if (value == 7) {
      createYangLine()
      binaryCounter |= 1 << lineIndex
    } else if (value == 9) {
      createMutableYangLine()
      binaryCounter |= 1 << lineIndex
      mutableLines[lineCounter] = 1
    }
  }

  function createYinLine() {
    hexContainers.forEach((cont) => {
      const line = document.createElement('div')
      line.classList.add('yin-line')

      const yinSubline1 = document.createElement('div')
      const yinSubline2 = document.createElement('div')
      yinSubline1.classList.add('yin-subline')
      yinSubline2.classList.add('yin-subline')

      line.appendChild(yinSubline1)
      line.appendChild(yinSubline2)

      cont.prepend(line)

      displayLine(line)
    })
  }

  function createMutableYinLine() {
    hexContainers.forEach((cont) => {
      const line = document.createElement('div')
      line.classList.add('yin-line')
      line.classList.add('is--mutable')

      const yinSubline1 = document.createElement('div')
      const yinSubline2 = document.createElement('div')
      yinSubline1.classList.add('yin-subline')
      yinSubline1.classList.add('is--mutable')
      yinSubline2.classList.add('yin-subline')
      yinSubline2.classList.add('is--mutable')

      line.appendChild(yinSubline1)
      line.appendChild(yinSubline2)

      cont.prepend(line)

      displayLine(line)
    })
  }

  function createYangLine() {
    hexContainers.forEach((cont) => {
      const line = document.createElement('div')
      line.classList.add('yang-line')

      cont.prepend(line)

      displayLine(line)
    })
  }

  function createMutableYangLine() {
    hexContainers.forEach((cont) => {
      const line = document.createElement('div')
      line.classList.add('yang-line')
      line.classList.add('is--mutable')

      cont.prepend(line)

      displayLine(line)
    })
  }

  function displayLine(line) {
    gsap.to(line, {
      width: '100%',
      duration: 3.2,
      ease: 'power2.inOut',
    })
  }

  function displayChar() {
    const currentHex = hexByBin.get(binaryCounter)
    const source = githubToJsDelivr(currentHex.src)
    imgs.forEach((img) => {
      img.src = source
      gsap.to(img, {
        delay: 0.6,
        opacity: 1,
        duration: 2,
        ease: 'power2.inOut',
      })
    })
  }

  function displayTitle() {
    const currentHex = hexByBin.get(binaryCounter)
    titles.forEach((title) => {
      title.textContent = currentHex.order + '.  ' + currentHex.name
      trigramHeadings[0].textContent = 'Arriba:  ' + currentHex.up
      trigramHeadings[2].textContent = 'Arriba:  ' + currentHex.up
      trigramHeadings[1].textContent = 'Abajo:  ' + currentHex.down
      trigramHeadings[3].textContent = 'Abajo:  ' + currentHex.down
      gsap.to([title, trigramHeadings], {
        delay: 0.6,
        opacity: 1,
        duration: 2,
        ease: 'power2.inOut',
      })
    })
  }

  function displayReading() {
    const currentHex = hexByBin.get(binaryCounter)
    dict.textContent = currentHex.dictamen
    imagen.textContent = currentHex.imagen
    for (let i = 0; i < mutableLines.length; i++) {
      if (mutableLines[i] == 1) {
        const mutableLine = document.createElement('h3')
        mutableLine.classList.add('reading-sub-h')
        mutableLine.classList.add('is--line')
        if (i == 0) {
          mutableLine.textContent = currentHex.mutable1
        } else if (i == 1) {
          mutableLine.textContent = currentHex.mutable2
        } else if (i == 2) {
          mutableLine.textContent = currentHex.mutable3
        } else if (i == 3) {
          mutableLine.textContent = currentHex.mutable4
        } else if (i == 4) {
          mutableLine.textContent = currentHex.mutable5
        } else if (i == 5) {
          mutableLine.textContent = currentHex.mutable6
        }
        linesBlock.appendChild(mutableLine)
      }
    }
    splitLines()
  }

  function showReading() {
    unlockScroll()
    explanationButton.style.pointerEvents = 'none'
    requestAnimationFrame(() => {
      gsap.to(iChingSection, {
        delay: 0.4,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.inOut',
      })
      gsap.to(readingSection, {
        opacity: 1,
        zIndex: 99,
        duration: 2.4,
        ease: 'expo.inOut',
      })
      gsap.to(readingHs, {
        delay: 1.2,
        yPercent: -100,
        duration: 1.2,
        ease: 'power2.inOut',
      })
      gsap.to(splitH.lines, {
        delay: 1.2,
        yPercent: 0,
        duration: 1.2,
        ease: 'power2.inOut',
      })
      gsap.to(readingColumn, {
        delay: 1.2,
        opacity: 1,
        duration: 1.2,
        ease: 'power2.inOut',
      })
    })
  }

  function hideReading() {
    explanationButton.style.pointerEvents = 'auto'
    gsap.to(readingHs, {
      yPercent: 100,
      duration: 1.2,
      ease: 'power2.inOut',
    })
    gsap.to(splitH.lines, {
      yPercent: 100,
      duration: 1.2,
      ease: 'power2.inOut',
    })
    gsap.to(iChingSection, {
      delay: 0.8,
      opacity: 1,
      duration: 1.2,
      ease: 'power2.inOut',
    })
    gsap.to(readingColumn, {
      opacity: 0,
      duration: 1.2,
      ease: 'power2.inOut',
    })
    gsap.to(readingSection, {
      opacity: 0,
      zIndex: -1,
      duration: 2.4,
      ease: 'expo.inOut',
      onComplete: () => {
        lockScroll()
      },
    })
  }

  function mutateHexagram() {
    // Generate new BINARY sequence
    let futureBinaryCounter = binaryCounter
    for (let i = 0; i < mutableLines.length; i++) {
      if (mutableLines[i] == 1) {
        futureBinaryCounter ^= 1 << (5 - i)
      }
    }
    const newHex = hexByBin.get(futureBinaryCounter)

    const hexContainer = document.querySelector(
      '.hexagram-container.is--reading'
    )
    const hexWrapper = document.querySelector('.hex-wrapper.is--reading')

    // Change lines visually
    const currentMutableLines = hexContainer.querySelectorAll('.is--mutable')
    console.log(currentMutableLines)
    currentMutableLines.forEach((line) => {
      gsap.to(line, {
        opacity: 0,
        duration: 1.6,
        ease: 'power2.inOut',
        onComplete: () => {
          line.classList.remove('is--mutable')
          line.classList.add('is--mutated')
          if (line.classList.contains('yang-line')) {
            line.classList.remove('yang-line')
            line.classList.add('yin-line')

            const yinSubline1 = document.createElement('div')
            const yinSubline2 = document.createElement('div')
            yinSubline1.classList.add('yin-subline')
            yinSubline2.classList.add('yin-subline')

            line.appendChild(yinSubline1)
            line.appendChild(yinSubline2)
          } else if (line.classList.contains('yin-line')) {
            line.classList.remove('yin-line')
            line.classList.add('yang-line')

            line.innerHTML = ''
          }

          gsap.to(line, {
            opacity: 1,
            duration: 1.6,
            ease: 'power2.inOut',
          })
        },
      })
    })

    // Change text visually
    const currentImg = hexWrapper.querySelector('.chinese-txtr')
    const source = githubToJsDelivr(newHex.src)
    const currentTitle = hexWrapper.querySelector('.hexagram-title')
    const currentTrigramHeadings = hexWrapper.querySelectorAll('.trigram-h')
    gsap.to([readingHs, splitH.lines], {
      yPercent: 100,
      duration: 1.2,
      ease: 'power2.inOut',
    })
    gsap.to(linesBlock, {
      opacity: 0,
      duration: 1.6,
    })
    gsap.to([currentImg, currentTitle, currentTrigramHeadings], {
      opacity: 0,
      duration: 1.6,
      ease: 'power2.inOut',
      onComplete: () => {
        currentImg.src = source
        currentTitle.textContent = newHex.order + '.  ' + newHex.name
        currentTrigramHeadings[0].textContent = newHex.up
        currentTrigramHeadings[1].textContent = newHex.down
        dict.textContent = newHex.dictamen
        imagen.textContent = newHex.imagen
        splitLines()

        gsap.to([currentImg, currentTitle, currentTrigramHeadings], {
          opacity: 1,
          duration: 1.6,
          ease: 'power2.inOut',
        })

        gsap.to(splitH.lines, {
          yPercent: 0,
          duration: 1.2,
          ease: 'power2.inOut',
        })
        gsap.to(readingHs, {
          yPercent: -100,
          duration: 1.2,
          ease: 'power2.inOut',
        })
      },
    })

    // Swipe buttons
    gsap.to(mutableButton, {
      opacity: 0,
      zIndex: -1,
      duration: 0.6,
      pointerEvents: 'none',
    })
    gsap.to(originalButton, {
      delay: 1.2,
      opacity: 1,
      zIndex: 1,
      duration: 1.2,
      pointerEvents: 'auto',
    })
  }

  function hideMutating() {
    let k = 0
    for (let i = 0; i < mutableLines.length; i++) {
      k += mutableLines[i]
    }
    if (k == 0) {
      gsap.to(mutableButton, {
        opacity: 0,
        zIndex: -30,
      })
      gsap.to(linesBlock, {
        opacity: 0,
      })
    }
  }

  function returnToOriginalHexagram() {
    const currentHex = hexByBin.get(binaryCounter)

    const hexContainer = document.querySelector(
      '.hexagram-container.is--reading'
    )
    const hexWrapper = document.querySelector('.hex-wrapper.is--reading')

    // Change lines visually
    const currentReturningLines = hexContainer.querySelectorAll('.is--mutated')
    currentReturningLines.forEach((line) => {
      gsap.to(line, {
        opacity: 0,
        duration: 1.6,
        ease: 'power2.inOut',
        onComplete: () => {
          line.classList.remove('is--mutated')
          line.classList.add('is--mutable')
          if (line.classList.contains('yang-line')) {
            line.classList.remove('yang-line')
            line.classList.add('yin-line')

            const yinSubline1 = document.createElement('div')
            const yinSubline2 = document.createElement('div')
            yinSubline1.classList.add('yin-subline')
            yinSubline1.classList.add('is--mutable')
            yinSubline2.classList.add('yin-subline')
            yinSubline2.classList.add('is--mutable')

            line.appendChild(yinSubline1)
            line.appendChild(yinSubline2)
          } else if (line.classList.contains('yin-line')) {
            line.classList.remove('yin-line')
            line.classList.add('yang-line')

            line.innerHTML = ''
          }

          gsap.to(line, {
            opacity: 1,
            duration: 1.6,
            ease: 'power2.inOut',
          })
        },
      })
    })

    // Change text visually
    const currentImg = hexWrapper.querySelector('.chinese-txtr')
    const source = githubToJsDelivr(currentHex.src)
    const currentTitle = hexWrapper.querySelector('.hexagram-title')
    const currentTrigramHeadings = hexWrapper.querySelectorAll('.trigram-h')
    gsap.to([readingHs, splitH.lines], {
      yPercent: 100,
      duration: 1.2,
      ease: 'power2.inOut',
    })
    gsap.to([currentImg, currentTitle, currentTrigramHeadings], {
      opacity: 0,
      duration: 1.6,
      ease: 'power2.inOut',
      onComplete: () => {
        currentImg.src = source
        currentTitle.textContent = currentHex.order + '.  ' + currentHex.name
        currentTrigramHeadings[0].textContent = currentHex.up
        currentTrigramHeadings[1].textContent = currentHex.down
        dict.textContent = currentHex.dictamen
        imagen.textContent = currentHex.imagen
        splitLines()

        gsap.to([currentImg, currentTitle, currentTrigramHeadings], {
          opacity: 1,
          duration: 1.6,
          ease: 'power2.inOut',
        })

        gsap.to('.lines-block', {
          opacity: 1,
          duration: 1.2,
        })

        gsap.to(splitH.lines, {
          yPercent: 0,
          duration: 1.2,
          ease: 'power2.inOut',
        })
        gsap.to(readingHs, {
          yPercent: -100,
          duration: 1.2,
          ease: 'power2.inOut',
        })
      },
    })

    // Swipe buttons
    gsap.to(originalButton, {
      opacity: 0,
      zIndex: -1,
      duration: 0.6,
      pointerEvents: 'none',
    })
    gsap.to(mutableButton, {
      delay: 1.2,
      opacity: 1,
      zIndex: 1,
      duration: 1.2,
      pointerEvents: 'auto',
    })
  }

  function displayExplanationButton() {
    gsap.to([coinButton, coinsWrapper], {
      delay: 0.6,
      opacity: 0,
      zIndex: -1,
      duration: 0.8,
      pointerEvents: 'none',
    })
    gsap.to(explanationButton, {
      delay: 3.6,
      opacity: 1,
      zIndex: 1,
      duration: 1.2,
      pointerEvents: 'auto',
    })
  }

  function splitLines() {
    const readingSubHs = document.querySelectorAll('.reading-sub-h')
    splitH = new SplitType(readingSubHs, {
      types: 'lines',
    })
    splitH.lines.forEach((line) => {
      const wrapper = document.createElement('div')
      wrapper.classList.add('overflow-hidden')
      line.parentNode.insertBefore(wrapper, line)
      wrapper.appendChild(line)
      gsap.set(line, {
        yPercent: 100,
      })
    })
  }

  function splitIntroLines() {
    const subH = document.querySelectorAll('.i-ching-subheader')
    splitIntroH = new SplitType(subH, {
      types: 'lines',
    })
    splitIntroH.lines.forEach((line) => {
      const wrapper = document.createElement('div')
      wrapper.classList.add('overflow-hidden')
      line.parentNode.insertBefore(wrapper, line)
      wrapper.appendChild(line)
      // gsap.set(line, {
      //   yPercent: 100,
      // })
    })
  }
  splitIntroLines()

  const hexByBin = new Map(HEXAGRAMS.map((h) => [h.bin, h]))

  //#region CLICK
  function clickAnimation(b) {
    // animate click
    gsap.to(b, {
      scale: 0.96,
      duration: 0.1,
      onComplete: () => {
        gsap.to(b, {
          scale: 0.98,
          duration: 0.1,
        })
      },
    })
  }
  startButton.addEventListener('click', (e) => {
    const b = e.currentTarget
    clickAnimation(b)
    start()
  })

  infoButton.addEventListener('click', (e) => {
    const b = e.currentTarget
    clickAnimation(b)
    info()
  })

  infoBackButton.addEventListener('click', (e) => {
    const b = e.currentTarget
    clickAnimation(b)
    backFromInfo()
  })

  coinButton.addEventListener('click', (e) => {
    // if hexagram is not FULL
    if (!isBlocked) {
      blockButton()
      if (lineCounter < 6) {
        const b = e.currentTarget
        clickAnimation(b)

        // coin logic
        throwCoins()

        lineCounter++

        // if hexagram has been completed
        if (lineCounter == 6) {
          displayExplanationButton()
          setTimeout(() => {
            displayChar()
            displayTitle()
            displayReading()
            hideMutating()
            splitLines()
          }, 1200)
        }
      }
    }
  })

  explanationButton.addEventListener('click', (e) => {
    const b = e.currentTarget
    clickAnimation(b)
    showReading()
  })

  backButton.addEventListener('click', (e) => {
    const b = e.currentTarget
    clickAnimation(b)
    hideReading()
  })

  mutableButton.addEventListener('click', (e) => {
    const b = e.currentTarget
    clickAnimation(b)
    mutateHexagram()
  })

  originalButton.addEventListener('click', (e) => {
    const b = e.currentTarget
    clickAnimation(b)
    returnToOriginalHexagram()
  })

  //#endregion

  //#region HOVER

  buttons.forEach((button) => {
    const wrapper = button.firstElementChild
    const txt = wrapper.firstElementChild
    const txtHidden = txt.nextElementSibling

    button.addEventListener('mouseover', () => {
      gsap.to(button, {
        scale: 0.98,
        duration: 0.2,
        ease: 'power2.inOut',
      })
      gsap.to([txt, txtHidden], {
        yPercent: -100,
        duration: 0.4,
        ease: 'power2.inOut',
      })
    })
    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.2,
        ease: 'power2.inOut',
      })
      gsap.to([txt, txtHidden], {
        yPercent: 0,
        duration: 0.4,
        ease: 'power2.inOut',
      })
    })
  })

  //#endregion
}

export default iChing
