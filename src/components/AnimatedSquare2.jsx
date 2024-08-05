import React from "react"
import { motion, inView } from "framer-motion"
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useEffect, useState } from "react"
import Lenis from "lenis"

const AnimatedSquare2 = () => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 })
  const targetRef = useRef(null)
  const textRef = useRef(null)
  const { height } = dimension
  const { width } = dimension

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  })

  const textOpacity = useTransform(
    scrollYProgress,
    [0.31, 0.31, 0.35],
    [0, 1, 0]
  )
  const yText = useTransform(scrollYProgress, [0, 1], [-1500, height * 2.9])
  const xText = useTransform(scrollYProgress, [0, 10], [300, -width * 3.9])

  const heightScale = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5, 0.6, 0.7],
    ["0px", "12.5%", "25%", "37.5%", "50%"]
  )

  const widthScale = useTransform(scrollYProgress, [0.1, 0.15], ["0px", "75%"])

  const widthScale2 = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.35, 0.4],
    ["100%", "25%", "0%", "0%"]
  )

  const widthScale3 = useTransform(
    scrollYProgress,
    [0, 0.37, 0.37, 0.5, 0.6],
    ["0px", "0%", "25%", "25%", "40%"]
  )

  const heightScale3 = useTransform(
    scrollYProgress,
    [0.3, 0.37, 0.6],
    ["0px", "100vh", "480vh"]
  )

  useEffect(() => {
    const lenis = new Lenis()

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf)
    resize()

    return () => {
      window.removeEventListener("resize", resize)
    }
  }, [])

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.4) {
      console.log("AnimatedSquare", latest)
    } else {
      console.log("AnimatedSquare", latest)
    }
  })

  return (
    <motion.section className="flex" ref={targetRef}>
      <motion.div
        className=" sticky flex  w-20 -mt-[100vh] h-[500vh] text-center justify-center items-center"
        style={{
          width: widthScale,
          backgroundImage: `url(/LeagueBG.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      ></motion.div>
      <motion.div
        className=" sticky flex bg-white -mt-[100vh] h-[350vh] text-center justify-center items-center"
        style={{
          width: widthScale2,
        }}
      >
        <motion.h1
          className="bg-red-900 text-7xl sticky"
          style={{
            opacity: textOpacity,
            y: yText,
            translateX: xText,
          }}
        >
          {" "}
          Test{" "}
        </motion.h1>
      </motion.div>

      <motion.div
        className=" sticky flex bg-red-900 right-0 w-20 -mt-[80vh] text-center justify-center items-center"
        style={{
          width: widthScale3,
          height: heightScale3,
        }}
      ></motion.div>
    </motion.section>
  )
}

export default AnimatedSquare2
