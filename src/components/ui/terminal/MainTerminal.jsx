import { Animator } from '@arwes/react-animator';
import { Animated } from '@arwes/react-animated';
import { useEffect, useState } from "react";
import { Dots, GridLines, MovingLines } from '@arwes/react';

const Item = () => {
  return <Animator>
    <Animated
      style={{
        margin: 10,
        width: 40,
        height: 20
      }}
      animated={{
        transitions: {
          entering: {
            x: [ 0, 100 ],
            backgroundColor: "#ed0101"
          },
          entered: {
            x: 100,
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
}

const Background = () => {
  return <Animator duration={{ interval: 10 }}>
    <div style={{
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: "#161a1d"
    }}>
      <GridLines
        lineColor='#dee2e611'
        distance={ 50 }
      />
      <Dots 
        color='#dee2e622'
        distance={ 50 }
      />
      <MovingLines 
        lineColor='#dee2e633'
        sets={ 10 }
        distance={ 50 }
      />
    </div>
  </Animator>
}

export default function MainTerminal() {
  const [ active, setActive ] = useState( true )
    
  useEffect(() => {
    const tid = setInterval(() => setActive( active => !active ), 2000)

    return () => clearInterval( tid )
  }, [])
  
  return <>
    <Background />

    <Animator active={ active } manager="stagger" combine>
      { Array( 10 ).fill( 0 ).map( ( _, i ) => <Item key={ i } /> ) }
    </Animator>

  </>
}
