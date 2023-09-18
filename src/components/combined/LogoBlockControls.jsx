export function LogoBlockControls( controls, clicked, delta ) {
  if( clicked ) {
    controls.setPosition( 0, 0, -12.5, true )
  } else {
    controls.setPosition( 0, 0, 75, true )
  }

  controls.update( delta )
}
