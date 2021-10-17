import React from 'react'
import styled from 'styled-components'

const StyledSelect = styled.select`
  padding: 10px;
  margin: 20px 0;
  background-color: ${ ({ theme }) => theme.color.black };
  border: none;
  border-bottom: ${ ({ theme }) => `2px solid ${ theme.color.gray }` };
  transition: ${ ({ theme }) => theme.transition };
  outline: none;
  cursor: pointer;
`
export default function Select({ onChange, children }) {
  return (
    <StyledSelect name='chord' onChange={onChange}>
      {children}
    </StyledSelect>
  )
}
