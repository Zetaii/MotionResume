import React, { useRef } from "react"
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion"
import { motion } from "framer-motion"

const AnimatedSquare = () => {
  const targetRef = useRef(null)
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
      className="flex text-white justify-center absolute -top-[55vh] left-[0%] w-[100%] h-[700vh]"
      ref={targetRef}
    >
      <motion.div
        className="sticky text-4xl bg-black text-white"
        style={{
          opacity: opacitySection,
          width: widthScale,
          height: heightScale,
          top: marginTop,
          border: "1px solid",
          borderColor: opacityBorder,
        }}
      >
        {/* <h1 className=""> I'm a Frontend Developer</h1> */}
      </motion.div>
      {/* <motion.div
        className="bg-black text-white w-[50%] h-[100%]"
        style={{
          opacity: opacitySection,
        }}
      >
        Test
      </motion.div> */}
    </motion.section>
  )
}

export default AnimatedSquare
