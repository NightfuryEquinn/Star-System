uniform float uTime;

varying vec2 vUv;
varying vec3 vPosition;

varying vec3 vLayer0;
varying vec3 vLayer1;
varying vec3 vLayer2;

mat2 rotate(float a) {
  float s = sin(a);
  float c = cos(a);

  return mat2(c, -s, s, c);
}

void main() {
  float t = uTime * 0.5;

  vec3 p0 = position;
  mat2 rot0 = rotate(t);
  p0.xy = rot0 * p0.xy;
  vLayer0 = p0;

  vec3 p1 = position;
  mat2 rot1 = rotate(t);
  p1.xy = rot1 * p1.xy;
  vLayer1 = p1;

  vec3 p2 = position;
  mat2 rot2 = rotate(t);
  p2.xy = rot2 * p2.xy;
  vLayer2 = p2;

  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectionPosition = projectionMatrix * viewPosition;

  gl_Position = projectionPosition;

  vUv = uv;
  vPosition = position;
}