const disp_frag = `
#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform float u_offset;
uniform sampler2D u_image_1;
uniform sampler2D u_image_2;
uniform sampler2D u_displacement;

varying vec2 v_texcoord;

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

  float blocks_x = 200.0;
  float blocks_y = blocks_x * u_resolution.y / u_resolution.x;
  float block_coords_x = floor(uv.x * blocks_x) / blocks_x;
  float block_coords_y = floor(uv.y * blocks_y) / blocks_y;
  vec2 block_coords = vec2(block_coords_x, block_coords_y);

  // IMG

  float displacementCoef = 0.4;

  vec4 img_1 = texture2D(u_image_1, coords);
  vec4 img_2 = vec4(0.0, 0.0, 0.0, 0.0);
  vec4 displacement = texture2D(u_displacement, coords);
  vec4 blockDisplacement = texture2D(u_displacement, coords);
  // vec4 blockDisplacement = texture2D(u_displacement, block_coords);

  float displaceForce1 = blockDisplacement.r * u_offset * displacementCoef;
  vec2 uvDisplaced1 = vec2(uv.x, uv.y - displaceForce1);

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
