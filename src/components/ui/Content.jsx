import GlitchedWriter from "glitched-writer"
import { useEffect } from "react"

export default function Content() {

  useEffect(() => {
    /**
     * Glitched Writer
     */
    const writer = new GlitchedWriter(
      document.getElementById("glitched-title"),
      'typewriter'
    )

    writer.options.set({
      letterize: true
    })

    writer.write("Dummy")
  })

  return (
    <>
      <div className={`${ view ? "opacity-100" : "opacity-0 pointer-events-none" } absolute top-0 left-0 bg-black bg-opacity-90 w-full max-w-full h-full max-h-full duration-500`}>
        <div className="h-full max-h-screen overflow-hidden m-10 relative flex flex-col gap-y-10">
          <h2 id="glitched-title" className="font-dune text-white text-4xl self-center"></h2>

          <div className="bg-white bg-opacity-50 text-white rounded-tr-xl rounded-bl-xl flex flex-col">
            <h4 className="w-full max-w-[250px] mt-5 pb-4 pl-5 font-dune font-bold text-2xl border-b-8 border-b-black border-opacity-90">Title</h4>
          
            <div className="h-full max-h-80 m-5 font-stellar-regular text-justify flex flex-col gap-y-5 overflow-scroll scroll-smooth">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className="w-full max-w-[250px] mb-5 pt-5 pr-5 self-end flex flex-row gap-x-5 justify-end border-t-8 border-t-black border-opacity-90">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path className="fill-red" fill="currentColor" d="m16.9 17.3l-4.6-4.6q-.15-.15-.213-.325T12.026 12q0-.2.063-.375t.212-.325l4.6-4.6q.275-.275.688-.287t.712.287q.275.275.275.7t-.275.7L14.425 12l3.875 3.9q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275Zm-6.6 0l-4.6-4.6q-.15-.15-.213-.325T5.425 12q0-.2.063-.375T5.7 11.3l4.6-4.6q.275-.275.688-.287t.712.287q.275.275.275.7t-.275.7L7.825 12l3.875 3.9q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275Z"/>
              </svg>
              
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path className="fill-blue" fill="currentColor" d="M5.7 17.3q-.275-.275-.275-.7t.275-.7L9.575 12L5.7 8.1q-.275-.275-.288-.687T5.7 6.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375q0 .2-.062.375t-.213.325l-4.6 4.6q-.275.275-.687.288T5.7 17.3Zm6.6 0q-.275-.275-.275-.7t.275-.7l3.875-3.9L12.3 8.1q-.275-.275-.288-.687T12.3 6.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.6 4.6q-.275.275-.687.288T12.3 17.3Z"/>
              </svg>
            </div>
          </div>

          <div className="flex flex-row font-dune items-end justify-between text-white">
            <button className="mb-5 flex flex-col gap-y-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path className="fill-white" fill="currentColor" d="m12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2H7.825l5.6 5.6L12 20Z"/>
              </svg>
              <p>Back</p>
            </button>

            <img 
              src="/logo/Self Design Logo - Dark.png"
              className="w-full max-w-[150px] self-center"
            />

            <button className="mb-5 flex flex-col gap-y-2 items-end">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path className="fill-white" fill="currentColor" d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z"/>
              </svg>
              <p>Menu</p>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
