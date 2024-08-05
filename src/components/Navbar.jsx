// src/components/Navbar.jsx
import React from "react"
import MaxWidthWrapper from "./MaxWidthWrapper"

const Navbar = () => {
  return (
    <>
      <div className="flex items-center mt-4 ml-40 absolute ">
        <a className="font-black text-5xl"> ZETAI </a>
      </div>
      <MaxWidthWrapper>
        <nav className="flex justify-between items-center py-6 px-16 mt-12 text-2xl  text-white border-white border-2 rounded-full">
          <div className="flex-grow border-t border-white mx-4"></div>
          <div className="flex space-x-4">
            <a href="#work" className="hover:underline">
              Work
            </a>
            <a href="#resume" className="hover:underline">
              Resume
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </div>
        </nav>
      </MaxWidthWrapper>
    </>
  )
}

export default Navbar
