import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import { skills } from '../data/skills'
import { projects } from '../data/projects'
import SkillCard from '../components/SkillCard'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Quick About Preview */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Welcome to My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm a Computer Science Undergraduate and aspiring Software Engineer passionate about 
            building innovative solutions. Explore my skills, projects, and get to know more about me.
          </p>
        </div>
      </section>

      {/* Featured Skills Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Technologies I work with</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {skills.slice(0, 4).map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/skills" 
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-lg group"
            >
              View All Skills 
              <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Some of my recent work</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-lg group"
            >
              View All Projects 
              <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
