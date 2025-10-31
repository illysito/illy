import './styles/style.css'

// GENERAL
import button from './features/pages/general/buttons.js'
import colorModeChange from './features/pages/general/color_mode_change'
import colorModeState from './features/pages/general/color_mode_state'
import mousetrail from './features/pages/general/mousetrail'
import nav from './features/pages/general/nav'

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
    golPlayButton: document.querySelector('.gol-play-button'),
    golSeedButton: document.querySelector('.gol-seed-button'),
  }
}
const domElements = domElementsQuery()

if (!localStorage.getItem('dark_state')) {
  localStorage.setItem('dark_state', '0')
}
if (!localStorage.getItem('accent_state')) {
  localStorage.setItem('dark_state', '0')
}

// PAGES

function runGeneralFunctions() {
  colorModeChange()
  colorModeState()
  nav()
  setTimeout(() => {
    mousetrail()
  }, 3400)
  button(domElements.hireButton)
  if (domElements.qrButton) {
    button(domElements.qrButton)
  }
  // offCanvaMenu()
}

async function runHomeFunctions() {
  // Imports
  const { default: preloader } = await import(
    './features/pages/general/preloader'
  )
  const { default: heroUI } = await import(
    './features/pages/home/hero_shader/hero_ui'
  )
  const { default: metadata } = await import('./features/pages/home/metadata')
  const { default: scroll } = await import('./features/pages/home/scroll')
  const { default: aboutText } = await import('./features/pages/home/aboutText')
  // const { default: form } = await import('./features/pages/home/form')
  const { default: workCanvasUI } = await import(
    './features/pages/home/work_shaders/disp_ui'
  )
  const { default: workInteraction } = await import(
    './features/pages/home/work_interaction'
  )
  const { default: workAnimations } = await import(
    './features/pages/home/work_animations'
  )
  const { default: serviceAnimations } = await import(
    './features/pages/home/service_animations'
  )
  const { default: golUI } = await import('./features/p5js/game_of_life/gol_ui')

  // Hero
  heroUI()
  preloader()
  metadata()
  scroll()

  // About
  aboutText()

  // Shaders
  // setTimeout(async () => {
  //   workCanvasUI()
  // }, 1200)
  workCanvasUI()
  workInteraction()
  workAnimations()
  serviceAnimations()

  // Contact
  // form()

  // Footer
  setTimeout(golUI, 6200)
  button(domElements.golPlayButton)
  button(domElements.golSeedButton)
  // golUI()
}

async function runPhilosophyFunctions() {
  const { default: sineHandler } = await import(
    './features/p5js/sine_waves/sine_handler'
  )
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

if (!document.body.classList.contains('body__flowfield'))
  // requestIdleCallback(runGeneralFunctions)
  runGeneralFunctions()
if (document.body.classList.contains('body__home'))
  // requestIdleCallback(runHomeFunctions)
  runHomeFunctions()
if (document.body.classList.contains('body__philosophy'))
  runPhilosophyFunctions()
if (document.body.classList.contains('body__qr')) runQRFunctions()
if (document.body.classList.contains('body__flowfield')) runFlowFieldFunctions()
