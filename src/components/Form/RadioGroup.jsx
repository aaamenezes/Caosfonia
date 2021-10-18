import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../utils/getBreakpoints'

export const StyledRadioGroup = styled.div`
  ${ getBreakpoints({
    xs: css`
      display: ${ ({ show }) => show ? 'flex' : 'none' };
      margin: 20px 0;
      border: none;
      border-bottom: ${ ({ theme }) => `2px solid ${ theme.color.gray }` };
      font-weight: bold;
      cursor: pointer;
    `,
    md: css`
      margin: 20px 0 20px 10px;
    `
  }) }
  
`

export default function RadioGroup({ children, show }) {
  return (
    <StyledRadioGroup show={show}>
      {children}
    </StyledRadioGroup>
  )
}
