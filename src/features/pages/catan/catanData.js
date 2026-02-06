async function catanData() {
  const players = []
  async function fetchData() {
    //prettier-ignore
    const url_T2 = 'https://docs.google.com/spreadsheets/d/12rQxW0LrqQHoWMWTzSKu0K5onPBnW54Mii4iguJnsE0/gviz/tq?tqx=out:csv&gid=0'
    // const url_T1 = 'https://docs.google.com/spreadsheets/d/1SwItQduinPgicSOz_-vriLmV8HJRHBHa1nG_PR2fkcU/gviz/tq?tqx=out:csv&gid=0'

    try {
      // const response = await fetch(url_T1)
      const response = await fetch(url_T2)
      const data = await response.text()

      const rows = data.split('\n').slice(1) // Remove header
      rows.forEach((row, index) => {
        const columns = row.split(',')

        if (columns.length < 3) {
          console.warn(`Skipping row ${index + 1}: Not enough columns`)
          return
        }

        let name = columns[0]?.trim().replace(/"/g, '')
        let matches = columns[1]?.trim().replace(',', '.').replace(/"/g, '')
        let wonMatches = columns[2]?.trim().replace(',', '.').replace(/"/g, '')
        let totalPoints = columns[3]?.trim().replace(/"/g, '')
        let totalRating = columns[4]?.trim().replace(/"/g, '')
        let color = columns[5]?.trim().replace(/"/g, '')

        let playerData = {
          name: name,
          matches: matches,
          wonMatches: wonMatches,
          totalPoints: totalPoints,
          totalRating: totalRating,
          color: color,
        }

        players.push(playerData)
      })
    } catch (error) {
      console.error('Error loading Google Sheets data:', error)
    }
    return players
  }
  return await fetchData()
}

export default catanData
