uniform float uTime;
uniform sampler2D uSunTexture;
uniform vec3 uSunLightColor;
uniform vec3 uSunDarkColor;

varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vLayer0;
varying vec3 vLayer1;
varying vec3 vLayer2;

#include ../includes/4dnoise.glsl

// Fractal Brownian Motion
float fbm(vec3 layer) {
  vec4 p = vec4(layer * 2.0, uTime * 0.05);
  float sum = 0.0;
  float amp = 1.0;
  float scale = 0.75;

  sum += snoise(p * scale) * amp;
  p.w += 100.0;
  amp *= 0.75;
  scale *= 2.0;

  return sum;
}

// Sun Layers
float supersun() {
  float sum = 0.0;
  
  float noise0 = fbm(vLayer0);
  float noise1 = fbm(vLayer1);
  float noise2 = fbm(vLayer2);

  sum += texture(uSunTexture, vLayer0.yz).r * noise0;
  sum += texture(uSunTexture, vLayer1.xz).r * noise1;
  sum += texture(uSunTexture, vLayer2.xy).r * noise2;
  sum *= 0.33;

  return sum;
}

// Sun brightness
vec3 sunBrightness(float b) {
  return vec3(b, b * b, b * b * b * b / 0.25) * 0.6;
}

void main() 
{
  vec3 viewDirection = normalize(vPosition - cameraPosition);
  vec3 normal = normalize(vNormal);
  vec3 color = vec3(0.0);

  // Reduce bright areas
  float reduceSpot = dot(viewDirection, normal * 0.75);
  color += reduceSpot;

  // Bright spots
  vec4 p1 = vec4(vPosition * 0.5, uTime * 0.05);
  float spots = max(snoise(p1), 0.1);
  color *= spots;

  // Sun rotation with parallax
  float brightness = supersun();

  // Sun color
  vec3 sunColor = mix(uSunDarkColor, uSunLightColor, brightness);
  vec3 sunColorBrightness = sunBrightness(supersun() * 2.5 + 1.0);
  color += smoothstep(0.375, 0.75, sunColorBrightness);
  color += sunColor;

  gl_FragColor = vec4(color, 1.0);

  #include <colorspace_fragment>
}