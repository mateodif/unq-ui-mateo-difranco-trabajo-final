import { useState } from 'react'
import { wordExists } from '../services/wordApi.js'
import { encadenaCon, normalizarPalabra } from '../utils/chain.js'

export function useWordChain() {
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

  return { cadena, puntaje, error, validando, enviarPalabra }
}
