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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Welcome to My Portfolio</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            I'm a Computer Science Undergraduate and aspiring Software Engineer passionate about 
            building innovative solutions. Explore my skills, projects, and get to know more about me.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/about" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              About Me
            </Link>
            <Link to="/skills" className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition">
              My Skills
            </Link>
            <Link to="/projects" className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition">
              View Projects
            </Link>
            <Link to="/contact" className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-900 transition">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Skills Preview */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {skills.slice(0, 4).map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/skills" className="text-blue-600 hover:text-blue-800 font-medium text-lg">
              View All Skills <i className="fas fa-arrow-right ml-1"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/projects" className="text-blue-600 hover:text-blue-800 font-medium text-lg">
              View All Projects <i className="fas fa-arrow-right ml-1"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
