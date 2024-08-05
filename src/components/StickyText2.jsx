import React from "react"
import StickyTextContent2 from "./StickyText2Content"

export default function StickyText2() {
  return (
    <div
      className="relative h-[200vh] mt-[30vh] bg-blue w-full overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[800px] w-full">
        <StickyTextContent2 />
      </div>
    </div>
  )
}
