import gsap from 'gsap'

import HEXAGRAMS from './hexagrams'

function iChing() {
  function githubToJsDelivr(permalink) {
    return permalink
      .replace('github.com', 'cdn.jsdelivr.net/gh')
      .replace('/blob/', '@')
  }

  const hexContainer = document.querySelector('.hexagram-container')
  const img = document.querySelector('.chinese-txtr')
  const title = document.querySelector('.hexagram-title')
  const trigramHeadings = document.querySelectorAll('.trigram-h')
  const coinButton = document.querySelector('.coins-button')
  const coinsWrapper = document.querySelector('.coins-img-wrapper')
  const explanationButton = document.querySelector('.explanation-button')
  const buttonTxt = document.querySelector('.coin-button-text')
  const buttonTxtHidden = document.querySelector('.coin-button-text-hidden')
  const yangCoins = document.querySelectorAll('.coin-yang')
  const yinCoins = document.querySelectorAll('.coin-yin')

  let lineCounter = 0
  let binaryCounter = 0b000000
  let mutableLines = [0, 0, 0, 0, 0, 0]

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
      createYinLine()
      binaryCounter |= 0 << lineIndex
      mutableLines[lineCounter] = 1
    } else if (value == 8) {
      createYinLine()
      binaryCounter |= 0 << lineIndex
    } else if (value == 7) {
      createYangLine()
      binaryCounter |= 1 << lineIndex
    } else if (value == 9) {
      createYangLine()
      binaryCounter |= 1 << lineIndex
      mutableLines[lineCounter] = 1
    }
    paintMutableLine()
  }

  function createYinLine() {
    const line = document.createElement('div')
    line.classList.add('yin-line')

    const yinSubline1 = document.createElement('div')
    const yinSubline2 = document.createElement('div')
    yinSubline1.classList.add('yin-subline')
    yinSubline2.classList.add('yin-subline')

    line.appendChild(yinSubline1)
    line.appendChild(yinSubline2)

    hexContainer.prepend(line)

    displayLine(line)
  }

  function createYangLine() {
    const line = document.createElement('div')
    line.classList.add('yang-line')

    hexContainer.prepend(line)

    displayLine(line)
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
    img.src = source
    gsap.to(img, {
      opacity: 1,
      duration: 2,
      ease: 'power2.inOut',
    })
  }

  function displayTitle() {
    const currentHex = hexByBin.get(binaryCounter)
    title.textContent = currentHex.order + '.  ' + currentHex.name
    trigramHeadings[0].textContent = 'Arriba:  ' + currentHex.up
    trigramHeadings[1].textContent = 'Abajo:  ' + currentHex.down
    gsap.to([title, trigramHeadings], {
      opacity: 1,
      duration: 2,
      ease: 'power2.inOut',
    })
  }

  function paintMutableLine() {
    for (let i = 0; i < lineCounter + 1; i++) {
      if (mutableLines[i] == 1) {
        console.log('is mutable')
      }
    }
  }

  function displayExplanationButton() {
    gsap.to([coinButton, coinsWrapper], {
      opacity: 0,
      zIndex: -1,
      duration: 1.2,
      pointerEvents: 'none',
    })
    gsap.to(explanationButton, {
      delay: 1.2,
      opacity: 1,
      zIndex: 1,
      duration: 1.2,
      pointerEvents: 'auto',
    })
  }

  const hexByBin = new Map(HEXAGRAMS.map((h) => [h.bin, h]))

  // EVENT LISTENER ON BUTTON

  coinButton.addEventListener('click', () => {
    // if hexagram is not FULL
    if (lineCounter < 6) {
      // animate click
      gsap.to(coinButton, {
        scale: 0.96,
        duration: 0.1,
        onComplete: () => {
          gsap.to(coinButton, {
            scale: 0.98,
            duration: 0.1,
          })
        },
      })

      // coin logic
      throwCoins()

      lineCounter++

      // if hexagram has been completed
      if (lineCounter == 6) {
        console.log('function here')
        displayChar()
        displayTitle()

        setTimeout(displayExplanationButton, 1200)
        // displayExplanationButton()
      }
    }
  })

  // HOVER

  coinButton.addEventListener('mouseover', () => {
    gsap.to(coinButton, {
      scale: 0.98,
      duration: 0.2,
      ease: 'power2.inOut',
    })
    gsap.to([buttonTxt, buttonTxtHidden], {
      yPercent: -100,
      duration: 0.4,
      ease: 'power2.inOut',
    })
  })

  coinButton.addEventListener('mouseleave', () => {
    gsap.to(coinButton, {
      scale: 1,
      duration: 0.2,
      ease: 'power2.inOut',
    })
    gsap.to([buttonTxt, buttonTxtHidden], {
      yPercent: 0,
      duration: 0.4,
      ease: 'power2.inOut',
    })
  })
}

export default iChing
