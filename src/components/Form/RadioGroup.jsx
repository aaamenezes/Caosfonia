import React from 'react'
import styled from 'styled-components'

export const StyledRadioGroup = styled.div`
  display: flex;
  margin: 20px 0 20px 10px;
  border: none;
  border-bottom: ${ ({ theme }) => `2px solid ${ theme.color.gray }` };
  font-weight: bold;
  cursor: pointer;
`

export default function RadioGroup({ children }) {
  return (
    <StyledRadioGroup>
      {children}
    </StyledRadioGroup>
  )
}
