import gsap from 'gsap'

import dispHandler from './disp_handler'

function dispUI() {
  //prettier-ignore
  const canvasUI = document.querySelectorAll('.work-canvas')

  // canvases
  const aboutCanvas = document.querySelector('#about-canvas')
  const padmiCanvas = document.querySelector('#work-padmi-canvas')
  const liubaCanvas = document.querySelector('#work-liuba-canvas')
  const barrenaCanvas = document.querySelector('#work-barrrena-canvas')
  const cachanchanCanvas = document.querySelector('#work-cachanchan-canvas')
  const liriosCanvas = document.querySelector('#work-lirios-canvas')
  const llantenCanvas = document.querySelector('#work-llanten-canvas')

  const p2o = 'power2.out'
  const duration = 0.8

  // Aux arrays
  const updateUniforms = []
  const offsets = []

  // About
  const offsetRefME = { current: 0 }
  const image1_URL_ME =
    'https://raw.githubusercontent.com/illysito/illy/b0ba86c0c1f3206e715c35aa122a87317216c2d5/imgs/fotiwini.jpeg'
  const image2_URL_ME =
    'https://raw.githubusercontent.com/illysito/illy/6c129da2585cab13aa410e5644d87f96e65d0eaa/imgs/fotiwini-semitone.jpg'
  const updateUniformsME = dispHandler(
    aboutCanvas,
    offsetRefME,
    image1_URL_ME,
    image2_URL_ME
  )
  updateUniforms.push(updateUniformsME)
  offsets.push(offsetRefME)

  // Padmi
  const offsetRefPADMI = { current: 0 }
  const image1_URL_PADMI =
    'https://raw.githubusercontent.com/illysito/illy/cd9c644cd453fc70fcfaab2a0c7a0a1f9ed1ed79/imgs/Padmi-Iphone-Mockup-2---Comp.jpg'
  const image2_URL_PADMI =
    'https://raw.githubusercontent.com/illysito/illy/cd9c644cd453fc70fcfaab2a0c7a0a1f9ed1ed79/imgs/Padmi-Mac-Mockup-1-Comp.jpg'
  const updateUniformsPADMI = dispHandler(
    padmiCanvas,
    offsetRefPADMI,
    image1_URL_PADMI,
    image2_URL_PADMI
  )
  updateUniforms.push(updateUniformsPADMI)
  offsets.push(offsetRefPADMI)

  // Liuba
  const offsetRefLIUBA = { current: 0 }
  const image1_URL_LIUBA =
    'https://raw.githubusercontent.com/illysito/illy/cd9c644cd453fc70fcfaab2a0c7a0a1f9ed1ed79/imgs/Liuba-Mokcup-IPHONE-1-Comp.jpg'
  const image2_URL_LIUBA =
    'https://raw.githubusercontent.com/illysito/illy/cd9c644cd453fc70fcfaab2a0c7a0a1f9ed1ed79/imgs/Liuba-Mokcup-Mac-3-Comp.jpg'
  const updateUniformsLIUBA = dispHandler(
    liubaCanvas,
    offsetRefLIUBA,
    image1_URL_LIUBA,
    image2_URL_LIUBA
  )
  updateUniforms.push(updateUniformsLIUBA)
  offsets.push(offsetRefLIUBA)

  // Barrrena
  const offsetRefBARRENA = { current: 0 }
  const image1_URL_BARRENA =
    'https://raw.githubusercontent.com/illysito/illy/cd9c644cd453fc70fcfaab2a0c7a0a1f9ed1ed79/imgs/Barrena-Mockup-Iphone---Comp.jpg'
  const image2_URL_BARRENA =
    'https://raw.githubusercontent.com/illysito/illy/cd9c644cd453fc70fcfaab2a0c7a0a1f9ed1ed79/imgs/Barrrena-Mac-Mockup---Comp.jpg'
  const updateUniformsBARRENA = dispHandler(
    barrenaCanvas,
    offsetRefBARRENA,
    image1_URL_BARRENA,
    image2_URL_BARRENA
  )
  updateUniforms.push(updateUniformsBARRENA)
  offsets.push(offsetRefBARRENA)

  // Cachanchan
  const offsetRefCACHANCHAN = { current: 0 }
  const image1_URL_CACHANCHAN =
    'https://raw.githubusercontent.com/illysito/illy/69fa68f40afe33cb2dc9418bc151a3c4a23f0cea/imgs/Los%20Lirios-CACHANCHAN%201.jpg'
  const image2_URL_CACHANCHAN =
    'https://raw.githubusercontent.com/illysito/illy/69fa68f40afe33cb2dc9418bc151a3c4a23f0cea/imgs/Los%20Lirios-CACHANCHAN%202.jpg'
  const updateUniformsCACHANCHAN = dispHandler(
    cachanchanCanvas,
    offsetRefCACHANCHAN,
    image1_URL_CACHANCHAN,
    image2_URL_CACHANCHAN
  )
  updateUniforms.push(updateUniformsCACHANCHAN)
  offsets.push(offsetRefCACHANCHAN)

  // Lirios
  const offsetRefLIRIOS = { current: 0 }
  const image1_URL_LIRIOS =
    'https://raw.githubusercontent.com/illysito/illy/69fa68f40afe33cb2dc9418bc151a3c4a23f0cea/imgs/Los%20Lirios-LIRIOS%201.jpg'
  const image2_URL_LIRIOS =
    'https://raw.githubusercontent.com/illysito/illy/69fa68f40afe33cb2dc9418bc151a3c4a23f0cea/imgs/Los%20Lirios-LIRIOS%202.jpg'
  const updateUniformsLIRIOS = dispHandler(
    liriosCanvas,
    offsetRefLIRIOS,
    image1_URL_LIRIOS,
    image2_URL_LIRIOS
  )
  updateUniforms.push(updateUniformsLIRIOS)
  offsets.push(offsetRefLIRIOS)

  // Llanten
  const offsetRefLLANTEN = { current: 0 }
  const image1_URL_LLANTEN =
    'https://raw.githubusercontent.com/illysito/illy/69fa68f40afe33cb2dc9418bc151a3c4a23f0cea/imgs/Los%20Lirios-LLANTEN%201.jpg'
  const image2_URL_LLANTEN =
    'https://raw.githubusercontent.com/illysito/illy/69fa68f40afe33cb2dc9418bc151a3c4a23f0cea/imgs/Los%20Lirios-LLANTEN%202.jpg'
  const updateUniformsLLANTEN = dispHandler(
    llantenCanvas,
    offsetRefLLANTEN,
    image1_URL_LLANTEN,
    image2_URL_LLANTEN
  )
  updateUniforms.push(updateUniformsLLANTEN)
  offsets.push(offsetRefLLANTEN)

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
