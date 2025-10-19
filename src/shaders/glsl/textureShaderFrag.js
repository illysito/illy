const textureShader_frag = `
#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform float u_mouseX;
uniform float u_mouseY;
uniform float u_glowIntensity;

varying vec2 v_texcoord;

float rand(vec2 co) {
  return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
  vec4 color = vec4(0.98, 0.94, 1.0, 1.0);

  // ------------- UV

  float aspect = u_resolution.x / u_resolution.y;

  vec2 uv = v_texcoord;
  uv.x *= aspect;

  vec2 center = vec2(0.5, 0.5);

  // ------------- RANDOM

  float random = rand(uv * u_time);

  // ------------- OUTPUT

  color = mix(vec4(1.0,1.0,0.0,1.0), vec4(0.0,0.0,1.0,1.0), uv.y);
  color += 0.4 * random;

  gl_FragColor = color;
}
`
export default textureShader_frag
