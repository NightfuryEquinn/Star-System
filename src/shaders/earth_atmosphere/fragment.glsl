uniform vec3 uSunDirection;
uniform vec3 uAtmosphereDayColor;
uniform vec3 uAtmosphereNightColor;

varying vec3 vNormal;
varying vec3 vPosition;

void main() {
  vec3 viewDirection = normalize(vPosition - cameraPosition);
  vec3 normal = normalize(vNormal);
  vec3 color = vec3(0.0);

  // Sun orientation
  float sunOrientation = dot(uSunDirection, normal);

  // Atmosphere
  float atmosphereDayMix = smoothstep(-0.25, 0.75, sunOrientation);
  vec3 atmosphereColor = mix(uAtmosphereNightColor, uAtmosphereDayColor, atmosphereDayMix);
  color += atmosphereColor;
  
  // Alpha
  float edgeAlpha = dot(viewDirection, normal);
  edgeAlpha = smoothstep(0.0, 0.75, edgeAlpha);
  float dayAlpha = smoothstep(-0.5, 0.0, sunOrientation);
  float alpha = edgeAlpha * dayAlpha;

  // Final color
  gl_FragColor = vec4(color, alpha);

  #include <colorspace_fragment>
}