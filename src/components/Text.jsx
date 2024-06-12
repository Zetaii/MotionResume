import React, { useRef } from "react"
import { motion, useScroll } from "framer-motion"

const Text = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  })

  return (
    <motion.section
      className="flex text-white justify-center absolute top-5px left-[0%] w-[100%] h-[700vh]"
      ref={targetRef}
    >
      <motion.div className="bg-white w-[100%]"> Test</motion.div>
    </motion.section>
  )
}

export default Text
