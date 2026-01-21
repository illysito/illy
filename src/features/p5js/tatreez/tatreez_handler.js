// import gsap from 'gsap'
import p5 from 'p5'

import tatreezArray from './tatreez_arrays.js'

/* eslint-disable */
function tatreezHandler(canvasWrapper) {
  // window._disableAutoScriptLoad = true
  new p5((sk) => {
    let canvasParent
    let width
    let height
    let res = 16
    let cols
    let rows
    let currentArr = []
    let index = 0
    let startIndex = 0

    // RANDOM TRANSITION
    let pending = []
    let transitionSpeed = 12
    let transitionLowerBound = 8

    sk.setup = () => {
      // Define parent and dimensions, create Canvas and attach it to the parent using its dimensions. ALWAYS in JS
      canvasParent = canvasWrapper
      width = canvasParent.offsetWidth
      height = canvasParent.offsetHeight
      const c = sk.createCanvas(width, height)
      c.parent(canvasParent)

      // sk.background(sk.color(255, 252, 249))
      // sk.stroke(sk.color(252, 252, 249))
      sk.background(sk.color(16))
      sk.stroke(sk.color(16))
      sk.fill(252, 104, 104)
      sk.strokeWeight(0.3)
      sk.fill(sk.color(16))

      cols = Math.floor(width / res)
      rows = Math.floor(height / res)

      // init currentArr
      for (let i = 0; i < cols; i++) {
        currentArr[i] = []
        pending[i] = []
        for (let j = 0; j < rows; j++) {
          currentArr[i][j] = 0
          pending[i][j] = 0
        }
      }

      sk.frameRate(30)
    }

    sk.draw = () => {
      // sk.background(255, 252, 249)
      let targetArr = tatreezArray[index]

      // mutate current array based on target array
      mutateCurrentArrayRandom(currentArr, targetArr)

      // draw current array
      drawPattern(currentArr)
    }

    sk.windowResized = () => {
      // sk.resizeCanvas(canvasParent.offsetWidth, canvasParent.offsetHeight)
      width = canvasParent.offsetWidth
      height = canvasParent.offsetHeight
      sk.resizeCanvas(width, height)
    }

    function initPending() {
      for (let i = 0; i < cols; i++) {
        pending[i] = []
        for (let j = 0; j < rows; j++) {
          pending[i][j] = 0
        }
      }
    }

    function mutateCurrentArrayByColumn(currentArr, targetArr) {
      // console.log(startIndex)
      for (let i = startIndex; i < startIndex + 1; i++) {
        for (let j = 0; j < rows; j++) {
          // console.log(i, j)
          currentArr[i][j] = targetArr[i][j]
        }
      }
      if (startIndex <= 18) {
        startIndex++
      }
    }

    function mutateCurrentArrayByRow(currentArr, targetArr) {
      // console.log(startIndex)
      for (let i = 0; i < cols; i++) {
        for (let j = startIndex; j < startIndex + 1; j++) {
          // console.log(i, j)
          currentArr[i][j] = targetArr[i][j]
        }
      }
      if (startIndex <= 18) {
        startIndex++
      }
    }

    function mutateCurrentArrayRandom(currentArr, targetArr) {
      // Update pending
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (currentArr[i][j] != targetArr[i][j]) {
            pending[i][j] = 1
          } else {
            pending[i][j] = 0
          }
        }
      }

      for (let i = 0; i < transitionSpeed; i++) {
        for (let j = 0; j < transitionSpeed; j++) {
          let randomI = Math.floor(sk.random(21))
          let randomJ = Math.floor(sk.random(21))
          if (pending[randomI][randomJ] == 1) {
            currentArr[randomI][randomJ] = targetArr[randomI][randomJ]
          }
        }
      }

      if (transitionSpeed != transitionLowerBound) {
        transitionSpeed--
      }
    }

    function drawPattern(currentArr) {
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (currentArr[i][j] != 0) {
            fillSquare(currentArr[i][j])
          } else {
            eraseSquare()
          }
          sk.rect(j * res, i * res, res, res)
        }
      }
    }

    function fillSquare(color) {
      if (color == 1) {
        // red
        sk.fill(252, 104, 104)
      } else if (color == 2) {
        // blue
        sk.fill(120, 133, 255)
      } else if (color == 3) {
        // pink
        sk.fill(255, 174, 220)
      } else if (color == 4) {
        // green
        sk.fill(92, 183, 177)
      } else if (color == 5) {
        // yellow
        sk.fill(255, 161, 67)
      }
    }

    function eraseSquare() {
      // sk.fill(255, 252, 249)
      sk.fill(16)
    }

    window.addEventListener('right-click', () => {
      initPending()
      startIndex = 0
      transitionSpeed = 12
      index = (index + 1) % tatreezArray.length
    })

    window.addEventListener('left-click', () => {
      initPending()
      startIndex = 0
      transitionSpeed = 12
      index = index - 1
      if (index < 0) index = tatreezArray.length - 1
    })
  })
}

export default tatreezHandler
