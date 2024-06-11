"use client"
import Image from "next/image"
import ScrollText from "../components/ScrollText"
import Navbar from "../components/Navbar"
import MaxWidthWrapper from "../components/MaxWidthWrapper"
import Hero from "../components/Hero"
import Lenis from "lenis"
import { useEffect } from "react"
import StreamLinedExperience from "../components/StreamLinedExperience"
import Square from "../components/Square"
import AnimatedSquare from "../components/AnimatedSquare"
import AnimatedCircle from "../components/AnimatedCircle"

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
      <MaxWidthWrapper>
        <Navbar />

        <Hero />
        <StreamLinedExperience />
        {/* <ScrollText /> */}
        {/* <Square /> */}
        <AnimatedCircle />
      </MaxWidthWrapper>
    </>
  )
}
