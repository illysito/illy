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
uniform float u_time;

void main() {

  vec2 uv = v_texcoord;
  vec4 prev = texture2D(u_state, uv);

  float r = 0.5 + 0.5 * sin(u_time) * (prev.r);
  float g = 0.5 + 0.5 * sin(2.0 * u_time) * (prev.g);
  float b = 0.5 + 0.5 * sin(0.5 * u_time) * (prev.b);

  vec3 color = vec3(r, prev.g, prev.b);
  gl_FragColor = vec4(color, 1.0);
  // gl_FragColor = prev;
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
