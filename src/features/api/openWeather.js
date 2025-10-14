async function getMeteo() {
  const lat = 28.0612 // Teror
  const lon = -15.5497 // Teror
  const API_KEY = '1eea8f283d6ad1735a7eaa8f9fc8fa4a'
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`

  let windSpeed = 0.0
  let normalizedWindSpeed = 0.0

  let moonPhase = 0.0

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

    // MOON
    const moonPhaseNow = data.daily[0].moon_phase
    moonPhase = moonPhaseNow
    // console.log(windSpeedNow)
    // windRef.current = data.wind.speed
    // console.log('wind speed = ' + windRef.current)
  } catch (err) {
    console.error(err)
    return null
  }

  return { normalizedWindSpeed, windSpeed, moonPhase }
}

export default getMeteo
