import React, { useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const AnimatedSquare = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  })

  // Opacity transformation based on scroll position
  const opacitySection = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.9, 1], // Scroll position range
    [0, 1, 1, 0] // Opacity range for fade in and fade out
  )

  // Scale animation based on scroll position
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.9, 1], // Scroll position range for scaling animation
    [1, 2, 2, 0] // Scale range
  )

  // Move animation based on scroll position
  const xPosition = useTransform(
    scrollYProgress,
    [0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1], // Start moving after scaling is complete
    ["0%", "250%", "250%", "250%", "250%", "-400%", "-400%"] // Move to the right
  )
  const yPosition = useTransform(
    scrollYProgress,
    [0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1], // Start moving after scaling is complete
    ["0%", "-300%", "-300%", "325%", "325%", "0%", "0%"] // Move up
  )

  const borderPosition = useTransform(
    scrollYProgress,
    [0.25, 0.5, 0.95, 1], // Start moving after scaling is complete
    [
      "0.2rem solid rgba(0, 255, 128, 0.5)",
      "0.2rem solid rgba(0, 255, 128, 0.5)",
      "0.2rem solid rgba(0, 0, 225, 0.5)",
      "0.2rem solid rgba(0, 0, 225, 0.5)",
    ] // Move up
  )

  return (
    <motion.section
      style={{
        opacity: opacitySection,
      }}
      ref={targetRef}
      className="mt-[1vh] flex h-[300vh] items-start justify-start"
    >
      <motion.div className="sticky top-[38%] left-[40%] text-4xl" style={{}}>
        I'm a Frontend Developer
      </motion.div>

      <motion.div
        className="sticky top-[38%] left-[45%] min-h-[12rem] min-w-[12rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          scale: scale,
          x: xPosition,
          y: yPosition,
          border: borderPosition,
        }}
      />
    </motion.section>
  )
}

export default AnimatedSquare
