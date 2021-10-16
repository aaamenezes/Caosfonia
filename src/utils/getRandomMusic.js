import musics from '../data/musics.json'

const getRandomMusic = () => {  // Gerar random para sequence

  const quantity = musics.length // Pegar quantidade total de músicas já criadas
  const randomPosition = parseInt(Math.random() * quantity) // Aleatório entre 1 e total de sequencias

  return musics[randomPosition]
}

export default getRandomMusic