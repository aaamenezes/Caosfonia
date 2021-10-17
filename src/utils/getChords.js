import getRandomMusic from './getRandomMusic'
import getRandomChord from './getRandomChord'
import getScale from './getScale'

// Pegar chords da música de acordo com a sequence
export default function getChords(chord, acident, terca) {
  if (chord === 'random') { // Se chord veio como aleatório
    chord = getRandomChord() // Gerar nota aleatória
  } else if (true) {
    if (acident === 'sustenido') { // Senão, se o acident for sustenido
      chord += 's' // chord recebe um 's' no final
    } else if (acident === 'bemol') { // Senão, se o acident for bemol
      chord += 'b' // chord recebe um 'b' no final
    }
    // Se a terca for menor, chord recebe um 'm'
    if (terca === 'minor') chord += 'm'
  }

  // Se a nota for bemol, substituir ela pela nota anterior em sustenido
  // Isso é preciso porque no scales.js as notas estão apenas em sustenido
  if (chord[1] === 'b') {
    switch (chord[0]) {
    case 'D':
      chord = chord.replace('Db', 'Cs')
      break
    case 'G':
      chord = chord.replace('Gb', 'Fs')
      break
    case 'A':
      chord = chord.replace('Ab', 'Gs')
      break
    case 'E':
      chord = chord.replace('Eb', 'Ds')
      break
    case 'B':
      chord = chord.replace('Bb', 'As')
      break
    default:
      chord = null
    }
  }

  const scale = getScale(chord)
  const music = getRandomMusic()

  // music.sequence.intro.forEach(position => {
  //   intro.push(scale[position - 1])
  // })

  // music.sequence.verse1.forEach(position => {
  //   verse1.push(scale[position - 1])
  // })

  // music.sequence.verse2.forEach(position => {
  //   verse2.push(scale[position - 1])
  // })

  // music.sequence.prechorus.forEach(position => {
  //   prechorus.push(scale[position - 1])
  // })

  // music.sequence.chorus.forEach(position => {
  //   chorus.push(scale[position - 1])
  // })

  // music.sequence.pass.forEach(position => {
  //   pass.push(scale[position - 1])
  // })

  // music.sequence.final.forEach(position => {
  //   final.push(scale[position - 1])
  // })
}
