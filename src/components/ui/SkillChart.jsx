export default function SkillChart({ thePlanetData }) {

  return (
    <>
      <div className="p-5 h-full flex flex-col gap-y-8">
        <h4 className="font-stellar-regular text-2xl italic self-center">If physics was my major... I would have </h4>

        <div className="border-corner-only h-full">
          <div className="border-corner-only-content m-2 font-stellar-light text-xl tracking-wide uppercase h-full flex flex-col content-center justify-evenly">

            <h5 className="mb-5 font-stellar-medium text-4xl self-center">Astronomy</h5>

            <div className="flex flex-col gap-y-3">
              <div className="flex flex-row gap-x-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path className="fill-darkblue" fill="currentColor" d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.388 2.25t-1.362 2.412q-.975 1.313-2.625 2.963T13.45 19.7L12 21Z"/>
                </svg>
                <p>Fond</p>
              </div>

              <div className="w-full text-white bg-black bg-opacity-50 text-center rounded-xl">
                <div className="h-3 w-[35%] bg-darkred rounded-xl"></div>
              </div>
            </div>

            <div className="flex flex-col gap-y-3">
              <div className="flex flex-row gap-x-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
                  <path className="fill-darkblue" fill="currentColor" d="M207 50.25A87.46 87.46 0 0 0 144.6 24h-.33A87.48 87.48 0 0 0 82 49.81L20.61 112a16 16 0 0 0 .06 22.56l28.66 28.66a15.92 15.92 0 0 0 11.32 4.69h.09a16 16 0 0 0 11.36-4.82l60.9-62.4a16.08 16.08 0 0 1 22.41-.21a15.6 15.6 0 0 1 4.73 11.19a16.89 16.89 0 0 1-4.85 12L93 183.88a16 16 0 0 0-.17 22.79l28.66 28.66a16.06 16.06 0 0 0 22.52.12l61.8-60.45c34.45-34.5 34.98-90.44 1.19-124.75ZM60.65 151.89L32 123.24l29.42-29.81l28.48 28.48ZM132.79 224l-28.68-28.65l30.13-29.13l28.49 28.48Z"/>
                </svg>
                <p>Attract</p>
              </div>

              <div className="w-full text-white bg-black bg-opacity-50 text-center rounded-xl">
                <div className="h-3 w-[35%] bg-darkred rounded-xl"></div>
              </div>
            </div>

            <div className="mb-5 flex flex-col gap-y-3">
              <div className="flex flex-row gap-x-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path className="fill-darkblue" fill="currentColor" d="M12 22q-.825 0-1.413-.588T10 20h4q0 .825-.588 1.413T12 22Zm-4-3v-2h8v2H8Zm.25-3q-1.725-1.025-2.738-2.75T4.5 9.5q0-3.125 2.188-5.313T12 2q3.125 0 5.313 2.188T19.5 9.5q0 2.025-1.012 3.75T15.75 16h-7.5Z"/>
                </svg>
                <p>Mastery</p>
              </div>

              <div className="w-full text-white bg-black bg-opacity-50 text-center rounded-xl">
                <div className="h-3 w-[35%] bg-darkred rounded-xl"></div>
              </div>
            </div>

          </div>
        </div>

        <div className="flex flex-row gap-x-10 items-center self-center">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
              <path className="fill-red" fill="currentColor" d="m16.9 17.3l-4.6-4.6q-.15-.15-.213-.325T12.026 12q0-.2.063-.375t.212-.325l4.6-4.6q.275-.275.688-.287t.712.287q.275.275.275.7t-.275.7L14.425 12l3.875 3.9q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275Zm-6.6 0l-4.6-4.6q-.15-.15-.213-.325T5.425 12q0-.2.063-.375T5.7 11.3l4.6-4.6q.275-.275.688-.287t.712.287q.275.275.275.7t-.275.7L7.825 12l3.875 3.9q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275Z"/>
            </svg>
          </button>

          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
              <path className="fill-blue" fill="currentColor" d="M5.7 17.3q-.275-.275-.275-.7t.275-.7L9.575 12L5.7 8.1q-.275-.275-.288-.687T5.7 6.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375q0 .2-.062.375t-.213.325l-4.6 4.6q-.275.275-.687.288T5.7 17.3Zm6.6 0q-.275-.275-.275-.7t.275-.7l3.875-3.9L12.3 8.1q-.275-.275-.288-.687T12.3 6.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.6 4.6q-.275.275-.687.288T12.3 17.3Z"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
