export function LogoBlockControls( theMesh, controls, clicked, delta ) {
  if( clicked && theMesh.current.name == "F1" ) {
    controls.setLookAt(
      -25, 25, 25,
      theMesh.current.position.x,
      theMesh.current.position.y,
      theMesh.current.position.z,
      true
    )

    return
  }
    
  if( clicked && theMesh.current.name == "F2" ) {
    controls.setLookAt(
      -25, 10, 25,
      theMesh.current.position.x,
      theMesh.current.position.y,
      theMesh.current.position.z,
      true
    )

    return
  }
    
  if( clicked && theMesh.current.name == "R1" ) {
    controls.setLookAt(
      25, 25, 25,
      theMesh.current.position.x,
      theMesh.current.position.y,
      theMesh.current.position.z,
      true
    )

    return
  } 

  if( clicked && theMesh.current.name == "R2" ) {
    controls.setLookAt(
      25, 10, 25,
      theMesh.current.position.x,
      theMesh.current.position.y,
      theMesh.current.position.z,
      true
    )

    return
  } 
  
  if( clicked && theMesh.current.name == "R3" ) {
    controls.setLookAt(
      0, 20, 25,
      theMesh.current.position.x,
      theMesh.current.position.y,
      theMesh.current.position.z,
      true
    )

    return
  } 
  
  if( clicked && theMesh.current.name == "U1" ) {
    controls.setLookAt(
      -25, -15, 25,
      theMesh.current.position.x,
      theMesh.current.position.y,
      theMesh.current.position.z,
      true
    )

    return
  } 
  
  if( clicked && theMesh.current.name == "U2" ) {
    controls.setLookAt(
      25, -15, 25,
      theMesh.current.position.x,
      theMesh.current.position.y,
      theMesh.current.position.z,
      true
    )

    return
  } 
  
  if( clicked && theMesh.current.name == "Y1" ) {
    controls.setLookAt(
      15, 0, 25,
      theMesh.current.position.x,
      theMesh.current.position.y,
      theMesh.current.position.z,
      true
    )

    return
  } 
  
  if( clicked && theMesh.current.name == "Y2" ) {
    controls.setLookAt(
      -15, 0, 25,
      theMesh.current.position.x,
      theMesh.current.position.y,
      theMesh.current.position.z,
      true
    )

    return
  } 
  
  if( clicked && theMesh.current.name == "Y3" ) {
    controls.setLookAt(
      0, -15, 25,
      theMesh.current.position.x,
      theMesh.current.position.y,
      theMesh.current.position.z,
      true
    )

    return
  }

  controls.update( delta )
}
