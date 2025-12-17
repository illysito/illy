import GlslCanvas from 'glslCanvas'

import disp_frag from './hero_shader_mobile'

//prettier-ignore
function dispHandlerMobile(canvas, darkModeRef, offsetRef, accRef){
  function githubToJsDelivr(permalink) {
    return permalink
      .replace('github.com', 'cdn.jsdelivr.net/gh')
      .replace('/blob/', '@')
  }
  // SETUP
  // const shaderReference = 'HREO SHADER: '
  // const gl = canvas.getContext('webgl')
  canvas.getContext('webgl')
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

  const fragment_shader = disp_frag
  sandbox.load(fragment_shader)
  sandbox.setUniform('u_resolution', [canvas.width, canvas.height])
  //prettier-ignore
  const textureBlack = githubToJsDelivr(
  'https://github.com/illysito/illy/blob/9ef5654921a79f4198a71008a1c29943eb7c73ce/public/imgs_cdn/ILLY-TEXTURE-SIZED-34.jpg')
  const textureWhite = githubToJsDelivr(
  'https://github.com/illysito/illy/blob/9ef5654921a79f4198a71008a1c29943eb7c73ce/public/imgs_cdn/ILLY-TEXTURE-SIZED-33.jpg')
  // const image2_URL = 'https://raw.githubusercontent.com/illysito/shaders/2605776610e744beacacb039330bc22b17240e59/imgs/20240802_15580031_4289.jpg'
  const displacementURL = githubToJsDelivr('https://github.com/illysito/shaders/blob/b89ccd38b24b375e79318690acbe4f09faeaf22a/imgs/Perlin%20Noise%20Large.png')

  sandbox.setUniform('u_darkMode', darkModeRef.current)
  sandbox.setUniform('u_image_1', textureBlack)
  sandbox.setUniform('u_image_2', textureWhite)
  sandbox.setUniform('u_displacement', displacementURL)

  function updateUniforms() {
    sandbox.setUniform('u_darkMode', darkModeRef.current)
    sandbox.setUniform('u_resolution', [canvas.width, canvas.height])
    sandbox.setUniform('u_offset', offsetRef.current)
    sandbox.setUniform('u_acceleration', accRef.current)
  }

  window.addEventListener('resize', function () {
    calcSize()
    updateUniforms()
  })

  return updateUniforms
}

export default dispHandlerMobile
