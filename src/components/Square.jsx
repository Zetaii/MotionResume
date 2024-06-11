import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const SquareScroll = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  })

  const scale = useTransform(
    scrollYProgress,
    [0, 1], // Scroll position range
    [1, 10] // Scale range
  )

  // const shift = useTransform(
  //   scrollYProgress,
  //   [0, 1, 1], // Scroll position range
  //   [0, 500, 200] // Shift range (adjust as needed)
  // )

  return (
    <motion.section ref={targetRef}>
      <div style={{ height: "120vh" }}>
        {" "}
        {/* Adding height to enable scrolling */}
        <motion.div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "transparent",
            border: "2px solid rgba(0, 255, 128, 0.5)",
            scale: scale,
            x: "500px",
            // x: shift,
          }}
        />
      </div>
    </motion.section>
  )
}

export default SquareScroll
