import React, { useEffect, useState } from "react";
import "./experience.css";
import experienceData from "../../data/experience.json";

export default function Experience() {
  const [data, setData] = useState({ education: [], experience: [] });

  useEffect(() => {
    // Simulates fetching from JSON (in case you want to fetch from API later)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setData(experienceData);
  }, []);

  return (
    <div className="experience-container">
      {/* Education Section */}
      <div className="timeline-section">
        <h3 className="timeline-title">Education</h3>
        <div className="timeline">
          {data.education.map((edu) => (
            <div key={edu.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4 className="timeline-heading">{edu.course}</h4>
                <p className="timeline-institution">{edu.institution}</p>
                <p className="timeline-date">
                  {edu.startDate} - {edu.endDate}
                </p>
                <p className="timeline-description">{edu.description}</p>
                <div className="timeline-skills">
                  {edu.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="timeline-section">
        <h3 className="timeline-title">Professional</h3>
        <div className="timeline">
          {data.experience.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4 className="timeline-heading">{exp.position}</h4>
                <p className="timeline-institution">{exp.company}</p>
                <p className="timeline-date">
                  {exp.startDate} - {exp.endDate}
                </p>
                <p className="timeline-description">{exp.description}</p>
                <div className="timeline-skills">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
