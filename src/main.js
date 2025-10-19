// import gsap from 'gsap'

import './styles/style.css'

// GENERAL
import setAccent from './features/pages/general/accent'
import darkmodeToggle from './features/pages/general/darkmode'
import mousetrail from './features/pages/general/mousetrail'
import nav from './features/pages/general/nav'
// SCRIPTS
import accentButton from './features/scripts/accent_button'
import button from './features/scripts/buttons.js'
import darkmodeButton from './features/scripts/darkmode_button'

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

if (!localStorage.getItem('isDarkModeOn')) {
  localStorage.setItem('isDarkModeOn', 'false')
}

// PAGES

function runGeneralFunctions() {
  accentButton()
  setAccent()
  darkmodeToggle()
  darkmodeButton()
  nav()
  mousetrail()
  button(domElements.hireButton)
  if (domElements.qrButton) {
    button(domElements.qrButton)
  }
}

async function runHomeFunctions() {
  // Imports
  const { default: preloader } = await import(
    './features/pages/general/preloader'
  )
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
  const { default: aboutText } = await import('./features/pages/home/aboutText')
  const { default: form } = await import('./features/pages/home/form')

  heroUI()
  setTimeout(workCanvasUI, 1200)
  preloader()
  metadata()
  scroll()
  aboutText()
  workInteraction()
  workAnimations()
  form()
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
