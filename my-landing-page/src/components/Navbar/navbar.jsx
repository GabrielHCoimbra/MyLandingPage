// Navigation bar component
// Barra de navegação que se fixa após o scroll


import { useEffect, useState } from 'react'
import './Navbar.css'


export default function Navbar() {
const [fixed, setFixed] = useState(false)


useEffect(() => {
const onScroll = () => {
setFixed(window.scrollY > window.innerHeight - 80)
}


window.addEventListener('scroll', onScroll)
return () => window.removeEventListener('scroll', onScroll)
}, [])


return (
<nav className={fixed ? 'navbar fixed' : 'navbar'}>
    <ul>
        <li><a href="#initial">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>
)
}