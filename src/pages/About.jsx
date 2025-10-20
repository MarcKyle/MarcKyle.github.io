import React from 'react'
import { socialLinks } from '../data/socialLinks'

export default function About() {
  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="md:w-1/3">
              <img
                src="https://i.pinimg.com/474x/8a/5a/82/8a5a82fcf1f78395f2c7a21bf30de2ec.jpg"
                alt="Marc Kyle Jimena"
                className="w-full max-w-xs rounded-lg shadow-lg mx-auto"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">Marc Kyle Jimena</h3>
              <p className="text-lg mb-4">
                I'm a Computer Science Undergraduate and aspiring Software Engineer passionate about 
                building innovative solutions. My journey in tech has equipped me with a diverse skill 
                set in various programming languages and frameworks.
              </p>
              <p className="text-lg mb-4">
                I enjoy tackling complex problems and am constantly learning new technologies to expand 
                my expertise. My goal is to create software that not only works efficiently but also 
                provides a great user experience.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">What I Do</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <i className="fas fa-code text-3xl text-blue-600 mr-4 mt-1"></i>
                <div>
                  <h4 className="font-bold text-lg mb-2">Full-Stack Development</h4>
                  <p className="text-gray-700">
                    Building complete web applications from frontend to backend with modern frameworks and technologies.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-mobile-alt text-3xl text-purple-600 mr-4 mt-1"></i>
                <div>
                  <h4 className="font-bold text-lg mb-2">Mobile Development</h4>
                  <p className="text-gray-700">
                    Creating cross-platform mobile applications using React Native and modern mobile frameworks.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-database text-3xl text-green-600 mr-4 mt-1"></i>
                <div>
                  <h4 className="font-bold text-lg mb-2">Database Design</h4>
                  <p className="text-gray-700">
                    Designing and implementing efficient database solutions with SQL Server and other database systems.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-lightbulb text-3xl text-yellow-500 mr-4 mt-1"></i>
                <div>
                  <h4 className="font-bold text-lg mb-2">Problem Solving</h4>
                  <p className="text-gray-700">
                    Analyzing complex problems and developing creative, efficient solutions using best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`text-gray-800 ${link.hoverColor} transition`}
                  aria-label={link.name}
                >
                  <i className={`${link.icon} text-4xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
