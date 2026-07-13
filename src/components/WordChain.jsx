export function WordChain({ palabras }) {
  if (palabras.length === 0) {
    return null
  }

  return (
    <ol className="word-chain">
      {palabras.map((palabra) => (
        <li key={palabra}>{palabra}</li>
      ))}
    </ol>
  )
}
