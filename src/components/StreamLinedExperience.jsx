import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const StreamLinedExperience = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  })

  const textX = useTransform(scrollYProgress, [0.1, 0.7], ["100%", "-300%"])
  const opacitySection = useTransform(scrollYProgress, [0.1, 0.5], [0, 1])
  const scale = useTransform(scrollYProgress, [0.1, 0.7], [1, 0.7])

  const opacityBorder = useTransform(scrollYProgress, [0, 1, 0.72], [1, 1, 0])
  const finalTextOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.51, 0.72, 0.6, 0.5],
    [0, 0, 1, 0, 0]
  )

  const finalTextScale = useTransform(scrollYProgress, [0.8, 0.9], [1, 0.7])

  return (
    <motion.section
      style={{
        opacity: opacitySection,
        "--scale": scale,
        "--opacity-border": opacityBorder,
      }}
      ref={targetRef}
      className="mt-[20vh] flex h-[80vh] items-start justify-start text-white text-4xl"
    >
      <div>
        <motion.p aria-hidden style={{ x: textX, y: "-50%" }}>
          Streamlined Experience.
        </motion.p>
        {/* <motion.p aria-hidden style={{ x: textX, y: "-50%" }}>
          Streamlined Experience.
        </motion.p> */}

        {/* <motion.p
          style={{
            opacity: finalTextOpacity,
            scale: finalTextScale,
            y: "-50%",
            x: "-500%",
          }}
          className="absolute left-1/2 top-1/2 text-[8.8rem] leading-tight text-white"
        >
          Streamlined
          <br />
          Experience.
        </motion.p> */}
      </div>
    </motion.section>
  )
}

export default StreamLinedExperience
