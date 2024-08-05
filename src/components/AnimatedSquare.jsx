import React, { useRef } from "react"
import {
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion"
import { motion } from "framer-motion"

const AnimatedSquare = () => {
  const targetRef = useRef(null)
  const textRef = useRef(null)
  const inView = useInView(targetRef)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  })

  const opacitySection = useTransform(
    scrollYProgress,
    [0, 0.7, 0.725],
    [0, 0, 1]
  )

  const opacityBorder = useTransform(
    scrollYProgress,
    [0.7, 0.86],
    ["rgba(225, 0, 0, 1)", "rgba(225, 0, 0, 0)"]
  )

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.4) {
      console.log("Split", latest)
    } else {
      console.log("Split", latest)
    }
  })

  const textOpacity = useTransform(scrollYProgress, [0.2, 0.8, 0.85], [1, 1, 0])

  const widthScale = useTransform(
    scrollYProgress,
    [0.7, 0.83, 0.9],
    ["2px", "100%", "300%"]
  )

  const marginTop = useTransform(
    scrollYProgress,
    [0.7, 0.9, 0.925],
    ["45%", "-20%", "-100%"] // Adjust to match the height growth
  )

  const heightScale = useTransform(
    scrollYProgress,
    [0.7, 0.9, 0.925],
    ["1px", "20%", "100%"]
  )
  const scale = useTransform(scrollYProgress, [0.9, 1], [1, 10])

  return (
    <motion.section
      className="flex text-white justify-center absolute -top-[55vh] left-[0%] w-[100%] h-[650vh] overflow-visible"
      ref={targetRef}
    >
      <motion.div
        className="sticky text-4xl bg-black text-white justify-center items-center flex  "
        style={{
          opacity: opacitySection,
          width: widthScale,
          height: heightScale,
          top: marginTop,
          border: "1px solid",
          borderColor: opacityBorder,
        }}
      >
        <motion.div
          style={{}}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0 }}
          viewport={0.5}
        >
          <motion.h1
            className="h-[20vh] min-w-96 text-center flex justify-center items-center"
            ref={targetRef}
            style={{}}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 1.5, delay: 1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          ></motion.h1>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default AnimatedSquare
