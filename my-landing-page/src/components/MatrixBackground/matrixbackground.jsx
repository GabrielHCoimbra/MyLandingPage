// Matrix background effect using Canvas
// Efeito Matrix usando Canvas com melhor performance


import { useEffect, useRef } from 'react'
import './MatrixBackground.css'


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


const letters = '0123456789'
const fontSize = 30
let columns = canvas.width / fontSize
let drops = Array.from({ length: columns }).fill(1)


const draw = () => {
ctx.fillStyle = 'rgba(0, 0, 0, 0.08)'
ctx.fillRect(0, 0, canvas.width, canvas.height)


ctx.fillStyle = '#0f0'
ctx.font = `${fontSize}px monospace`


drops.forEach((y, index) => {
const text = letters[Math.floor(Math.random() * letters.length)]
ctx.fillText(text, index * fontSize, y * fontSize)


if (y * fontSize > canvas.height && Math.random() > 0.975) {
drops[index] = 0
}


drops[index]+= 0.4
})


requestAnimationFrame(draw)
}


draw()


return () => {
window.removeEventListener('resize', resize)
}
}, [])


return <canvas ref={canvasRef} className="matrix-canvas" />
}