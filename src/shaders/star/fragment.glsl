uniform float uTime;

varying vec2 vUv;
varying vec3 vPosition;

varying vec3 vLayer0;
varying vec3 vLayer1;
varying vec3 vLayer2;

// Perlin Noise 4D from Yuri Artyukh
vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

float mod289(float x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float permute(float x) {
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float taylorInvSqrt(float r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec4 grad4(float j, vec4 ip) {
  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
  vec4 p,s;

  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
  s = vec4(lessThan(p, vec4(0.0)));
  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;

  return p;
}

#define F4 0.309016994374947451

float snoise(vec4 v) {
  const vec4  C = vec4( 0.138196601125011,
  0.276393202250021,
  0.414589803375032,
  -0.447213595499958);

  vec4 i  = floor(v + dot(v, vec4(F4)) );
  vec4 x0 = v -   i + dot(i, C.xxxx);

  vec4 i0;
  vec3 isX = step( x0.yzw, x0.xxx );
  vec3 isYZ = step( x0.zww, x0.yyz );
  i0.x = isX.x + isX.y + isX.z;
  i0.yzw = 1.0 - isX;
  i0.y += isYZ.x + isYZ.y;
  i0.zw += 1.0 - isYZ.xy;
  i0.z += isYZ.z;
  i0.w += 1.0 - isYZ.z;

  vec4 i3 = clamp( i0, 0.0, 1.0 );
  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

  vec4 x1 = x0 - i1 + C.xxxx;
  vec4 x2 = x0 - i2 + C.yyyy;
  vec4 x3 = x0 - i3 + C.zzzz;
  vec4 x4 = x0 + C.wwww;

  i = mod289(i);
  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
  vec4 j1 = permute( permute( permute( permute (
  i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
  + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
  + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
  + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));

  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

  vec4 p0 = grad4(j0,   ip);
  vec4 p1 = grad4(j1.x, ip);
  vec4 p2 = grad4(j1.y, ip);
  vec4 p3 = grad4(j1.z, ip);
  vec4 p4 = grad4(j1.w, ip);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  p4 *= taylorInvSqrt(dot(p4,p4));

  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);
  m0 = m0 * m0;
  m1 = m1 * m1;

  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))
  + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;
}

float sunLayer() {
  float sum = 0.0;

  sum += dot(vLayer0, vLayer1);
  sum += dot(vLayer1, vLayer2);
  sum += dot(vLayer2, vLayer0);
  sum *= 0.33;

  return sum;
}

vec3 sunBright(float b) {
  b *= 0.25;
  
  return vec3(b, b*b, b*b*b*b / 0.25) * 0.6;
}

float fbm(vec4 p) {
  float sum = 0.0;
  float amp = 1.0;
  float scale = 1.0;

  for(int i = 0; i < 6; i++) {
    sum += snoise(p * scale) * amp;
    p.w += 100.0;
    amp *= 0.7;
    scale *= 2.25;
  }

  return sum;
}

void main() {
  vec4 p = vec4(vPosition * 5.0, uTime * 0.05);
  float surface = fbm(p) * 1.5;

  vec4 p1 = vec4(vPosition * 1.5, uTime * 0.025);
  float sunspots = max(snoise(p1), 0.25);

  vec3 col = sunBright(sunLayer() * 3.75 + 1.75);
  vec3 col1 = vec3(1.3, 1.1, 2.7);

  vec3 mixCol = mix(col, col1, 0.75);
  
  gl_FragColor = vec4(vec3(surface), 0.25);
  gl_FragColor *= mix(1.0, sunspots, 0.75);

  gl_FragColor += mix(gl_FragColor, vec4(mixCol, 0.75), 0.85);
}