import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const StreamLinedExperience = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  })

  const textX = useTransform(scrollYProgress, [0.1, 2], ["100%", "-500%"])
  const opacitySection = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.8],
    [0, 1, 0]
  )
  const scale = useTransform(scrollYProgress, [0.1, 0.7], [1, 0.7])

  const opacityBorder = useTransform(scrollYProgress, [0, 1, 0.72], [1, 1, 0])

  return (
    <motion.section
      style={{
        opacity: opacitySection,
        "--scale": scale,
        "--opacity-border": opacityBorder,
      }}
      ref={targetRef}
      className="mt-[10vh] flex h-[100vh] items-start justify-start text-white text-4xl -mb-96"
    >
      <div>
        <motion.p aria-hidden style={{ x: textX, y: "-800%" }}>
          Streamlined Experience.
        </motion.p>
      </div>
    </motion.section>
  )
}

export default StreamLinedExperience
