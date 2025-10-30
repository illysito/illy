import { createCamera } from '../components/camera.js'
import { createScene } from '../components/scene.js'
import { Loop } from '../systems/Loop.js'
import { createRenderer } from '../systems/Renderer.js'
import { Resizer } from '../systems/Resizer.js'

class World {
  // 1. Create an instance of the World app
  constructor(container) {
    this.camera = createCamera()
    this.scene = createScene()
    this.renderer = createRenderer()
    this.loop = new Loop(this.camera, this.scene, this.renderer)
    // adding canvas element to the webflow container
    container.append(this.renderer.domElement)
    // INITS!!!!!

    // this.initPaddle()
    this.initPlane()
    this.initLights(-2, 2, 3, 20, 0xfffbf6, false)
    // console.log('mobile 3d is running!')

    // BLOOM RESIZER
    const resizer = new Resizer(container, this.camera, this.renderer)
    resizer.onResize = () => {
      this.composer.setSize(container.clientWidth, container.clientHeight)
      this.render()
    }
  }

  // BLOOM POST PROCESSING INIT
  async initPaddle() {
    const { createPaddle } = await import('../components/paddle.js')
    const paddle = await createPaddle()
    this.scene.add(paddle)
    this.loop.updatables.push(paddle)
  }

  async initPlane() {
    const { createPlane } = await import('../components/plane.js')
    const plane = await createPlane(this.renderer)
    this.scene.add(plane)
    this.loop.updatables.push(plane)
  }

  async initLights(x, y, z, int, color, isMove) {
    const { createLight } = await import('../components/point_light.js')
    const light = createLight(x, y, z, int, color, isMove)
    this.scene.add(light)
    if (isMove) this.loop.updatables.push(light)
  }

  async initDirLights(x, y, z) {
    const { createDirLight } = await import(
      '../components/directional_light.js'
    )
    const dirLight = createDirLight(x, y, z)
    this.scene.add(dirLight)
  }

  // 2. Render the scene
  render() {
    // this.renderer.render(this.scene, this.camera)
    this.composer.render()
  }

  start() {
    this.loop.start()
    // console.log('World ' + this.index + ' has resumed ')
  }

  stop() {
    this.loop.stop()
    // console.log('World ' + this.index + ' has stopped ')
  }
}

export { World }
