import './App.css'
import { useWordChain } from './hooks/useWordChain.js'
import { WordInput } from './components/WordInput.jsx'
import { WordChain } from './components/WordChain.jsx'
import { Scoreboard } from './components/Scoreboard.jsx'
import { Feedback } from './components/Feedback.jsx'
import { Hint } from './components/Hint.jsx'

function App() {
  const { cadena, puntaje, error, validando, enviarPalabra } = useWordChain()

  return (
    <main className="app">
      <h1>Palabras Encadenadas</h1>
      <Scoreboard puntaje={puntaje} cantidadPalabras={cadena.length} />
      <WordChain palabras={cadena} />
      <Hint cadena={cadena} />
      <Feedback mensaje={error} />
      <WordInput onSubmit={enviarPalabra} disabled={validando} />
    </main>
  )
}

export default App
