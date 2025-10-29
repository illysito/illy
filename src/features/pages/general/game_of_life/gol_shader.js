// const gol_frag = `
// #ifdef GL_ES
// precision mediump float;
// #endif

// varying vec2 v_texcoord;
// uniform sampler2D u_state;
// uniform float u_time;

// void main() {
//   vec4 prev = texture2D(u_state, v_texcoord);
//   vec3 color = vec3(0.5 + 0.5 * (prev.r + 0.01) * sin(u_time), 1.0, 0.5 + 0.5 * (prev.b + 0.01) * cos(2.0 * u_time));
//   gl_FragColor = vec4(color, 1.0);
// }
// `

const gol_frag = `
#ifdef GL_ES
precision mediump float;
#endif

varying vec2 v_texcoord;
uniform sampler2D u_state;
uniform vec2 u_resolution;
uniform vec2 u_grid;
uniform float u_time;

void main() {

  vec2 uv = v_texcoord;
  vec2 normalRes = 1.0 / u_resolution;


  vec2 cellSize = 1.0 / u_grid;     // texel size per cell
  vec2 cellCoord = floor(v_texcoord * u_grid) / u_grid; // snap to cell grid
  vec4 prev = texture2D(u_state, cellCoord);
  float a = prev.r;

  float num = 0.0;
  for(float i = -1.0; i < 2.0; i++){
    for(float j = -1.0; j < 2.0; j++){
      vec2 offset = vec2(i, j) * cellSize;
      num += texture2D(u_state, cellCoord + offset).r;
    }
  }

  num -= a;
  float next = a;
  if (a > 0.5) {
    if (num < 2.0 || num > 3.0) next = 0.0;
  } else {
    if (num == 3.0) next = 1.0;
  }

  // gl_FragColor = vec4(vec3(next), 1.0);
  gl_FragColor = texture2D(u_state, cellCoord);
}
`

const gol_vert = `
attribute vec3 aPosition;
attribute vec2 aTexCoord;

varying vec2 v_texcoord;

void main() {
  // copy the texcoords
  v_texcoord = aTexCoord;

  vec4 positionVec4 = vec4(aPosition, 1.0);
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;

  gl_Position = positionVec4;
}
`
export default { gol_vert, gol_frag }
