import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import updateOptions from '../utils/updateOptions'
import SubmitButton from './SubmitButton'

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 60px;
  justify-items: center;
  padding: 5% 0;
`

const Select = styled.select`
  padding: 10px;
  margin: 20px 0;
  background-color: ${ ({ theme }) => theme.color.black };
  border: none;
  border-bottom: ${ ({ theme }) => `2px solid ${ theme.color.gray }` };
  transition: ${ ({ theme }) => theme.transition };
  outline: none;
  cursor: pointer;
`

const RadioGroup = styled.div`
  display: flex;
  margin: 20px 0 20px 10px;
  border: none;
  border-bottom: ${ ({ theme }) => `2px solid ${ theme.color.gray }` };
  font-weight: bold;
  cursor: pointer;
`

const RadioItem = styled.input`
  display: none;
  
  &:checked + button {
    color: ${ ({ theme }) => theme.color.white };
    background-color: ${ ({ theme }) => theme.color.blue };
    border-radius: ${ ({ theme }) => theme.borderRadius };
  }
`

const RadioButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  padding: 20px;
  border: none;
  border-radius: ${ ({ theme }) => theme.borderRadius };
  background-color: transparent;
  transition: ${ ({ theme }) => theme.transition };
  cursor: pointer;

  &:hover {
    color: ${ ({ theme }) => theme.color.pink };
  }
`

export default function Form({
  chord, setChord, acident, setAcident, terca, setTerca
}) {
  // Exibir/ocultar acidents para as notas E, B, C, F
  const [ sustenidoDisplay, setSustenidoDisplay ] = useState('flex')
  const [ bemolDisplay, setBemolDisplay ] = useState('flex')

  // Exibir/ocultar input:radios quando o usuário selecionar a nota random
  const [ groupRadioDisplay, setGroupRadioDisplay ] = useState('flex')
  const [ inputsJustifyContent, setInputsJustifyContent ] = useState('space-between')

  // Marcar check no acident none
  const checkAcidentNone = useRef(null)

  useEffect(() => {
    updateOptions()
    setAcident('none')
    checkAcidentNone.current.click()
  }, [ chord ])

  function handleAcident(event) {
    setAcident(event.target.previousSibling.value)
    event.target.previousSibling.checked = true
  }

  function handleTerca(event) {
    setTerca(event.target.previousSibling.value)
    event.target.previousSibling.checked = true
  }

  return (
    <StyledForm>

      <Select name='chord' onChange={event => setChord(event.target.value)}>
        <option value='C'>C</option>
        <option value='D'>D</option>
        <option value='E'>E</option>
        <option value='F'>F</option>
        <option value='G'>G</option>
        <option value='A'>A</option>
        <option value='B'>B</option>
        <option value='random'>Aleatório</option>
      </Select>

      <RadioGroup>
        <RadioItem
          type='radio'
          name='acident'
          value='none'
          defaultChecked
          ref={checkAcidentNone}
        />
        <RadioButton type='button' onClick={event => handleAcident(event)} />

        <RadioItem type='radio' name='acident' value='sustenido' />
        <RadioButton type='button' onClick={event => handleAcident(event)}>
          #
        </RadioButton>

        <RadioItem type='radio' name='acident' value='bemol' />
        <RadioButton type='button' onClick={event => handleAcident(event)}>
          b
        </RadioButton>
      </RadioGroup>

      <RadioGroup>
        <RadioItem type='radio' name='terca' value='major' defaultChecked />
        <RadioButton type='button' onClick={event => handleTerca(event)}>
          M
        </RadioButton>

        <RadioItem type='radio' name='terca' value='minor' />
        <RadioButton type='button' onClick={event => handleTerca(event)}>
          m
        </RadioButton>
      </RadioGroup>

      <SubmitButton
        url='/result'
        text='Criar sequência de acordes para a minha música!'
        color='pink'
      />
    </StyledForm>
  )
}
