import gsap from 'gsap'

import heroHandler from './hero_handler'
import getMeteo from '../../../api/openWeather'

function heroUI() {
  // canvases
  // const canvasWrapper = document.querySelector('.grid-canvas')
  const heroCanvas = document.querySelector('#grid-canvas')

  let texture = ''
  texture =
    'https://raw.githubusercontent.com/illysito/illy/e6e7a5ed1c28a6a9aacd53d5b602ef31eed833e6/imgs/ILLYALUKIANOV-type.png'
  const offsetRef = { current: 0.0 }
  const windRef = { current: 0.0 }
  const rainRef = { current: 0.0 }
  getMeteo().then((meteo) => {
    windRef.current = meteo.normalizedWindSpeed
    rainRef.current = meteo.normalizedRain
    updateUniforms()
  })

  const updateUniforms = heroHandler(
    heroCanvas,
    texture,
    offsetRef,
    windRef,
    rainRef
  )

  let ticking = false
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY
    offsetRef.current = gsap.utils.mapRange(0, 240, 0.0, 1.0, scrollY)

    if (!ticking) {
      ticking = true
      requestAnimationFrame(() => {
        updateUniforms()
        ticking = false
      })
    }
  })

  // document.addEventListener('isDarkMode',()=>{

  // })
  // document.addEventListener('isLightMode',()=>{

  // })
}

export default heroUI
