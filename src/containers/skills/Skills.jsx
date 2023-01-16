import React from 'react'
import './skills.css'

const Skills = () => {
    const skills = [
        "Front-End Web Development",
        "Back-End Web Development",
        "Full-Stack Web Development",
        "Machine Learning"
    ]
  return (
    <section id="skills">
        <div className="container_padding">
            <h1>Skills</h1>
            <div className="skills_content">
                {skills && skills.map((skill) => <h2 key={skill}>{skill}</h2>)}
            </div>
        </div>
    </section>
  )
}

export default Skills