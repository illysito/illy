import {
  PlaneGeometry,
  ShaderMaterial,
  Vector2,
  Mesh,
  WebGLRenderTarget,
  OrthographicCamera,
  Scene,
  RGBFormat,
  UnsignedByteType,
  TextureLoader,
} from 'three'

function githubToJsDelivr(permalink) {
  return permalink
    .replace('github.com', 'cdn.jsdelivr.net/gh')
    .replace('/blob/', '@')
}

function createPlane(renderer) {
  const canvas = renderer.domElement
  const res = new Vector2(canvas.width, canvas.height)
  const rtA = new WebGLRenderTarget(res.x, res.y, {
    format: RGBFormat,
    type: UnsignedByteType,
  })
  const rtB = rtA.clone()

  let currentRT = rtA
  let nextRT = rtB

  const simScene = new Scene()
  const simCamera = new OrthographicCamera(-1, 1, 1, -1, 0, 1)

  const textureLoader = new TextureLoader()
  const img = textureLoader.load(
    githubToJsDelivr(
      'https://github.com/illysito/shaders/blob/b89ccd38b24b375e79318690acbe4f09faeaf22a/imgs/Perlin%20Noise%20Large.png'
    )
  )

  const geometry = new PlaneGeometry(2, 2)

  const material = new ShaderMaterial({
    uniforms: {
      u_time: { value: 0.0 },
      u_resolution: { value: res },
      u_state: { value: null }, // optional
      u_cellCount: { value: 42.0 },
    },
    vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,
    fragmentShader: `
    #ifdef GL_ES
    precision mediump float;
    #endif
    
    varying vec2 vUv;
    uniform sampler2D u_state;
    uniform vec2 u_resolution;
    uniform float u_cellCount;
    
    void main() {
      vec2 uv = vUv;
    
      // Compute texel offset based on cell grid size
      vec2 cellSize = 1.0 / vec2(u_cellCount, u_cellCount * u_resolution.y / u_resolution.x);
    
      // Read current cell
      vec4 current = texture2D(u_state, uv);
      float alive = current.r > 0.5 ? 1.0 : 0.0;
    
      // Count neighbors
      float neighbors = 0.0;
      for (int x = -1; x <= 1; x++) {
        for (int y = -1; y <= 1; y++) {
          if (x == 0 && y == 0) continue;
          vec2 offset = vec2(float(x), float(y)) * cellSize;
          vec4 n = texture2D(u_state, uv + offset);
          neighbors += step(0.5, n.r);
        }
      }
    
      // Apply Game of Life rules
      float next = alive;
      if (alive == 1.0 && (neighbors < 2.0 || neighbors > 3.0)) next = 0.0;
      if (alive == 0.0 && neighbors == 3.0) next = 1.0;
    
      gl_FragColor = vec4(vec3(next), 1.0);
      gl_FragColor = vec4(current.r * 0.98, current.g, current.b, 1.0);
    }    
  `,
  })

  const init_material = new ShaderMaterial({
    uniforms: {
      u_time: { value: 0.0 },
      u_resolution: { value: res },
      u_texture: { value: img },
    },
    vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,
    fragmentShader: `
    #ifdef GL_ES
    precision mediump float;
    #endif
    
    varying vec2 vUv;
    uniform sampler2D u_texture;
    uniform vec2 u_resolution;
    uniform float u_time;
    
    void main() {
    
      vec2 uv = vUv;
      float blocksX = 42.0;
      float blocksY = blocksX * u_resolution.y / u_resolution.x;
      float coords_blocks_X = floor(blocksX * uv.x) / blocksX;
      float coords_blocks_Y = floor(blocksY * uv.y) / blocksY;
      vec2 bloockCoords = vec2(coords_blocks_X, coords_blocks_Y);

      vec4 noise = texture2D(u_texture, bloockCoords);

      float a = step(0.4, noise.r);
    
      // gl_FragColor = noise;
      gl_FragColor = vec4(a, a, a, 1.0);
    }
  `,
  })

  const simQuad = new Mesh(geometry, init_material)
  simScene.add(simQuad)

  const mesh = new Mesh(geometry, material)

  // LOOP
  // let counter = 0
  mesh.tick = (delta) => {
    material.uniforms.u_time.value += delta

    // render the current scene into the next render target
    material.uniforms.u_state.value = currentRT.texture
    renderer.setRenderTarget(nextRT)
    renderer.render(simScene, simCamera) // full-screen draw (camera-less render in orthographic space)
    renderer.setRenderTarget(null)

    // swap the buffers
    const temp = currentRT
    currentRT = nextRT
    nextRT = temp
  }

  return mesh
}

export { createPlane }
