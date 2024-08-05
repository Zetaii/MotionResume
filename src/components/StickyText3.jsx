"use client"

import Card from "../components/Card"
import { useScroll } from "framer-motion"
import { useRef } from "react"
import { projects } from "../app/data"

export default function StickText3() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  return (
    <main ref={container} className="relative mt-[50vh]">
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        )
      })}
    </main>
  )
}
