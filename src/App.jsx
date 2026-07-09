import { useState } from 'react'
import './App.css'
import { WordInput } from './components/WordInput.jsx'
import { WordChain } from './components/WordChain.jsx'
import { Scoreboard } from './components/Scoreboard.jsx'

function App() {
  const [cadena, setCadena] = useState([])
  const [puntaje, setPuntaje] = useState(0)

  function enviarPalabra(palabraIngresada) {
    const palabra = palabraIngresada.trim().toLowerCase()
    if (!palabra) return
    setCadena((prev) => [...prev, palabra])
    setPuntaje((prev) => prev + palabra.length)
  }

  return (
    <main className="app">
      <h1>Palabras Encadenadas</h1>
      <Scoreboard puntaje={puntaje} cantidadPalabras={cadena.length} />
      <WordChain palabras={cadena} />
      <WordInput onSubmit={enviarPalabra} />
    </main>
  )
}

export default App
