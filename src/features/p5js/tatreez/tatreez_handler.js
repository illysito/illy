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
    // let cols = 30
    // let rows = 2 * cols / 3
    let res = 16
    let cols
    let rows

    let index = 0

    sk.setup = () => {
      // Define parent and dimensions, create Canvas and attach it to the parent using its dimensions. ALWAYS in JS
      canvasParent = canvasWrapper
      width = canvasParent.offsetWidth
      height = canvasParent.offsetHeight
      const c = sk.createCanvas(width, height)
      c.parent(canvasParent)

      sk.background(sk.color(255, 252, 249))
      sk.stroke(sk.color(16))
      sk.strokeWeight(0.2)
      sk.fill(sk.color(16))

      cols = Math.floor(width / res)
      rows = Math.floor(height / res)
    }

    sk.draw = () => {
      sk.background(255, 252, 249)
      let arr = tatreezArray[index]
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (arr[i][j] == 1) {
            sk.fill(16)
          } else if (arr[i][j] == 2) {
            sk.fill(0, 0, 255)
          } else {
            sk.fill(255, 252, 249)
          }
          sk.rect(i * res, j * res, res, res)
        }
      }
    }

    sk.windowResized = () => {
      // sk.resizeCanvas(canvasParent.offsetWidth, canvasParent.offsetHeight)
      width = canvasParent.offsetWidth
      height = canvasParent.offsetHeight
      sk.resizeCanvas(width, height)
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        index = (index + 1) % tatreezArray.length
      }
    })
  })
}

export default tatreezHandler
