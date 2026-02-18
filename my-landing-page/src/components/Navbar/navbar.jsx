// Navigation bar component
// Barra de navegação que se fixa após o scroll

import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Navbar.css'

export default function Navbar() {
  const [fixed, setFixed] = useState(false)
  const { t } = useTranslation()

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
        <li><a href="#initial">{t('nav.home')}</a></li>
        <li><a href="#about">{t('nav.about')}</a></li>
        <li><a href="#skills">{t('nav.skills')}</a></li>
        <li><a href="#contact">{t('nav.contact')}</a></li>
      </ul>
    </nav>
  )
}