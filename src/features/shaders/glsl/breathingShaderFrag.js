const breathingShader_frag = `
#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform float u_mouseX;
uniform float u_mouseY;
uniform float u_glowIntensity;

varying vec2 v_texcoord;

// simplex noise by Ian McEwan, Ashima Arts (2D version)
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865,  // (3.0-sqrt(3.0))/6.0
                      0.366025404,  // 0.5*(sqrt(3.0)-1.0)
                      -0.577350269, // -1.0 + 2.0 * C.x
                      0.024390244); // 1.0 / 41.0
  // First corner
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  // Other corners
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  // Permutations
  i = mod289(i); // Avoid truncation effects in permutation
  vec3 p = permute( permute(
                i.y + vec3(0.0, i1.y, 1.0 ))
              + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 x = fract(p * C.w) * 2.0 - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  // Normalise gradients
  vec2 g0 = vec2(a0.x, h.x);
  vec2 g1 = vec2(a0.y, h.y);
  vec2 g2 = vec2(a0.z, h.z);
  float t0 = 0.5 - dot(x0, x0);
  float t1 = 0.5 - dot(x12.xy, x12.xy);
  float t2 = 0.5 - dot(x12.zw, x12.zw);

  float n0, n1, n2;
  n0 = t0 < 0.0 ? 0.0 : pow(t0, 4.0) * dot( g0, x0 );
  n1 = t1 < 0.0 ? 0.0 : pow(t1, 4.0) * dot( g1, x12.xy );
  n2 = t2 < 0.0 ? 0.0 : pow(t2, 4.0) * dot( g2, x12.zw );
  return 70.0 * (n0 + n1 + n2);
}

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

  float blocks = 68.0;

  float x = floor(uv.x * blocks) / blocks;
  float y = floor(uv.y * blocks) / blocks;
  vec2 xy = vec2(x, y);

  vec2 center = vec2(0.5, 0.5);
  

  // ------------- RANDOM

  float random = rand(xy) * (sin(u_mouseX) + 1.2) * (cos(u_mouseY) + 0.6);
  float n = 0.5 + 0.5 * snoise(xy * 12.0 * 1.2) * random;
  // n += 0.2 * n;
  n *= u_glowIntensity;

  // ------------- OUTPUT
  
  // color = mix(vec4(0.0), color, step(0.2, random));

  float threshold = 0.84; // 20% of squares are black
  if(n > threshold) {
    // color = vec4(0.14, 0.14, 0.14, 1.0);
    color = vec4(0.14, 0.14, 1.0, 1.0);

  }

  gl_FragColor = color;
}
`
export default breathingShader_frag
