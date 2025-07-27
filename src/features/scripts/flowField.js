import p5 from 'p5'

function flowField() {
  return new p5((sketch) => {
    // VARIABLES
    const resolution = 10
    let cols
    let rows
    let alpha = 20
    const num = 3200
    const noiseScale = 0.2
    const radius = 0.5
    const SPEED_LIMIT = 3
    const SPEED_FACTOR = 0.26

    let flowField = []
    let particles = []

    let zoff = 0

    let canvasWrapper = document.querySelector('.canvas-container')

    // GENERATE FLOW FIELD IN THE GRID
    function generatePerlinFlowField() {
      let yoff = 0
      for (let y = 0; y < rows; y++) {
        let xoff = 0
        for (let x = 0; x < cols; x++) {
          let angle =
            sketch.noise(xoff * noiseScale, yoff * noiseScale, zoff * 10) *
            sketch.TWO_PI *
            2
          let v = sketch.createVector(sketch.cos(angle), sketch.sin(angle))
          flowField[x + y * cols] = v
          xoff += noiseScale
        }
        yoff += noiseScale
      }
      zoff = 0
    }

    // PARTICLE CLASS
    class Particle {
      constructor() {
        this.pos = sketch.createVector(
          sketch.random(sketch.width),
          sketch.random(sketch.height)
        )
        this.vel = sketch.createVector(0, 0)
        this.acc = sketch.createVector(0, 0)
      }

      follow(flow) {
        // Detect in which CELL is the particle
        let x = Math.floor(this.pos.x / resolution)
        let y = Math.floor(this.pos.y / resolution)
        // Fetch the index of the flowfield array and get the vector
        let index = x + y * cols
        let force = flow[index]
        // Null check + apply the force
        if (force) {
          this.applyForce(force)
        }
      }

      applyForce(force) {
        this.acc.add(force)
      }

      update() {
        // velocity += acceleration
        this.vel.x += this.acc.x
        this.vel.y += this.acc.y

        // Limit velocity
        let speed = Math.sqrt(this.vel.x ** 2 + this.vel.y ** 2)
        if (speed > SPEED_LIMIT) {
          this.vel.x = (this.vel.x / speed) * SPEED_LIMIT
          this.vel.y = (this.vel.y / speed) * SPEED_LIMIT
        }

        // position += velocity
        this.pos.x += this.vel.x * SPEED_FACTOR
        this.pos.y += this.vel.y * SPEED_FACTOR

        // reset acceleration
        this.acc.x = 0
        this.acc.y = 0

        // Warp edges
        if (!this.onScreen()) {
          this.pos.x = sketch.random(sketch.width)
          this.pos.y = sketch.random(sketch.height)
        }
        // if (this.pos.x > sketch.width) this.pos.x = 0
        // if (this.pos.x < 0) this.pos.x = sketch.width
        // if (this.pos.y > sketch.height) this.pos.y = 0
        // if (this.pos.y < 0) this.pos.y = sketch.height
      }

      show() {
        sketch.strokeWeight(0.5)
        sketch.stroke(12)
        sketch.fill(12)
        sketch.ellipse(this.pos.x, this.pos.y, radius, radius)
      }

      onScreen() {
        return (
          this.pos.x > 0 &&
          this.pos.x < sketch.width &&
          this.pos.y > 0 &&
          this.pos.y < sketch.height
        )
      }
    }

    // SETUP!
    sketch.setup = function () {
      const canvas = sketch.createCanvas(
        canvasWrapper.clientWidth,
        canvasWrapper.clientHeight
      )
      canvas.parent('canvas-container') // Attach canvas to the div with id="canvas-container"

      cols = sketch.floor(sketch.width / resolution)
      rows = sketch.floor(sketch.height / resolution)
      // Init
      // Create an array of RANDOM vectors
      for (let i = 0; i < num; i++) {
        particles.push(new Particle())
      }
      sketch.fill(10)
      // sketch.fill(253, 253, 253)
    }

    // DRAW!
    sketch.draw = function () {
      // White background
      sketch.background(253, alpha)
      // sketch.background(12, 12, 12, alpha)
      // Generate the flow field
      generatePerlinFlowField()
      // Drop particles using p.x and p.y as coordinates, which are randomly fetched from the particles array
      for (let p of particles) {
        p.follow(flowField)
        p.update()
        p.show()
      }
      // console.log(sketch.frameRate())
    }
  })
}

export default flowField
