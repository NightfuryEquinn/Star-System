import GlitchedWriter from "glitched-writer"
import { useEffect } from "react"

export default function LoadingScreen() {

  useEffect(() => {
    const writer = new GlitchedWriter(
      document.getElementById("glitched-loading"),
      {
        letterize: true,
        maxGhosts: 0,
        ghostChance: 0,
        changeChance: 0.8,
        steps: 3,
        interval: 10,
        delay: 0,
        oneAtATime: 1,
        glyphs: "一二三四五六七八九十百千上下左右中大小月日年早木林山川土空田天生花草虫犬人名女男子目耳口手足見音力気円入出立休先夕本文字学校村町森正水火玉王石竹糸貝車金雨赤青白数多少万半形太細広長点丸交光角計直線矢弱強高同親母父姉兄弟妹自友体毛頭顔首心時曜朝昼夜分週春夏秋冬今新古間方北南東西遠近前後内外場地国園谷野原里市京風雪雲池海岩星室戸家寺通門道話言答声聞語読書記紙画絵図工教晴思考知才理算作元食肉馬牛魚鳥羽鳴麦米茶色黄黒来行帰歩走止活店買売午汽弓回会組船明社切電毎合当台楽公引科歌刀番用何",
        fillSpace: false,
        glyphsFromText: true,
        mode: "clear"
      }
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
        document.getElementById("glitched-logo").style.opacity = 1
      })
    }

    loadWriter()
  }, [])

  return (
    <>
      <div id="glitched-screen" className="relative bg-black w-full max-w-full h-full max-h-full flex flex-col gap-y-24 items-center">
        <img 
          src="/logo/Self Design Logo - Dark.png"
          id="glitched-logo"
          className="duration-700 opacity-25"
        />
        <div id="glitched-loading" className="mx-10 relative font-dune text-4xl text-white text-center"></div>
        <button className="bottom-20 absolute pt-2 pr-4 pb-[10px] pl-[18px] font-stellar-regular text-xl bg-white rounded-md duration-500 opacity-100">
          <p>Skip</p>
        </button>
      </div>
    </>
  )
}
