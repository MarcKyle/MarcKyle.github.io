import React, { useState } from 'react'
import { socialLinks } from '../data/socialLinks'
import cvFile from '../assets/documents/Curriculum_Vitae_JIMENA_MARC_KYLE.pdf'

export default function Contact() {
  const [emailHovered, setEmailHovered] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)
  const email = 'jimena.marckyle123@gmail.com'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Contact <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
        </h2>
        <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out through social media!
        </p>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Get In Touch</h3>
            
            <div className="space-y-6">
              <div 
                className="flex items-start group relative overflow-hidden"
                onMouseEnter={() => setEmailHovered(true)}
                onMouseLeave={() => setEmailHovered(false)}
              >
                <div className={`flex items-center transition-all duration-500 ease-in-out ${
                  emailHovered ? 'pr-4' : 'pr-0'
                }`}>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <i className="fas fa-envelope text-xl text-blue-600 dark:text-blue-400"></i>
                  </div>
                  
                  <div className={`ml-4 transition-all duration-500 ease-in-out ${
                    emailHovered ? 'opacity-100 max-w-md' : 'opacity-0 max-w-0'
                  } overflow-hidden`}>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1 whitespace-nowrap">Email</h4>
                    <div className="flex items-center gap-3">
                      <p className="text-gray-600 dark:text-gray-400 whitespace-nowrap">{email}</p>
                      <button
                        onClick={handleCopyEmail}
                        className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors flex items-center gap-1.5"
                        title="Copy email"
                      >
                        <i className={`fas ${emailCopied ? 'fa-check' : 'fa-copy'} text-xs`}></i>
                        {emailCopied ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                  </div>
                </div>
                
                {!emailHovered && (
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">Hover to reveal</p>
                  </div>
                )}
              </div>
              
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <i className="fas fa-map-marker-alt text-xl text-purple-600 dark:text-purple-400"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Cebu, Philippines</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Connect on Social Media</h3>
            <p className="mb-6 opacity-90">Follow me on social media for updates and more!</p>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/20 backdrop-blur-sm text-white w-14 h-14 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-110"
                  aria-label={link.name}
                >
                  <i className={`${link.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 dark:border-blue-500 p-6 rounded-r-xl">
            <div className="flex items-start">
              <i className="fas fa-info-circle text-blue-600 dark:text-blue-400 text-xl mr-3 mt-1"></i>
              <div>
                <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-2">Let's Connect!</h4>
                <p className="text-blue-800 dark:text-blue-400 text-sm">
                  Feel free to reach out through any of my social media channels. I'm always open to discussing new projects, creative ideas, or opportunities to collaborate!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-file-download text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Download My CV</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Get a comprehensive overview of my skills, experience, and qualifications.
              </p>
              <a
                href={cvFile}
                download="Curriculum_Vitae_JIMENA_MARC_KYLE.pdf"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <i className="fas fa-download"></i>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
