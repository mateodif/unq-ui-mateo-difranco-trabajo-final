export function Leaderboard({ puntajes }) {
  if (puntajes.length === 0) {
    return null
  }

  return (
    <div className="leaderboard">
      <h2>Mejores puntajes</h2>
      <ol>
        {puntajes.map((registro, indice) => (
          <li key={indice}>
            {registro.puntaje} puntos ({registro.cantidadPalabras} palabras)
          </li>
        ))}
      </ol>
    </div>
  )
}
