import {
  motion,
  useInView,
  useAnimation,
  Variant,
  useScroll,
} from "framer-motion"
import { useEffect, useRef } from "react"

function App() {
  return (
    <main className="bg-black-900 h-10 -mt-[50vh] ">
      <div className="mx-auto st max-w-6xl h-10 text-white">
        <section className=" min-h-[5vh] flex-col text-center font-bold -mt-[10vh] justify-center">
          <AnimatedText
            el="h2"
            text={["I love creating cool", "animations and projects"]}
            className="text-6xl translate-y-[1vh] mt-[90vh]"
            // repeatDelay={10000}
          />
        </section>
      </div>
    </main>
  )
}

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: "20px",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
}

export const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
  once,
  repeatDelay,
  animation = defaultAnimations,
}) => {
  const controls = useAnimation()
  const textArray = Array.isArray(text) ? text : [text]
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 1, once, margin: "-20px 0px" })
  const { scrollY } = useScroll()
  const FADE_OUT_THRESHOLD = 800

  useEffect(() => {
    const show = () => {
      controls.start("visible")
      if (repeatDelay) {
        setTimeout(async () => {
          await controls.start("hidden")
          controls.start("visible")
        }, repeatDelay)
      }
    }

    if (isInView) {
      show()
    } else {
      controls.start("hidden")
    }

    return () => clearTimeout()
  }, [isInView])

  return (
    <Wrapper className={className}>
      <span className="sr-only">{textArray.join(" ")}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.02 } },
          hidden: {},
        }}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span className="block" key={`${line}-${lineIndex}`}>
            {line.split(" ").map((word, wordIndex) => (
              <span className="inline-block" key={`${word}-${wordIndex}`}>
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    className="inline-block"
                    variants={animation}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  )
}

export default App
