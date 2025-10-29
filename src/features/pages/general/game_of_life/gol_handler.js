/* eslint-disable */
import gol_shader from './gol_shader'

function golHandler(canvasWrapper) {
  new window.p5((sk) => {
    let canvasParent
    let golShader
    let prevFrame
    let width
    let height

    const gridCols = 100
    const gridRows = 100

    sk.preload = () => {
      // Preload shader ALWAYS HERE
      golShader = sk.createShader(gol_shader.gol_vert, gol_shader.gol_frag)
    }

    sk.setup = () => {
      // Define parent and dimensions, create Canvas and attach it to the parent using its dimensions. ALWAYS in JS
      canvasParent = canvasWrapper
      // width = canvasParent.offsetWidth
      // height = canvasParent.offsetHeight
      width = 400
      height = 200
      const c = sk.createCanvas(width, height, sk.WEBGL)
      c.parent(canvasParent)

      // Create offscreen canvas for PING PONG
      prevFrame = sk.createGraphics(width, height)
      prevFrame.pixelDensity(1)
      prevFrame.noSmooth()

      const cellW = width / gridCols
      const cellH = height / gridRows

      prevFrame.background(0)
      prevFrame.noStroke()
      for (let y = 0; y < gridRows; y++) {
        for (let x = 0; x < gridCols; x++) {
          if (Math.random() > 0.8) {
            // ~20% alive
            prevFrame.fill(255)
            prevFrame.rect(x * cellW, y * cellH, cellW, cellH)
          }
        }
      }

      // Black background, white stroke and shader based graphics for main canvas
      // sk.pixelDensity(1)
      // sk.noSmooth()
      sk.background(0)
      sk.stroke(255)
      // sk.line(0, 0, 120, 120)
      sk.shader(golShader) // tell p5 to use the shader
      golShader.setUniform('u_resolution', [width, height])
      golShader.setUniform('u_grid', [gridCols, gridRows])
    }

    let time = 0
    sk.draw = () => {
      time += 0.01
      // Copy the rendered image into our prevFrame image EACH FRAME
      sk.resetShader()
      prevFrame.image(sk.get(), -width / 2, -height / 2)

      // Set UNIFORMS
      golShader.setUniform('u_time', time) // time
      golShader.setUniform('u_state', prevFrame) // previous FRAME for ping pong
      golShader.setUniform('u_resolution', [width, height]) // resolution
      golShader.setUniform('u_grid', [gridCols, gridRows])

      // Give the shader a surface to draw on
      sk.rect(-width / 2, -height / 2, width, height)
    }

    sk.windowResized = () => {
      // sk.resizeCanvas(canvasParent.offsetWidth, canvasParent.offsetHeight)
      width = canvasParent.offsetWidth
      height = canvasParent.offsetHeight
      sk.resizeCanvas(width, height)
      prevFrame = sk.createGraphics(width, height)
      prevFrame.pixelDensity(1)
      prevFrame.noSmooth()
      golShader.setUniform('u_resolution', [width, height])
      golShader.setUniform('u_grid', [gridCols, gridRows])
    }
  })
}

export default golHandler
