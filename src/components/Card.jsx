"use client"
import Image from "next/image"
import { useTransform, motion, useScroll } from "framer-motion"
import { useRef } from "react"

const Card = ({
  i,
  title,
  description,
  src,
  url,
  color,
  textColor,
  border,
  targetScale,
}) => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])
  return (
    <div
      ref={container}
      className="h-[80vh] flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          border: border,
          color: textColor,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative -top-[25%] h-[500px] w-[1000px] rounded-[25px] p-[50px] origin-top"
      >
        <h2 className="text-center m-0 font-black text-3xl">{title}</h2>
        <div className="flex h-full mt-[50px] gap-[50px]">
          <div className="w-[50%] relative top-[10%]">
            <p className="text-2xl">{description}</p>
            <span className="flex items-center gap-[5px] "></span>
          </div>

          <div className="relative w-[60%] h-full rouunded-[25px] overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image fill src={`/${src}`} alt="image" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Card
