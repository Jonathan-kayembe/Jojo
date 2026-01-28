import { useState, useEffect } from 'react'
import HeartCanvas from './components/HeartCanvas'
import AnimatedMessage from './components/AnimatedMessage'
import IntroScreen from './components/IntroScreen'
import './styles/main.css'

function App() {
  const [hasStarted, setHasStarted] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  
  // Récupérer le message depuis l'URL si présent
  const getMessageFromURL = () => {
    const params = new URLSearchParams(window.location.search)
    const customMessage = params.get('message')
    if (customMessage) {
      return decodeURIComponent(customMessage)
    }
    return "Hey Jojo,\n\nHappy Birthday\n\nMay God bless you abundantly\n\nMay He grant you many blessings,\nsuccess in all your projects,\ngood health, wisdom in your choices,\nstrength and perseverance in times of trial,\n\nand may the Lord walk with you,\nguide you, and protect you\nevery day of your life."
  }

  const message = getMessageFromURL()

  const handleStart = () => {
    setHasStarted(true)
    // Démarrer le message après que le cœur commence à apparaître
    setTimeout(() => {
      setShowMessage(true)
    }, 2000)
  }

  return (
    <div className="app-container">
      {!hasStarted ? (
        <IntroScreen onStart={handleStart} />
      ) : (
        <>
          <HeartCanvas />
          {showMessage && (
            <AnimatedMessage
              message={message}
              className="animated-message animated-message--in-heart"
            />
          )}
        </>
      )}
    </div>
  )
}

export default App

