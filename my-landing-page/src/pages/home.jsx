// Home page layout
// Estrutura principal da página inicial


import MatrixBackground from '../components/MatrixBackground/MatrixBackground'
import Navbar from '../components/Navbar/Navbar'


export default function Home() {
return (
<>
<MatrixBackground />
<Navbar />


<section id="hero">
<h1>Gabriel Viana</h1>
<h2>Software Engineer</h2>
</section>


<section id="about">
<h2>Sobre mim</h2>
<p>Conteúdo conforme README</p>
</section>
</>
)
}