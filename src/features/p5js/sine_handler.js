import sine from './sine'

function sineHandler() {
  const layer1wrapper = document.querySelector('.layer-1-canvas-wrapper')
  const layer2wrapper = document.querySelector('.layer-2-canvas-wrapper')
  const layer3wrapper = document.querySelector('.layer-3-canvas-wrapper')
  const layer4wrapper = document.querySelector('.layer-4-canvas-wrapper')
  const layer5wrapper = document.querySelector('.layer-5-canvas-wrapper')

  let angularVelocities = {
    angularV_1: 0.25,
    angularV_2: 0.35,
    angularV_3: 0.2,
    angularV_4: 0.45,
    angularV_5: 0.6,
  }
  let xStretches = {
    xStretch_1: 1.8,
    xStretch_2: 2.2,
    xStretch_3: 2.8,
    xStretch_4: 2.4,
    xStretch_5: 2.6,
  }
  let yStretches = {
    yStretch_1: 3.6,
    yStretch_2: 4.2,
    yStretch_3: 4.8,
    yStretch_4: 5.2,
    yStretch_5: 5.2,
  }
  let waveTypes = {
    wave_1: 'sin',
    wave_2: 'cos',
    wave_3: 'sin',
    wave_4: 'cos',
    wave_5: 'sin',
  }

  sine(
    layer1wrapper,
    angularVelocities.angularV_1,
    xStretches.xStretch_1,
    yStretches.yStretch_1,
    waveTypes.wave_1
  )
  sine(
    layer2wrapper,
    angularVelocities.angularV_2,
    xStretches.xStretch_2,
    yStretches.yStretch_2,
    waveTypes.wave_2
  )
  sine(
    layer3wrapper,
    angularVelocities.angularV_3,
    xStretches.xStretch_3,
    yStretches.yStretch_3,
    waveTypes.wave_3
  )
  sine(
    layer4wrapper,
    angularVelocities.angularV_4,
    xStretches.xStretch_4,
    yStretches.yStretch_4,
    waveTypes.wave_4
  )
  sine(
    layer5wrapper,
    angularVelocities.angularV_5,
    xStretches.xStretch_5,
    yStretches.yStretch_5,
    waveTypes.wave_5
  )
}

export default sineHandler
