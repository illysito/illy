import gsap from 'gsap'

import getMeteo from '../../api/openWeather'

function metadata() {
  function domQuery() {
    return {
      underscores: document.querySelectorAll('.underscore'),
      wind_txt: document.querySelector('.is--wind--metadata'),
      rain_txt: document.querySelector('.is--rain--metadata'),
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

  let rainMessage = ''
  let rain = 0.0

  let moonMessage = ''
  let blackMoonImgIndex = 0
  let whiteMoonImgIndex = 0
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

    // RAIN
    rain = meteo.rain

    if (rain === 0) {
      rainMessage = 'no rain'
      rain = 0.0
    } else if (rain >= 0.1 && wind < 1.0) {
      rainMessage = 'chirimiri'
    } else if (rain >= 1.0 && wind < 2.5) {
      rainMessage = 'light rain'
    } else if (rain >= 2.5 && wind < 7.5) {
      rainMessage = 'moderate rain'
    } else if (rain >= 7.5 && wind < 50) {
      rainMessage = 'heavy rain'
    } else if (rain >= 50) {
      rainMessage = 'torrential'
    }

    DOM.rain_txt.textContent = rainMessage + ' · ' + rain + ' mm/h'

    // MOON
    moon = meteo.moonPhase

    if (moon > 0 && moon <= 0.125) {
      moonMessage = 'waxing crecent'
      blackMoonImgIndex = 1
    } else if (moon > 0.125 && moon <= 0.25) {
      moonMessage = 'first quarter'
      blackMoonImgIndex = 2
    } else if (moon > 0.25 && moon <= 0.375) {
      moonMessage = 'waxing gibbous'
      blackMoonImgIndex = 3
    } else if (moon > 0.375 && moon < 0.5) {
      moonMessage = 'waxing gibbous (almost there!)'
      blackMoonImgIndex = 4
    } else if (moon === 0.5) {
      moonMessage = 'full moon'
      blackMoonImgIndex = 5
    } else if (moon > 0.5 && moon <= 0.625) {
      moonMessage = 'waning gibbous'
      blackMoonImgIndex = 6
    } else if (moon > 0.625 && moon <= 0.75) {
      moonMessage = 'last quarter'
      blackMoonImgIndex = 7
    } else if (moon > 0.75 && moon <= 0.875) {
      moonMessage = 'waning crescent'
      blackMoonImgIndex = 8
    } else if (moon > 0.875 && moon < 1) {
      moonMessage = 'almost new'
      blackMoonImgIndex = 9
    } else if (moon === 0 || moon === 1) {
      moonMessage = 'new moon'
      blackMoonImgIndex = 0
    }
    whiteMoonImgIndex = blackMoonImgIndex + 10

    DOM.moon_txt.textContent = moonMessage
    DOM.moon_imgs.forEach((moon, index) => {
      if (blackMoonImgIndex === index) {
        gsap.to(moon, {
          opacity: 1,
          duration: 0.1,
          ease: 'none',
        })
      } else if (whiteMoonImgIndex === index) {
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
