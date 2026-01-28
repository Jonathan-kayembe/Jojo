import { useState, useEffect } from 'react'

const AnimatedMessage = ({ message }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < message.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + message[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 50) // Vitesse d'écriture (50ms par caractère)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, message])

  // Séparer les lignes pour l'affichage
  const lines = displayedText.split('\n')

  return (
    <div className="animated-message">
      {lines.map((line, index) => (
        <div key={index} className="message-line">
          {line}
          {index === lines.length - 1 && currentIndex < message.length && (
            <span className="cursor">|</span>
          )}
        </div>
      ))}
    </div>
  )
}

export default AnimatedMessage

