import GlslCanvas from 'glslCanvas'

import gol_frag from './gol_shader'

//prettier-ignore
function golHandler(canvas) {
  // function githubToJsDelivr(permalink) {
  //   return permalink
  //     .replace('github.com', 'cdn.jsdelivr.net/gh')
  //     .replace('/blob/', '@')
  // }
  // SETUP
  // const shaderReference = 'DISPLACEMENT SHADER: '
  canvas.getContext('webgl')
  // const gl = canvas.getContext('webgl')
  // if (!gl) {
  //   console.error(shaderReference + 'WebGL not supported!')
  // } else {
  //   console.log(shaderReference + 'WebGL is working!')
  // }
  // if (!canvas) {
  //   console.error(shaderReference + 'Canvas element not found!')
  //   return
  // }

  // CALCULATE SIZE
  const calcSize = function () {
    let w = canvas.parentNode.clientWidth
    let h = canvas.parentNode.clientHeight
    let dpi = window.devicePixelRatio

    canvas.width = w * dpi
    canvas.height = h * dpi
  }
  calcSize()

  // CONNECT SHADERS TO CANVAS
  const sandbox = new GlslCanvas(canvas)

  const fragment_shader = gol_frag
  sandbox.load(fragment_shader)
  sandbox.setUniform('u_resolution', [canvas.width, canvas.height])
  sandbox.setUniform('backbuffer', 1)
  //prettier-ignore

  function updateUniforms() {
    sandbox.setUniform('u_resolution', [canvas.width, canvas.height])
    sandbox.setUniform('backbuffer', 1)
  }

  window.addEventListener('resize', function () {
    calcSize()
    updateUniforms()
  })

  return updateUniforms
}

export default golHandler
