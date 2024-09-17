import React from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"
import { TextReveal } from "./TextReveal"

export default function StickyTextContent2() {
  return (
    <div className="bg-black h-screen w-full flex flex-col justify-between">
      <Section1 />
      <Section2 />
    </div>
  )
}

const Section1 = () => {
  return (
    <div className="flex justify-center items-center flex-grow">
      <div className="text-center">
        <TextReveal>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            I love to code!
          </h1>
        </TextReveal>
        <TextReveal>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            I love to design!
          </h1>
        </TextReveal>
        <TextReveal>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            I love to create!
          </h1>
        </TextReveal>
      </div>
    </div>
  )
}

const Section2 = () => {
  return (
    <div className="flex justify-center items-center lg:mb-44">
      <AnimatedText
        el="h2"
        text={["FRONTEND"]}
        className="text-6xl sm:text-8xl md:text-9xl bg-white text-black font-black px-6 py-2 rounded-md"
      />
    </div>
  )
}

const defaultAnimations = {
  hidden: { opacity: 0, y: "20px" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 },
  },
}

export const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
  once = true,
  repeatDelay,
  animation = defaultAnimations,
}) => {
  const controls = useAnimation()
  const textArray = Array.isArray(text) ? text : [text]
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5, once })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [isInView, controls])

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
        aria-hidden="true"
      >
        {textArray.map((line, lineIndex) => (
          <span className="block" key={`line-${lineIndex}`}>
            {line.split(" ").map((word, wordIndex) => (
              <span className="inline-block mr-1" key={`word-${wordIndex}`}>
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`char-${charIndex}`}
                    className="inline-block"
                    variants={animation}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  )
}
