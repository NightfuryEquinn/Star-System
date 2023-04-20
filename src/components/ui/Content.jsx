import GlitchedWriter from "glitched-writer"
import { useEffect, useState } from "react"

import planetsData from '../data/Data.js'

export default function Content({ planet, view, onSetView }) {

  const [ currentIndex, setCurrentIndex ] = useState(0)

  const thePlanetData = planetsData.filter((theData) => theData.planet === planet)[0]
  const content = thePlanetData?.content || []

  const onPrevClick = () => {
    if(currentIndex === 0) {
      setCurrentIndex(content.length - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const onNextClick = () => {
    if(currentIndex === content.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  useEffect(() => {
    /**
     * Glitched Writer
     */
    const writer1 = new GlitchedWriter(
      document.getElementById("glitched-title-1"),
      'nier'
    )

    const writer2 = new GlitchedWriter(
      document.getElementById("glitched-title-2"),
      'nier'
    )

    writer1.write(planet)
    writer2.write(planet)
  })

  return (
    <>
      <div className={`${ view ? "opacity-100" : "opacity-0 pointer-events-none" } absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-90 w-full max-w-full h-full max-h-screen duration-500`}>
        <div className="m-10 md:m-20 h-full max-h-screen flex lg:hidden flex-col gap-y-10">
          <h2 id="glitched-title-1" className="glitched-title font-dune text-white text-4xl md:text-6xl self-center"></h2>

          <div className="bg-white bg-opacity-50 text-white rounded-tr-xl rounded-bl-xl flex flex-col">
            <h4 className="w-full max-w-[250px] md:max-w-[450px] mt-5 pb-4 pl-5 md:mt-8 md:pb-7 md:pl-7 font-dune font-bold text-2xl md:text-4xl border-b-8 border-b-black border-opacity-90">
              { content[currentIndex] && content[currentIndex].title }
            </h4>
      
            <div className="h-full max-h-80 md:max-h-[470px] m-5 md:m-8 font-stellar-regular md:text-xl text-justify flex flex-col gap-y-5 overflow-scroll scroll-smooth">
              { content[currentIndex] && content[currentIndex].body }
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className="w-full max-w-[250px] md:max-w-[450px] mb-5 pt-5 pr-5 md:mb-8 md:pt-8 md:pr-8 self-end flex flex-row gap-x-5 md:gap-x-8 justify-end border-t-8 border-t-black border-opacity-90">
              <button onClick={ onPrevClick } >
                <svg xmlns="http://www.w3.org/2000/svg" className="md:scale-150" width="32" height="32" viewBox="0 0 24 24">
                  <path className="fill-red" fill="currentColor" d="m16.9 17.3l-4.6-4.6q-.15-.15-.213-.325T12.026 12q0-.2.063-.375t.212-.325l4.6-4.6q.275-.275.688-.287t.712.287q.275.275.275.7t-.275.7L14.425 12l3.875 3.9q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275Zm-6.6 0l-4.6-4.6q-.15-.15-.213-.325T5.425 12q0-.2.063-.375T5.7 11.3l4.6-4.6q.275-.275.688-.287t.712.287q.275.275.275.7t-.275.7L7.825 12l3.875 3.9q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275Z"/>
                </svg>
              </button>
              
              <button onClick={ onNextClick }>
                <svg xmlns="http://www.w3.org/2000/svg" className="md:scale-150" width="32" height="32" viewBox="0 0 24 24">
                  <path className="fill-blue" fill="currentColor" d="M5.7 17.3q-.275-.275-.275-.7t.275-.7L9.575 12L5.7 8.1q-.275-.275-.288-.687T5.7 6.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375q0 .2-.062.375t-.213.325l-4.6 4.6q-.275.275-.687.288T5.7 17.3Zm6.6 0q-.275-.275-.275-.7t.275-.7l3.875-3.9L12.3 8.1q-.275-.275-.288-.687T12.3 6.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.6 4.6q-.275.275-.687.288T12.3 17.3Z"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="flex flex-row font-dune items-end justify-evenly md:justify-between text-white md:text-xl">
            <button className="w-full max-w-[65px] mb-5 md:mb-8 flex flex-col gap-y-2 md:gap-y-5" onClick={ () => { onSetView(); setTimeout(() => setCurrentIndex(0), 1000) } }>
              <svg xmlns="http://www.w3.org/2000/svg" className="md:scale-150" width="32" height="32" viewBox="0 0 24 24">
                <path className="fill-white" fill="currentColor" d="m12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2H7.825l5.6 5.6L12 20Z"/>
              </svg>
              <p>Back</p>
            </button>

            <img 
              src="/logo/Self Design Logo - Dark.png"
              className="w-full max-w-[150px] md:max-w-[200px] self-center"
            />

            <button className="w-full max-w-[65px] mb-5 md:mb-8 flex flex-col gap-y-2 md:gap-y-5 items-end">
              <svg xmlns="http://www.w3.org/2000/svg" className="md:scale-150" width="32" height="32" viewBox="0 0 24 24">
                <path className="fill-white" fill="currentColor" d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z"/>
              </svg>
              <p>List</p>
            </button>
          </div>
        </div>

        <div className="m-10 h-full max-h-screen hidden lg:flex gap-10">
          <div className="mb-20 p-10 max-w-3xl bg-white grow">
            <div className="h-full max-h-full border-corner-only">
              <div className="h-full max-h-full border-corner-only-content">
                <div className="h-full max-h-full p-2 flex flex-row gap-x-20">
                  <div className="flex flex-col justify-between">
                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24">
                      <path className="fill-blue" fill="currentColor" d="M3.725 11q-.575 0-.863-.488t-.012-.987l3.3-5.95q.15-.275.375-.4t.5-.125q.275 0 .5.125t.375.4l3.3 5.95q.275.5-.012.988t-.863.487h-6.6Zm3.3 10q-1.65 0-2.825-1.175T3.025 17q0-1.675 1.175-2.838T7.025 13q1.65 0 2.825 1.175T11.025 17q0 1.65-1.175 2.825T7.025 21Zm7 0q-.425 0-.713-.288T13.025 20v-6q0-.425.288-.713t.712-.287h6q.425 0 .713.288t.287.712v6q0 .425-.287.713t-.713.287h-6Zm3-10.375q-.2 0-.4-.063t-.35-.187q-1.375-1.15-2.212-1.9t-1.288-1.3q-.45-.55-.6-1t-.15-1q0-1.125.788-1.9t1.962-.775q.675 0 1.263.313t.987.862q.4-.55.988-.862t1.262-.313q1.175 0 1.963.775t.787 1.9q0 .525-.137.975t-.588 1q-.45.55-1.288 1.313T17.8 10.375q-.15.125-.363.188t-.412.062Z"/>
                    </svg>

                    <h4 className="grow mt-5 font-dune font-bold text-2xl">
                      { content[currentIndex] && content[currentIndex].title }
                    </h4>

                    <button className="flex flex-col gap-y-2 font-dune font-bold" onClick={ () => { onSetView(); setTimeout(() => setCurrentIndex(0), 1000) } }>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path className="fill-black" fill="currentColor" d="m12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2H7.825l5.6 5.6L12 20Z"/>
                      </svg>
                      <p>Back</p>
                    </button>
                  </div>

                  <div className="flex flex-col justify-evenly">
                    <h2 id="glitched-title-2" className="glitched-title font-dune text-black text-5xl self-center"></h2>

                    <div className="h-full max-h-[280px] font-stellar-regular text-justify flex flex-col gap-y-5 overflow-scroll scroll-smooth">
                      { content[currentIndex] && content[currentIndex].body }
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-10">
            <img 
              src="/logo/Self Design Logo - Dark.png"
              className="w-full max-w-[200px] self-center"
            />
          </div>
        </div>
      </div>
    </>
  )
}
