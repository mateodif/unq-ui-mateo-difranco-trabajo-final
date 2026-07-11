import { useEffect, useRef, useState } from 'react'
import { wordExists } from '../services/wordApi.js'
import { encadenaCon, normalizarPalabra } from '../utils/chain.js'

const TURNO_SEGUNDOS = 15

export function useWordChain() {
  const [cadena, setCadena] = useState([])
  const [puntaje, setPuntaje] = useState(0)
  const [error, setError] = useState(null)
  const [validando, setValidando] = useState(false)
  const [tiempoRestante, setTiempoRestante] = useState(TURNO_SEGUNDOS)
  const [finalizada, setFinalizada] = useState(false)
  const generacionRef = useRef(0)

  useEffect(() => {
    if (cadena.length === 0 || finalizada) return

    const id = setInterval(() => {
      setTiempoRestante((prev) => (prev <= 1 ? 0 : prev - 1))
    }, 1000)

    return () => clearInterval(id)
  }, [cadena.length, finalizada])

  useEffect(() => {
    if (tiempoRestante === 0 && cadena.length > 0) {
      generacionRef.current += 1
      setFinalizada(true)
    }
  }, [tiempoRestante, cadena.length])

  async function enviarPalabra(palabraIngresada) {
    if (finalizada) return

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

    const generacion = generacionRef.current
    setValidando(true)
    try {
      const existe = await wordExists(palabra)
      if (generacionRef.current !== generacion) return
      if (!existe) {
        setError('Esa palabra no existe.')
        return
      }

      setError(null)
      setCadena((prev) => [...prev, palabra])
      setPuntaje((prev) => prev + palabra.length)
      setTiempoRestante(TURNO_SEGUNDOS)
    } catch {
      if (generacionRef.current === generacion) {
        setError('No se pudo validar la palabra, intentá de nuevo.')
      }
    } finally {
      setValidando(false)
    }
  }

  function jugarDeNuevo() {
    generacionRef.current += 1
    setCadena([])
    setPuntaje(0)
    setError(null)
    setValidando(false)
    setTiempoRestante(TURNO_SEGUNDOS)
    setFinalizada(false)
  }

  return {
    cadena,
    puntaje,
    error,
    validando,
    tiempoRestante,
    finalizada,
    enviarPalabra,
    jugarDeNuevo,
  }
}
