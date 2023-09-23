varying vec3 vPosition;
varying vec2 vUv;

uniform float uThickness;
uniform vec3 uColor;
uniform float uProgress;

void main() {
  gln_tFBMOpts opts = gln_tFBMOpts( 1.0, 0.5, 1.5, 2.5, 1.0, 5, false, false );

  float noise = gln_pfbm( vPosition, opts );
  noise = gln_normalize( noise );

  float progress = uProgress;

  float alpha = step( 1.0 - progress, noise );
  float border = step( ( 1.0 - progress ) - uThickness, noise ) - alpha;
  
  csm_DiffuseColor.a = alpha + border;
  csm_DiffuseColor.rgb = mix( csm_DiffuseColor.rgb, uColor, border );
}