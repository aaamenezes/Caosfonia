import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../utils/getBreakpoints'
import RadioButton from './Form/RadioButton'
import RadioGroup from './Form/RadioGroup'
import RadioItem from './Form/RadioItem'
import Select from './Form/Select'
import SubmitButton from './SubmitButton'

const StyledForm = styled.form`
  ${ getBreakpoints({
    xs: css`
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
      padding: 5% 0;
    `,
    md: css`
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 60px;
    `
  }) }
`

export default function Form() {
  const [ chord, setChord ] = useState('C')
  const [ acident, setAcident ] = useState('none')
  const [ terca, setTerca ] = useState('major')

  useEffect(() => {
    if (chord === 'C' || chord === 'E' || chord === 'F' || chord === 'B') {
      setAcident('none')
    }
  }, [ chord ])

  const handleChord = event => setChord(event.target.value)
  const handleAcident = event => setAcident(event.target.value)
  const handleTerca = event => setTerca(event.target.value)

  const notes = [ 'C', 'D', 'E', 'F', 'G', 'A', 'B' ]
  const $notesList = notes.map(n => <option key={n} value={n}>{n}</option>)

  const handleSubmit = event => {
    event.preventDefault()
    const url = `/result?chord=${ chord }&acident=${ acident }&terca=${ terca }`
    window.location.href = url
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Select onChange={handleChord} center={chord === 'random'}>
        {$notesList}
        <option value='random'>Aleatório</option>
      </Select>

      <RadioGroup show={chord !== 'random'}>
        <RadioItem name='acident' value='none' onChange={handleAcident} check />
        <RadioButton
          htmlFor='acident-none'
          text=' '
          active={acident === 'none'}
          show
        />

        <RadioItem name='acident' value='sustenido' onChange={handleAcident} />
        <RadioButton
          htmlFor='acident-sustenido'
          text='#'
          active={acident === 'sustenido'}
          show={chord !== 'E' && chord !== 'B'}
        />

        <RadioItem name='acident' value='bemol' onChange={handleAcident} />
        <RadioButton
          htmlFor='acident-bemol'
          text='b'
          active={acident === 'bemol'}
          show={chord !== 'C' && chord !== 'F'}
        />
      </RadioGroup>

      <RadioGroup show={chord !== 'random'}>
        <RadioItem name='terca' value='major' onChange={handleTerca} check />
        <RadioButton
          htmlFor='terca-major'
          text='M'
          active={terca === 'major'}
          show
        />

        <RadioItem name='terca' value='minor' onChange={handleTerca} />
        <RadioButton
          htmlFor='terca-minor'
          text='m'
          active={terca === 'minor'}
          show
        />
      </RadioGroup>

      <SubmitButton
        text='Criar sequência de acordes para a minha música!'
        color='pink'
      />
    </StyledForm>
  )
}
