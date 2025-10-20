import React from 'react'
import { skills } from '../data/skills'
import SkillCard from '../components/SkillCard'

export default function Skills() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Here are the technologies and tools I work with to bring ideas to life.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">Skill Categories</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-2xl shadow-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-3">
                  <i className="fas fa-laptop-code text-white text-xl"></i>
                </div>
                <h4 className="font-bold text-xl text-blue-600 dark:text-blue-400">Frontend</h4>
              </div>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                  HTML5 & CSS3
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                  JavaScript (ES6+)
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                  React & React Native
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                  Responsive Design
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-2xl shadow-lg border border-green-200 dark:border-green-800">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-3">
                  <i className="fas fa-server text-white text-xl"></i>
                </div>
                <h4 className="font-bold text-xl text-green-600 dark:text-green-400">Backend</h4>
              </div>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-600 mr-2"></i>
                  Node.js
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-600 mr-2"></i>
                  C# / .NET
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-600 mr-2"></i>
                  Python / Django
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-600 mr-2"></i>
                  RESTful APIs
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-2xl shadow-lg border border-purple-200 dark:border-purple-800">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mr-3">
                  <i className="fas fa-database text-white text-xl"></i>
                </div>
                <h4 className="font-bold text-xl text-purple-600 dark:text-purple-400">Database & Tools</h4>
              </div>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-purple-600 mr-2"></i>
                  SQL Server
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-purple-600 mr-2"></i>
                  SQLite
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-purple-600 mr-2"></i>
                  Firebase
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-purple-600 mr-2"></i>
                  Git & GitHub
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
