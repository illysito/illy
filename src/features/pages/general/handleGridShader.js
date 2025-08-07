import gsap from 'gsap'

import gridShader from '../../shaders/gridCanvas'

function handleGridShader() {
  // const grid_canvas = document.querySelector('.grid-canvas')
  let mouseX = 0.5
  let mouseY = 0.5
  let easeFactor = 0.2

  let targetMouseX = 0
  let targetMouseY = 0
  let mousePosX = 0
  let mousePosY = 0

  const mouseXRef = { current: mouseX }
  const mouseYRef = { current: mouseY }
  const glowIntensity = { current: 1.0 }

  //prettier-ignore
  const updateUniforms = gridShader(mouseXRef, mouseYRef, glowIntensity)

  window.addEventListener('mousemove', (event) => {
    targetMouseX = event.clientX
    targetMouseY = event.clientY
    glowIntensity.current = 1.0
  })

  function animate() {
    mousePosX += (targetMouseX - mousePosX) * easeFactor
    mousePosY += (targetMouseY - mousePosY) * easeFactor

    glowIntensity.current *= 0.95 // decay glow, adjust factor for speed

    //prettier-ignore
    mouseXRef.current = gsap.utils.mapRange(0, window.innerWidth, 0, 1, mousePosX);
    //prettier-ignore
    mouseYRef.current = gsap.utils.mapRange(0, window.innerHeight, 0, 1, mousePosY);

    updateUniforms(mouseXRef, mouseYRef, glowIntensity)

    requestAnimationFrame(animate)
  }
  animate()
}

export default handleGridShader
