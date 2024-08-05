import React from "react"

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  p-6">
      <h1 className="text-4xl font-bold text-white mb-8">
        Contact Information
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-600 mb-6">
          I would love to hear from you! Please feel free to reach out using the
          information below.
        </p>

        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-800">Email</h3>
          <p className="text-gray-600">nguyens556@gmail.com</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-800">Phone</h3>
          <p className="text-gray-600">(612) 222-1433</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-800">LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/steven-nguyen-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            https://www.linkedin.com/in/steven-nguyen-dev/
          </a>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-800">GitHub</h3>
          <a
            href="https://github.com/Zetaii"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            github.com/Zetaii
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
