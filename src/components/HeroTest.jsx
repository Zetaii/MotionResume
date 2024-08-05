import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion"
import Tile from "./Tile"
import { useEffect } from "react"

const Hero2 = () => {
  const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

  const color = useMotionValue(COLORS_TOP[0])

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 8,
      repeat: Infinity,
      repeatType: "mirror",
    })
  }, [])

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`

  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`
  return (
    <main className="w-full relative">
      {/* Grid background */}
      <section className="w-full grid grid-cols-20 h-screen overflow-y-clip relative">
        {Array.from(Array(20 * 12), (_, i) => (
          <Tile key={i} />
        ))}
        {/* Background */}
        <motion.div
          className="absolute inset-0  opacity-50 pointer-events-none z-5"
          style={{
            backgroundImage: backgroundImage,

            boxShadow: boxShadow,
          }}
        ></motion.div>
      </section>
      <div className="pointer-events-none absolute inset-0 flex flex-col gap-5 items-center justify-center z-20 mb-10 font-poppins">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-9xl text-neutral-100 font-black uppercase tracking-tight"
        >
          hello
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-white w-1/2 text-xl text-center tracking-wide"
        >
          Welcome to my portfolio. I'm a web developer based in the US. I build
          web applications using modern technologies. Feel free to check out my
          work.
        </motion.p>
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="text-neutral-100 rounded-full text-3xl bg-indigo-700 px-10 py-3 border border-indigo-900 pointer-events-auto"
        >
          Github
        </motion.button>
      </div>
    </main>
  )
}

export default Hero2
