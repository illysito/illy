// async function catanWriteData(players) {
//   const WEBAPP_URL =
//     'https://script.google.com/macros/s/AKfycbxr1xfh2pNk9bsHSXphPuGtroYei-bS8e8i2ylaSzGwl1v2hdLdDM1FNWiOUlmwUKo6/exec'
//   const res = await fetch(WEBAPP_URL, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(players),
//   })

//   const json = await res.json()
//   if (!res.ok || json.ok === false)
//     throw new Error(json.error || 'Sheet update failed')
//   return json
// }

async function catanWriteData(players, url) {
  const body = new URLSearchParams()
  body.set('payload', JSON.stringify(players))

  const res = await fetch(url, {
    method: 'POST',
    body, // <-- no custom headers
  })

  const text = await res.text()
  // Apps Script may return JSON text
  return JSON.parse(text)
}

export default catanWriteData
