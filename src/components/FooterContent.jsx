import React from "react"

export default function FooterContent() {
  return (
    <div className="bg-[#4E4E5A] py-8 px-4 sm:px-8 w-full flex flex-col justify-between">
      <div className="flex flex-col md:flex-row justify-center items-start">
        <div className="flex flex-col items-start">
          <Section2 />
          <Section1 />
        </div>
        <Description />
      </div>
    </div>
  )
}

const Section2 = () => {
  return (
    <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10vw] leading-none bg-black text-white p-4">
      ZETAI
    </h1>
  )
}

const Section1 = () => {
  return (
    <div className="mt-8">
      <Nav />
    </div>
  )
}

const Description = () => {
  return (
    <p className="mt-8 md:mt-0 md:ml-8 w-full md:w-1/2 lg:w-2/5 text-base sm:text-lg md:text-xl text-center md:text-left text-white">
      Thanks for taking the time to check out my web resume! I'm a web developer
      based in the US. I have a background in biochemistry but have since moved
      to software development. I've been focusing on frontend development but
      have recently been expanding my skills to include cloud computing and
      backend. Feel free to reach out to me if you have any questions or would
      like to work together!
    </p>
  )
}

const Nav = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-24">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-gray-400">About</h3>
        <a href="#home" className="text-white hover:underline">
          Home
        </a>
        <a href="#projects" className="text-white hover:underline">
          Projects
        </a>
        <a href="#objective" className="text-white hover:underline">
          My Objective
        </a>
        <a href="#contact" className="text-white hover:underline">
          Contact Me
        </a>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-gray-400">Skills</h3>
        <p className="text-white">HTML/CSS</p>
        <p className="text-white">JavaScript/TypeScript</p>
        <p className="text-white">Cloud Computing (WIP)</p>
        <p className="text-white">React / Next.js</p>
        <p className="text-white">Python (WIP)</p>
      </div>
    </div>
  )
}
