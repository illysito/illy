// import gsap from 'gsap'

const PAU = {
  name: 'pau',
  matchesToAdd: 0,
  wonMatchesToAdd: 0,
  pointsToAdd: 0,
  yekaleoToAdd: 0,
}

const RAMI = {
  name: 'rami',
  matchesToAdd: 0,
  wonMatchesToAdd: 0,
  pointsToAdd: 0,
  yekaleoToAdd: 0,
}

const ALE = {
  name: 'ale',
  matchesToAdd: 0,
  wonMatchesToAdd: 0,
  pointsToAdd: 0,
  yekaleoToAdd: 0,
}

const ILLY = {
  name: 'illy',
  matchesToAdd: 0,
  wonMatchesToAdd: 0,
  pointsToAdd: 0,
  yekaleoToAdd: 0,
}

const QUIQUE = {
  name: 'quique',
  matchesToAdd: 0,
  wonMatchesToAdd: 0,
  pointsToAdd: 0,
  yekaleoToAdd: 0,
}

const ADRI = {
  name: 'adri',
  matchesToAdd: 0,
  wonMatchesToAdd: 0,
  pointsToAdd: 0,
  yekaleoToAdd: 0,
}

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
  function updatePlayerObjects() {
    DOM.pauPoints.forEach((p, index) => {
      p.addEventListener('click', () => {
        PAU.pointsToAdd = index + 1
        if (index == 9) {
          PAU.wonMatchesToAdd = 1
        }
        console.log(PAU)
      })
    })
    DOM.ramiPoints.forEach((p, index) => {
      p.addEventListener('click', () => {
        RAMI.pointsToAdd = index + 1
        if (index == 9) {
          RAMI.wonMatchesToAdd = 1
        }
        console.log(RAMI)
      })
    })
    DOM.alePoints.forEach((p, index) => {
      p.addEventListener('click', () => {
        ALE.pointsToAdd = index + 1
        if (index == 9) {
          ALE.wonMatchesToAdd = 1
        }
        console.log(ALE)
      })
    })
    DOM.illyPoints.forEach((p, index) => {
      p.addEventListener('click', () => {
        ILLY.pointsToAdd = index + 1
        if (index == 9) {
          ILLY.wonMatchesToAdd = 1
        }
        console.log(ILLY)
      })
    })
    DOM.quiquePoints.forEach((p, index) => {
      p.addEventListener('click', () => {
        QUIQUE.pointsToAdd = index + 1
        if (index == 9) {
          QUIQUE.wonMatchesToAdd = 1
        }
        console.log(QUIQUE)
      })
    })
    DOM.adriPoints.forEach((p, index) => {
      p.addEventListener('click', () => {
        ADRI.pointsToAdd = index + 1
        if (index == 9) {
          ADRI.wonMatchesToAdd = 1
        }
        console.log(ADRI)
      })
    })
  }
  updatePlayerObjects()
}

export default catanAddMatch
