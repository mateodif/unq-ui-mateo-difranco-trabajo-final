export function Hint({ cadena }) {
  if (cadena.length === 0) {
    return <p className="hint">Empezá con cualquier palabra en español.</p>
  }

  const ultima = cadena[cadena.length - 1]
  const letra = ultima[ultima.length - 1]

  return <p className="hint">La próxima palabra tiene que empezar con "{letra}".</p>
}
