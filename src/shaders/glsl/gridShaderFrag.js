const gridShader_frag = `
#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform float u_mouseX;
uniform float u_mouseY;
uniform float u_glowIntensity;

varying vec2 v_texcoord;

void main()
{
  vec4 color = vec4(0.2, 0.2, 1.0, 1.0);

  // ------------- UV

  float aspect = u_resolution.x / u_resolution.y;

  vec2 uv = v_texcoord;
  uv.x *= aspect;

  float blocks = 100.0;
  float x = floor(uv.x * blocks) / blocks;
  float y = floor(uv.y * blocks) / blocks;

  // ------------- MOUSE

  float dist = distance(vec2(u_mouseX * aspect, 1.0 - u_mouseY), vec2(x + 0.5/blocks, y + 0.5/blocks));
  float radius = 0.02;
  float strength = smoothstep(radius, 0.0, dist);
  strength *= u_glowIntensity;

  // ------------- OUTPUT

  float invertedGlowIntensity = 0.5 * smoothstep(1.0, 0.0, u_glowIntensity);
  
  color = vec4(invertedGlowIntensity, invertedGlowIntensity, invertedGlowIntensity, strength * u_glowIntensity);
  if(color.w < 0.8){
    color.w *= u_glowIntensity * 1.1;
  }
  gl_FragColor = color;
}
`
export default gridShader_frag
