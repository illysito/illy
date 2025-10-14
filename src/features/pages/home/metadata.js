import gsap from 'gsap'

import getWind from '../../api/wind'

function metadata() {
  function domQuery() {
    return {
      underscores: document.querySelectorAll('.underscore'),
      wind_txt: document.querySelector('.is--wind--metadata'),
      date_txt: document.querySelector('.is--date--metadata'),
      time_txt: document.querySelector('.is--time--metadata'),
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

  // WIND

  let windMessage = ''
  let wind = 0.0

  getWind().then((windValue) => {
    wind = windValue.windSpeed

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
  })
}

export default metadata
