uniform vec3 uSunLightColor;
uniform vec3 uSunDarkColor;

varying vec3 vNormal;
varying vec3 vPosition;

void main() {
  vec3 viewDirection = normalize(vPosition - cameraPosition);
  vec3 normal = normalize(vNormal);
  vec3 color = vec3(0.0);

  // Fresnel
  float fresnel = pow(dot(viewDirection, normal), 4.0);

  // Atmosphere
  vec3 atmosphereColor = mix(uSunDarkColor, uSunLightColor, fresnel);
  color += atmosphereColor;

  // Alpha
  float edgeAlpha = fresnel;
  edgeAlpha = smoothstep(0.0, 0.55, edgeAlpha);
  float alpha = edgeAlpha;

  // Final color
  gl_FragColor = vec4(color, alpha);

  #include <colorspace_fragment>
  // #include <tonemapping_fragment>
}