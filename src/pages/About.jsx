import React from 'react'
import { socialLinks } from '../data/socialLinks'
import profile from '../assets/profile/main.png'

export default function About() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
        </h2>
        
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row items-center gap-10 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
            <div className="md:w-1/3">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <img
                  src={profile}
                  alt="Marc Kyle Jimena"
                  className="relative w-full max-w-xs rounded-2xl shadow-2xl mx-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="md:w-2/3 space-y-4">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Marc Kyle Jimena</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a Computer Science Undergraduate and aspiring Software Engineer passionate about 
                building innovative solutions. My journey in tech has equipped me with a diverse skill 
                set in various programming languages and frameworks.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I enjoy tackling complex problems and am constantly learning new technologies to expand 
                my expertise. My goal is to create software that not only works efficiently but also 
                provides a great user experience.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">What I Do</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group flex items-start p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 hover:shadow-lg transition-all duration-300">
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-blue-600 text-white mr-4 group-hover:scale-110 transition-transform">
                  <i className="fas fa-code text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">Full-Stack Development</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Building complete web applications from frontend to backend with modern frameworks and technologies.
                  </p>
                </div>
              </div>
              <div className="group flex items-start p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 hover:shadow-lg transition-all duration-300">
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-purple-600 text-white mr-4 group-hover:scale-110 transition-transform">
                  <i className="fas fa-mobile-alt text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">Mobile Development</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Creating cross-platform mobile applications using React Native and modern mobile frameworks.
                  </p>
                </div>
              </div>
              <div className="group flex items-start p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 hover:shadow-lg transition-all duration-300">
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-green-600 text-white mr-4 group-hover:scale-110 transition-transform">
                  <i className="fas fa-database text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">Database Design</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Designing and implementing efficient database solutions with SQL Server and other database systems.
                  </p>
                </div>
              </div>
              <div className="group flex items-start p-6 rounded-xl bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 hover:shadow-lg transition-all duration-300">
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-yellow-500 text-white mr-4 group-hover:scale-110 transition-transform">
                  <i className="fas fa-lightbulb text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">Problem Solving</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Analyzing complex problems and developing creative, efficient solutions using best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl text-center">
            <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Connect With Me</h3>
            <div className="flex justify-center flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 text-gray-800 dark:text-white hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
                  aria-label={link.name}
                >
                  <i className={`${link.icon} text-2xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
