import React from 'react';
import './Tutor.css';

const Tutor = () => {
  const tutorInfo = {
    title: "Web Development Tutor",
    period: "2023-2024",
    highlights: [
      "Taught React, Vite, and CSS to 10+ students",
      "Created 50+ video tutorials",
      "5★ star rating from students"
    ],
    technologies: ["React", "Vite", "Tailwind CSS"]
  };

  return (
    <section className="tutor-section">
      <h2>Tutor</h2>
      <div className="tutor-card">
        <div className="tutor-header">
          <h3>{tutorInfo.title}</h3>
          <span className="period">{tutorInfo.period}</span>
        </div>
        <ul className="achievements">
          {tutorInfo.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
        <div className="tech-stack">
          {tutorInfo.technologies.map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tutor;