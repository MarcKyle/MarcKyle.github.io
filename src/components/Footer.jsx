import React from 'react'
import { socialLinks } from '../data/socialLinks'

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 border-t border-gray-800 dark:border-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Marc Kyle Jimena
            </h3>
            <p className="mt-2 text-gray-400">
              Computer Science Undergraduate & Future Software Engineer
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 dark:bg-gray-900 hover:bg-blue-600 dark:hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                aria-label={link.name}
              >
                <i className={`${link.icon} text-lg`}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 dark:border-gray-900 text-center">
          <p className="text-gray-400">
            &copy; 2025 Marc Kyle Jimena. All rights reserved. Built with{' '}
            <span className="text-red-500">♥</span> and React
          </p>
        </div>
      </div>
    </footer>
  )
}
