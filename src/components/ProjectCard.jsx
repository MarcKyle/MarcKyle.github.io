import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md project-card">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2">{project.title}</h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 text-sm mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-gray-100 text-gray-800 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <a href={project.link} className="text-blue-600 hover:text-blue-800 font-medium">
          View Project <i className="fas fa-arrow-right ml-1"></i>
        </a>
      </div>
    </div>
  )
}
