import React from 'react'
import { educationData, certifications } from '@constants'
import { useModal } from '@hooks'

export default function Education() {
  const { isOpen: modalOpen, activeContent: activePaper, openModal, closeModal } = useModal()

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Education & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certifications</span>
        </h2>
        
        {/* Education Section with Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl font-bold mb-8 flex items-center text-gray-900 dark:text-white">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
              <i className="fas fa-graduation-cap text-white text-xl"></i>
            </div>
            Education
          </h3>
          
          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 hidden md:block"></div>
            
            {educationData.map((edu, index) => (
              <div key={edu.id} className="relative mb-12 md:pl-20 group">
                {/* Timeline Dot */}
                <div className="absolute left-1 md:left-3 top-8 w-5 h-5 bg-blue-600 border-4 border-white dark:border-gray-900 rounded-full shadow-lg group-hover:scale-150 group-focus-within:scale-150 transition-transform duration-300 z-10"></div>
                
                {/* Education Card */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:scale-105 focus-within:scale-105 transition-all duration-300 ml-12 md:ml-0">
                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    {/* Institution Image */}
                    <div className="flex-shrink-0 relative group/image">
                      <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl flex items-center justify-center overflow-hidden border-2 border-blue-200 dark:border-blue-700 shadow-lg group-hover:scale-110 transition-transform duration-300 p-2">
                        <img 
                          src={edu.image} 
                          alt={`${edu.institution} logo`}
                          className="w-full h-full object-contain rounded-xl"
                          onError={(e) => {
                            // Fallback to icon if image doesn't load
                            e.target.style.display = 'none'
                            e.target.parentElement.innerHTML = '<i class="fas fa-university text-4xl text-blue-600 dark:text-blue-400"></i>'
                          }}
                        />
                      </div>
                      
                      {/* External Link Button - Shows on Image Hover */}
                      <a 
                        href={edu.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 w-24 h-24 md:w-28 md:h-28 bg-blue-600/90 hover:bg-blue-700/90 text-white rounded-2xl flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 shadow-lg backdrop-blur-sm"
                        title={`Visit ${edu.institution} website`}
                      >
                        <i className="fas fa-external-link-alt text-2xl"></i>
                      </a>
                    </div>

                    {/* Education Details */}
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                        <div className="flex-1">
                          <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{edu.degree}</h4>
                          <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">{edu.institution}</p>
                          <p className="text-gray-600 dark:text-gray-400 flex items-center">
                            <i className="fas fa-map-marker-alt mr-2"></i>
                            {edu.location}
                          </p>
                        </div>
                        <div className="mt-4 lg:mt-0">
                          <span className="inline-flex items-center bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full font-semibold border border-blue-300 dark:border-blue-700">
                            <i className="fas fa-calendar-alt mr-2"></i>
                            {edu.period}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievements Section */}
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="mt-6 bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                      <h5 className="font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                        <i className="fas fa-star text-yellow-500 mr-2"></i>
                        Highlights:
                      </h5>
                      <ul className="space-y-3">
                        {edu.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start group/item">
                            <i className="fas fa-check-circle text-green-600 dark:text-green-400 mr-3 mt-1 group-hover/item:scale-125 transition-transform"></i>
                            <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl font-bold mb-8 flex items-center text-gray-900 dark:text-white">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mr-4">
              <i className="fas fa-certificate text-white text-xl"></i>
            </div>
            Certifications & Learning
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div key={cert.id} className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl hover:-translate-y-1 hover:scale-105 focus-within:scale-105 transition-all duration-300">
                {/* Certificate Image Container */}
                <div className="relative h-64 bg-gray-100 dark:bg-gray-700 overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                    onClick={() => openModal(cert)}
                    style={{ cursor: 'pointer' }}
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <button 
                      onClick={() => openModal(cert)}
                      className="opacity-0 group-hover:opacity-100 bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-semibold shadow-lg transform scale-90 group-hover:scale-100 transition-all duration-300"
                    >
                      <i className="fas fa-expand-alt mr-2"></i>
                      View Full Size
                    </button>
                  </div>
                </div>
                
                {/* Certificate Info */}
                <div className="p-6 border-t-4 border-purple-600 dark:border-purple-500">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <i className="fas fa-award text-purple-600 dark:text-purple-400 text-xl"></i>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{cert.name}</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">{cert.issuer}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500 flex items-center">
                        <i className="fas fa-calendar mr-2"></i>
                        {cert.year}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Learning Section */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white p-10 rounded-2xl shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <i className="fas fa-lightbulb text-4xl"></i>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-center">Continuous Learning</h3>
            <p className="text-center text-lg opacity-90 leading-relaxed">
              I believe in lifelong learning and constantly updating my skills. I regularly engage in 
              online courses, tutorials, and hands-on projects to stay current with the latest technologies 
              and best practices in software development.
            </p>
          </div>
        </div>
        {/* Modal overlay */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop: blur + dim */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeModal}
              aria-hidden="true"
            />

            {/* Modal panel */}
            <div className="relative max-w-5xl w-full mx-4">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
                {/* Modal Header */}
                <div className="flex items-start justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-800">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{activePaper?.name}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{activePaper?.issuer} • {activePaper?.year}</p>
                  </div>
                  <button 
                    onClick={closeModal} 
                    aria-label="Close" 
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 bg-white dark:bg-gray-700 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 bg-gray-50 dark:bg-gray-800">
                  <div className="w-full max-h-[70vh] flex items-center justify-center overflow-auto bg-white dark:bg-gray-900 rounded-lg shadow-inner">
                    {activePaper && (
                      <img 
                        src={activePaper.image} 
                        alt={activePaper.name} 
                        className="max-h-full max-w-full object-contain p-4" 
                      />
                    )}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-4 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <i className="fas fa-info-circle mr-2"></i>
                    Press ESC to close
                  </p>
                  <button
                    onClick={closeModal}
                    className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
};

// Modal portal markup injected at end of file for bundlers that support JSX in same file
// We add the modal just after the component to avoid duplicating state logic in other files.