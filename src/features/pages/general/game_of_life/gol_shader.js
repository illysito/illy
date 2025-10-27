const gol_frag = `
#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform sampler2D backbuffer;

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec3 bufferColor = texture2D(backbuffer, uv).rgb;
  vec4 color;

  // start magenta on first frame
  if (u_time < 0.1) {
    color = vec4(1.0, 0.0, 1.0, 1.0);
  } else if (bufferColor.r > 0.5) {
    color = vec4(0.0, 1.0, 1.0, 1.0);  // cyan
  } else {
    color = vec4(1.0, 0.0, 1.0, 1.0);  // magenta
  }

  color = mix(vec4(bufferColor,1.0), color, 0.1);
  gl_FragColor = color;
}
`
export default gol_frag
