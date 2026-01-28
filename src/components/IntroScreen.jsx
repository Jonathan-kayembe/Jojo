import { useEffect, useRef } from 'react'

const IntroScreen = ({ onStart }) => {
  const heartRef = useRef(null)

  // Fonction pour dessiner le cœur
  useEffect(() => {
    const canvas = heartRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = 120
    canvas.height = 110

    // Dessiner un cœur rose clair
    ctx.fillStyle = '#FFB6C1'
    ctx.beginPath()
    
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const size = 40
    
    // Forme de cœur
    ctx.moveTo(centerX, centerY + size * 0.3)
    
    // Côté gauche
    ctx.bezierCurveTo(
      centerX, centerY,
      centerX - size / 2, centerY,
      centerX - size / 2, centerY + size * 0.3
    )
    
    // Côté gauche bas
    ctx.bezierCurveTo(
      centerX - size / 2, centerY + size * 0.65,
      centerX, centerY + size * 0.65,
      centerX, centerY + size
    )
    
    // Côté droit bas
    ctx.bezierCurveTo(
      centerX, centerY + size * 0.65,
      centerX + size / 2, centerY + size * 0.65,
      centerX + size / 2, centerY + size * 0.3
    )
    
    // Côté droit
    ctx.bezierCurveTo(
      centerX + size / 2, centerY,
      centerX, centerY,
      centerX, centerY + size * 0.3
    )
    
    ctx.closePath()
    ctx.fill()
  }, [])

  return (
    <div className="intro-screen">
      <div className="intro-content">
        <canvas 
          ref={heartRef} 
          className="intro-heart" 
          onClick={onStart}
        />
        <div className="intro-text">
          <div className="click-me">Click Me:)</div>
          <div className="birthday-queen">Birthday Queen !</div>
          <div className="underline"></div>
        </div>
      </div>
    </div>
  )
}

export default IntroScreen

