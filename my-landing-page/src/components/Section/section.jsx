import './Section.css'
import MatrixBackground from '../MatrixBackground/matrixbackground.jsx'
import Project from '../Projects/project.jsx'
import Experience from '../Experience/experience.jsx'
import { useTranslation } from 'react-i18next'
import ProfilePicture from '../../../public/images/profile.png'


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
            <img src={ProfilePicture} alt="Profile Picture" id="profile-picture"/>
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
        <p id="table">
          <table>
            <tbody>
              <tr>
                <td align="center">
                  <a href="https://developer.mozilla.org/docs/Web/CSS">
                    <img src="https://skillicons.dev/icons?i=css" alt="icon" width="30" height="30"/>
                  </a>
                  <br/>CSS
                </td>
                <td align="center">
                  <a href="https://git-scm.com/">
                    <img src="https://skillicons.dev/icons?i=git" alt="icon" width="30" height="30"/>
                  </a>
                  <br/>Git
                </td>
                <td align="center">
                  <a href="https://github.com/">
                    <img src="https://skillicons.dev/icons?i=github" alt="icon" width="30" height="30"/>
                  </a>
                  <br/>Github
                </td>
                <td align="center">
                  <a href="https://developer.mozilla.org/docs/Web/HTML">
                    <img src="https://skillicons.dev/icons?i=html" alt="icon" width="30" height="30"/>
                  </a>
                  <br/>HTML
                </td>
                <td align="center">
                  <a href="https://azure.microsoft.com/en-us/">
                    <img src="https://skillicons.dev/icons?i=azure" alt="icon" width="30" height="30"/>
                  </a>
                  <br/>Azure
                </td>
              </tr>
              <tr>  
                <td align="center">
                  <a href="https://www.javascript.com/">
                    <img src="https://skillicons.dev/icons?i=js" alt="icon" />
                  </a>
                  <br/>Javascript
                </td>
                <td align="center">
                  <a href="https://www.mysql.com/">
                    <img src="https://skillicons.dev/icons?i=mysql" alt="icon" />
                  </a>
                  <br/>MySql
                </td>
                <td align="center">
                  <a href="https://www.python.org/">
                    <img src="https://skillicons.dev/icons?i=py" alt="icon" />
                  </a>
                  <br/>Python
                </td>
                <td align="center">
                  <a href="https://react.dev/">
                    <img src="https://skillicons.dev/icons?i=react" alt="icon" />
                  </a>
                  <br/>React
                </td>
                <td align="center">
                  <a href="https://www.php.net/">
                    <img src="https://skillicons.dev/icons?i=php" alt="icon" />
                  </a>
                  <br />PHP
                </td>
              </tr>
            </tbody>
          </table>
        </p>
      </section>

      <section id="experience" className='mid'>
        <h2 className='title'>{t('experience.title')}</h2>
        <Experience />
      </section>

      <section id="projects">
        <h2 className='title'>{t('projects.title')}</h2>
        <div id='conteiner-projects'>
          <Project link={"https://github.com/GabrielHCoimbra/LabAzureAI"} />
          <Project link={"https://github.com/GabrielHCoimbra/Gym-System"} />
          <Project link={"https://github.com/GabrielHCoimbra/LabAzureML"} />
          <Project link={"https://github.com/GabrielHCoimbra/padroes-de-commits"} />
          <Project link={"https://github.com/GabrielHCoimbra/SENAI-Class-Manager"} />
          <Project link={"https://github.com/GabrielHCoimbra/Toronto-Raptors-website"} />
        </div>
        
      </section>
      
      <section id="contact">
        <h2>{t('contact.title')}</h2>
        <ul id="contact-links">
          <li>
            <a href="mailto:gabriel.coimbra.viana@gmail.com" target="_blank" rel="noreferrer">
              <img src="https://skillicons.dev/icons?i=gmail" alt="Gmail" width="100" height="100"/>
            </a>
          </li>
          
          <li>
            <a href="https://github.com/GabrielHCoimbra" target="_blank" rel="noreferrer">
              <img src="https://skillicons.dev/icons?i=github" alt="GitHub" width="100" height="100"/>
            </a>
          </li>
          
          <li>
            <a href="https://www.linkedin.com/in/gabriel-henrique-coimbra-viana-413036241/" target="_blank" rel="noreferrer">
              <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" width="100" height="100"/>
            </a>
          </li>
          
          <li>
            <a href="https://www.instagram.com/gabrielhcv_/" target="_blank" rel="noreferrer">
              <img src="https://skillicons.dev/icons?i=instagram" alt="Instagram" width="100" height="100"/> 
            </a>
          </li>

        </ul>
      </section>
    </>
  )
}