import React from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"
import { TextReveal } from "./TextReveal"

export default function StickyTextContent3() {
  return (
    <div className="bg-blue py-8 px-12 h-[80vh] w-full flex flex-col justify-between">
      <Section2 />
      <Section1 />
    </div>
  )
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  )
}

const Section2 = () => {
  return (
    <div className="flex justify-between items-end">
      <AnimatedText
        el="h2"
        text={["I love creating cool", "animations and projects"]}
        className="text-6xl -translate-y-[20vh] mt-10 bg-black p-2 top-[30vh]"
      />

      <img
        src="/logo.svg"
        alt="ninja"
        width={400}
        height={0}
        className="-translate-x-[20vw] top-[10vh]"
      />
    </div>
  )
}

const Nav = () => {
  return (
    <div className="flex gap-40">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80]">Skills</h3>
        <AnimatedText
          el="h2"
          text={["Javascript"]}
          className="translate-y-[0vh]  top-[10vh]"
        />
        <AnimatedText
          el="h2"
          text={["Typescript"]}
          className="translate-y-[0vh]  top-[10vh]"
        />
        <AnimatedText
          el="h2"
          text={["Animation"]}
          className="translate-y-[0vh]  top-[10vh]"
        />
        <AnimatedText
          el="h2"
          text={["React"]}
          className="translate-y-[0vh]  top-[10vh]"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80]">Others</h3>
        <AnimatedText
          el="h2"
          text={["Framer Motion"]}
          className="translate-y-[0vh]  top-[10vh]"
        />
        <AnimatedText
          el="h2"
          text={["Python"]}
          className="translate-y-[0vh]  top-[10vh]"
        />
        <AnimatedText
          el="h2"
          text={["CSS"]}
          className="translate-y-[0vh]  top-[10vh]"
        />
        <AnimatedText
          el="h2"
          text={["HTML"]}
          className="translate-y-[0vh]  top-[10vh]"
        />
      </div>
    </div>
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
      duration: 0.2,
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
  const isInView = useInView(ref, {
    amount: 1, // Change the amount to 0.5 for better visibility
    once,
    margin: "", // Adjust the margin
  })

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
