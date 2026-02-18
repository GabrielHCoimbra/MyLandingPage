import './Section.css'
import MatrixBackground from '../MatrixBackground/matrixbackground.jsx'
import Project from '../Projects/project.jsx'
import Experience from '../Experience/experience.jsx'
import { useTranslation } from 'react-i18next'

export default function Section() {
  const { t } = useTranslation()

  return (
    <>
      <section id='initial'>
        <MatrixBackground />
        <div>
          <h1>{t('hero.title')}</h1>
          <h2>{t('hero.subtitle')}</h2>
        </div>   
      </section>
     
      <section id="about">
        <h2>{t('about.title')}</h2>
        <div id="conteiner-about-me">
          <div id="profile-picture-and-about-me">
            <img src="../../../public/images/profile.png" alt="Profile Picture" id="profile-picture"/>
            <p id="about-me"> 
              {t('about.description')}
            </p>
          </div>
          
          <h3>{t('about.currentStatus')}</h3>
          <ul id="current-status-ul">
            <li>{t('about.status1')}</li>
            <li>{t('about.status2')}</li>
            <li>{t('about.status3')}</li>
          </ul>
        </div>
        
      </section>
      
      <section id="skills" className='mid'>
        <h2>{t('skills.title')}</h2>
        {/* ... rest of skills section ... */}
      </section>

      <section id="experience" className='mid'>
        <h2>{t('experience.title')}</h2>
        <Experience />
      </section>

      <section id="projects">
        <h2>{t('projects.title')}</h2>
        <div id="conteiner-projects">
          <Project />
        </div>
      </section>

      <section id="contact">
        <h2>{t('contact.title')}</h2>
        {/* ... rest of contact section ... */}
      </section>
    </>
  )
}
