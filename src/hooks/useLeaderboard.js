import { useCallback, useEffect, useState } from 'react'

const CLAVE = 'palabras-encadenadas-leaderboard'
const MAX_PUNTAJES = 10

function leerPuntajes() {
  try {
    const guardado = localStorage.getItem(CLAVE)
    return guardado ? JSON.parse(guardado) : []
  } catch {
    return []
  }
}

export function useLeaderboard() {
  const [puntajes, setPuntajes] = useState(leerPuntajes)

  useEffect(() => {
    try {
      localStorage.setItem(CLAVE, JSON.stringify(puntajes))
    } catch {}
  }, [puntajes])

  const agregarPuntaje = useCallback((puntaje, cantidadPalabras) => {
    setPuntajes((prev) =>
      [...prev, { puntaje, cantidadPalabras }]
        .sort((a, b) => b.puntaje - a.puntaje)
        .slice(0, MAX_PUNTAJES),
    )
  }, [])

  return { puntajes, agregarPuntaje }
}
