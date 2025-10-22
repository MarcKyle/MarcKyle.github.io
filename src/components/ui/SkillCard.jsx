import React from 'react'

export default function SkillCard({ skill }) {
  return (
    <div className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl text-center skill-icon border border-gray-100 dark:border-gray-700 transition-all duration-300">
      <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
        <i className={`${skill.icon} text-5xl bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent`}></i>
      </div>
      <h3 className="font-bold text-gray-900 dark:text-white">{skill.name}</h3>
    </div>
  )
}
