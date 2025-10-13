// import gsap from 'gsap'

import './styles/style.css'

// GENERAL
// import world from './features/pages/3d/world/universe'
// import handleGridShader from './features/pages/general/handleGridShader'
import mousetrail from './features/pages/general/mousetrail'
import nav from './features/pages/general/nav'
import preloader from './features/pages/general/preloader'
// SCRIPTS
import button from './features/scripts/buttons.js'

// Query elements from the DOM
function domElementsQuery() {
  return {
    worldContainer: document.querySelector('.world-container'),
    hireButton: document.querySelector('.hire-button'),
    nav: document.querySelector('.nav__section'),
    navLinks: document.querySelectorAll('.nav-link'),
    preloaderOverlays: document.querySelectorAll('.preloader-overlay'),
    preloader: document.querySelector('.preloader__section'),
    qrButton: document.querySelector('.qr-button'),
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
  // world(domElements.worldContainer)
  nav()
  mousetrail()
  button(domElements.hireButton)
  if (domElements.qrButton) {
    button(domElements.qrButton)
  }
}

async function runHomeFunctions() {
  // Imports
  const { default: introHome } = await import('./features/pages/home/introHome')
  const { default: heroUI } = await import(
    './features/pages/home/hero_shader/hero_ui'
  )
  const { default: heroWords } = await import('./features/pages/home/heroWords')
  const { default: workCanvasUI } = await import(
    './features/pages/home/work_shaders/disp_ui'
  )

  // Exec
  checkPreloader()
  // handleGridShader()
  // handleHeroCanvas()
  if (localStorage.getItem('isPreloader') !== 'true') {
    await preloader()
  }
  heroUI()
  introHome()
  heroWords()
  // await new Promise(r => setTimeout(r, 3000));
  setTimeout(workCanvasUI, 1200)
  // world(domElements.worldContainer)
}

// OTHER STUFF

async function runFlowFieldFunctions() {
  const { default: flowField } = await import('./features/scripts/flowField')
  flowField()
}

async function runQRFunctions() {
  const { default: generateQR } = await import('./features/scripts/generateQR')
  nav()
  button(domElements.hireButton)
  generateQR()
}

// INIT

if (!document.body.classList.contains('body__flowfield')) runGeneralFunctions()
if (document.body.classList.contains('body__home')) runHomeFunctions()
if (document.body.classList.contains('body__qr')) runQRFunctions()
if (document.body.classList.contains('body__flowfield')) runFlowFieldFunctions()
