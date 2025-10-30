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
    let res = 12
    let cols
    let rows

    let gen
    let nextGen

    function make2Darray(cols, rows) {
      let arr = new Array(cols)
      for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows)
      }
      return arr
    }

    sk.setup = () => {
      // Define parent and dimensions, create Canvas and attach it to the parent using its dimensions. ALWAYS in JS
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
          if (random > 0.65) {
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
            sk.fill(255, 244, 233)
          } else {
            sk.fill(10)
          }
          sk.rect(x, y, res, res)
        }
      }
    }

    sk.draw = () => {
      const isDarkMode = localStorage.getItem('isDarkModeOn') === 'true'
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
              // Assign 0 to neighbours out of bound
              if (
                i + a < 0 ||
                i + a >= cols - 1 ||
                j + b < 0 ||
                j + b >= rows - 1
              ) {
                sum += 0
                // add 1 if is alive, add 0 if dead
              } else {
                sum += gen[i + a][j + b]
              }
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
  })
}

export default golHandler
