/* eslint-disable */

function sine(canvasWrapper, amp, freq, phase, angV, index) {
  new window.p5((sk) => {
    class Wave {
      constructor(amp, freq, phase, angV) {
        this.amp = amp
        this.freq = freq
        this.phase = phase
        this.angV = angV
      }

      evaluate(x) {
        return this.amp * sk.sin(this.freq * x + this.phase)
      }

      update() {
        this.phase -= this.angV
      }
    }

    let canvasParent
    let r = 2
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

      wave = new Wave(amp, freq, phase, angV)
    }

    sk.draw = () => {
      sk.background(255, 244, 233, 255)
      sk.fill(0, 0, 255, 255)
      sk.stroke(20, 20, 20, 255)
      if (index === 0) {
        sk.strokeWeight(2.5)
      } else {
        sk.strokeWeight(1.25)
      }
      sk.noFill()
      // sketch.ellipseMode(sketch.CENTER)
      sk.translate(0, sk.height / 2)

      sk.beginShape()
      for (let x = 0; x <= sk.width; x += r) {
        y = wave.evaluate(x)
        // sk.ellipse(x, y, r)
        sk.vertex(x, y)
      }
      sk.endShape()

      wave.update()
    }

    sk.windowResized = () => {
      sk.resizeCanvas(canvasParent.offsetWidth, canvasParent.offsetHeight)
    }
  })
}

export default sine
