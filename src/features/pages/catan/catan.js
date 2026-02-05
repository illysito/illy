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
    catanCategoryTitles: document.querySelectorAll('.catan-table-category'),
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
    avgYekaleo = '+' + avg.toFixed(2)
  } else {
    avgYekaleo = avg.toFixed(2)
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
const SORTED_YEKALEOS = []
const SORTED_COLORS = []

function displayByWinRate() {
  let winnerColor = calculateColor(SORTED_COLORS[0])
  // console.log(winnerColor)
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

function displayByYekaleo() {
  let winnerColor = calculateColor(SORTED_COLORS[0])
  // console.log(winnerColor)
  DOM.catanPlayerNames.forEach((name, index) => {
    name.textContent = SORTED_NAMES[index].toUpperCase()
  })
  DOM.catanPlayerStats.forEach((stat, index) => {
    stat.textContent = SORTED_YEKALEOS[index] + ' ykl'
  })
  gsap.set(
    [DOM.catanPlayerNums[0], DOM.catanPlayerNames[0], DOM.catanPlayerStats[0]],
    {
      color: winnerColor,
    }
  )
}

async function catan(players) {
  // add win rate property to all players
  players.forEach((p) => {
    p.winRate = calculateWinRate(p.wonMatches, p.matches)
  })

  function sortByYekaleo() {
    players.sort((a, b) => b.totalRating - a.totalRating)
  }

  function sortByWinRate() {
    players.sort((a, b) => b.winRate - a.winRate)
  }

  function fillHelperArrays() {
    players.forEach((p, i) => {
      // for(let i = 0; i<players.length; i++){
      SORTED_NAMES[i] = p.name
      SORTED_WIN_RATES[i] = p.winRate.toFixed(2)
      SORTED_YEKALEOS[i] = p.totalRating
      SORTED_COLORS[i] = p.color
      // }
    })
  }

  function displayPlayerCards() {
    players.forEach((player, index) => {
      if (index > 5) return
      const id = player.name

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
      WIN_RATE.textContent = player.winRate.toFixed(2) + ' %'
      YEKALEO.textContent = player.totalRating + ' ykl'
      MATCHES_PLAYED.textContent = player.matches
      MATCHES_WON.textContent = player.wonMatches
      AVG_POINTS.textContent =
        calculateAveragePoints(player.totalPoints, player.matches).toFixed(2) +
        ' pts'
      POWER.textContent = calculatePower(
        player.totalPoints,
        player.matches
      ).toFixed(2)
      AVG_YEKALEO.textContent =
        calculateAverageYekaleo(player.totalRating, player.matches) + ' ykl'
    })
  }

  function mainCardShowsWinRate() {
    sortByWinRate()
    fillHelperArrays()
    displayByWinRate()
  }

  function mainCardShowsYekaleo() {
    sortByYekaleo()
    fillHelperArrays()
    displayByYekaleo()
  }

  function init() {
    mainCardShowsWinRate()
    // mainCardShowsYekaleo()
    displayPlayerCards()
  }
  init()

  DOM.catanCategoryTitles.forEach((cat, index) => {
    cat.addEventListener('click', () => {
      if (index == 0) {
        mainCardShowsWinRate()
      } else {
        mainCardShowsYekaleo()
      }
    })
  })
}

export default catan
