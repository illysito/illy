import sine from './sine'
import sineAddition from './sine_addition'

function sineHandler() {
  const layer1wrapper = document.querySelector('.layer-1-canvas-wrapper')
  const layer2wrapper = document.querySelector('.layer-2-canvas-wrapper')
  const layer3wrapper = document.querySelector('.layer-3-canvas-wrapper')
  const layer4wrapper = document.querySelector('.layer-4-canvas-wrapper')
  const layer5wrapper = document.querySelector('.layer-5-canvas-wrapper')
  const sumWrapper = document.querySelector('.sum-canvas-wrapper')

  const height = layer1wrapper.getBoundingClientRect().height
  const heightFactor1 = 3
  const heightFactor2 = 6
  const heightFactor3 = 8
  const heightFactor4 = 10
  const heightFactor5 = 8

  // Objects
  let amplitudes = {
    A1: height / heightFactor1,
    A2: height / heightFactor2,
    A3: height / heightFactor3,
    A4: height / heightFactor4,
    A5: height / heightFactor5,
  }
  let freqs = {
    f1: 0.025,
    f2: 0.05,
    f3: 0.075,
    f4: 0.05,
    f5: 0.04,
  }
  let phases = {
    ph1: 0,
    ph2: Math.PI / 2,
    ph3: Math.PI,
    ph4: (Math.PI * 3) / 2,
    ph5: Math.PI * 2,
  }
  let velocities = {
    v1: 0.02,
    v2: 0.05,
    v3: 0.1,
    v4: 0.12,
    v5: 0.1,
  }
  let indexes = {
    i0: 0,
    i1: 1,
    i2: 2,
    i3: 3,
    i4: 4,
  }

  // Arrays
  let amplitudesArr = [
    amplitudes.A1,
    amplitudes.A2,
    amplitudes.A3,
    amplitudes.A4,
    amplitudes.A5,
  ]
  let freqsArr = [freqs.f1, freqs.f2, freqs.f3, freqs.f4, freqs.f5]
  let phasesArr = [phases.ph1, phases.ph2, phases.ph3, phases.ph4, phases.ph5]
  let velocitiesArr = [
    velocities.v1,
    velocities.v2,
    velocities.v3,
    velocities.v4,
    velocities.v5,
  ]

  sine(
    layer1wrapper,
    amplitudes.A1,
    freqs.f1,
    phases.ph1,
    velocities.v1,
    indexes.i0
  )
  sine(
    layer2wrapper,
    amplitudes.A2,
    freqs.f2,
    phases.ph2,
    velocities.v2,
    indexes.i1
  )
  sine(
    layer3wrapper,
    amplitudes.A3,
    freqs.f3,
    phases.ph3,
    velocities.v3,
    indexes.i2
  )
  sine(
    layer4wrapper,
    amplitudes.A4,
    freqs.f4,
    phases.ph4,
    velocities.v4,
    indexes.i3
  )
  sine(
    layer5wrapper,
    amplitudes.A5,
    freqs.f5,
    phases.ph5,
    velocities.v5,
    indexes.i4
  )
  sineAddition(sumWrapper, amplitudesArr, freqsArr, phasesArr, velocitiesArr, 5)
}

export default sineHandler
