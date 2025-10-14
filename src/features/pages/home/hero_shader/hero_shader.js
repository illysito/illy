const disp_frag = `
#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform float u_offset;
uniform float u_wind;
uniform sampler2D u_image_1;
uniform sampler2D u_image_2;
uniform sampler2D u_displacement;

varying vec2 v_texcoord;

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
  float windCoef = -u_wind;

  float windOffset = fbm(vec2(u_time * u_wind, coords.y * 0.5));

  vec4 img_1 = texture2D(u_image_1, coords);
  vec4 img_2 = vec4(0.0, 0.0, 0.0, 0.0);
  vec4 displacement = texture2D(u_displacement, coords);
  // vec4 blockDisplacement = texture2D(u_displacement, coords);
  vec4 blockDisplacement = texture2D(u_displacement, block_coords);

  float displaceForce1 = blockDisplacement.r * u_offset * displacementCoef;
  float displaceForceX = displacement.r * windOffset * windCoef;
  vec2 uvDisplaced1 = vec2(uv.x + displaceForceX, uv.y - displaceForce1);

  float displaceForce2 = blockDisplacement.r * (1.0 - u_offset) * displacementCoef;
  vec2 uvDisplaced2 = vec2(uv.x, uv.y + displaceForce2);

  vec4 d_img_1 = texture2D(u_image_1, uvDisplaced1);
  vec4 d_img_2 = img_2;

  // vec4 img = (d_img_1 * (1.0 - u_offset) + d_img_2 * u_offset);
  vec4 img = (d_img_1);

  gl_FragColor = img;
}
`
export default disp_frag
