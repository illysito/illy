// import gsap from 'gsap'

import './styles/style.css'

// GENERAL
import darkmodeToggle from './features/pages/general/darkmode'
import mousetrail from './features/pages/general/mousetrail'
import nav from './features/pages/general/nav'
import preloader from './features/pages/general/preloader'
// SCRIPTS
import button from './features/scripts/buttons.js'
import darkmodeButton from './features/scripts/darkmode_button'

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
    canvasWrapper: document.querySelector('.layer-1-canvas-wrapper'),
  }
}
const domElements = domElementsQuery()

localStorage.setItem('isDarkModeOn', 'false')

// If preloader has already been shown, cancel initialization and put it behind everything so it doesnt show again!
// function checkPreloader() {
//   if (localStorage.getItem('isPreloader') === 'true') {
//     domElements.preloader.style.zIndex = -30
//   }
// }

// PAGES

function runGeneralFunctions() {
  // world(domElements.worldContainer)
  darkmodeToggle()
  nav()
  mousetrail()
  button(domElements.hireButton)
  if (domElements.qrButton) {
    button(domElements.qrButton)
  }
  darkmodeButton()
}

async function runHomeFunctions() {
  // Imports
  const { default: heroUI } = await import(
    './features/pages/home/hero_shader/hero_ui'
  )
  const { default: workCanvasUI } = await import(
    './features/pages/home/work_shaders/disp_ui'
  )
  const { default: metadata } = await import('./features/pages/home/metadata')
  const { default: workInteraction } = await import(
    './features/pages/home/workInteraction'
  )
  const { default: scroll } = await import('./features/pages/home/scroll')
  const { default: workAnimations } = await import(
    './features/pages/home/work_animations'
  )

  // Exec
  // checkPreloader()
  heroUI()
  setTimeout(workCanvasUI, 1200)
  // if (localStorage.getItem('isPreloader') !== 'true') {
  //   await preloader()
  // }
  preloader()
  metadata()
  scroll()
  workInteraction()
  workAnimations()
}

async function runPhilosophyFunctions() {
  const { default: sineHandler } = await import('./features/p5js/sine_handler')
  sineHandler()
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
if (document.body.classList.contains('body__philosophy'))
  runPhilosophyFunctions()
if (document.body.classList.contains('body__qr')) runQRFunctions()
if (document.body.classList.contains('body__flowfield')) runFlowFieldFunctions()
