import Image from "next/image"
import { useScroll, useTransform, motion } from "framer-motion"
import { useMotionValueEvent } from "framer-motion"
import { useRef } from "react"

export default function ZoomParallax() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

  const pictures = [
    {
      src: "blog.png",
      scale: scale4,
    },
    {
      src: "flappy.png",
      scale: scale5,
    },
    {
      src: "Zoom3.jpeg",
      scale: scale6,
    },
    {
      src: "Zoom4.jpeg",
      scale: scale5,
    },
    {
      src: "Zoom5.jpeg",
      scale: scale6,
    },
    {
      src: "Zoom6.jpeg",
      scale: scale8,
    },
    {
      src: "Zoom7.jpeg",
      scale: scale9,
    },
  ]

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.4) {
      console.log("Zoom", latest)
    } else {
      console.log("Zoom", latest)
    }
  })

  return (
    <div ref={container} className="h-[220vh]  relative ">
      <div className=" sticky top-0 h-[100vh] overflow-hidden ">
        <motion.div
          style={{ scale: scale4 }}
          className="w-full h-full top-0 absolute flex items-center justify-center"
        >
          <div className=" relative w-[25vw] h-[25vh]">
            <Image src="/images/casedefy.png" fill alt="image" />
          </div>
        </motion.div>

        <motion.div
          style={{ scale: scale5 }}
          className="w-full h-full top-0 absolute flex items-center justify-center"
        >
          <div className=" relative -top-[30vh] left-[5vw] w-[35vw] h-[30vh]">
            <Image src="/images/motion1.png" fill alt="image" />
          </div>
        </motion.div>

        <motion.div
          style={{ scale: scale6 }}
          className="w-full h-full top-0 absolute flex items-center justify-center"
        >
          <div className=" relative -top-[10vh] -left-[25vw] w-[20vw] h-[45vh]">
            <Image src="/images/weeb.jpg" fill alt="image" />
          </div>
        </motion.div>

        <motion.div
          style={{ scale: scale5 }}
          className="w-full h-full top-0 absolute flex items-center justify-center"
        >
          <div className=" relative  left-[27.5vw] w-[25vw] h-[25vh]">
            <Image src="/images/weather.png" fill alt="image" />
          </div>
        </motion.div>

        <motion.div
          style={{ scale: scale6 }}
          className="w-full h-full top-0 absolute flex items-center justify-center"
        >
          <div className=" relative top-[27.5vh] left-[5vw] w-[20vw] h-[25vh]">
            <Image src="/images/blog.png" fill alt="image" />
          </div>
        </motion.div>

        <motion.div
          style={{ scale: scale8 }}
          className="w-full h-full top-0 absolute flex items-center justify-center"
        >
          <div className=" relative top-[27.5vh] -left-[22.5vw] w-[30vw] h-[25vh]">
            <Image src="/images/weeb1.png" fill alt="image" />
          </div>
        </motion.div>

        <motion.div
          style={{ scale: scale9 }}
          className="w-full h-full top-0 absolute flex items-center justify-center"
        >
          <div className=" relative top-[22.5vh] left-[25vw] w-[15vw] h-[15vh]">
            <Image src="/images/flappy.png" fill alt="image" />
          </div>
        </motion.div>

        {/* {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div
              key={index}
              style={{ scale }}
              className="w-full h-full top-0 absolute flex align-items-center justify-content-center"
            >
              <div className="relative w-[25vw] h-[25vh]">
                <Image src={`/images/${src}`} fill alt="image" />
              </div>
            </motion.div>
          )
        })} */}
      </div>
    </div>
  )
}
