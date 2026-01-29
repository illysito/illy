import './styles/style.css'

// GENERAL
import button from './features/pages/general/buttons.js'
import colorModeChange from './features/pages/general/color_mode_change'
import colorModeState from './features/pages/general/color_mode_state'
import introNav from './features/pages/general/introNav'
import nav from './features/pages/general/nav'
import offCanvaMenu from './features/pages/general/offcanva_menu.js'

let isBuilding = false

function isMobile() {
  return window.innerWidth <= 767
}

function domElementsQuery() {
  return {
    worldContainer: document.querySelector('.world-container'),
    hireButton: document.querySelector('.hire-button'),
    hireButton2: document.querySelector('.hire-button-2'),
    nav: document.querySelector('.nav__section'),
    navLinks: document.querySelectorAll('.nav-link'),
    preloaderOverlays: document.querySelectorAll('.preloader-overlay'),
    preloader: document.querySelector('.preloader__section'),
    qrButton: document.querySelector('.qr-button'),
    canvasWrapper: document.querySelector('.layer-1-canvas-wrapper'),
    // golPlayButton: document.querySelector('.gol-play-button'),
    // golSeedButton: document.querySelector('.gol-seed-button'),
    // case buttons
    deepStudyButtons: document.querySelectorAll('.deepstudy-button'),
    liveSiteButton: document.querySelector('.livesite-button'),
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

async function runGeneralFunctions() {
  colorModeChange()
  colorModeState()
  nav(!isBuilding)
  introNav()
  if (!isMobile() && !isBuilding) {
    setTimeout(() => {
      import('./features/pages/general/mousetrail').then(
        ({ default: mousetrail }) => {
          mousetrail()
        }
      )
    }, 3400)
  }

  offCanvaMenu()
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
  const { default: metadata } = await import('./features/pages/home/metadata')
  const { default: scroll } = await import('./features/pages/home/scroll')
  const { default: aboutText } = await import('./features/pages/home/aboutText')
  const { default: heroUIState } = await import(
    './features/pages/home/hero_ui_state'
  )
  const { default: heroUIChange } = await import(
    './features/pages/home/hero_ui_change'
  )
  const { default: heroUIExpand } = await import(
    './features/pages/home/hero_ui_expand'
  )
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
  // BUILDING
  const { default: building } = await import(
    './features/pages/building/building'
  )
  const { default: offCanvaBuilding } = await import(
    './features/pages/building/offCanvaBuilding'
  )
  const { default: footer } = await import('./features/pages/home/footer')

  // Hero
  if (!isMobile()) {
    const { default: heroUI } = await import(
      './features/pages/home/hero_shader/hero_ui'
    )
    heroUI(isBuilding)
  } else {
    const { default: heroUIMobile } = await import(
      './features/pages/home/hero_shader_mobile/hero_ui_mobile'
    )
    heroUIMobile()
  }
  // const { default: heroUI } = await import(
  //   './features/pages/home/hero_shader/hero_ui'
  // )
  // heroUI()
  if (isBuilding) {
    building()
    offCanvaBuilding()
  }

  preloader()
  metadata()
  heroUIChange()
  heroUIState()
  heroUIExpand()
  scroll()
  footer()

  // About
  aboutText()

  // Shaders
  workCanvasUI()
  workInteraction()
  workAnimations()
  serviceAnimations()

  button(domElements.hireButton2)

  // Contact
  // form()

  // Footer
  // button(domElements.golPlayButton)
  // button(domElements.golSeedButton)

  // Intersection observers
  const workShaderTarget = document.querySelector('.about-type-h') // shaders RUN when about parapgraph is visible
  // const golTarget = document.querySelector('.footer') // gol RUNS when footer is visible
  const targets = [
    {
      el: workShaderTarget,
      run: () => {
        // import('./features/pages/home/work_shaders/disp_ui').then((m) =>
        //   m.default()
        console.log('shaders should run here')
      },
    },
    // {
    //   el: golTarget,
    //   run: () => {
    //     if (!isMobile()) {
    //       import('./features/p5js/game_of_life/gol_ui').then((m) => m.default())
    //     } else {
    //       return
    //     }
    //   },
    // },
  ]
  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        // not visible? ignore
        if (!entry.isIntersecting) return

        // find which item in our list this element is
        const item = targets.find((t) => t.el === entry.target)
        if (item && item.run) {
          item.run() // 👉 do the thing (lazy-load)
        }

        // we only want it ONCE
        observer.unobserve(entry.target)
      })
    },
    {
      threshold: 0.2,
    }
  )

  targets.forEach((item) => {
    if (item.el) {
      io.observe(item.el)
    }
  })

  // workCanvasUI()
  // golUI()
}

async function runCaseFunctions() {
  // const { default: introNav } = await import(
  //   './features/pages/general/introNav'
  // )
  const { default: caseStudiesMisc } = await import(
    './features/pages/case-studies/caseStudiesMisc'
  )

  // introNav()
  caseStudiesMisc()
  domElements.deepStudyButtons.forEach((b) => {
    button(b)
  })
  button(domElements.liveSiteButton)
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

async function runIChingFunctions() {
  const { default: iChing } = await import('./features/pages/i-ching/iching')
  iChing()
}

async function runTatreezFunctions() {
  const { default: tatreezUI } = await import(
    './features/p5js/tatreez/tatreez_ui'
  )
  tatreezUI()
}

// INIT

if (
  !document.body.classList.contains('body__flowfield') &&
  !document.body.classList.contains('body__i-ching') &&
  !document.body.classList.contains('body__tatreez')
)
  // requestIdleCallback(runGeneralFunctions)
  runGeneralFunctions()
if (document.body.classList.contains('body__home'))
  // requestIdleCallback(runHomeFunctions)
  runHomeFunctions()
if (document.body.classList.contains('body__case')) runCaseFunctions()
if (document.body.classList.contains('body__philosophy'))
  runPhilosophyFunctions()
if (document.body.classList.contains('body__qr')) runQRFunctions()
if (document.body.classList.contains('body__flowfield')) runFlowFieldFunctions()
if (document.body.classList.contains('body__i-ching')) runIChingFunctions()
if (document.body.classList.contains('body__tatreez')) runTatreezFunctions()
