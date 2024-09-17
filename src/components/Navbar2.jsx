import React, { useRef, useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { FiMenu } from "react-icons/fi"

const Navbar2 = () => {
  const [isHidden, setIsHidden] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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
        variants={{
          hidden: {
            y: "-100%",
          },
          visible: {
            y: "0%",
          },
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 z-10 w-full bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/logo.svg" alt="ninja" className="h-8 w-8 mr-2" />
              <span className="text-white text-2xl font-bold">ZETAI</span>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <SlideTabs />
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white focus:outline-none"
              >
                <FiMenu size={24} />
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <SlideTabs isMobile />
          </div>
        )}
      </motion.div>
    </>
  )
}

export default Navbar2

const SlideTabs = ({ isMobile = false }) => {
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
      className={`relative flex ${
        isMobile ? "flex-col" : "space-x-8"
      } items-center`}
    >
      {/* Navigation Links */}
      {["Home", "Projects", "Skills", "Contact"].map((item, index) => (
        <Tab
          key={index}
          setPosition={setPosition}
          href={`#${item.toLowerCase()}`}
          isMobile={isMobile}
        >
          {item}
        </Tab>
      ))}
      {!isMobile && <Cursor position={position} />}
      {/* GitHub Icon */}
      {!isMobile && (
        <li className="ml-8">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/GitHubSVG.svg" alt="GitHub" className="h-6 w-6" />
          </a>
        </li>
      )}
    </ul>
  )
}

const Tab = ({ children, setPosition, href, isMobile }) => {
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
        if (!ref?.current || isMobile) return
        const { width } = ref.current.getBoundingClientRect()
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        })
      }}
      className={`relative z-50 ${isMobile ? "py-2" : "py-1.5"} cursor-pointer`}
    >
      <a
        href={href}
        onClick={handleClick}
        className="text-white text-lg font-medium hover:text-gray-300"
      >
        {children}
      </a>
    </li>
  )
}

const Cursor = ({ position }) => {
  return (
    <motion.div
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      transition={{ duration: 0.2 }}
      className="absolute bottom-0 h-0.5 bg-white"
    />
  )
}
