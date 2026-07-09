const ACENTOS = { á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u', ü: 'u' }

export function normalizarPalabra(palabra) {
  return palabra.trim().toLowerCase()
}

function normalizarLetra(letra) {
  return ACENTOS[letra] ?? letra
}

export function primeraLetra(palabra) {
  return normalizarLetra(normalizarPalabra(palabra)[0])
}

export function ultimaLetra(palabra) {
  const normalizada = normalizarPalabra(palabra)
  return normalizarLetra(normalizada[normalizada.length - 1])
}

export function encadenaCon(anterior, palabra) {
  return ultimaLetra(anterior) === primeraLetra(palabra)
}
