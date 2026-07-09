import { useState } from 'react'
import './App.css'
import { WordInput } from './components/WordInput.jsx'
import { WordChain } from './components/WordChain.jsx'
import { Scoreboard } from './components/Scoreboard.jsx'
import { Feedback } from './components/Feedback.jsx'
import { Hint } from './components/Hint.jsx'
import { encadenaCon, normalizarPalabra } from './utils/chain.js'
import { wordExists } from './services/wordApi.js'

function App() {
  const [cadena, setCadena] = useState([])
  const [puntaje, setPuntaje] = useState(0)
  const [error, setError] = useState(null)
  const [validando, setValidando] = useState(false)

  async function enviarPalabra(palabraIngresada) {
    const palabra = normalizarPalabra(palabraIngresada)
    if (!palabra) return

    const anterior = cadena[cadena.length - 1]
    if (anterior && !encadenaCon(anterior, palabra)) {
      setError('Tiene que empezar con la última letra de la palabra anterior.')
      return
    }
    if (cadena.includes(palabra)) {
      setError('Esa palabra ya fue utilizada.')
      return
    }

    setValidando(true)
    try {
      const existe = await wordExists(palabra)
      if (!existe) {
        setError('Esa palabra no existe.')
        return
      }

      setError(null)
      setCadena((prev) => [...prev, palabra])
      setPuntaje((prev) => prev + palabra.length)
    } catch {
      setError('No se pudo validar la palabra, intentá de nuevo.')
    } finally {
      setValidando(false)
    }
  }

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
