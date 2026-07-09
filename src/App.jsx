import { useState } from 'react'
import './App.css'
import { WordInput } from './components/WordInput.jsx'
import { WordChain } from './components/WordChain.jsx'

function App() {
  const [cadena, setCadena] = useState([])

  function enviarPalabra(palabraIngresada) {
    const palabra = palabraIngresada.trim().toLowerCase()
    if (!palabra) return
    setCadena((prev) => [...prev, palabra])
  }

  return (
    <main className="app">
      <h1>Palabras Encadenadas</h1>
      <WordChain palabras={cadena} />
      <WordInput onSubmit={enviarPalabra} />
    </main>
  )
}

export default App
