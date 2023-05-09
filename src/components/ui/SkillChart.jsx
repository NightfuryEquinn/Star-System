export default function SkillChart({ thePlanetData }) {

  return (
    <>
      <div className="p-5 flex flex-col gap-y-8">
        <h4 className="font-stellar-regular text-2xl italic self-center">If physics was my major... I would have </h4>

        <div className="border-corner-only">
          <div className="m-2 border-corner-only-content flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-3">
              <div className="flex flex-row gap-x-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path className="fill-red" fill="currentColor" d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.388 2.25t-1.362 2.412q-.975 1.313-2.625 2.963T13.45 19.7L12 21Z"/>
                </svg>
                <p className="font-dune text-xl">Fond</p>
              </div>

              <div className="w-full text-white bg-black bg-opacity-50 text-center rounded-xl">
                <div className="h-3 w-[35%] bg-black rounded-xl"></div>
              </div>
            </div>

            <div className="flex flex-col gap-y-3">
              <div className="flex flex-row gap-x-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
                  <path className="fill-red" fill="currentColor" d="M207 50.25A87.46 87.46 0 0 0 144.6 24h-.33A87.48 87.48 0 0 0 82 49.81L20.61 112a16 16 0 0 0 .06 22.56l28.66 28.66a15.92 15.92 0 0 0 11.32 4.69h.09a16 16 0 0 0 11.36-4.82l60.9-62.4a16.08 16.08 0 0 1 22.41-.21a15.6 15.6 0 0 1 4.73 11.19a16.89 16.89 0 0 1-4.85 12L93 183.88a16 16 0 0 0-.17 22.79l28.66 28.66a16.06 16.06 0 0 0 22.52.12l61.8-60.45c34.45-34.5 34.98-90.44 1.19-124.75ZM60.65 151.89L32 123.24l29.42-29.81l28.48 28.48ZM132.79 224l-28.68-28.65l30.13-29.13l28.49 28.48Z"/>
                </svg>
                <p className="font-dune text-xl">Attract</p>
              </div>

              <div className="w-full text-white bg-black bg-opacity-50 text-center rounded-xl">
                <div className="h-3 w-[35%] bg-black rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
