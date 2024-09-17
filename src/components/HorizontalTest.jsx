import { motion, useTransform, useScroll } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Link from "next/link"

const ScrollBox = () => {
  return (
    <div className="bg-white">
      <HorizontalScrollCarousel />
    </div>
  )
}

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const updateWidths = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.scrollWidth)
      }
      setWindowWidth(window.innerWidth)
    }

    updateWidths()
    window.addEventListener("resize", updateWidths)
    return () => window.removeEventListener("resize", updateWidths)
  }, [])

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  })

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(containerWidth - windowWidth)]
  )

  const totalSections = 4 // Intro + 3 projects
  const sectionHeight = windowWidth ? (containerWidth / windowWidth) * 100 : 0

  return (
    <section
      ref={targetRef}
      id="projects"
      className="relative bg-white"
      style={{ height: `${sectionHeight}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div ref={containerRef} style={{ x }} className="flex">
          {/* Intro Section */}
          <div className="flex-shrink-0 w-screen flex items-center justify-center bg-white">
            <div className="text-center px-4">
              <h2 className="text-4xl md:text-6xl font-bold text-black mb-4">
                Projects
              </h2>
              <h1 className="text-6xl md:text-9xl font-black text-black">
                ZETAI
              </h1>
            </div>
          </div>

          {/* Project 1 */}
          <ProjectCard
            title="Cloud Cost Management"
            imageUrl="/cloudcostmanagement.png"
            link="https://cloud-cost-frontend.vercel.app/"
            bgColor="bg-black"
            textColor="text-white"
          />

          {/* Project 2 */}
          <ProjectCard
            title="Modern Analytics"
            imageUrl="/modernanalytics.png"
            link="https://modernanalytics.vercel.app/"
            bgColor="bg-white"
            textColor="text-black"
          />

          {/* Project 3 */}
          <ProjectCard
            title="Movie Explorer"
            imageUrl="/moviexplorer.jpg"
            link="https://moviesite-jade-gamma.vercel.app/"
            bgColor="bg-black"
            textColor="text-white"
          />
        </motion.div>
      </div>
    </section>
  )
}

const ProjectCard = ({ title, imageUrl, link, bgColor, textColor }) => {
  return (
    <div className={`flex-shrink-0 w-screen ${bgColor}`}>
      {/* Image Section */}
      <div
        className="h-[50vh] md:h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>

      {/* Text Section */}
      <div
        className={`h-[50vh] md:h-[40vh] flex flex-col items-center justify-center ${bgColor}`}
      >
        <h1 className={`text-3xl md:text-5xl font-bold ${textColor} mb-6`}>
          {title}
        </h1>
        <Link
          href={link}
          passHref
          target="_blank"
          rel="noopener noreferrer"
          className={`px-8 py-4 rounded-full font-semibold ${
            textColor === "text-white"
              ? "bg-white text-black"
              : "bg-black text-white"
          }`}
        >
          Check Out
        </Link>
      </div>
    </div>
  )
}

export default ScrollBox
