import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import SubmitButton from './SubmitButton'

const Tom = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 30px 0;
`

const TomHeader = styled.header`
  margin-bottom: 10px;
`

const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 5% 0;
`

const Select = styled.select`
  padding: 10px;
  margin: 20px 0;
  background-color: $black;
  border: none;
  border-bottom: 2px solid $gray;
  transition: $transition;
  outline: none;
`

const RadioGroup = styled.div`
  display: flex;
  margin: 20px 0 20px 10px;
  border: none;
  border-bottom: 2px solid $gray;
  font-weight: bold;
  cursor: pointer;
`

const RadioItem = styled.input`
  display: none;
  
  &:checked + .button {
    background-color: $blue;
    border-radius: $radius;
  }
`

const RadioButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  padding: 20px;
  background-color: transparent;
  transition: $transition;
  border-radius: $radius;

  &:hover {
    background-color: lighten($color: $black, $amount: 10);
  }
`

export default function Form({ chord, setChord, acident, setAcident, terca, setTerca }) {
  // Exibir/ocultar acidents para as notas E, B, C, F
  const [ sustenidoDisplay, setSustenidoDisplay ] = useState('flex')
  const [ bemolDisplay, setBemolDisplay] = useState('flex')

  // Exibir/ocultar input:radios quando o usuário selecionar a nota random
  const [ groupRadioDisplay, setGroupRadioDisplay ] = useState('flex')
  const [ inputGroupJustifyContent, setInputGroupJustifyContent ] = useState('space-between')

  // Marcar check no acident none
  const checkAcidentNone = useRef(null)

  useEffect(() => {
    updateOptions()
    setAcident('none')
    checkAcidentNone.current.click()
  }, [chord])

  const updateOptions = () => {

    switch(chord) {

      case 'C':
      case 'F':
        setBemolDisplay('none')
        setSustenidoDisplay('flex')
        setGroupRadioDisplay('flex')
        setInputGroupJustifyContent('space-between')
        break
      case 'D':
      case 'G':
      case 'A':
        setSustenidoDisplay('flex')
        setBemolDisplay('flex')
        setGroupRadioDisplay('flex')
        setInputGroupJustifyContent('space-between')
        break
      case 'E':
      case 'B':
        setSustenidoDisplay('none')
        setBemolDisplay('flex')
        setGroupRadioDisplay('flex')
        setInputGroupJustifyContent('space-between')
        break
      case 'random':
        setGroupRadioDisplay('none')
        setInputGroupJustifyContent('center')
        break
    }
  }

  const auxAcident = event => {
    setAcident(event.target.previousSibling.value)
    event.target.previousSibling.checked = true
  }
  
  const auxTerca = event => {
    setTerca(event.target.previousSibling.value)
    event.target.previousSibling.checked = true
  }

  return (
    <Tom>
      <TomHeader>
        <h2>
          Qual será o acorde tom da sua música?
        </h2>
      </TomHeader>

      <InputGroup>

        <Select name='chord' onChange={event => setChord(event.target.value)}>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
          <option value="G">G</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="random">Aleatório</option>
        </Select>

        <RadioGroup>
          <RadioItem type="radio" name="acident" value='none' defaultChecked ref={checkAcidentNone} />
          <RadioButton onClick={event => auxAcident(event)}> </RadioButton>

          <RadioItem type="radio" name="acident" value='sustenido' />
          <RadioButton onClick={event => auxAcident(event)}>#</RadioButton>

          <RadioItem type="radio" name="acident" value='bemol' />
          <RadioButton onClick={event => auxAcident(event)}>b</RadioButton>
        </RadioGroup>

        <RadioGroup>
          <RadioItem type="radio" name="terca" value='major' defaultChecked />
          <RadioButton onClick={event => auxTerca(event)}>M</RadioButton>

          <RadioItem type="radio" name="terca" value='minor' />
          <RadioButton onClick={event => auxTerca(event)}>m</RadioButton>
        </RadioGroup>

      </InputGroup>
    
      <SubmitButton url={'/result'} text='Criar sequência de acordes para a minha música!' backgroundColor='pink' />
    </Tom>
  )
}
