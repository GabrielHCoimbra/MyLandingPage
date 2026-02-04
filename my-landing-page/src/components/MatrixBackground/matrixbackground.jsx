// Matrix background effect using Canvas
// Efeito Matrix usando Canvas com melhor performance

import { useEffect, useRef } from 'react'
import './matrixbackground.css'

export default function MatrixBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    // Resize canvas to window size
    // Ajusta o canvas ao tamanho da janela
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    // Cria as variaveis de texto que aparecerão na tela
    const letters = '0123456789'.split('')
    const fontSize = 30
    let columns = canvas.width / fontSize
    let drops = []

    for (let x = 0; x < columns; x++) {
      drops[x] = 1
    }

    let animationId = null

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#0f0'
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height || Math.random() > 0.95) {
          drops[i] = 0
        }

        drops[i]++
      }

      animationId = requestAnimationFrame(draw)
    }
     
    draw()
    

    return () => {
      window.removeEventListener('resize', resize)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="matrix-canvas" />
}