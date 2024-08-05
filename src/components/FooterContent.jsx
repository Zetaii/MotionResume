import React from "react"

export default function FooterContent() {
  return (
    <div className="bg-[#4E4E5A] py-4 sm:py-8 px-4 sm:px-12 min-h-[70vh] w-full flex flex-col justify-between">
      <div className="flex flex-col md:flex-row justify-center items-start">
        <div className="flex flex-col items-start">
          <Section2 />
          <div className="mt-12">
            {" "}
            {/* Increased margin for more space */}
            <Section1 />
          </div>
        </div>
        <Description />
      </div>
    </div>
  )
}

const Section1 = () => {
  return (
    <div className="mt-8">
      <Nav />
    </div>
  )
}

const Section2 = () => {
  return (
    <h1 className="text-[14vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] leading-[0.8] bg-black p-2">
      ZETAI
    </h1>
  )
}

const Description = () => {
  return (
    <h2 className="mt-8 md:mt-0 md:ml-8 overflow-hidden w-full md:w-1/2 lg:w-2/5 text-base sm:text-lg md:text-xl text-center">
      Thanks for taking the time to checkout my web resume! I'm a web developer
      based in the US. I have a background in biochemistry, but have since moved
      to software development. I've been focusing on frontend development, but
      have recently been expanding my skills to include cloud computing and
      backend. Feel free to reach out to me if you have any questions or would
      like to work together!
    </h2>
  )
}

const Nav = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 md:gap-24 lg:gap-40">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80]">About</h3>
        <p>Home</p>
        <p>Projects</p>
        <p>My Objective</p>
        <p>Contact Me</p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80]">Skills</h3>
        <p> HTML/CSS </p>
        <p> JavaScript/Typescript</p>
        <p>Cloud Computing (WIP) </p>
        <p> React / NextJS</p>
        <p> Python (WIP) </p>
      </div>
    </div>
  )
}
