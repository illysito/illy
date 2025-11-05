const disp_frag = `
#ifdef GL_ES
precision highp float;
#endif

// main UNIFORMS
uniform float u_time;
uniform vec2 u_resolution;
uniform float u_offset;
uniform sampler2D u_image_1;
uniform sampler2D u_image_2;
uniform sampler2D u_displacement;
uniform float u_darkMode;
uniform float u_acceleration;

varying vec2 v_texcoord;

// FBM

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) +
         (c - a) * u.y * (1.0 - u.x) +
         (d - b) * u.x * u.y;
}

// fractal Brownian motion (smooth turbulence)
float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = 0.0;
  for (int i = 0; i < 5; i++) {
    value += amplitude * noise(p);
    p *= 2.0;
    amplitude *= 0.5;
  }
  return value;
}

// ASPECT RATIO 

vec2 aspect(vec2 uv, float image_ratio, float canvas_ratio){
  // if canvas is taller than image, stretch downwards
  // if canvas is landscape to the image, stretch across
  if(image_ratio >= canvas_ratio){
    float ratio = canvas_ratio / image_ratio;
    uv.x *= ratio;
    uv.x += (1.0 - ratio) / 2.0; 
  } else {
    float ratio = image_ratio / canvas_ratio;
    uv.y *= ratio;
    uv.y += (1.0 - ratio) / 2.0; 
  }
  return uv;
}

void main()
{

  // CREO EL VECTOR UV Y LO AJUSTO A RESOLLUCION

  vec2 uv = v_texcoord;
  // uv.x *= u_resolution.x / u_resolution.y;

  // find out the ratios
  float image_ratio = 1080.0 / 1920.0;
  float canvas_ratio = u_resolution.x / u_resolution.y;

  vec2 coords = aspect(uv, image_ratio, canvas_ratio);

  // IMG

  float displacementCoef = 0.2;

      // weather

  float windCoef = -0.2 * sin(0.5 * u_time);
  float windOffset = fbm(vec2(0.5 * u_time, coords.y * 0.5));

  vec4 img_2 = vec4(0.0, 0.0, 0.0, 0.0);
  vec4 displacement = texture2D(u_displacement, coords);

      // scroll displacement

  float displaceForceScroll = displacement.r * u_offset * displacementCoef;
  displaceForceScroll *= 1.2;

      // controlled distortions

  float accelerationScroll = u_acceleration;

      // weather displacement

  float displaceForceWind = displacement.r * windOffset * windCoef;

      // combined displacement (& rain)

  vec2 uvDisplaced = vec2(uv.x + displaceForceWind, uv.y - displaceForceScroll - accelerationScroll);

      // dark mode mixing

  vec4 img = mix(texture2D(u_image_1, uvDisplaced), texture2D(u_image_2, uvDisplaced), u_darkMode);

  gl_FragColor = img;
}
`
export default disp_frag
