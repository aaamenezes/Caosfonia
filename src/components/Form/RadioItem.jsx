import React from 'react'
import styled from 'styled-components'

const StyledRadioItem = styled.input`
  display: none;
`

export default function RadioItem({ name, onChange, value, check }) {
  return (
    <StyledRadioItem
      type='radio'
      name={name}
      id={`${ name }-${ value }`}
      value={value}
      defaultChecked={check}
      onChange={onChange}
    />
  )
}
