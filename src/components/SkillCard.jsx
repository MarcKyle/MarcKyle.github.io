import React from 'react'

export default function SkillCard({ skill }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center skill-icon">
      <i className={`${skill.icon} text-4xl mb-4`}></i>
      <h3 className="font-bold">{skill.name}</h3>
    </div>
  )
}
