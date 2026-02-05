import gsap from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger'

// import Anim from '../../helpers/anim.js'

// const D = Anim.D
// const E = Anim.E

// import SplitType from 'split-type'

// gsap.registerPlugin(ScrollTrigger)

function selectDomElements() {
  return {
    catanPlayerNames: document.querySelectorAll('.catan-player'),
    catanPlayerNums: document.querySelectorAll('.catan-player-num'),
    catanPlayerStats: document.querySelectorAll('.catan-player-stat'),
  }
}
const DOM = selectDomElements()

function calculateWinRate(won, played) {
  let winRate = (100 * won) / played
  return winRate
}

function calculateAveragePoints(totalPoints, matches) {
  let avgPoints = totalPoints / matches
  return avgPoints
}

function calculatePower(totalPoints, matches) {
  let avgPoints = totalPoints / matches
  let pwr = avgPoints * 10
  return pwr
}

function calculateAverageYekaleo(totalYekaleo, matches) {
  let avg = (totalYekaleo - 100) / matches
  let avgYekaleo
  if (avg > 0) {
    avgYekaleo = '+' + avg
  } else {
    avgYekaleo = avg
  }
  return avgYekaleo
}

function calculateColor(color) {
  let col
  if (color == 'rojo') {
    col = '#ff4d4d'
  } else if (color == 'lila') {
    col = '#ca79ff'
  } else if (color == 'azul') {
    col = '#0ee2f5'
  } else if (color == 'naranja') {
    col = '#ffa600'
  } else if (color == 'verde') {
    col = '#2ab48f'
  } else if (color == 'rosa') {
    col = '#ff7ebc'
  }
  return col
}

const SORTED_NAMES = []
const SORTED_WIN_RATES = []
const SORTED_COLORS = []
function displayByWinRate() {
  let winnerColor = calculateColor(SORTED_COLORS[0])
  console.log(winnerColor)
  DOM.catanPlayerNames.forEach((name, index) => {
    name.textContent = SORTED_NAMES[index].toUpperCase()
  })
  DOM.catanPlayerStats.forEach((stat, index) => {
    stat.textContent = SORTED_WIN_RATES[index] + ' %'
  })
  gsap.set(
    [DOM.catanPlayerNums[0], DOM.catanPlayerNames[0], DOM.catanPlayerStats[0]],
    {
      color: winnerColor,
    }
  )
}

async function catan(players) {
  // calculate winrate to the sort the array!
  players.forEach((p) => {
    p.winRate = calculateWinRate(p.wonMatches, p.matches)
  })

  players.sort((a, b) => b.winRate - a.winRate)

  players.forEach((player, index) => {
    if (index > 5) return
    const id = player.name

    SORTED_NAMES.push(player.name)
    SORTED_WIN_RATES.push(player.winRate)
    SORTED_COLORS.push(player.color)

    // fetch the correspondent PLAYER card and its content in the DOM
    const playerWrapper = document.getElementById(id)
    const NAME = playerWrapper.querySelector('.catan-player-title')
    const mainStats = playerWrapper.querySelectorAll('.catan-main-stat')
    const WIN_RATE = mainStats[0]
    const YEKALEO = mainStats[1]
    const miscStats = playerWrapper.querySelectorAll('.catan-misc-stat')
    const MATCHES_PLAYED = miscStats[0]
    const MATCHES_WON = miscStats[1]
    const AVG_POINTS = miscStats[2]
    const POWER = miscStats[3]
    const AVG_YEKALEO = miscStats[4]

    // update PLAYER based on object data
    const COLOR = calculateColor(player.color)
    gsap.set([NAME, WIN_RATE, YEKALEO], {
      color: COLOR,
    })
    WIN_RATE.textContent = player.winRate + ' %'
    YEKALEO.textContent = player.totalRating + ' ykl'
    MATCHES_PLAYED.textContent = player.matches
    MATCHES_WON.textContent = player.wonMatches
    AVG_POINTS.textContent =
      calculateAveragePoints(player.totalPoints, player.matches) + ' pts'
    POWER.textContent = calculatePower(player.totalPoints, player.matches)
    AVG_YEKALEO.textContent =
      calculateAverageYekaleo(player.totalRating, player.matches) + ' ykl'
  })

  displayByWinRate()
}

export default catan
