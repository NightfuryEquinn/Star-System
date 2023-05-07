import GlitchedWriter from "glitched-writer"
import { useEffect, useState } from "react"

import planetsData from '../data/Data.js'

export default function Content({ planet, view, onSetView }) {

  const thePlanetData = planetsData.filter((theData) => theData.planet === planet)[0]
  const content = thePlanetData?.content || []


  useEffect(() => {
    /**
     * Glitched Writer
     */
    const writer1 = new GlitchedWriter(
      document.getElementById("glitched-title-1"),
      'nier'
    )

    writer1.write(planet)
  }, [])

  return (
    <>
      <div className={`${ view ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none" } absolute top-0 right-0 bottom-0 left-0 bg-black w-full max-w-full h-full max-h-screen duration-500 origin-center`}>
        
        <h2 id="glitched-title-1" className="glitched-title font-dune text-white text-4xl md:text-6xl self-center"></h2>

        <button onClick={ onSetView }>Back</button>

      </div>
    </>
  )
}
