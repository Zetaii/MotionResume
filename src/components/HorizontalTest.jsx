import { motion, useTransform, useScroll } from "framer-motion"
import { useMotionValueEvent } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"

const ScrollBox = () => {
  return (
    <div className="bg-white ">
      <HorizontalScrollCarousel />
    </div>
  )
}

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const widthOneScale = useTransform(
    scrollYProgress,
    [0.1, 0.15, 0.32],
    ["50%", "75%", "100%"]
  )

  const widthTwoScale = useTransform(
    scrollYProgress,
    [0.35, 0.5, 0.65],
    ["50%", "75%", "100%"]
  )

  const widthThreeScale = useTransform(
    scrollYProgress,
    [0.35, 0.75, 0.9],
    ["50%", "75%", "100%"]
  )

  const x = useTransform(scrollYProgress, [0.05, 1], ["0%", "-65%"])

  return (
    <section ref={targetRef} className="relative h-[300vh]  bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex  ">
          <div>
            <div className="relative h-[100vh] w-[55vw]  bg-white">
              <motion.div className="h-full bg-white-200 text-black text-center justify-center flex items-center ">
                <div>
                  Projects
                  <div></div>
                  <h1 className="text-black text-9xl font-black"> ZETAI </h1>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="bg-black w-[70vw]">
            <motion.div
              className=" h-[45vh] text-center items-center flex justify-center"
              style={{
                backgroundImage: `url(/cloudcostmanagement.png)`,
                backgroundSize: "100% 100% ",
                backgroundRepeat: "no-repeat",
                scale: widthOneScale,
              }}
            ></motion.div>

            <div className="bg-black h-[55vh] text-center items-center flex justify-center">
              <h1 className="text-7xl text-white font-black">
                Cloud Cost Management
              </h1>
              <button className="bg-white text-black font-black w-24 h-24 border-black rounded-full ml-9">
                <Link href="https://cloud-cost-frontend.vercel.app/">
                  Check Out
                </Link>
              </button>
            </div>
          </div>

          <div className="bg-white w-[70vw]">
            <motion.div
              className=" h-[45vh] text-center items-center flex justify-center"
              style={{
                backgroundImage: `url(/modernanalytics.png)`,
                backgroundSize: "100% 100% ",
                backgroundRepeat: "no-repeat",
                scale: widthTwoScale,
              }}
            ></motion.div>

            <div className="bg-white h-[55vh] text-center items-center flex justify-center">
              <h1 className="text-7xl text-black font-black">
                Modern Analytics
              </h1>
              <button className="bg-black w-24 h-24 border-black rounded-full ml-9">
                <Link href="https://modernanalytics.vercel.app/">
                  Check Out
                </Link>
              </button>
            </div>
          </div>

          <div>
            <div className="bg-black w-[110vw]">
              <motion.div
                className=" h-[45vh] text-center items-center flex justify-center"
                style={{
                  backgroundImage: `url(/moviexplorer.jpg)`,
                  backgroundSize: "100% 100% ",
                  backgroundRepeat: "no-repeat",
                  scale: widthThreeScale,
                }}
              ></motion.div>

              <div className="bg-black h-[55vh] text-center items-center flex justify-center">
                <h1 className="text-7xl text-white font-black">
                  Movie Explorer
                </h1>
                <button className="bg-white text-black font-black w-24 h-24 border-black rounded-full ml-9">
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ScrollBox
