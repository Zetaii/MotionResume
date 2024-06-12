import React, { useEffect, useState } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion"
import { useRef } from "react"
import AnimatedSquare from "./AnimatedSquare"

const AnimatedCircle = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  })

  const [isSplit, setIsSplit] = useState(false)

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.4) {
      console.log("Split", latest)
      setIsSplit(true)
    } else {
      console.log("Split", latest)
      setIsSplit(false)
    }
  })

  // Opacity transformation based on scroll position
  const opacitySection = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.9, 1.1], // Scroll position range
    [0, 1, 1, 0] // Opacity range for fade in and fade out
  )

  // Scale animation based on scroll position
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.9, 1], // Scroll position range for scaling animation
    [1, 2, 2, 2] // Scale range
  )

  // Move animation based on scroll position
  const xPosition = useTransform(
    scrollYProgress,
    [0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.5], // Start moving after scaling is complete
    ["0%", "250%", "250%", "250%", "250%", "-350%", "-350%"] // Move to the right
  )
  const yPosition = useTransform(
    scrollYProgress,
    [0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.5], // Start moving after scaling is complete
    ["0%", "-250%", "-250%", "250%", "250%", "0%", "0%"] // Move up
  )

  const circleOneXPosition = useTransform(
    scrollYProgress,
    [0.4, 0.45, 0.5, 0.55], // Start moving after scaling is complete
    ["-350%", "-350%", "250%", "350%"] // Move to the right
  )

  const borderPosition = useTransform(
    scrollYProgress,
    [0.25, 0.5, 0.55, 0.6, 0.65, 0.7], // Start moving after scaling is complete
    [
      "0.2rem solid rgba(0, 255, 128, 0.5)",
      "0.2rem solid rgba(0, 255, 128, 0.5)",
      "0.2rem solid rgba(0, 255, 128, 0.5)",
      "0.2rem solid rgba(0, 255, 128, 0.5)",
      "0.2rem solid rgba(0, 0, 225, 0.5)",
      "0.2rem solid rgba(0, 0, 225, 0.5)",
    ] // Move up
  )

  const bgCircle = useTransform(
    scrollYProgress,
    [0.25, 0.5, 0.9, 0.95, 1], // Start moving after scaling is complete
    [
      "rgba(0, 255, 128, 0)",
      "rgba(0, 255, 128, 0)",
      "rgba(0, 0, 225, 0)",
      "rgba(0, 0, 225, 0.5)",
      "rgba(0, 0, 225, 1)",
    ] // Move up
  )

  const bgCircleOne = useTransform(
    scrollYProgress,
    [0.4, 0.425, 0.45, 0.475, 0.5], // Start moving after scaling is complete
    [
      "rgba(0, 0, 225, 0.1)",
      "rgba(0, 0, 225, 0.2)",
      "rgba(0, 0, 225, 0.3)",
      "rgba(0, 0, 225, 0.4)",
      "rgba(0, 0, 225, 0.5)",
    ] // Move up
  )

  const circleSize = "12rem" // Common size for both initial and split circles

  // Define opacity for split circles
  const splitCircle1Opacity = useTransform(
    scrollYProgress,
    [0, 0.9, 1], // Scroll position range for the first split circle
    [0, 1, 1] // Opacity range
  )

  const splitCircle2Opacity = useTransform(
    scrollYProgress,
    [0.45, 0.46], // Scroll position range for the second split circle
    [0, 1] // Opacity range
  )

  const splitCircle3Opacity = useTransform(
    scrollYProgress,
    [0.46, 0.465], // Scroll position range for the third split circle
    [0, 1] // Opacity range
  )

  const splitCircle4Opacity = useTransform(
    scrollYProgress,
    [0.468, 0.475], // Scroll position range for the third split circle
    [0, 1] // Opacity range
  )

  const splitCircle5Opacity = useTransform(
    scrollYProgress,
    [0.48, 0.485], // Scroll position range for the third split circle
    [0, 1] // Opacity range
  )

  const splitCircle6Opacity = useTransform(
    scrollYProgress,
    [0.485, 0.49], // Scroll position range for the third split circle
    [0, 1] // Opacity range
  )
  const splitCircle7Opacity = useTransform(
    scrollYProgress,
    [0.49, 0.495], // Scroll position range for the third split circle
    [0, 1] // Opacity range
  )
  const splitCircle8Opacity = useTransform(
    scrollYProgress,
    [0.495, 0.5], // Scroll position range for the third split circle
    [0, 1] // Opacity range
  )
  const splitCircle9Opacity = useTransform(
    scrollYProgress,
    [0.5, 0.505], // Scroll position range for the third split circle
    [0, 1] // Opacity range
  )
  const splitCircle10Opacity = useTransform(
    scrollYProgress,
    [0.51, 0.515], // Scroll position range for the third split circle
    [0, 1] // Opacity range
  )
  const splitCircle11Opacity = useTransform(
    scrollYProgress,
    [0.52, 0.525], // Scroll position range for the third split circle
    [0, 1] // Opacity range
  )
  const splitCircle12Opacity = useTransform(
    scrollYProgress,
    [0.53, 0.535], // Scroll position range for the third split circle
    [0, 1] // Opacity range
  )
  const splitCircle13Opacity = useTransform(
    scrollYProgress,
    [0.54, 0.545], // Scroll position range for the third split circle
    [0, 1] // Opacity range
  )

  const splitCircle1 = {
    scale: 2,
    x: circleOneXPosition,
    y: "0%",
    border: "0.2rem solid rgba(0, 0, 225, 0.5)",
    background: bgCircleOne,

    minHeight: circleSize,
    minWidth: circleSize,
    opacity: splitCircle1Opacity,
  }

  const splitCircle2 = {
    scale: 2,
    x: "-350%",
    y: "0%",
    border: "0.1rem solid rgba(0, 0, 225, 0.5)",

    minHeight: circleSize,
    minWidth: circleSize,
    opacity: splitCircle2Opacity,
  }

  const splitCircle3 = {
    scale: 2,
    x: "-250%",
    y: "0%",
    border: "0.1rem solid rgba(0, 0, 225, 0.5)",
    background: "rgba(0, 0, 225, 0.07)",
    minHeight: circleSize,
    minWidth: circleSize,
    opacity: splitCircle3Opacity,
  }

  const splitCircle4 = {
    scale: 2,
    x: "-240%",
    y: "0%",
    border: "0.1rem solid rgba(0, 0, 225, 0.5)",
    background: "rgba(0, 0, 225, 0.08)",

    minHeight: circleSize,
    minWidth: circleSize,
    opacity: splitCircle4Opacity,
  }

  const splitCircle5 = {
    scale: 2,
    x: "-230%",
    y: "0%",
    border: "0.1rem solid rgba(0, 0, 225, 0.5)",
    background: "rgba(0, 0, 225, 0.08)",

    minHeight: circleSize,
    minWidth: circleSize,
    opacity: splitCircle5Opacity,
  }

  const splitCircle6 = {
    scale: 2,
    x: "-250%",
    y: "0%",
    border: "0.1rem solid rgba(0, 0, 225, 0.5)",
    background: "rgba(0, 0, 225, 0.08)",

    minHeight: circleSize,
    minWidth: circleSize,
    opacity: splitCircle6Opacity,
  }

  const splitCircle7 = {
    scale: 2,
    x: "-290%",
    y: "0%",
    border: "0.1rem solid rgba(0, 0, 225, 0.5)",
    background: "rgba(0, 0, 225, 0.08)",

    minHeight: circleSize,
    minWidth: circleSize,
    opacity: splitCircle7Opacity,
  }

  const splitCircle8 = {
    scale: 2,
    x: "-330%",
    y: "0%",
    border: "0.1rem solid rgba(0, 0, 225, 0.5)",
    background: "rgba(0, 0, 225, 0.08)",

    minHeight: circleSize,
    minWidth: circleSize,
    opacity: splitCircle8Opacity,
  }

  const splitCircle9 = {
    scale: 2,
    x: "-390%",
    y: "0%",
    border: "0.1rem solid rgba(0, 0, 225, 0.5)",
    background: "rgba(0, 0, 225, 0.08)",

    minHeight: circleSize,
    minWidth: circleSize,
    opacity: splitCircle9Opacity,
  }

  const splitCircle10 = {
    scale: 2,
    x: "-450%",
    y: "0%",
    border: "0.1rem solid rgba(0, 0, 225, 0.5)",
    background: "rgba(0, 0, 225, 0.08)",

    minHeight: circleSize,
    minWidth: circleSize,
    opacity: splitCircle10Opacity,
  }

  const splitCircle11 = {
    scale: 2,
    x: "-515%",
    y: "0%",
    border: "0.1rem solid rgba(0, 0, 225, 0.5)",
    background: "rgba(0, 0, 225, 0.08)",

    minHeight: circleSize,
    minWidth: circleSize,
    opacity: splitCircle11Opacity,
  }

  const splitCircle12 = {
    scale: 2,
    x: "-600%",
    y: "0%",
    border: "0.1rem solid rgba(0, 0, 225, 0.5)",
    background: "rgba(0, 0, 225, 0.08)",

    minHeight: circleSize,
    minWidth: circleSize,
    opacity: splitCircle12Opacity,
  }

  const splitCircle13 = {
    scale: 2,
    x: "-685%",
    y: "0%",
    border: "0.1rem solid rgba(0, 0, 225, 0.5)",
    background: "rgba(0, 0, 225, 0.08)",

    minHeight: circleSize,
    minWidth: circleSize,
    opacity: splitCircle13Opacity,
  }

  return (
    <motion.section
      style={{
        opacity: opacitySection,
      }}
      ref={targetRef}
      className=" flex h-[400vh] items-start justify-start"
    >
      {/* <motion.div className="sticky top-[38%]  left-[40%] text-4xl" style={{}}>
        <h1 className=""> I'm a Frontend Developer</h1>
      </motion.div> */}

      <motion.div
        className="sticky top-[38%] left-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          scale: scale,
          x: xPosition,
          y: yPosition,
          border: borderPosition,
          background: bgCircle,
          display: isSplit ? "none" : "block",
          minHeight: circleSize,
          minWidth: circleSize,
        }}
      />

      {isSplit && (
        <>
          <motion.div
            className="sticky top-[38%] left-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={splitCircle1}
          />
          <motion.div
            className="sticky top-[38%] left-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={splitCircle2}
          />
          <motion.div
            className="sticky top-[38%] left-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={splitCircle3}
          />
          <motion.div
            className="sticky top-[38%] left-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={splitCircle4}
          />
          <motion.div
            className="sticky top-[38%] left-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={splitCircle5}
          />
          <motion.div
            className="sticky top-[38%] left-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={splitCircle6}
          />
          <motion.div
            className="sticky top-[38%] left-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={splitCircle7}
          />
          <motion.div
            className="sticky top-[38%] left-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={splitCircle8}
          />
          <motion.div
            className="sticky top-[38%] left-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={splitCircle9}
          />
          <motion.div
            className="sticky top-[38%] left-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={splitCircle10}
          />
          <motion.div
            className="sticky top-[38%] left-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={splitCircle11}
          />
          <motion.div
            className="sticky top-[38%] left-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={splitCircle12}
          />{" "}
          <motion.div
            className="sticky top-[38%] left-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={splitCircle13}
          />
        </>
      )}
    </motion.section>
  )
}

export default AnimatedCircle
