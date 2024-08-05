import React, { useRef, useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

const Navbar2 = () => {
  const [isHidden, setIsHidden] = useState(false)
  const { scrollY } = useScroll()
  const lastYRef = useRef(0)

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0)

      lastYRef.current = y
    }
  })

  return (
    <>
      <motion.div
        animate={isHidden ? "hidden" : "visible"}
        whileHover="visible"
        onFocusCapture={() => setIsHidden(false)}
        variants={{
          hidden: {
            y: "-62%",
          },
          visible: {
            y: "0%",
          },
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 z-10 flex w-full justify-center pt-3"
      >
        <div className=" text-xl py-4 z-50">
          <SlideTabs />
        </div>
      </motion.div>
    </>
  )
}

export default Navbar2

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  })

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }))
      }}
      className="relative mx-auto flex w-fit rounded-full text-xl border-4 border-white bg-black py-4 px-12"
    >
      <div className="flex">
        <img
          src="/logo.svg"
          alt="ninja"
          width={60}
          height={0}
          className="mr-3 -mt-1"
        />
        <div className="mt-1 text-4xl font-black mr-32"> ZETAI </div>
      </div>

      <Tab setPosition={setPosition} href="#home">
        Home
      </Tab>
      <Tab setPosition={setPosition} href="#projects">
        Projects
      </Tab>
      <Tab setPosition={setPosition} href="#resume">
        Contact
      </Tab>
      <Tab setPosition={setPosition} href="#contact">
        Skills
      </Tab>
      <Cursor position={position} />
      <div className="ml-32">
        <img src="/GitHubSVG.svg" alt="github" width={50} height={20} />
      </div>
    </ul>
  )
}

const Tab = ({ children, setPosition, href }) => {
  const ref = useRef(null)

  const handleClick = (e) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return

        const { width } = ref.current.getBoundingClientRect()

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        })
      }}
      className="relative z-50 block cursor-pointer px-12 py-1.5 text-xl uppercase text-white mix-blend-difference md:text-2xl md:uppercase md:font-bold md:tracking-widest md:leading-10  md:transition-all md:duration-300 md:ease-in-out  md:hover:rounded-full md:hover:shadow-lg  md:hover:transform  md:hover:scale-105"
    >
      <a href={href} onClick={handleClick}>
        {children}
      </a>
    </li>
  )
}

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-white md:h-12"
    />
  )
}
