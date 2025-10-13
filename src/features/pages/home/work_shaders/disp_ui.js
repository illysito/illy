import gsap from 'gsap'

import dispHandler from './disp_handler'

function dispUI() {
  //prettier-ignore
  const canvasUI = document.querySelectorAll('.work-canvas')

  // canvases
  const barrenaCanvas = document.querySelector('#work-barrena-canvas')
  const fifameCanvas = document.querySelector('#work-fifame-canvas')
  const liriosCanvas = document.querySelector('#work-lirios-canvas')

  const p2o = 'power2.out'
  const duration = 0.8

  // Aux arrays
  const updateUniforms = []
  const offsets = []

  // Barrrena
  const offsetRefBARRENA = { current: 0 }
  const image1_URL_CACHANCHAN =
    'https://raw.githubusercontent.com/illysito/illy/69fa68f40afe33cb2dc9418bc151a3c4a23f0cea/imgs/Los%20Lirios-CACHANCHAN%201.jpg'
  const image2_URL_CACHANCHAN =
    'https://raw.githubusercontent.com/illysito/illy/69fa68f40afe33cb2dc9418bc151a3c4a23f0cea/imgs/Los%20Lirios-CACHANCHAN%202.jpg'
  const updateUniformsBARRENA = dispHandler(
    barrenaCanvas,
    offsetRefBARRENA,
    image1_URL_CACHANCHAN,
    image2_URL_CACHANCHAN
  )
  updateUniforms.push(updateUniformsBARRENA)
  offsets.push(offsetRefBARRENA)

  // Fifame
  const offsetRefFIFAME = { current: 0 }
  const image1_URL_LIRIOS =
    'https://raw.githubusercontent.com/illysito/illy/69fa68f40afe33cb2dc9418bc151a3c4a23f0cea/imgs/Los%20Lirios-LIRIOS%201.jpg'
  const image2_URL_LIRIOS =
    'https://raw.githubusercontent.com/illysito/illy/69fa68f40afe33cb2dc9418bc151a3c4a23f0cea/imgs/Los%20Lirios-LIRIOS%202.jpg'
  const updateUniformsFIFAME = dispHandler(
    fifameCanvas,
    offsetRefFIFAME,
    image1_URL_LIRIOS,
    image2_URL_LIRIOS
  )
  updateUniforms.push(updateUniformsFIFAME)
  offsets.push(offsetRefFIFAME)

  // Los Lirios
  const offsetRefLIRIOS = { current: 0 }
  const image1_URL_LLANTEN =
    'https://raw.githubusercontent.com/illysito/illy/69fa68f40afe33cb2dc9418bc151a3c4a23f0cea/imgs/Los%20Lirios-LLANTEN%201.jpg'
  const image2_URL_LLANTEN =
    'https://raw.githubusercontent.com/illysito/illy/69fa68f40afe33cb2dc9418bc151a3c4a23f0cea/imgs/Los%20Lirios-LLANTEN%202.jpg'
  const updateUniformsLIRIOS = dispHandler(
    liriosCanvas,
    offsetRefLIRIOS,
    image1_URL_LLANTEN,
    image2_URL_LLANTEN
  )
  updateUniforms.push(updateUniformsLIRIOS)
  offsets.push(offsetRefLIRIOS)

  function hoverIn(index) {
    gsap.to(offsets[index], {
      current: 1,
      duration: duration,
      ease: p2o,
      onUpdate: updateUniforms[index],
    })
    gsap.to(canvasUI[index], {
      borderRadius: 12,
      duration: duration - 0.2,
      ease: p2o,
    })
  }

  function hoverOut(index) {
    gsap.to(offsets[index], {
      current: 0,
      duration: duration,
      ease: p2o,
      onUpdate: updateUniforms[index],
    })
    gsap.to(canvasUI[index], {
      borderRadius: 0,
      duration: duration - 0.2,
      ease: p2o,
    })
  }

  canvasUI.forEach((canvas, index) => {
    canvas.addEventListener('mouseover', () => {
      hoverIn(index)
    })

    canvas.addEventListener('mouseleave', () => {
      hoverOut(index)
    })
  })
}

export default dispUI
