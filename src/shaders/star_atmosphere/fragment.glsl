uniform vec3 uSunLightColor;
uniform vec3 uSunDarkColor;

varying vec3 vNormal;
varying vec3 vPosition;

void main() {
  vec3 viewDirection = normalize(vPosition - cameraPosition);
  vec3 normal = normalize(vNormal);
  vec3 color = vec3(0.0);

  // Atmosphere
  float atmosphereMix = smoothstep(-0.25, 0.75, 0.0);
  vec3 atmosphereColor = mix(uSunDarkColor, uSunLightColor, atmosphereMix);
  color += atmosphereColor;

  // Alpha
  float edgeAlpha = dot(viewDirection, normal);
  edgeAlpha = smoothstep(0.0, 0.5, edgeAlpha);

  float smoothAlpha = smoothstep(0.0, 1.0, atmosphereMix);
  float alpha = edgeAlpha * smoothAlpha;

  // Final color
  gl_FragColor = vec4(color, alpha);

  #include <colorspace_fragment>
  // #include <tonemapping_fragment>
}