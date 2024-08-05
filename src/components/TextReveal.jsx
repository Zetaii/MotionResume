"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

export const TextReveal = ({
  repeatDelay,
  children,
  width = "fit-content",
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    amount: 1,

    margin: "", // Adjust the margin
  })

  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible")
      mainControls.start("visible")
      if (repeatDelay) {
        const repeatAnimation = async () => {
          await mainControls.start("hidden")
          await slideControls.start("hidden")
          slideControls.start("visible")
          mainControls.start("visible")
        }
        const repeatInterval = setInterval(repeatAnimation, repeatDelay + 1000) // Adding extra delay to allow animation to complete
        return () => clearInterval(repeatInterval)
      }
    } else {
      mainControls.start("hidden")
      slideControls.start("hidden")
    }
  }, [isInView, mainControls, slideControls, repeatDelay])

  return (
    <div ref={ref} className="relative overflow-hidden z-0">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -99 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.6,
          delay: 0.1,
          repeat: 0,
          repeatType: "loop",
        }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{
          duration: 0.5,
          ease: "easeIn",
          delay: 0,
          repeat: 0,
          repeatType: "loop",
        }}
        style={{
          position: "absolute",
          top: 1,
          bottom: 1,
          left: 10,
          right: 10,
          opacity: 1,
          background: "white",
          zIndex: 20,
          borderRadius: "1px",
        }}
      />
    </div>
  )
}
