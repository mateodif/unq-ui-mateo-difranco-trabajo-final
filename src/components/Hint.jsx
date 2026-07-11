import { ultimaLetra } from '../utils/chain.js'

export function Hint({ cadena }) {
  if (cadena.length === 0) {
    return <p className="hint">Empezá con cualquier palabra en español.</p>
  }

  const letra = ultimaLetra(cadena[cadena.length - 1])

  return <p className="hint">La próxima palabra tiene que empezar con "{letra}".</p>
}
