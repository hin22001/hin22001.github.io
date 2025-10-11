import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      companyLink: "https://techcorp.com",
      period: "2022 - Present",
      description: "Leading development of enterprise web applications using React, Node.js, and AWS. Mentoring junior developers and implementing DevOps best practices.",
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Led a team of 5 developers on multiple projects",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Inc",
      companyLink: "https://digitalinnovations.com",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create responsive user interfaces.",
      achievements: [
        "Built 15+ responsive web applications",
        "Integrated third-party APIs and payment systems",
        "Improved code quality through testing and code reviews"
      ]
    }
  ];

  return (
    <section className="experience-section">
      <div className="experience-header">
        <h2>Professional Experience</h2>
        <p className="subtitle">A journey of continuous learning and impactful contributions</p>
      </div>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-content">
              <div className="role-header">
                <h3>{exp.title}</h3>
                <span className="period">{exp.period}</span>
              </div>
              <a href={exp.companyLink} className="company-name" target="_blank" rel="noopener noreferrer">
                {exp.company}
              </a>
              <p className="description">{exp.description}</p>
              <div className="achievements">
                <ul>
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="achievement-item">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;