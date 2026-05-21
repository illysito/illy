import { time, uv, vec3, sin, add, mul } from 'three/tsl'

export function createColorNode() {
  const st = uv()

  const wave = sin(add(mul(st.x, 10), time))

  return vec3(wave, st.y, 1.0)
}
