export function GameOver({ puntaje, cantidadPalabras, onJugarDeNuevo }) {
  return (
    <div className="game-over">
      <h2>¡Partida finalizada!</h2>
      <p>
        Encadenaste {cantidadPalabras} palabra{cantidadPalabras === 1 ? '' : 's'}.
      </p>
      <p>Puntaje final: {puntaje}</p>
      <button type="button" onClick={onJugarDeNuevo}>
        Jugar de nuevo
      </button>
    </div>
  )
}
