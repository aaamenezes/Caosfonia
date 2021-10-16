import musics from '../data/musics.json'

// Gerar random para sequence
const getRandomMusic = () => {
  // Pegar quantidade total de músicas já criadas
  const quantity = musics.length
  // Aleatório entre 1 e total de sequencias
  const randomPosition = parseInt(Math.random() * quantity, 10)

  return musics[randomPosition]
}

export default getRandomMusic
