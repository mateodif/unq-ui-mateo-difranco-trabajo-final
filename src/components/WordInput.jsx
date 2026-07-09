import { useState } from 'react'

export function WordInput({ onSubmit, disabled }) {
  const [valor, setValor] = useState('')

  function handleSubmit(evento) {
    evento.preventDefault()
    if (!valor.trim()) return
    onSubmit(valor)
    setValor('')
  }

  return (
    <form className="word-input" onSubmit={handleSubmit}>
      <input
        value={valor}
        onChange={(evento) => setValor(evento.target.value)}
        disabled={disabled}
        placeholder="Ingresá una palabra"
        autoFocus
      />
      <button type="submit" disabled={disabled}>
        Enviar
      </button>
    </form>
  )
}
