import React, { useRef } from "react"
import { useScroll, useTransform } from "framer-motion"
import { motion } from "framer-motion"
import AnimatedText from "./AnimatedText"

const AnimatedTextBox = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <motion.section
      ref={targetRef}
      className="relative min-h-screen h-[130vh] flex -translate-y-[100vh] items-center justify-center  "
    >
      <motion.div
        className="sticky inset-0 flex  justify-center"
        style={{ y: y }}
      >
        <AnimatedText el="h2" className="text-4xl" repeatDelay={10000} />
      </motion.div>
    </motion.section>
  )
}

export default AnimatedTextBox
