import React from 'react'

export default function Education() {
  const education = [
    {
      id: 1,
      institution: 'University of Cebu',
      degree: 'Bachelor of Science in Computer Science',
      period: '2021 - Present',
      location: 'Lapu-Lapu & Mandaue Campus',
      achievements: [
        'Relevant coursework in Data Structures, Algorithms, and Software Engineering',
        'Active participation in programming competitions and hackathons',
        'Member of Computer Science student organization'
      ]
    }
  ]

  const certifications = [
    {
      id: 1,
      name: 'React Development',
      issuer: 'Self-Learning & Projects',
      year: '2024'
    },
    {
      id: 2,
      name: 'Mobile App Development',
      issuer: 'React Native & Expo',
      year: '2024'
    },
    {
      id: 3,
      name: 'Full-Stack Development',
      issuer: 'Various Online Courses',
      year: '2023-2024'
    }
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Education & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certifications</span>
        </h2>
        
        {/* Education Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl font-bold mb-8 flex items-center text-gray-900 dark:text-white">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
              <i className="fas fa-graduation-cap text-white text-xl"></i>
            </div>
            Education
          </h3>
          
          {education.map((edu) => (
            <div key={edu.id} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-6 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{edu.degree}</h4>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">{edu.institution}</p>
                  <p className="text-gray-600 dark:text-gray-400 flex items-center">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    {edu.location}
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-flex items-center bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full font-semibold border border-blue-300 dark:border-blue-700">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    {edu.period}
                  </span>
                </div>
              </div>
              
              <div className="mt-6 bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                <h5 className="font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                  <i className="fas fa-star text-yellow-500 mr-2"></i>
                  Highlights:
                </h5>
                <ul className="space-y-3">
                  {edu.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start group">
                      <i className="fas fa-check-circle text-green-600 dark:text-green-400 mr-3 mt-1 group-hover:scale-125 transition-transform"></i>
                      <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
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
              <div key={cert.id} className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-purple-600 dark:border-purple-500 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
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
      </div>
    </section>
  )
}
