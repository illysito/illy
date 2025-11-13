async function getMeteo() {
  const lat = 28.083703626176177 // Teror
  const lon = -15.53379300394519 // Teror
  const API_KEY_OPENWEATHER = '1eea8f283d6ad1735a7eaa8f9fc8fa4a'
  const url_openWeather = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY_OPENWEATHER}`
  const API_KEY_AEMET =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJpbGx5YWx1a3lhbm92ZGVzaWduQGdtYWlsLmNvbSIsImp0aSI6ImU1MzBmZDhhLTg2M2YtNGY5My1hMzNjLWU3NzIwZGNjYmYyZCIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNzYzMDI0NzcxLCJ1c2VySWQiOiJlNTMwZmQ4YS04NjNmLTRmOTMtYTMzYy1lNzcyMGRjY2JmMmQiLCJyb2xlIjoiIn0.YXgW0gJcN0TKMC8XsSFn0Qkt08BLUE7msOlt7Gity14'
  const idema_teror = 'C656V'
  const url_aemet = `https://opendata.aemet.es/opendata/api/observacion/convencional/datos/estacion/${idema_teror}?api_key=${API_KEY_AEMET}`

  let windSpeed = 0.0
  let normalizedWindSpeed = 0.0

  let rain = 0.0
  let normalizedRain = 0.0

  let moonPhase = 0.0

  let sunsetTime = 0
  let sunriseTime = 0

  // OPEN WEATHER
  try {
    const res = await fetch(url_openWeather)

    if (!res.ok) {
      throw new Error('HTTP error: ' + res.status)
    }

    // DATA
    const data = await res.json()
    console.log(data)

    // MOON
    const moonPhaseNow = data.daily[0].moon_phase
    moonPhase = moonPhaseNow
    console.log(moonPhase)

    // SUNSET
    const sunsetToday = data.current.sunset
    sunsetTime = sunsetToday
    const sunriseToday = data.current.sunrise
    sunriseTime = sunriseToday
  } catch (err) {
    console.error(err)
    return null
  }

  // AEMET
  try {
    const res = await fetch(url_aemet)

    if (!res.ok) {
      throw new Error('HTTP error: ' + res.status)
    }

    // DATA 1
    const main_json = await res.json()
    const dataUrl = main_json.datos

    // DATA 2
    const true_json = await fetch(dataUrl)
    const dataArray = await true_json.json()
    const dataNow = dataArray[dataArray.length - 1]

    // WIND
    const windSpeedNow = dataNow.vv
    windSpeed = windSpeedNow
    normalizedWindSpeed = Number((windSpeedNow / 15.0).toFixed(2))

    // RAIN
    const rainNow = dataNow.prec
    rain = rainNow
    normalizedRain = 60.0 * Math.min(rain / 10.0, 1.0)

    // console.log('main json: ', main_json)
    // console.log('datos: ', dataNow)
    // console.log('lluvia ', rain)
    // console.log('viento ', windSpeed)
  } catch (err) {
    console.error(err)
    return null
  }

  return {
    normalizedWindSpeed,
    windSpeed,
    normalizedRain,
    rain,
    moonPhase,
    sunsetTime,
    sunriseTime,
  }
}

export default getMeteo
