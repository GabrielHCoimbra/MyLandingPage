import React from "react";
import { useTranslation } from "react-i18next";
import "./experience.css";

export default function Experience() {
  const { t } = useTranslation();

  const educationItems = t('experience.educationItems', { returnObjects: true });
  const professionalItems = t('experience.professionalItems', { returnObjects: true });

  return (
    <div className="experience-container">
      {/* Education Section */}
      <div className="timeline-section">
        <h3 className="timeline-title">{t('experience.education')}</h3>
        <div className="timeline">
          {educationItems.map((edu) => (
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
        <h3 className="timeline-title">{t('experience.professional')}</h3>
        <div className="timeline">
          {professionalItems.map((exp) => (
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
