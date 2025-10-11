// Project section component with styled elements
import React from 'react';
import './Project.css';

const Project = () => {

  const projects = [
    {
      title: "E-commerce Platform",
      icon: "🛍️",
      description: "Full-stack development with React and Vite, integrated",
      features: [
        "Markdown support",
        "responsive design",
        "Resprate Stripe palmry"
      ],
      tech: ["React", "Vite"]
    },
    {
      title: "Personal Blog Weather App",
      icon: "☀️",
      description: "Full-stack development with React and Stripe payment",
      features: [
        "real-time API integration",
        "geolocation feature"
      ],
      tech: ["Vite", "Tailwind CSS"]
    }
  ];

  return (
    <section className="projects-section">
      <h2>Project</h2>
      <div className="carousel-container">
        {projects.map((project, index) => (
          <div key={index}>
            <div className="project-wrapper">
              <div className="project-card">
                <span className="project-icon">{project.icon}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="tech-stack">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;