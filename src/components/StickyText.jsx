import React from "react"
import StickyTextContent from "./StickyTextContent"

export default function StickyText() {
  return (
    <div
      className="relative h-[200vh] mt-[0vh] w-full overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="absolute inset-0 flex">
        <div className="w-[56.1vw] h-full bg-white"></div>
        <div className="w-[45vw] h-full bg-black"></div>
      </div>
      <div className="fixed bottom-0 h-[800px] w-full">
        <StickyTextContent />
      </div>
    </div>
  )
}
