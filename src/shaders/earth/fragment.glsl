uniform float uTime;
uniform sampler2D uDayTexture;
uniform sampler2D uNightTexture;
uniform sampler2D uSpecularTexture;
uniform vec3 uSunDirection;
uniform vec3 uAtmosphereDayColor;
uniform vec3 uAtmosphereNightColor;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

#include ../includes/noise.glsl

void main() {
  vec3 viewDirection = normalize(vPosition - cameraPosition);
  vec3 normal = normalize(vNormal);
  vec3 color = vec3(0.0);

  // Sun orientation
  float sunOrientation = dot(uSunDirection, normal);

  // Day and Night color
  float dayMix = smoothstep(-0.25, 0.75, sunOrientation);
  vec3 dayColor = texture(uDayTexture, vUv).rgb;
  vec3 nightColor = texture(uNightTexture, vUv).rgb;
  color = mix(nightColor, dayColor, dayMix);

  // Specular clouds
  vec2 specularCloudsColor = texture(uSpecularTexture, vUv).rg;

  // Moving noise to animate clouds
  vec2 noiseOffset = vec2(uTime * 0.05, uTime * 0.025);
  float noise = cnoise(vec3(vUv * 5.0 + noiseOffset, uTime * 0.06));
  float edgeMask = smoothstep(0.0, 0.1, vUv.x) * smoothstep(1.0, 0.9, vUv.x) * smoothstep(0.0, 0.1, vUv.y) * smoothstep(1.0, 0.9, vUv.y);
  noise *= edgeMask;

  // Clouds
  float cloudMix = smoothstep(0.2, 1.0, specularCloudsColor.g + noise);
  cloudMix *= dayMix;
  color = mix(color, vec3(1.0), cloudMix);

  // Fresnel
  float fresnel = dot(viewDirection, normal) + 1.0;
  fresnel = pow(fresnel, 1.75);

  // Atmosphere
  float atmosphereDayMix = smoothstep(-0.25, 0.75, sunOrientation);
  vec3 atmosphereColor = mix(uAtmosphereNightColor, uAtmosphereDayColor, atmosphereDayMix);
  color = mix(color, atmosphereColor, fresnel * atmosphereDayMix);

  // Specular
  vec3 reflection = reflect(-uSunDirection, normal);
  float specular = - dot(reflection, viewDirection);
  specular = max(specular, 0.0);
  specular = pow(specular, 32.0);
  specular *= specularCloudsColor.r;

  // Specular Color
  vec3 specularColor = mix(vec3(1.0), atmosphereColor, fresnel);
  color += specular * specularColor;

  // Final color
  gl_FragColor = vec4(color, 1.0);

  #include <colorspace_fragment>
}