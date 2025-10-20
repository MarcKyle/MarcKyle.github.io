import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <header className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 text-white py-24 md:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <div className="space-y-2">
              <h2 className="text-lg md:text-xl font-medium opacity-90 animate-fadeIn">
                👋 Hello, I'm
              </h2>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold animate-fadeInUp">
                Kyle
              </h1>
            </div>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed animate-fadeInUp delay-200">
              Computer Science Undergraduate & Future Software Engineer
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fadeInUp delay-300">
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 bg-white text-blue-600 dark:bg-gray-800 dark:text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get In Touch
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 px-8 py-3 rounded-full font-medium hover:bg-white/20 transition-all duration-300"
              >
                View Projects
                <i className="fas fa-code"></i>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fadeInUp delay-400">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <img
                src="https://i.pinimg.com/474x/8a/5a/82/8a5a82fcf1f78395f2c7a21bf30de2ec.jpg"
                alt="Kyle's Profile"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white/20 shadow-2xl object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
