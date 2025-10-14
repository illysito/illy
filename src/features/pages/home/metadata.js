import gsap from 'gsap'

import getMeteo from '../../api/openWeather'

function metadata() {
  function domQuery() {
    return {
      underscores: document.querySelectorAll('.underscore'),
      wind_txt: document.querySelector('.is--wind--metadata'),
      date_txt: document.querySelector('.is--date--metadata'),
      time_txt: document.querySelector('.is--time--metadata'),
      moon_txt: document.querySelector('.is--moonphase-metadata'),
      moon_imgs: document.querySelectorAll('.moon-img'),
    }
  }
  const DOM = domQuery()

  // underscores
  gsap.to(DOM.underscores, {
    opacity: 0,
    duration: 0.6,
    repeat: -1,
    ease: 'power4.inOut',
    yoyo: true,
  })

  // TIME & DATE

  setInterval(() => {
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    let seconds = now.getSeconds()
    if (seconds < 10) {
      seconds = '0' + seconds
    }
    DOM.time_txt.textContent = hours + ':' + minutes + ':' + seconds
  }, 1000)
  const now = new Date()
  const day = now.getDay()
  const dayNames = ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat']
  const dayNumber = now.getDate()
  const month = now.getMonth()
  const monthNames = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sept',
    'oct',
    'nov',
    'dec',
  ]

  DOM.date_txt.textContent =
    dayNames[day] + ', ' + dayNumber + ' ' + monthNames[month]

  let windMessage = ''
  let wind = 0.0

  let moonMessage = ''
  let moonImgIndex = 0
  let moon = 0.0

  getMeteo().then((meteo) => {
    // WIND
    wind = meteo.windSpeed

    if (wind < 1) {
      windMessage = 'calm'
    } else if (wind >= 1 && wind < 3) {
      windMessage = 'light breeze'
    } else if (wind >= 3 && wind < 7) {
      windMessage = 'breeze'
    } else if (wind >= 7 && wind < 10) {
      windMessage = 'fresh breeze'
    } else if (wind >= 10 && wind < 14) {
      windMessage = 'strong breeze'
    } else if (wind >= 14 && wind < 20) {
      windMessage = 'high wind'
    } else if (wind >= 20) {
      windMessage = 'storm'
    }

    DOM.wind_txt.textContent = windMessage + ' · ' + wind + ' m/s'

    // MOON
    moon = meteo.moonPhase

    if (moon > 0 && moon <= 0.125) {
      moonMessage = 'waxing crecent'
      moonImgIndex = 1
    } else if (moon > 0.125 && moon <= 0.25) {
      moonMessage = 'first quarter'
      moonImgIndex = 2
    } else if (moon > 0.25 && moon <= 0.375) {
      moonMessage = 'waxing gibbous'
      moonImgIndex = 3
    } else if (moon > 0.375 && moon < 0.5) {
      moonMessage = 'waxing gibbous (almost there!)'
      moonImgIndex = 4
    } else if (moon === 0.5) {
      moonMessage = 'full moon'
      moonImgIndex = 5
    } else if (moon > 0.5 && moon <= 0.625) {
      moonMessage = 'waning gibbous'
      moonImgIndex = 6
    } else if (moon > 0.625 && moon <= 0.75) {
      moonMessage = 'last quarter'
      moonImgIndex = 7
    } else if (moon > 0.75 && moon <= 0.875) {
      moonMessage = 'waning crescent'
      moonImgIndex = 8
    } else if (moon > 0.875 && moon < 1) {
      moonMessage = 'almost new'
      moonImgIndex = 9
    } else if (moon === 0 || moon === 1) {
      moonMessage = 'new moon'
      moonImgIndex = 0
    }

    DOM.moon_txt.textContent = moonMessage
    DOM.moon_imgs.forEach((moon, index) => {
      if (moonImgIndex === index) {
        gsap.to(moon, {
          opacity: 1,
          duration: 0.1,
          ease: 'none',
        })
      } else {
        gsap.to(moon, {
          opacity: 0,
          duration: 0.1,
          ease: 'none',
        })
      }
    })
  })
}

export default metadata
