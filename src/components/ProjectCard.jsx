import React from 'react'
import { Link } from 'react-router-dom'
import { getTechColors } from '../utils/techColors'

export default function ProjectCard({ project }) {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl project-card border border-gray-100 dark:border-gray-700">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 text-sm mb-4">
          {project.tags.map((tag) => {
            const colors = getTechColors(tag)
            return (
              <span 
                key={tag} 
                className={`${colors.bg} ${colors.text} ${colors.border} px-3 py-1 rounded-full font-medium border`}
              >
                {tag}
              </span>
            )
          })}
        </div>
        <a 
          href={project.link} 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium group/link"
        >
          View Project 
          <i className="fas fa-arrow-right group-hover/link:translate-x-2 transition-transform"></i>
        </a>
      </div>
    </div>
  )
}
