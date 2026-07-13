import { useEffect } from 'react'
import './App.css'
import { useWordChain } from './hooks/useWordChain.js'
import { useLeaderboard } from './hooks/useLeaderboard.js'
import { WordInput } from './components/WordInput.jsx'
import { WordChain } from './components/WordChain.jsx'
import { Scoreboard } from './components/Scoreboard.jsx'
import { Feedback } from './components/Feedback.jsx'
import { Hint } from './components/Hint.jsx'
import { Timer } from './components/Timer.jsx'
import { GameOver } from './components/GameOver.jsx'
import { Leaderboard } from './components/Leaderboard.jsx'

function App() {
  const {
    cadena,
    puntaje,
    error,
    validando,
    tiempoRestante,
    finalizada,
    enviarPalabra,
    jugarDeNuevo,
  } = useWordChain()
  const { puntajes, agregarPuntaje } = useLeaderboard()

  useEffect(() => {
    if (finalizada) {
      agregarPuntaje(puntaje, cadena.length)
    }
  }, [finalizada, puntaje, cadena.length, agregarPuntaje])

  return (
    <main className="app">
      <h1>Palabras Encadenadas</h1>
      {!finalizada && (
        <Scoreboard puntaje={puntaje} cantidadPalabras={cadena.length} />
      )}
      {cadena.length > 0 && !finalizada && <Timer segundos={tiempoRestante} />}
      <WordChain palabras={cadena} />
      {finalizada ? (
        <GameOver
          puntaje={puntaje}
          cantidadPalabras={cadena.length}
          onJugarDeNuevo={jugarDeNuevo}
        />
      ) : (
        <>
          <Hint cadena={cadena} />
          <Feedback mensaje={error} />
          <WordInput onSubmit={enviarPalabra} disabled={validando} />
        </>
      )}
      <Leaderboard puntajes={puntajes} />
    </main>
  )
}

export default App
