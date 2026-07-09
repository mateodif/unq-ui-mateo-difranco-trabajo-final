export function WordChain({ palabras }) {
  if (palabras.length === 0) {
    return <p>Todavía no ingresaste ninguna palabra.</p>
  }

  return (
    <ol className="word-chain">
      {palabras.map((palabra) => (
        <li key={palabra}>{palabra}</li>
      ))}
    </ol>
  )
}
