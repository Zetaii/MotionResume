"use client"
import React from "react"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"

const Hero = () => {
  const targetRef = useRef(null)
  const { scrollY } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  })

  const opacityRange = [0, 100, 200, 300]
  const opacityValues = [1, 1, 0, 0]
  const opacity = useTransform(scrollY, opacityRange, opacityValues)

  return (
    <motion.section
      style={{ opacity }}
      ref={targetRef}
      className="relative mb-[2rem] h-[80vh] py-12 mt-12 text-white"
    >
      <div className="h-[200vh] mt-8">
        <h1 className="text-center text-6xl">
          Meet your next{" "}
          <div>
            <span className="bg-red-500 mx-4 w-[400px]">
              <br /> creative
            </span>
            <span className="ml-2">developer</span>
          </div>
        </h1>
        <div>Test</div>
      </div>
      <div>Test </div>
    </motion.section>
  )
}

export default Hero
