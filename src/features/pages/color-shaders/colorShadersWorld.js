// import gsap from 'gsap'
import * as THREE from 'three'

import vert from './shaders/vertexShader'
import breathingShader_frag from '../../../shaders/glsl/breathingShaderFrag'

async function colorShaderWorld() {
  const canvas = document.getElementById('color-shader-canvas-1')

  // Scene
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x060606)

  // Camera
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    100,
    2000
  )
  camera.position.z = 600
  function updateCamera() {
    camera.fov =
      (2 * Math.atan(window.innerHeight / 2 / camera.position.z) * 180) /
      Math.PI
    camera.updateProjectionMatrix()
  }
  updateCamera()

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true,
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(0x000000, 0)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // Main plane creation
  const planeGeometry = new THREE.PlaneGeometry(600, 600)
  const planeMaterial = new THREE.ShaderMaterial({
    fragmentShader: breathingShader_frag,
    vertexShader: vert,
    uniforms: {
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2(1, 1) },
      u_offset: { value: 0 },
      u_mouseX: { value: 0.5 },
      u_mouseY: { value: 0.5 },
      u_blocks: { value: 800 },
    },
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })
  const plane = new THREE.Mesh(planeGeometry, planeMaterial)
  scene.add(plane)

  let seed = Math.random() * 40
  // console.log(seed)
  let counter = seed

  function animate() {
    counter = (counter + 0.002) % 5000 // safeguard to not let counter evolve endlessly

    // Operations in the main plane
    plane.material.uniforms.u_time.value = counter

    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }
  animate()

  // Resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })
}

export default colorShaderWorld
