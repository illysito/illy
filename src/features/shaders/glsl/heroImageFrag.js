const heroImg_frag = `
#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_imageResolution;
uniform float u_mouseX;
uniform float u_mouseY;
uniform float u_distortionFactor;
uniform float u_blueDistortionFactor;
uniform float u_naturalDistortionFactor;
uniform bool u_textureLoaded;
uniform float u_isObserved;
uniform sampler2D image;

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

float rand(vec2 co) {
  return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
  if(u_isObserved == 0.0){
    gl_FragColor = vec4(1.0, 1.0, 1.0, 0.0);
    return;
  }
  
  vec4 color = vec4(1.0, 1.0, 1.0, 1.0);

  // ------------- UV

  vec2 uv = v_texcoord;
  uv = gl_FragCoord.xy / u_resolution;

  // ------------- RATIOS

  // float image_ratio = 1200.0 / 1249.0;
  float image_ratio = u_imageResolution.x / u_imageResolution.y;
  float canvas_ratio = u_resolution.x / u_resolution.y;

  vec2 coords = aspect(uv, image_ratio, canvas_ratio);
  coords = clamp(coords, 0.0, 1.0);

  // ------------- SAMPLING

  vec4 img = texture2D(image, coords);

  // ------------- NOISE

  // Distance from mouse (in [0, 1] range)
  float dist = distance(uv, vec2(u_mouseX, u_mouseY));

  // Grain strength based on distance (1.0 inside radius, 0.0 outside)
  float radius = 0.05;
  float grainFactor = smoothstep(radius, radius * 0.8, dist);
  grainFactor = 0.0;

  float noise = rand(coords);
  float noiseFactor = 0.2 * u_mouseX;
  img += grainFactor * noise;
  
  // ------------- OUTPUT
  
  color = img;
  gl_FragColor = color;
}
`
export default heroImg_frag
