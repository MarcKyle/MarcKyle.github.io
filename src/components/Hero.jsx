import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Kyle</h1>
          <p className="text-xl md:text-2xl mb-6">
            Computer Science Undergraduate & Future Software Engineer
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition"
          >
            Get In Touch
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://i.pinimg.com/474x/8a/5a/82/8a5a82fcf1f78395f2c7a21bf30de2ec.jpg"
            alt="Kyle's Profile"
            className="w-64 h-64 rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </header>
  )
}
