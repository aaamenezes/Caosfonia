import React from 'react'
import styled from 'styled-components'

const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  padding: 20px;
  font-weight: bold;
  cursor: pointer;
`

export default function Label({ htmlFor, children }) {
  return (
    <StyledLabel htmlFor={htmlFor}>
      {children}
    </StyledLabel>
  )
}
