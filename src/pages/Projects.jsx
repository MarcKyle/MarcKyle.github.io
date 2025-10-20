import React from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">My Projects</h2>
        <p className="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-50 p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
            <p className="text-gray-700 mb-6">
              I'm constantly working on new projects and exploring new technologies. 
              Check out my GitHub for more of my work.
            </p>
            <a
              href="https://github.com/MarcKyle"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
            >
              <i className="fab fa-github mr-2"></i>
              Visit My GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
