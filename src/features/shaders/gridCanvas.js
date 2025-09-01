import GlslCanvas from 'glslCanvas'

// import gridShader_frag from './glsl/gridShaderFrag'
import breathingShader_frag from './glsl/breathingShaderFrag'

//prettier-ignore
function gridShader(mouseXRef, mouseYRef, glowIntensity) {
  function isMobile() {
    return window.matchMedia('(max-width: 768px)').matches
  }

  // console.log('Illy Hero Shader: is it mobile?: ' + isMobile())

  const canvas = document.querySelector('#grid-canvas')
  // console.log(canvas)

  // const gl = canvas.getContext('webgl')
  // if (!gl) {
  //   console.error('Illy Hero Shader: WebGL not supported!')
  // } else {
  //   console.log('Illy Hero Shader: WebGL is working!')
  // }
  // if (!canvas) {
  //   console.error('Illy Hero Shader: Canvas element not found!')
  //   return
  // }

  const calcSize = function () {
    let w = canvas.offsetWidth
    let h = canvas.offsetHeight
    let dpi = window.devicePixelRatio

    canvas.width = w * dpi
    canvas.height = h * dpi
  }

  calcSize()

  // console.log('Liuba About Shader: width: ' + canvas.width + ' height: ' + canvas.height)

  const sandbox = new GlslCanvas(canvas)

  let fragment_shader
  if (isMobile()) {
    fragment_shader = breathingShader_frag
  } else {
    fragment_shader = breathingShader_frag
  }

  sandbox.load(fragment_shader)
  sandbox.setUniform('u_resolution', [canvas.width, canvas.height])
  sandbox.setUniform('u_glowIntensity', glowIntensity.current)
  sandbox.setUniform('u_mouseX', mouseXRef.current)
  sandbox.setUniform('u_mouseY', mouseYRef.current)

  function updateUniforms() {
    sandbox.setUniform('u_resolution', [canvas.width, canvas.height])
    sandbox.setUniform('u_glowIntensity', glowIntensity.current)
    sandbox.setUniform('u_mouseX', mouseXRef.current)
    sandbox.setUniform('u_mouseY', mouseYRef.current)
  }

  window.addEventListener('resize', function () {
    calcSize()
    updateUniforms()
  })

  return updateUniforms
}

export default gridShader
