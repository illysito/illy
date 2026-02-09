async function catanData(URL) {
  let players = []
  async function fetchData() {
    try {
      const response = await fetch(URL)
      // const response = await fetch(url_T2)
      const data = await response.json()
      players = data.map((r) => ({
        name: r['Nombre'],
        matches: r['Partidas jugadas'],
        wonMatches: r['Partidas ganadas'],
        totalPoints: r['Puntos Totales'],
        totalRating: r['Yekaleo'],
        color: r['Color'],
      }))
      // console.log(players)
    } catch (error) {
      console.error('Error loading Google Sheets data:', error)
    }
    return players
  }
  return await fetchData()
}

export default catanData
