uniform sampler2D uMoonTexture;
uniform vec3 uSunDirection;
uniform vec3 uOrbitObjectDirection;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
  vec3 viewDirection = normalize(vPosition - cameraPosition);
  vec3 normal = normalize(vNormal);
  vec3 color = vec3(0.0);

  // Check if fragment behind object
  vec3 earthToSun = uSunDirection - uOrbitObjectDirection;
  float distanceEarthSun = length(earthToSun);
  
  vec3 moonToSun = vPosition - uSunDirection;
  float distanceMoonSun = length(moonToSun);
  
  bool inEarthShadow = (distanceEarthSun + 6.0) < distanceMoonSun;

  // Sun orientation
  float sunOrientation = dot(uSunDirection, normal);

  // Day and night color
  float dayMix = smoothstep(-0.25, 0.75, sunOrientation);
  float dayColorIntensity = 1.0;
  if (inEarthShadow) {
    dayMix = 0.0;
    dayColorIntensity = 0.25;
  }
  vec3 dayColor = texture(uMoonTexture, vUv).rgb * dayColorIntensity;
  vec3 nightColor = texture(uMoonTexture, vUv).rgb * 0.25;
  color = mix(nightColor, dayColor, dayMix);

  // Fresnel
  float fresnel = dot(viewDirection, normal) + 1.0;
  fresnel = pow(fresnel, 1.75);

  // Specular
  vec3 reflection = reflect(-uSunDirection, normal);
  float specular = - dot(reflection, viewDirection);
  specular = max(specular, 0.0);
  specular = pow(specular, 0.5);
  specular *= 0.125;

  // Specular Color
  vec3 specularColor = mix(vec3(1.0), vec3(1.0), fresnel);
  if (!inEarthShadow) {
    color += specular * specularColor;
  }

  // Final color
  gl_FragColor = vec4(color, 1.0);

  #include <colorspace_fragment>
}