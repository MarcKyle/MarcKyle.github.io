import React from 'react'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-gray-300 dark:bg-gray-700"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full transition-transform duration-300 flex items-center justify-center ${
          isDark ? 'translate-x-7 bg-slate-800' : 'translate-x-0 bg-yellow-400'
        }`}
      >
        {isDark ? (
          <i className="fas fa-moon text-yellow-300 text-xs"></i>
        ) : (
          <i className="fas fa-sun text-white text-xs"></i>
        )}
      </div>
    </button>
  )
}
