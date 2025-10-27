// import gsap from 'gsap'

import golHandler from './gol_handler'

function golUI() {
  // function githubToJsDelivr(permalink) {
  //   return permalink
  //     .replace('github.com', 'cdn.jsdelivr.net/gh')
  //     .replace('/blob/', '@')
  // }
  //prettier-ignore
  const golCanvas = document.querySelector('#gol-canvas')

  // Aux arrays
  const updateUniforms = golHandler(golCanvas)
  updateUniforms()
}

export default golUI
