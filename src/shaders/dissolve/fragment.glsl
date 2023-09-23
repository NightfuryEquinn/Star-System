varying vec3 vPosition;
varying vec2 vUv;

uniform float uThickness;
uniform vec3 uColor;
uniform float uProgress;

void main() {
  gln_tWorleyOpts voronoiOpts = gln_tWorleyOpts( 1.0, 1.0, 3.0, false );
  
  float noise = gln_worley( vec2( vPosition.y, vPosition.z ), voronoiOpts );
  noise = gln_normalize( noise );

  float progress = uProgress;

  float alpha = step( 1.0 - progress, noise );
  float border = step( ( 1.0 - progress ) - uThickness, noise ) - alpha;
  
  csm_DiffuseColor.a = alpha + border;
  csm_DiffuseColor.rgb = mix( csm_DiffuseColor.rgb, uColor, border );
}