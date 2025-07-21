import GlslCanvas from 'glslCanvas'

import heroImg_frag from './glsl/heroImageFrag.js'

//prettier-ignore
function heroShader(mouseXRef, mouseYRef, isObserved) {
  function isMobile() {
    return window.matchMedia('(max-width: 768px)').matches
  }

  // console.log('Illy Hero Shader: is it mobile?: ' + isMobile())

  const canvas = document.querySelector('#illy-canvas')
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
    fragment_shader = heroImg_frag
  } else {
    fragment_shader = heroImg_frag
  }

  sandbox.load(fragment_shader)
  sandbox.setUniform('u_resolution', [canvas.width, canvas.height])
  sandbox.setUniform('u_mouseX', mouseXRef.current)
  sandbox.setUniform('u_mouseY', mouseYRef.current)
  //prettier-ignore
  const imageURL_1 ='https://raw.githubusercontent.com/illysito/illy/4455c083151c48c951a559d0161134026f32c3d5/Illy-Hero-5.png'
  const urls = [imageURL_1]
  const index = 0
  sandbox.setUniform('u_image', urls[index])
  sandbox.setUniform('u_imageResolution', [1200.0, 1249.0])
  sandbox.setUniform('u_distortionFactor', 1.0)
  sandbox.setUniform('u_blueDistortionFactor', 1.0)
  sandbox.setUniform('u_naturalDistortionFactor', 1.0)
  sandbox.setUniform('u_isObserved', isObserved.current)

  function updateUniforms() {
    sandbox.setUniform('u_resolution', [canvas.width, canvas.height])
    sandbox.setUniform('u_mouseX', mouseXRef.current)
    sandbox.setUniform('u_mouseY', mouseYRef.current)
    sandbox.setUniform('u_isObserved', isObserved.current)
  }

  window.addEventListener('resize', function () {
    calcSize()
    updateUniforms()
  })

  return updateUniforms
}

export default heroShader
