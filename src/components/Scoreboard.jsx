export function Scoreboard({ puntaje, cantidadPalabras }) {
  return (
    <div className="scoreboard">
      <span>Puntaje: {puntaje}</span>
      <span>Palabras: {cantidadPalabras}</span>
    </div>
  )
}
