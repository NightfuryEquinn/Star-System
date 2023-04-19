import GlitchedWriter from "glitched-writer"
import { useEffect, useState } from "react"

export default function LoadingScreen({ skipped, onSkipped }) {

  const [ inProgress, setInProgress ] = useState(false)

  useEffect(() => {
    /**
     * Glitched Writer
     **/
    const writer = new GlitchedWriter(
      document.getElementById("glitched-loading"),
      'nier'
    )

    const phrases = [
      "Unknown User Detected",
      "Initializing Interface",
      "Executing",
      "Generating New Profile",
      "Interface Online",
      "Receiving Signal",
      "3",
      "2",
      ":D",
      "Welcome"
    ]
  
    const loadWriter = () => {
      writer.queueWrite(phrases, 1000, () => {
        document.getElementById("glitched-logo").classList.remove("opacity-25")
        document.getElementById("glitched-logo").classList.add("opacity-100")
      })
    }

    loadWriter()

    /**
     * Progress Loading Screen
     */
    window.addEventListener('load', () => {
      setInProgress(true)
    })
  }, [])

  return (
    <>
      <div 
        id="glitched-screen" 
        className={`${ skipped && "opacity-0 pointer-events-none" } absolute top-0 left-0 bg-black w-full max-w-full h-full max-h-full flex flex-col lg:flex-row-reverse gap-24 lg:gap-0 lg:justify-between items-center duration-500`}
      >
        <img 
          src="/logo/Self Design Logo - Dark.png"
          id="glitched-logo"
          className="duration-700 opacity-25 w-full max-w-2xl lg:max-w-xl 2xl:max-w-2xl 3xl:max-w-3xl"
        />
        <div id="glitched-loading" className="relative mx-10 lg:mx-0 lg:ml-20 xl:ml-28 3xl:ml-36 font-dune text-4xl xl:text-5xl text-white text-center lg:text-left"></div>
      </div>

      <div className={`${ skipped && "opacity-0 pointer-events-none" } relative mx-20 lg:mx-40`}>
        <button 
            className={`absolute bottom-20 w-full font-stellar-medium text-xl lg:text-3xl text-white duration-500 ${ inProgress ? "opacity-100" : "opacity-25" } `}
            onClick={ onSkipped }
            disabled={ !inProgress }
          >
            <p className="pb-1 border-b-white border-b-2">Skip</p>
        </button>
      </div>
    </>
  )
}
