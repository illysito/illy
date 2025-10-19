async function getMeteo() {
  const lat = 28.083703626176177 // Teror
  const lon = -15.53379300394519 // Teror
  const API_KEY = '1eea8f283d6ad1735a7eaa8f9fc8fa4a'
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`

  let windSpeed = 0.0
  let normalizedWindSpeed = 0.0

  let rain = 0.0
  let normalizedRain = 0.0

  let moonPhase = 0.0

  let sunsetTime = 0
  let sunriseTime = 0

  try {
    const res = await fetch(url)

    if (!res.ok) {
      throw new Error('HTTP error: ' + res.status)
    }

    // DATA
    const data = await res.json()
    console.log(data)

    // WIND
    const windSpeedNow = data.current.wind_speed
    windSpeed = windSpeedNow
    normalizedWindSpeed = Number((windSpeedNow / 15.0).toFixed(2))

    // RAIN
    const rainNow = data.current.rain?.['1h'] ?? 0
    rain = rainNow
    normalizedRain = 60.0 * Math.min(rain / 10.0, 1.0)

    // MOON
    const moonPhaseNow = data.daily[0].moon_phase
    moonPhase = moonPhaseNow

    // SUNSET
    const sunsetToday = data.current.sunset
    sunsetTime = sunsetToday
    const sunriseToday = data.current.sunrise
    sunriseTime = sunriseToday
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
