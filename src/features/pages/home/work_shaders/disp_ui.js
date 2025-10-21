import gsap from 'gsap'

import dispHandler from './disp_handler'

function dispUI() {
  function githubToJsDelivr(permalink) {
    return permalink
      .replace('github.com', 'cdn.jsdelivr.net/gh')
      .replace('/blob/', '@')
  }
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
  const image1_URL_ME = githubToJsDelivr(
    'https://github.com/illysito/illy/blob/4b2380e8efe928758960c126503d94824b64fb30/public/imgs_cdn/fotiwini.jpeg'
  )
  const image2_URL_ME = githubToJsDelivr(
    'https://github.com/illysito/illy/blob/4b2380e8efe928758960c126503d94824b64fb30/public/imgs_cdn/ME-11.webp'
  )
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
  const image1_URL_PADMI = githubToJsDelivr(
    'https://github.com/illysito/illy/blob/4b2380e8efe928758960c126503d94824b64fb30/public/imgs_cdn/WORK%20IMG%20--05.webp'
  )
  const image2_URL_PADMI = githubToJsDelivr(
    'https://github.com/illysito/illy/blob/4b2380e8efe928758960c126503d94824b64fb30/public/imgs_cdn/WORK%20IMG%20--09.webp'
  )
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
  const image1_URL_LIUBA = githubToJsDelivr(
    'https://github.com/illysito/illy/blob/4b2380e8efe928758960c126503d94824b64fb30/public/imgs_cdn/WORK%20IMG%20--08.webp'
  )
  const image2_URL_LIUBA = githubToJsDelivr(
    'https://github.com/illysito/illy/blob/822021800fa75736aa9673784e88eacd2557d0dd/public/imgs_cdn/WORK%20IMG%20--11-11.webp'
  )
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
  const image1_URL_BARRENA = githubToJsDelivr(
    'https://github.com/illysito/illy/blob/4b2380e8efe928758960c126503d94824b64fb30/public/imgs_cdn/WORK%20IMG%20--06.webp'
  )
  const image2_URL_BARRENA = githubToJsDelivr(
    'https://github.com/illysito/illy/blob/4b2380e8efe928758960c126503d94824b64fb30/public/imgs_cdn/WORK%20IMG%20--10.webp'
  )
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
  const image1_URL_CACHANCHAN = githubToJsDelivr(
    'https://github.com/illysito/illy/blob/4b2380e8efe928758960c126503d94824b64fb30/public/imgs_cdn/WORK%20IMG%20-%202%20-05.webp'
  )
  const image2_URL_CACHANCHAN = githubToJsDelivr(
    'https://github.com/illysito/illy/blob/4b2380e8efe928758960c126503d94824b64fb30/public/imgs_cdn/WORK%20IMG%20-%202%20-06.webp'
  )
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
  const image1_URL_LIRIOS = githubToJsDelivr(
    'https://github.com/illysito/illy/blob/4b2380e8efe928758960c126503d94824b64fb30/public/imgs_cdn/WORK%20IMG%20-%202%20-09.webp'
  )
  const image2_URL_LIRIOS = githubToJsDelivr(
    'https://github.com/illysito/illy/blob/4b2380e8efe928758960c126503d94824b64fb30/public/imgs_cdn/WORK%20IMG%20-%202%20-08.webp'
  )
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
  const image1_URL_LLANTEN = githubToJsDelivr(
    'https://github.com/illysito/illy/blob/4b2380e8efe928758960c126503d94824b64fb30/public/imgs_cdn/WORK%20IMG%20-%202%20-10.webp'
  )
  const image2_URL_LLANTEN = githubToJsDelivr(
    'https://github.com/illysito/illy/blob/4b2380e8efe928758960c126503d94824b64fb30/public/imgs_cdn/WORK%20IMG%20-%202%20-11.webp'
  )
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
