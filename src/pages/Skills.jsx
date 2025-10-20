import React from 'react'
import { skills } from '../data/skills'
import SkillCard from '../components/SkillCard'

export default function Skills() {
  return (
    <section className="py-16 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">My Skills</h2>
        <p className="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Here are the technologies and tools I work with to bring ideas to life.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Skill Categories</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-3 text-blue-600">Frontend</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• HTML5 & CSS3</li>
                <li>• JavaScript (ES6+)</li>
                <li>• React & React Native</li>
                <li>• Responsive Design</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-3 text-green-600">Backend</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Node.js</li>
                <li>• C# / .NET</li>
                <li>• Python / Django</li>
                <li>• RESTful APIs</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-3 text-purple-600">Database & Tools</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• SQL Server</li>
                <li>• SQLite</li>
                <li>• Firebase</li>
                <li>• Git & GitHub</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
