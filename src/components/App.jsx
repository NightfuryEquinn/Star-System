import GlitchedWriter from "glitched-writer"
import { wait } from "glitched-writer"
import { useEffect } from "react"

export default function App() {
  useEffect(() => {
    const target = document.getElementById('target')

    const writer = new GlitchedWriter(
      target,
      "neo",
      () => {
        console.log('Done')
      }
    )

    const startWriter = async () => {
      await writer.write('Hello')

      await wait(1200)

      await writer.write("Dune! ...")
    }
    
    startWriter()
  }, [])

  return (
    <div>
      <h1 id="target" className="text-4xl font-bold text-blue font-stellar-light"></h1>
    </div>
  )
}


