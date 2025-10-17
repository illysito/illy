/* eslint-disable */

function sine(canvasWrapper, angleV, xStretch, yStretch, waveType) {
  // Create a new p5 instance scoped to this function
  new window.p5((sk) => {
    class Wave {
      constructor(amp, freq, phase) {
        this.amp = amp
        this.freq = freq
        this.phase = phase
      }

      evaluate(x) {
        return (y = this.amp * sk.sin(sk.TWO_PI * this.freq * x + this.phase))
      }
    }

    let canvasParent
    let velocity = angleV / 10
    let xStr = xStretch
    let yStr = yStretch
    let wave_type = waveType

    let angles = []
    let r = 2
    let x = 0
    let y = 0

    let wave

    sk.setup = () => {
      // Attach to the element you already have in your DOM
      canvasParent = canvasWrapper
      sk.angleMode(sk.RADIANS)
      const c = sk.createCanvas(
        canvasParent.offsetWidth,
        canvasParent.offsetHeight
      )
      c.parent(canvasParent)

      wave = new Wave(20, 0.2, 0)
    }

    sk.draw = () => {
      sk.background(255, 244, 233, 255)
      sk.fill(0, 0, 255, 255)
      sk.stroke(20, 20, 20, 255)
      sk.strokeWeight(1.25)
      // sk.noFill()
      // sketch.ellipseMode(sketch.CENTER)
      sk.translate(0, sk.height / 2)

      for (let x = 0; x <= sk.width; x += 10) {
        y = wave.evaluate(x)
        sk.ellipse(x, y, r)
      }
    }

    sk.windowResized = () => {
      sk.resizeCanvas(canvasParent.offsetWidth, canvasParent.offsetHeight)
    }
  })
}

export default sine
