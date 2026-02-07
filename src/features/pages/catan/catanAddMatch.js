import gsap from 'gsap'

import catanWriteData from './catanWriteData'

const players = [
  {
    name: 'pau',
    matchesToAdd: 0,
    wonMatchesToAdd: 0,
    pointsToAdd: 0,
    yekaleoToAdd: 0,
  },
  {
    name: 'rami',
    matchesToAdd: 0,
    wonMatchesToAdd: 0,
    pointsToAdd: 0,
    yekaleoToAdd: 0,
  },
  {
    name: 'ale',
    matchesToAdd: 0,
    wonMatchesToAdd: 0,
    pointsToAdd: 0,
    yekaleoToAdd: 0,
  },
  {
    name: 'illy',
    matchesToAdd: 0,
    wonMatchesToAdd: 0,
    pointsToAdd: 0,
    yekaleoToAdd: 0,
  },
  {
    name: 'quique',
    matchesToAdd: 0,
    wonMatchesToAdd: 0,
    pointsToAdd: 0,
    yekaleoToAdd: 0,
  },
  {
    name: 'adri',
    matchesToAdd: 0,
    wonMatchesToAdd: 0,
    pointsToAdd: 0,
    yekaleoToAdd: 0,
  },
]

const colors = [
  '#2ab48f',
  '#ca79ff',
  '#ff4d4d',
  '#ff7ebc',
  '#0ee2f5',
  '#ffa600',
]

const catanPointsWrappers = document.querySelectorAll(
  '.add-catan-points-wrapper'
)

function selectDomElements() {
  return {
    catanPlayerWrappers: document.querySelectorAll('.add-catan-player-wrapper'),
    pauPoints: catanPointsWrappers[0].querySelectorAll('.add-catan-number'),
    ramiPoints: catanPointsWrappers[1].querySelectorAll('.add-catan-number'),
    alePoints: catanPointsWrappers[2].querySelectorAll('.add-catan-number'),
    illyPoints: catanPointsWrappers[3].querySelectorAll('.add-catan-number'),
    quiquePoints: catanPointsWrappers[4].querySelectorAll('.add-catan-number'),
    adriPoints: catanPointsWrappers[5].querySelectorAll('.add-catan-number'),
    button: document.querySelector('.addmatch-button'),
    addPlayersMenu: document.querySelector('.addmatch-catan-screen'),
  }
}
const DOM = selectDomElements()

// function calculateAverageMatchPoints(totalPoints, totalPlayers) {
//   let avg = (totalPoints / totalPlayers).toFixed(2)
//   return avg
// }

// function calculatePlayerYekaleo(playerPoints, avg) {
//   let ykl = playerPoints - avg
//   return ykl
// }

