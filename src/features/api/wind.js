async function getWind() {
  const lat = 28.1235 // Gran Canaria latitude, e.g.
  const lon = -15.4363
  const API_KEY = 'Mq4bRWeknd6F70ah'
  const url = `https://my.meteoblue.com/packages/basic-1h_basic-day?lat=${lat}&lon=${lon}&apikey=${API_KEY}`

  const now = new Date()
  const currentHour = now.getUTCHours()
  let windSpeed = 0.0
  let normalizedWindSpeed = 0.0

  try {
    const res = await fetch(url)

    if (!res.ok) {
      throw new Error('HTTP error: ' + res.status)
    }

    const data = await res.json()
    // console.log(data)
    const windSpeedNow = data.data_1h.windspeed[currentHour + 1]
    windSpeed = windSpeedNow
    normalizedWindSpeed = Number((windSpeedNow / 15.0).toFixed(2))
    // console.log(windSpeedNow)
    // windRef.current = data.wind.speed
    // console.log('wind speed = ' + windRef.current)
  } catch (err) {
    console.error(err)
    return null
  }

  return { normalizedWindSpeed, windSpeed }
}

export default getWind
