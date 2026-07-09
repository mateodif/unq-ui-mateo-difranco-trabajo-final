const API_URL = 'https://word-api-hmlg.vercel.app/api/validate'

export async function wordExists(word) {
  const response = await fetch(`${API_URL}?word=${encodeURIComponent(word)}`)
  if (!response.ok) {
    throw new Error('No se pudo validar la palabra')
  }
  const data = await response.json()
  return data.exists
}
