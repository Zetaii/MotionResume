// src/components/Navbar.jsx
import React from "react"
import MaxWidthWrapper from "./MaxWidthWrapper"

const Navbar = () => {
  return (
    <MaxWidthWrapper>
      <nav className="flex justify-between items-center p-4 mt-12 text-2xl  text-white">
        <div className="flex items-center space-x-4">
          <a> Logo</a>
        </div>
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
  )
}

export default Navbar
