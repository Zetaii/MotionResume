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
      setIsSplit(true)
      console.log("Split", latest)
    } else {
      setIsSplit(false)
    }
  })

  // Opacity transformation based on scroll position
  const opacitySection = useTransform(
    scrollYProgress,
    [0, 0.09, 0.3, 0.34, 0.4, 0.45, 1], // Scroll position range
    [0, 0, 1, 1, 0, 0.2, 1] // Opacity range for fade in and fade out
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
    ["0%", "350%", "350%", "350%", "350%", "-350%", "-350%"] // Move to the right
  )
  const yPosition = useTransform(
    scrollYProgress,
    [0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.5], // Start moving after scaling is complete
    ["40%", "50%", "250%", "250%", "250%", "0%", "0%"] // Move up
  )

  const circleOneXPosition = useTransform(
    scrollYProgress,
    [0.42, 0.52, 0.62, 0.72, 0.8, 1], // Start moving after scaling is complete
    ["-350%", "-350%", "250%", "300%", "300%", "0%"] // Move to the right
  )
  const circleOneYPosition = useTransform(
    scrollYProgress,
    [0.42, 0.52, 0.62, 0.72, 0.82, 0.92], // Start moving after scaling is complete
    ["0%", "0%", "0%", "0%", "0%", "-200%"] // Move up
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
      "url(/Grid.jpg)",
      "url(/Grid.jpg)",
      "url(/Grid.jpg)",
      "url(/Grid.jpg)",
      "url(/Grid.jpg)",
    ] // Move up
  )

  const sectionBG = useTransform(
    scrollYProgress,
    [0.25, 0.3, 0.4, 0.5, 1], // Start moving after scaling is complete
    [
      "url(/Grid.jpg)",
      "url(/Grid.jpg)",
      "url(/Grid.jpg)",
      "url(/SolidBlack.jpg",
      "url(/solidBlack.jpg",
    ] // Move up
  )

  const bgCirclePosition = useTransform(
    scrollYProgress,
    [0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.5], // Start moving after scaling is complete
    [
      "10% 10%",
      "50% 40%",
      "50% 90%",
      "50% 140%",
      "50% 190%",
      "10% 10%",
      "-40% -50%",
    ] // Move up
  )

  const bgCircleOne = useTransform(
    scrollYProgress,
    [0.4, 0.425, 0.45, 0.8, 0.9, 0.95, 1], // Start moving after scaling is complete
    [
      "rgba(0, 0, 225, 0.1)",
      "rgba(0, 0, 225, 0.2)",
      "rgba(0, 0, 225, 0.3)",
      "rgba(0, 0, 225, 1)",
      "rgba(0, 0, 0, 1)",
      "rgba(0, 0, 0, 1)",
      "rgba(0, 0, 0, 1)",
    ] // Move up
  )

  const circleSize = "12rem" // Common size for both initial and split circles

  // Define opacity for split circles
  const splitCircle1Opacity = useTransform(
    scrollYProgress,
    [0, 0.4, 1], // Scroll position range for the first split circle
    [0, 1, 1] // Opacity range
  )

  const splitCircle2Opacity = useTransform(
    scrollYProgress,
    [0.68, 0.8], // Scroll position range for the second split circle
    [0, 1] // Opacity range
  )

  const splitCircle3Opacity = useTransform(
    scrollYProgress,
    [0.72, 0.81], // Scroll position range for the third split circle
    [0, 1] // Opacity range
  )

  const splitCircle4Opacity = useTransform(
    scrollYProgress,
    [0.725, 0.815], // Scroll position range for the third split circle
    [0, 1] // Opacity range
  )

  const splitCircle5Opacity = useTransform(
    scrollYProgress,
    [0.758, 0.83], // Scroll position range for the third split circle
    [0, 1] // Opacity range
  )

  const splitCircle6Opacity = useTransform(
    scrollYProgress,
    [0.77, 0.825], // Scroll position range for the third split circle
    [0, 1] // Opacity range
  )
  const splitCircle7Opacity = useTransform(
    scrollYProgress,
    [0.77, 0.84], // Scroll position range for the third split circle
    [0, 1] // Opacity range
  )
  const splitCircle8Opacity = useTransform(
    scrollYProgress,
    [0.78, 0.835], // Scroll position range for the third split circle
    [0, 1] // Opacity range
  )
  const splitCircle9Opacity = useTransform(
    scrollYProgress,
    [0.785, 0.875], // Scroll position range for the third split circle
    [0, 1] // Opacity range
  )
  const splitCircle10Opacity = useTransform(
    scrollYProgress,
    [0.79, 0.88], // Scroll position range for the third split circle
    [0, 1] // Opacity range
  )
  const splitCircle11Opacity = useTransform(
    scrollYProgress,
    [0.8, 0.9], // Scroll position range for the third split circle
    [0, 1] // Opacity range
  )
  const splitCircle12Opacity = useTransform(
    scrollYProgress,
    [0.81, 0.95], // Scroll position range for the third split circle
    [0, 1] // Opacity range
  )
  const splitCircle13Opacity = useTransform(
    scrollYProgress,
    [0.815, 1], // Scroll position range for the third split circle
    [0, 1] // Opacity range
  )

  const splitCircle1Scale = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.6, 0.62, 0.65, 0.7, 0.8], // Scroll position range for the first split circle
    [2.5, 2.5, 2.5, 2.5, 2.5, 6.5, 13.5] // Scale range
  )

  const splitCircle1 = {
    scale: splitCircle1Scale,
    x: circleOneXPosition,
    y: circleOneYPosition,
    border: "0.2rem solid rgba(0, 0, 0, 0.5)",
    background: bgCircleOne,
    zIndex: 9,

    minHeight: circleSize,
    minWidth: circleSize,
    opacity: splitCircle1Opacity,
  }

  const splitCircle2 = {
    scale: 2.5,
    x: "-350%",
    y: "0%",
    border: "0.1rem solid rgba(0, 0, 225, 0.5)",
    minHeight: circleSize,
    minWidth: circleSize,
    opacity: splitCircle2Opacity,
  }

  const splitCircle3 = {
    scale: 2.5,
    x: "-230%",
    y: "0%",
    border: "0.1rem solid rgba(0, 0, 225, 0.5)",
    background: "rgba(0, 0, 225, 0.2)",
    minHeight: circleSize,
    minWidth: circleSize,
    opacity: splitCircle3Opacity,
  }

  const splitCircle4 = {
    scale: 2.5,
    x: "-115%",
    y: "0%",
    border: "0.1rem solid rgba(0, 0, 225, 0.5)",
    background: "rgba(0, 0, 225, 0.2)",

    minHeight: circleSize,
    minWidth: circleSize,
    opacity: splitCircle4Opacity,
  }

  const splitCircle5 = {
    scale: 2.5,
    x: "-25%",
    y: "0%",
    border: "0.1rem solid rgba(0, 0, 225, 0.5)",
    background: "rgba(0, 0, 225, 0.2)",

    minHeight: circleSize,
    minWidth: circleSize,
    opacity: splitCircle5Opacity,
  }

  const splitCircle6 = {
    scale: 2.5,
    x: "35%",
    y: "0%",
    border: "0.1rem solid rgba(0, 0, 225, 0.5)",
    background: "rgba(0, 0, 225, 0.2)",

    minHeight: circleSize,
    minWidth: circleSize,
    opacity: splitCircle6Opacity,
  }

  const splitCircle7 = {
    scale: 2.5,
    x: "-15%",
    y: "0%",
    border: "0.1rem solid rgba(0, 0, 225, 0.5)",
    background: "rgba(0, 0, 225, 0.2)",

    minHeight: circleSize,
    minWidth: circleSize,
    opacity: splitCircle7Opacity,
  }

  const splitCircle8 = {
    scale: 2.5,
    x: "-70%",
    y: "0%",
    border: "0.1rem solid rgba(0, 0, 225, 0.5)",
    background: "rgba(0, 0, 225, 0.2)",

    minHeight: circleSize,
    minWidth: circleSize,
    opacity: splitCircle8Opacity,
  }

  const splitCircle9 = {
    scale: 2.5,
    x: "-140%",
    y: "0%",
    border: "0.1rem solid rgba(0, 0, 225, 0.5)",
    background: "rgba(0, 0, 225, 0.2)",

    minHeight: circleSize,
    minWidth: circleSize,
    opacity: splitCircle9Opacity,
  }

  const splitCircle10 = {
    scale: 2.5,
    x: "-200%",
    y: "0%",
    border: "0.1rem solid rgba(0, 0, 225, 0.5)",
    background: "rgba(0, 0, 225, 0.2)",

    minHeight: circleSize,
    minWidth: circleSize,
    opacity: splitCircle10Opacity,
  }

  const splitCircle11 = {
    scale: 2.5,
    x: "-275%",
    y: "0%",
    border: "0.1rem solid rgba(0, 0, 225, 0.5)",
    background: "rgba(0, 0, 225, 0.08)",

    minHeight: circleSize,
    minWidth: circleSize,
    opacity: splitCircle11Opacity,
  }

  const splitCircle12 = {
    scale: 2.5,
    x: "-355%",
    y: "0%",
    border: "0.1rem solid rgba(0, 0, 225, 0.5)",
    background: "rgba(0, 0, 225, 0.08)",
    zIndex: 8,
    minHeight: circleSize,
    minWidth: circleSize,
    opacity: splitCircle12Opacity,
  }

  const splitCircle13 = {
    scale: 2.5,
    x: "-440%",
    y: "0%",
    border: "0.1rem solid rgba(0, 0, 225, 0.5)",
    background: "rgba(0, 0, 225, 0.08)",
    zIndex: 8,
    minHeight: circleSize,
    minWidth: circleSize,
    opacity: splitCircle13Opacity,
  }

  return (
    <motion.section
      style={{
        opacity: opacitySection,

        backgroundImage: sectionBG,
        backgroundSize: "80% 20% ",
      }}
      ref={targetRef}
      className=" flex h-[600vh] relative items-start justify-start mb-[81vh]"
    >
      <motion.div
        className="sticky top-[38%] left-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full z-[1]"
        style={{
          scale: scale,
          x: xPosition,
          y: yPosition,
          border: borderPosition,
          backgroundImage: bgCircle,
          backgroundSize: "1000% 500% ",
          backgroundPosition: bgCirclePosition,
          display: isSplit ? "none" : "block",
          zIndex: 0,
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
          />{" "}
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
