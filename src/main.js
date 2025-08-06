// import gsap from 'gsap'

import './styles/style.css'

// GENERAL
import mousetrail from './features/pages/general/mousetrail'
import nav from './features/pages/general/nav'
import preloader from './features/pages/general/preloader'
// SCRIPTS
import button from './features/scripts/buttons.js'

// Query elements from the DOM
function domElementsQuery() {
  return {
    hireButton: document.querySelector('.hire-button'),
    nav: document.querySelector('.nav__section'),
    navLinks: document.querySelectorAll('.nav-link'),
    preloaderOverlays: document.querySelectorAll('.preloader-overlay'),
    preloader: document.querySelector('.preloader__section'),
  }
}
const domElements = domElementsQuery()

// If preloader has already been shown, cancel initialization and put it behind everything so it doesnt show again!
function checkPreloader() {
  if (localStorage.getItem('isPreloader') === 'true') {
    domElements.preloader.style.zIndex = -30
  }
}

// PAGES

function runGeneralFunctions() {
  checkPreloader()
  nav()
  mousetrail()
  button(domElements.hireButton)
}

async function runHomeFunctions() {
  // Imports
  const { default: introHome } = await import('./features/pages/home/introHome')
  const { default: handleHeroCanvas } = await import(
    './features/pages/home/handleHeroShader'
  )
  // const { default: heroHeaderGrid } = await import(
  //   './features/pages/home/heroHeaderGrid'
  // )

  // Exec
  handleHeroCanvas()
  if (localStorage.getItem('isPreloader') !== 'true') {
    await preloader()
  }
  introHome()
  // heroHeaderGrid()
}

// OTHER STUFF

async function runFlowFieldFunctions() {
  const { default: flowField } = await import('./features/scripts/flowField')
  flowField()
}

async function runQRFunctions() {
  const { default: generateQR } = await import('./features/scripts/generateQR')
  generateQR()
}

// INIT

if (!document.body.classList.contains('body__flowfield')) runGeneralFunctions()
if (document.body.classList.contains('body__home')) runHomeFunctions()
if (document.body.classList.contains('body__qr')) runQRFunctions()
if (document.body.classList.contains('body__flowfield')) runFlowFieldFunctions()
