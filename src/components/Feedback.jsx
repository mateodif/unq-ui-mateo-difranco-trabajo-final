export function Feedback({ mensaje }) {
  if (!mensaje) return null
  return <p className="feedback">{mensaje}</p>
}
