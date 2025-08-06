import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register the plugin
gsap.registerPlugin(ScrollTrigger)

function heroHeaderGrid() {
  const container = document.querySelector('.pixels-container')
  let cells = []
  let count = 100

  for (let i = 0; i <= count; i++) {
    const cell = document.createElement('div')
    cell.classList.add('pixel-cell')
    container.appendChild(cell)
    cells.push(cell)
    console.log('pixel created')
  }

  // let randomIndex = 0
  function animateCells() {
    const randomPosition = Math.floor(Math.random() * count)
    let cell_1 = cells[randomPosition]
    if (cell_1.style.opacity != 1) cell_1 = cells[randomPosition + 1]
    gsap.to([cell_1], {
      opacity: 1,
      duration: 0.2,
    })
  }

  window.addEventListener('scroll', () => {
    animateCells()
    console.log('scroll')
  })
}

export default heroHeaderGrid
