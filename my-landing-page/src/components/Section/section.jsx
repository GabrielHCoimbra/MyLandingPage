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
                <p id="about-me">I'm a lifelong learner, fascinated by learning and personal growth. Beyond technology, I'm interested in all subjects surrounding society, with particular emphasis on economics, sociology, and philosophy. I completed technical web development training at SENAI in 2022, but after finishing the course, I stepped away from the IT field due to my interests in economics. However, in 2025, I looked at the IT market with fresh eyes and a new perspective. Now more experienced and knowledgeable about the diverse opportunities in the sector, I returned to fullstack development learning and began my training with a focus on specializing in Business Intelligence & Machine Learning development.</p>
                <h3>Current Status</h3>
                <ul id="current-status-ul">
                    <li>💻 Pursuing a Technical Specialist degree in Information Systems Technologies and Programming;</li>
                    <li>📚 Currently learning React, Machine Learning with Azure & Data;</li>
                    <li>💪 Working in Portugal.</li>
                </ul>
            </div>
            
        </section>
        
        <section id="skills">
            <h2>Skills</h2>
            <p id="table">
                <table>
                    <tr>
                        <td align="center" width="96">
                        <a href="https://developer.mozilla.org/docs/Web/CSS">
                            <img src="https://skillicons.dev/icons?i=css" alt="icon" width="30" height="30"/>
                        </a>
                        <br/>CSS
                        </td>
                        <td align="center" width="96">
                        <a href="https://git-scm.com/">
                            <img src="https://skillicons.dev/icons?i=git" alt="icon" width="30" height="30"/>
                        </a>
                        <br/>Git
                        </td>
                        <td align="center" width="96">
                        <a href="https://github.com/">
                            <img src="https://skillicons.dev/icons?i=github" alt="icon" width="30" height="30"/>
                        </a>
                        <br/>Github
                        </td>
                        <td align="center" width="96">
                        <a href="https://developer.mozilla.org/docs/Web/HTML">
                            <img src="https://skillicons.dev/icons?i=html" alt="icon" width="30" height="30"/>
                        </a>
                        <br/>HTML
                        </td>
                        <td align="center" width="96">
                        <a href="https://azure.microsoft.com/en-us/">
                            <img src="https://skillicons.dev/icons?i=azure" alt="icon" width="30" height="30"/>
                        </a>
                        <br/>Azure
                        </td>
                    </tr>
                    <tr>  
                        <td align="center" width="96">
                        <a href="https://www.javascript.com/">
                            <img src="https://skillicons.dev/icons?i=js" alt="icon" width="30" height="30"/>
                        </a>
                        <br/>Javascript
                        </td>
                        <td align="center" width="96">
                        <a href="https://www.mysql.com/">
                            <img src="https://skillicons.dev/icons?i=mysql" alt="icon" width="30" height="30"/>
                        </a>
                        <br/>MySql
                        </td>
                        <td align="center" width="96">
                        <a href="https://www.python.org/">
                            <img src="https://skillicons.dev/icons?i=py" alt="icon" width="30" height="30"/>
                        </a>
                        <br/>Python
                        </td>
                        <td align="center" width="96">
                        <a href="https://react.dev/">
                            <img src="https://skillicons.dev/icons?i=react" alt="icon" width="30" height="30"/>
                        </a>
                        <br/>React
                        </td>
                        <td align="center" width="96">
                        <a href="https://www.php.net/">
                            <img src="https://skillicons.dev/icons?i=php" alt="icon" width="30" height="30"/>
                        </a>
                        <br />PHP
                        </td>
                    </tr>
                </table>
            </p>
        </section>
        
        <section id="contact">
            <h2>Contacts</h2>
            <p id="contact-links">
                - Email pessoal:
                <a href="mailto:gabriel.coimbra.viana@gmail.com">
                
                </a>

                - Perfil Github:
                <a href="https://github.com/GabrielHCoimbra">
                    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" width="30" height="30"/>
                </a>

                - Perfil LinkedIn:
                <a href="https://www.linkedin.com/in/gabriel-henrique-coimbra-viana-413036241/">
                    <img src="" alt="" />
                </a>
            </p>
        </section>
    </>
)
}