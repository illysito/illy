import golHandler from './gol_handler'

function golUI() {
  const golCanvasWrapper = document.querySelector('.gol-canvas-wrapper')

  golHandler(golCanvasWrapper)
}

export default golUI
