import GlitchedWriter from "glitched-writer"
import { useEffect } from "react"

import planetsData from '../data/Data.js'
import SkillChart from "./SkillChart.jsx"

export default function Content({ planet, view, onSetView }) {

  const thePlanetData = planetsData.find((planetName) => planetName.planet === planet);
  const content = thePlanetData?.content || []

  console.log(content)

  useEffect(() => {
    /**
     * Glitched Writer
     */
    const writer1 = new GlitchedWriter(
      document.getElementById("glitched-title-1"),
      'nier'
    )

    writer1.write(planet)
  })

  return (
    <>
      <div className={`${ view ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none" } absolute top-0 right-0 bottom-0 left-0 bg-black w-full max-w-full h-full max-h-screen duration-500 origin-center`}>
        <div className="m-10 md:m-20 h-full max-h-screen flex flex-col gap-y-10">
          <h2 id="glitched-title-1" className="glitched-title font-dune text-white text-4xl md:text-6xl self-center"></h2>

          <div className="p-2 bg-white">
            <SkillChart />
          </div>

          <button onClick={ onSetView } className="self-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
              <path className="fill-white" fill="currentColor" d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10v9Zm0 2q-.825 0-1.413-.588T4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.275-.2.575-.3T12 3.5q.325 0 .625.1t.575.3l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-5v-6h-2v6H6Zm6-8.75Z"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
