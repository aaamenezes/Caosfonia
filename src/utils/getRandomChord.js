import scales from '../data/scales.json'

const getRandomChord = () => { // Gerar chord aleatório (nem sempre)
  // Criar array de chaves do objeto
  // const keys = []

  // Alimentar essa array
  // for (const chord in scales) {
  //   keys.push(chord)
  // }

  const keys = scales.map(scale => scale)

  // Aleatório entre 1 e 24
  const randomPosition = parseInt(Math.random() * 24, 10)
  return keys[randomPosition] // Definir chord aleatório
}

export default getRandomChord
