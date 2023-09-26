import { Animator } from '@arwes/react-animator';
import { Animated } from '@arwes/react-animated';
import { useEffect, useState } from "react";

const Item = () => {
  return(
    <Animator>
      <Animated
        style={{
          margin: 10,
          width: 40,
          height: 20,
          backgroundColor: "#dee2e6"
        }}
        animated={{
          initialStyle: {
            x: 0,
            backgroundColor: "'#ed0101"
          },
          transitions: {
            entering: {
              x: [ 0, 100 ],
              backgroundColor: "#dee2e6"
            },
            exiting: {
              x: [ 100, 0 ],
              backgroundColor: "#0c44ac"
            }
          }
        }}
      />
    </Animator>
  )
}

export default function MainTerminal() {
  const [ active, setActive ] = useState( true )
    
  useEffect(() => {
    const tid = setInterval(() => setActive( active => !active ), 2000)

    return () => clearInterval( tid )
  }, [])
  
  return (
    <Animator active={ active } manager="stagger" combine>
      { Array( 10 ).fill( 0 ).map( ( _, i ) => <Item key={ i } /> ) }
    </Animator>
  )
}
