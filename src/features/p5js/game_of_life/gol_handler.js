import gsap from 'gsap'
import p5 from 'p5'

/* eslint-disable */
function golHandler(canvasWrapper) {
  // window._disableAutoScriptLoad = true
  new p5((sk) => {
    let canvasParent
    let width
    let height
    // let cols = 30
    // let rows = 2 * cols / 3
    let res = 8
    let cols
    let rows

    let gen
    let nextGen

    let isPaused = false

    let thres = 0.5

    function make2Darray(cols, rows) {
      let arr = new Array(cols)
      for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows)
      }
      return arr
    }

    sk.setup = () => {
      // Define parent and dimensions, create Canvas and attach it to the parent using its dimensions. ALWAYS in JS
      const isDarkMode = localStorage.getItem('dark_state') === '1'
      canvasParent = canvasWrapper
      width = canvasParent.offsetWidth
      height = canvasParent.offsetHeight
      const c = sk.createCanvas(width, height)
      c.parent(canvasParent)

      sk.background(16)
      sk.stroke(16)
      sk.fill(255, 244, 233)

      cols = Math.floor(width / res)
      rows = Math.floor(height / res)

      gen = make2Darray(cols, rows)
      nextGen = make2Darray(cols, rows)

      // Init first gen ARRAY
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          let random = sk.random()
          let alive
          if (random > thres) {
            alive = 1
          } else {
            alive = 0
          }
          gen[i][j] = alive
        }
      }

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * res
          const y = j * res
          if (gen[i][j] == 1) {
            sk.fill(isDarkMode ? sk.color(255, 244, 233) : sk.color(16))
          } else {
            sk.fill(isDarkMode ? sk.color(16) : sk.color(255, 244, 233))
          }
          sk.rect(x, y, res, res)
        }
      }
    }

    sk.draw = () => {
      // if (isPaused) return
      const isDarkMode = localStorage.getItem('dark_state') === '1'
      console.log(isDarkMode)
      sk.frameRate(8)
      sk.background(isDarkMode ? sk.color(16) : sk.color(255, 244, 233))
      sk.stroke(isDarkMode ? sk.color(16) : sk.color(255, 244, 233))
      // sk.background(16)

      // read GEN
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          let sum = 0
          for (let a = -1; a < 2; a++) {
            for (let b = -1; b < 2; b++) {
              // skip if i'm counting myself
              if (a === 0 && b === 0) continue
              // Warp the edges
              const col = (i + a + cols) % cols
              const row = (j + b + rows) % rows

              sum += gen[col][row]
            }
          }

          // If I'm alive
          if (gen[i][j] == 1) {
            if (sum == 2 || sum == 3) {
              nextGen[i][j] = 1
            } else {
              nextGen[i][j] = 0
            }
            // If I'm dead
          } else {
            if (sum == 3) {
              nextGen[i][j] = 1
            } else {
              nextGen[i][j] = 0
            }
          }

          // Draw next gen
          const x = i * res
          const y = j * res
          if (nextGen[i][j] == 1) {
            sk.fill(isDarkMode ? sk.color(255, 244, 233) : sk.color(16))
          } else {
            sk.fill(isDarkMode ? sk.color(16) : sk.color(255, 244, 233))
          }
          sk.rect(x, y, res, res)
        }
      }

      gen = nextGen.map((row) => [...row])
    }

    sk.windowResized = () => {
      // sk.resizeCanvas(canvasParent.offsetWidth, canvasParent.offsetHeight)
      width = canvasParent.offsetWidth
      height = canvasParent.offsetHeight
      sk.resizeCanvas(width, height)
    }

    function restart() {
      const isDarkMode =
        localStorage.getItem('theme:dark-accent1') === 'true' ||
        localStorage.getItem('theme:dark-accent2') === 'true'
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          let random = sk.random()
          let alive
          if (random > thres) {
            alive = 1
          } else {
            alive = 0
          }
          gen[i][j] = alive
        }
      }
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * res
          const y = j * res
          if (gen[i][j] == 1) {
            sk.fill(isDarkMode ? sk.color(255, 244, 233) : sk.color(16))
          } else {
            sk.fill(isDarkMode ? sk.color(16) : sk.color(255, 244, 233))
          }
          sk.rect(x, y, res, res)
        }
      }
      sk.redraw()
    }

    // Events
    const playButton = document.querySelector('.gol-play-button')
    const reSeedButton = document.querySelector('.gol-seed-button')
    const sliderRail = document.querySelector('.slider')
    const sliderBall = document.querySelector('.slider-ball')
    const sliderValue = document.querySelector('.slider-value')

    function handlePause() {
      isPaused = !isPaused
      if (isPaused) sk.noLoop()
      else sk.loop()
      const wrapper = playButton.firstElementChild
      const text = wrapper.firstElementChild
      const textHidden = text.nextElementSibling

      if (isPaused) {
        text.textContent = 'play game of life'
        textHidden.textContent = 'play game of life'
      } else {
        text.textContent = 'pause game of life'
        textHidden.textContent = 'pause game of life'
      }
    }
    handlePause()

    playButton.addEventListener('click', () => {
      handlePause()
    })
    reSeedButton.addEventListener('click', () => {
      restart()
    })

    let isDragging = false
    let sliderRect = sliderRail.getBoundingClientRect()

    function updateBallPosition(clientX) {
      // Calculate position relative to slider
      let x = clientX - sliderRect.left

      // Clamp within slider bounds
      const min = 0
      const max = sliderRect.width - 12
      x = Math.min(Math.max(x, min), max)

      // Update ball position (in pixels)
      sliderBall.style.left = `${x}px`

      // Optional: compute normalized value (0–1)
      const value = x / sliderRect.width
      // console.log('value: ', value)
      thres = gsap.utils.mapRange(0, 0.96, 0.95, 0.5, value)
      sliderValue.textContent = (value + 0.05).toFixed(2)
      // // thres = gsap.utils.map
      // console.log('thres: ', thres)

      // console.log('slider value:', value.toFixed(2))
    }

    sliderBall.addEventListener('mousedown', (e) => {
      isDragging = true
    })

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return
      updateBallPosition(e.clientX)
    })

    document.addEventListener('mouseup', () => {
      // if (isDragging) restart()
      isDragging = false
      // restart()
    })

    document.addEventListener('theme:dark-accent1', () => sk.redraw())
    document.addEventListener('theme:dark-accent2', () => sk.redraw())
    document.addEventListener('theme:light-accent1', () => sk.redraw())
    document.addEventListener('theme:light-accent2', () => sk.redraw())
  })
}

export default golHandler
