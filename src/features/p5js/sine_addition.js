/* eslint-disable */

function sineAddition(canvasWrapper, amps, freqs, phases, angVs, count) {
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

    let waves = []

    sk.setup = () => {
      // Attach to the element you already have in your DOM
      canvasParent = canvasWrapper
      sk.angleMode(sk.RADIANS)
      const c = sk.createCanvas(
        canvasParent.offsetWidth,
        canvasParent.offsetHeight
      )
      c.parent(canvasParent)

      for (let i = 0; i < count; i++) {
        waves[i] = new Wave(amps[i], 1.6 * freqs[i], phases[i], angVs[i])
      }
    }

    sk.draw = () => {
      sk.background(255, 244, 233)
      sk.fill(0, 0, 255, 255)
      sk.stroke(20, 20, 20, 255)
      sk.strokeWeight(2.5)
      sk.noFill()
      // sketch.ellipseMode(sketch.CENTER)
      sk.translate(0, sk.height / 2)

      sk.beginShape()
      for (let x = 0; x <= sk.width; x += r) {
        let ySum = 0
        for (let i = 0; i < count; i++) {
          ySum += waves[i].evaluate(x)
          // sk.ellipse(x, y, r)
        }
        sk.vertex(x, 0.6 * ySum)
      }
      sk.endShape()

      for (let i = 0; i < count; i++) {
        waves[i].update()
      }
    }

    sk.windowResized = () => {
      sk.resizeCanvas(canvasParent.offsetWidth, canvasParent.offsetHeight)
    }
  })
}

export default sineAddition