function catanAddMatch() {
  let activePlayers = [false, false, false, false, false, false] // 0 is OFF and 1 is ON for the player in that given position
  function activatePlayer(index, btn, txt) {
    let isActive = activePlayers[index]

    if (!isActive) {
      gsap.to(btn, {
        backgroundColor: colors[index],
        borderColor: colors[index],
        duration: 0.2,
      })
      gsap.to(txt, {
        color: colors[index],
        fontVariationSettings: `"wght" 600`,
        duration: 0.4,
      })
      gsap.to(catanPointsWrappers[index], {
        opacity: 1,
        duration: 0.4,
      })
    } else {
      gsap.to(btn, {
        backgroundColor: '#fff4e900',
        duration: 0.2,
      })
      gsap.to(txt, {
        color: '#fff4e9bf',
        fontVariationSettings: `"wght" 250`,
        duration: 0.4,
      })
      gsap.to(catanPointsWrappers[index], {
        opacity: 0.2,
        duration: 0.4,
      })
    }

    activePlayers[index] = !activePlayers[index]
  }

  function animatePointSelection(pointSelectors, index, color) {
    const tl = gsap.timeline()
    tl.to(
      pointSelectors,
      {
        borderColor: '#4d4d4d',
        duration: 0.2,
      },
      '<'
    ).to(
      pointSelectors[index],
      {
        borderColor: color,
        duration: 0.2,
      },
      '<'
    )
  }

  function updatePlayerObjects(playerIndex, points) {
    players[playerIndex].pointsToAdd = points
    if (points == 10) {
      players[playerIndex].wonMatchesToAdd = 1
    } else {
      players[playerIndex].wonMatchesToAdd = 0
    }
    // console.log(players)
  }

  function calculateMatchAverage() {
    let totalPoints = 0
    let totalPlayers = 0
    let avg = 0
    players.forEach((p, index) => {
      if (activePlayers[index]) {
        totalPoints += players[index].pointsToAdd
        totalPlayers++
      }
    })
    // console.log('points: ', totalPoints, 'players: ', totalPlayers)
    avg = (totalPoints / totalPlayers).toFixed(2)
    // console.log('avg: ', avg)
    return avg
  }

  function assignYekaleo(avg) {
    players.forEach((p, index) => {
      if (activePlayers[index]) {
        let yekaleo = p.pointsToAdd - avg
        p.yekaleoToAdd = yekaleo
      }
    })
  }

  // EVENR LISTENERS FOR NAMES
  DOM.catanPlayerWrappers.forEach((w, index) => {
    const btn = w.firstElementChild
    const txt = btn.nextElementSibling
    w.addEventListener('click', () => {
      activatePlayer(index, btn, txt)
      if (!activePlayers[index]) updatePlayerObjects(index, 0)
    })
  })

  // EVENT LISTENERS FOR POINTS
  DOM.pauPoints.forEach((p, index) => {
    p.addEventListener('click', () => {
      if (!activePlayers[0]) return
      const points = index + 1

      animatePointSelection(DOM.pauPoints, index, colors[0])
      updatePlayerObjects(0, points)
    })
  })
  DOM.ramiPoints.forEach((p, index) => {
    p.addEventListener('click', () => {
      if (!activePlayers[1]) return
      const points = index + 1

      animatePointSelection(DOM.ramiPoints, index, colors[1])
      updatePlayerObjects(1, points)
    })
  })
  DOM.alePoints.forEach((p, index) => {
    p.addEventListener('click', () => {
      if (!activePlayers[2]) return
      const points = index + 1

      animatePointSelection(DOM.alePoints, index, colors[2])
      updatePlayerObjects(2, points)
    })
  })
  DOM.illyPoints.forEach((p, index) => {
    p.addEventListener('click', () => {
      if (!activePlayers[3]) return
      const points = index + 1

      animatePointSelection(DOM.illyPoints, index, colors[3])
      updatePlayerObjects(3, points)
    })
  })
  DOM.quiquePoints.forEach((p, index) => {
    p.addEventListener('click', () => {
      if (!activePlayers[4]) return
      const points = index + 1

      animatePointSelection(DOM.quiquePoints, index, colors[4])
      updatePlayerObjects(4, points)
    })
  })
  DOM.adriPoints.forEach((p, index) => {
    p.addEventListener('click', () => {
      if (!activePlayers[5]) return
      const points = index + 1

      animatePointSelection(DOM.adriPoints, index, colors[5])
      updatePlayerObjects(5, points)
    })
  })

  // EVENT LISTENRE FOR BUTTON
  DOM.button.addEventListener('click', () => {
    gsap.to(DOM.button, {
      scale: 0.98,
      duration: 0.1,
      ease: 'linear',
      onComplete: () => {
        gsap.to(DOM.button, {
          scale: 1,
          duration: 0.1,
          ease: 'linear',
        })
      },
    })
    const AVERAGE = calculateMatchAverage()
    assignYekaleo(AVERAGE)
    console.log(players)
    catanWriteData(players)
    gsap.to(DOM.addPlayersMenu, {
      yPercent: 0,
      duration: 1.2,
      ease: 'expo.inOut',
      // onComplete: () => {
      //   window.location.reload()
      // },
    })
  })
}

export default catanAddMatch
