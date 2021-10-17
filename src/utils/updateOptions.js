export default function updateOptions(chord) {
  switch (chord) {
  case 'C':
  case 'F':
    setBemolDisplay('none')
    setSustenidoDisplay('flex')
    setGroupRadioDisplay('flex')
    setInputsJustifyContent('space-between')
    break
  case 'D':
  case 'G':
  case 'A':
    setSustenidoDisplay('flex')
    setBemolDisplay('flex')
    setGroupRadioDisplay('flex')
    setInputsJustifyContent('space-between')
    break
  case 'E':
  case 'B':
    setSustenidoDisplay('none')
    setBemolDisplay('flex')
    setGroupRadioDisplay('flex')
    setInputsJustifyContent('space-between')
    break
  case 'random':
    setGroupRadioDisplay('none')
    setInputsJustifyContent('center')
    break
  default:
    return null
  }
}
