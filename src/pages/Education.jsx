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
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Education & Certifications</h2>
        
        {/* Education Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <i className="fas fa-graduation-cap text-blue-600 mr-3"></i>
            Education
          </h3>
          
          {education.map((edu) => (
            <div key={edu.id} className="bg-white p-8 rounded-lg shadow-md mb-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                  <p className="text-xl text-blue-600 font-semibold mb-1">{edu.institution}</p>
                  <p className="text-gray-600">{edu.location}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                    {edu.period}
                  </span>
                </div>
              </div>
              
              <div className="mt-6">
                <h5 className="font-bold text-gray-800 mb-3">Highlights:</h5>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-check-circle text-green-600 mr-3 mt-1"></i>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <i className="fas fa-certificate text-purple-600 mr-3"></i>
            Certifications & Learning
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div key={cert.id} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
                <h4 className="font-bold text-lg text-gray-900 mb-2">{cert.name}</h4>
                <p className="text-gray-600 mb-1">{cert.issuer}</p>
                <p className="text-sm text-gray-500">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Learning Section */}
        <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-center">Continuous Learning</h3>
          <p className="text-center text-lg">
            I believe in lifelong learning and constantly updating my skills. I regularly engage in 
            online courses, tutorials, and hands-on projects to stay current with the latest technologies 
            and best practices in software development.
          </p>
        </div>
      </div>
    </section>
  )
}
