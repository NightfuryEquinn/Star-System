import { useEffect } from "react";
import { Howl } from 'howler';

export default function AmbientMusic() {
  useEffect(() => {
    const sound = new Howl({
      src: [ "../audio/ambient.mp3" ],
      loop: true,
      volume: 0.8
    })

    sound.play()

    return () => {
      sound.stop()
    }
  }, [])

  return null
}