"use client"

import Lenis from "lenis"
import { useEffect } from "react"

import ZoomParallax from "../components/ZoomParallax"
import StickyText from "../components/StickyText"
import HeroTest from "../components/HeroTest"
import Navbar2 from "../components/Navbar2"
import StickyText2 from "../components/StickyText2"
import StickyText3 from "../components/StickyText3"

import Footer from "../components/Footer"
import ScrollBox from "../components/HorizontalTest"
import Contact from "../components/Contact"
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  return (
    <>
      <Navbar2 />

      <section id="home">
        <HeroTest />
      </section>

      <StickyText />
      <section id="projects">
        <ScrollBox />
        <StickyText2 />
        <ZoomParallax />
      </section>
      <StickyText3 />
      {/* <Demo /> */}
      <section id="skills">
        <Footer />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  )
}
