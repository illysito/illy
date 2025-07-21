// import gsap from 'gsap'

import './styles/style.css'

// GENERAL
import nav from './features/pages/general/nav'
// SCRIPTS
import button from './features/scripts/buttons.js'

function domElementsQuery() {
  return {
    hireButton: document.querySelector('.hire-button'),
    navLinks: document.querySelectorAll('.nav-link'),
    preloaderOverlays: document.querySelectorAll('.preloader-overlay'),
    preloader: document.querySelector('.preloader__section'),
  }
}
const domElements = domElementsQuery()

// function transition() {
//   domElements.navLinks.forEach((link) => {
//     link.addEventListener('click', (e) => {
//       e.preventDefault()

//       const href = link.href

//       // TRANSITION
//       domElements.preloader.style.zIndex = 30
//       gsap.to(domElements.preloaderOverlays, {
//         yPercent: 0,
//         duration: 1,
//         ease: 'power3.inOut',
//         onComplete: () => {
//           window.location.href = href
//         },
//       })
//     })
//   })
// }

function runGeneralFunctions() {
  nav()
  // transition()
  // general buttons
  button(domElements.hireButton)
}

async function runHomeFunctions() {
  // Imports
  const { default: intro } = await import('./features/pages/general/intro')
  const { default: handleHeroCanvas } = await import(
    './features/pages/home/handleHeroShader'
  )

  // Exec
  intro()
  handleHeroCanvas()
}

runGeneralFunctions()
if (document.body.classList.contains('body__home')) runHomeFunctions()
