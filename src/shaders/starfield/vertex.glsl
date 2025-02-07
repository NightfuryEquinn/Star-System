uniform vec3 uCameraPosition;
uniform float uStarDistance;

void main() {
  float halfSize = uStarDistance * 0.5;

  vec4 worldPosition = modelMatrix * vec4(position, 1.0);

  vec3 relPos = worldPosition.xyz - uCameraPosition.xyz;
  relPos = mod(relPos + halfSize, uStarDistance) - halfSize;

  worldPosition.xyz = uCameraPosition.xyz + relPos;

  gl_Position = projectionMatrix * viewMatrix * worldPosition;
  gl_PointSize = 2.5;
}