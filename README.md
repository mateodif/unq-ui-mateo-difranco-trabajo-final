# Palabras Encadenadas

Trabajo Final Integrador de la materia UIs (UNQ) — un juego de palabras encadenadas hecho con React.

## Cómo se juega

- Ingresá una palabra para empezar la cadena.
- Cada palabra siguiente tiene que empezar con la última letra de la anterior, existir en el diccionario español y no haber sido usada antes en la partida.
- Tenés 15 segundos por turno; el contador se reinicia con cada palabra válida.
- Cuando se acaba el tiempo termina la partida y se muestra la cantidad de palabras encadenadas y el puntaje final.

## Requisitos

- [Node.js](https://nodejs.org/) 20 o superior
- npm

## Instalación

```bash
git clone git@github.com:mateodif/unq-ui-mateo-difranco-trabajo-final.git
cd unq-ui-mateo-difranco-trabajo-final
npm install
```

## Ejecución local

```bash
npm run dev
```

Abrí la URL que muestra la consola (por defecto http://localhost:5173).
