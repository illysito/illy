const disp_frag = `
#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform float u_offset;
uniform float u_wind;
uniform float u_rain;
uniform float u_darkMode;
uniform sampler2D u_image_1;
uniform sampler2D u_image_2;
uniform sampler2D u_displacement;

varying vec2 v_texcoord;

// DROPS

vec2 random2(vec2 st) {
  st = vec2(dot(st, vec2(127.1, 311.7)),
            dot(st, vec2(269.5,183.3)));
  return -1.0 + 2.0 * fract(sin(st) * 43758.5453123);
}

vec2 drop(vec2 uv, vec2 center, float radius, float strength) {
  vec2 dir = uv - center;
  dir.y *= u_resolution.y / u_resolution.x;
  float dist = length(dir);
  float falloff = 1.0 - smoothstep(radius * 0.7, radius, dist);
  if (dist > radius) return vec2(0.0); // outside the drop, no effect
  return normalize(dir) * falloff * strength;
}

vec2 drops(vec2 uv, float time, float intensity) {
  vec2 totalOffset = vec2(0.0);
  int count = int(3.0 + intensity * 20.0);

  // control overall drop lifespan (smaller = faster fade cycles)
  float lifeSpeed = mix(0.8, 0.9, intensity);  

    for (int i = 0; i < 40; i++) {
      if (i >= count) break;

      // each drop gets its own offset in time
      float personalOffset = fract(sin(float(i) * 91.17) * 43758.5453123);

      // fractional phase in [0, 1]
      float phase = fract(time * lifeSpeed + personalOffset);

      // fade envelope: fade in at 0–0.1, fade out at 0.9–1.0
      float fade = smoothstep(0.0, 0.5, phase) * smoothstep(1.0, 0.5, phase);

      // stable position while alive
      float lifeIndex = floor(time * lifeSpeed + personalOffset);
      vec2 seed = vec2(float(i), lifeIndex);
      vec2 pos = fract(random2(seed));

      // size and strength
      float radius = mix(0.008, 0.016, fract(sin(float(i)*12.9898)*78.233));
      float strength = 0.0002;

      // get displacement from single drop
      totalOffset += drop(uv, pos, radius, strength * fade);
    }
  return totalOffset;
}

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
  //uv.x *= u_resolution.x / u_resolution.y;

  // find out the ratios
  float image_ratio = 1440.0 / 900.0;
  float canvas_ratio = u_resolution.x / u_resolution.y;

  vec2 coords = aspect(uv, image_ratio, canvas_ratio);

  // BLOCK COORDS

  float blocks_x = 100.0;
  float blocks_y = blocks_x * u_resolution.y / u_resolution.x;
  float block_coords_x = floor(coords.x * blocks_x) / blocks_x;
  // float block_coords_x = coords.x;
  // float block_coords_y = floor(coords.y * blocks_y) / blocks_y;
  float block_coords_y = coords.y;
  vec2 block_coords = vec2(block_coords_x, block_coords_y);

  // DISTORTION COORDS

  vec2 distortion_coords = vec2(
    coords.x * sin(u_time),
    coords.y * cos(u_time)
  );

  // IMG

  float displacementCoef = 0.2;

  float windCoef = -u_wind * 0.6;
  float windOffset = fbm(vec2(u_time * u_wind, coords.y * 0.5));

  vec2 rainOffset = drops(uv, u_time * u_rain * 0.01, u_rain);

  // vec4 darkTexture = texture2D(u_image_1, coords);
  // vec4 lightTexture = texture2D(u_image_2, coords);
  // vec4 img_1 = mix(darkTexture, lightTexture, u_darkMode);

  vec4 img_2 = vec4(0.0, 0.0, 0.0, 0.0);
  vec4 displacement = texture2D(u_displacement, coords);
  // vec4 blockDisplacement = texture2D(u_displacement, coords);
  vec4 blockDisplacement = texture2D(u_displacement, block_coords);

  float displaceForceScroll = blockDisplacement.r * u_offset * displacementCoef;
  float displaceForceWind = displacement.r * windOffset * windCoef;
  vec2 uvDisplaced = vec2(uv.x + displaceForceWind, uv.y - displaceForceScroll);
  uvDisplaced += 70.0 * rainOffset;

  vec4 d_img_1 = mix(texture2D(u_image_1, uvDisplaced), texture2D(u_image_2, uvDisplaced), u_darkMode);
  vec4 d_img_2 = img_2;

  vec4 img = (d_img_1);

  gl_FragColor = img;
}
`
export default disp_frag
