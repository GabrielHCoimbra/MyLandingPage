import './Section.css'
import MatrixBackground from '../MatrixBackground/matrixbackground.jsx'


export default function Section() {
return (
    <>
        <section id='initial'>
            <MatrixBackground />
            <div>
                <h1>Gabriel Viana</h1>
                <h2>Software Engineer</h2>
            </div>   
        </section>
       
        <section id="about">
            <h2>About me</h2>
            <div  id="conteiner-about-me">
                <div id="profile-picture-and-about-me">
                    <img src="../../../public/images/profile.png" alt="Profile Picture" id="profile-picture"/>
                    <p id="about-me"> 
                    I'm a lifelong learner, fascinated by learning and personal growth. Beyond technology, I'm interested in all subjects surrounding society, with particular emphasis on economics, sociology, and philosophy. I completed technical web development training at SENAI in 2022, but after finishing the course, I stepped away from the IT field due to my interests in economics. However, in 2025, I looked at the IT market with fresh eyes and a new perspective. Now more experienced and knowledgeable about the diverse opportunities in the sector, I returned to fullstack development learning and began my training with a focus on specializing in Business Intelligence & Machine Learning development.
                    </p>
                </div>
                
                <h3>Current Status</h3>
                <ul id="current-status-ul">
                    <li>💻 Pursuing a Technical Specialist degree in Information Systems Technologies and Programming;</li>
                    <li>📚 Currently learning React, Machine Learning with Azure & Data;</li>
                    <li>💪 Working in Portugal.</li>
                </ul>
            </div>
            
        </section>
        
        <section id="skills" className='mid'>
            <h2>Skills</h2>
            <p id="table">
                <table>
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
                </table>
            </p>
        </section>

        <section id="experience" className='mid'>
                <h2>Experience and Education</h2>
        </section>

        <section id="projects">
            <h2>Projects</h2>
            <div id='conteiner-projects'>
                <div className='projects'>
                    <h3>Title of the Project</h3>
                    <p className='desc-project'>A short description of the project</p>
                    <button className="button">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z" fill="white"></path>
                            </svg>
                            <p className="text">Go to Project</p>
                    </button>
                </div>
                <div className='projects'>
                    <button className="button">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z" fill="white"></path>
                        </svg>
                        <p className="text">Go to Project</p>
                    </button>
                </div>
            </div>
            
        </section>
        
        <section id="contact">
            <h2>Contacts</h2>
            <ul id="contact-links">
                <li>
                    <a href="mailto:gabriel.coimbra.viana@gmail.com" target="_blank">
                    <img src="https://skillicons.dev/icons?i=gmail" alt="Gmail" width="100" height="100"/>
                    </a>
                </li>
                

                <li>
                    <a href="https://github.com/GabrielHCoimbra" target="_blank">
                    <img src="https://skillicons.dev/icons?i=github" alt="GitHub" width="100" height="100"/>
                    </a>
                </li>
                

                <li>
                    <a href="https://www.linkedin.com/in/gabriel-henrique-coimbra-viana-413036241/" target="_blank">
                    <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" width="100" height="100"/>
                    </a>
                </li>
                
                <li>
                    <a href="https://www.instagram.com/gabrielhcv_/" target="_blank">
                        <img src="https://skillicons.dev/icons?i=instagram" alt="Instagram" width="100" height="100"/> 
                    </a>
                </li>

            </ul>
        </section>
    </>
)
}