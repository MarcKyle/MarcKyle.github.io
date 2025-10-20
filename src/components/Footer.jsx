import React from 'react'
import { socialLinks } from '../data/socialLinks'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Marc Kyle Jimena</h3>
            <p className="mt-2">Computer Science Undergraduate & Future Software Engineer</p>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className={`hover:text-blue-400 transition`}
                aria-label={link.name}
              >
                <i className={`${link.icon} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; 2025 Marc Kyle Jimena. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
