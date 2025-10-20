import React from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 min-h-screen transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-10 rounded-2xl max-w-2xl mx-auto shadow-xl border border-gray-200 dark:border-gray-600">
            <div className="mb-6">
              <i className="fab fa-github text-6xl text-gray-800 dark:text-white"></i>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Want to see more?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
              I'm constantly working on new projects and exploring new technologies. 
              Check out my GitHub for more of my work.
            </p>
            <a
              href="https://github.com/MarcKyle"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-700 dark:to-gray-600 text-white px-8 py-4 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-gray-500/50 transition-all duration-300 font-medium"
            >
              <i className="fab fa-github"></i>
              Visit My GitHub
              <i className="fas fa-external-link-alt text-sm"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
