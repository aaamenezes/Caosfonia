import scales from '../data/scales.json'

// Receber chord e converter na escala
const getScale = chord => {
  // Criação da escala para a música
  let scale

  // For nas entradas do objeto
  Object.entries(scales).forEach(([ key, value ]) => {
    if (chord === key) {
      scale = value
    }
  })

  return scale
}

export default getScale
