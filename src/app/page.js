"use client"

import Lenis from "lenis"
import { useEffect } from "react"

import ZoomParallax from "../components/ZoomParallax"
import StickyText from "../components/StickyText"
import HeroTest from "../components/HeroTest"
import Navbar2 from "../components/Navbar2"
import StickyText2 from "../components/StickyText2"
import StickyText3 from "../components/StickyText3"

import Demo from "../components/Demo"
import Footer from "../components/Footer"
import ScrollBox from "../components/HorizontalTest"

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
      {/* <Navbar /> */}
      <Navbar2 />

      <HeroTest />

      {/* <AnimatedCircle /> */}
      <StickyText />
      <ScrollBox />
      <StickyText2 />
      <ZoomParallax />
      <StickyText3 />
      {/* <Demo /> */}
      <Footer />
    </>
  )
}
