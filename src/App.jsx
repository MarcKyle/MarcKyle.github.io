import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from '@components/layout'
import Home from '@pages/Home'
import About from '@pages/About'
import Skills from '@pages/Skills'
import Projects from '@pages/Projects'
import Education from '@pages/Education'
import Contact from '@pages/Contact'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
