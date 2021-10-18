import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../utils/getBreakpoints'

const StyledSelect = styled.select`
  ${ getBreakpoints({
    xs: css`
      grid-column: initial;
      padding: 10px;
      margin: 20px 0;
      background-color: ${ ({ theme }) => theme.color.black };
      border: none;
      border-bottom: ${ ({ theme }) => `2px solid ${ theme.color.gray }` };
      transition: ${ ({ theme }) => theme.transition };
      outline: none;
      cursor: pointer;
    `,
    md: css`
      grid-column: ${ ({ center }) => center && '1 / 4' };
    `
  }) }
`
export default function Select({ onChange, children, center }) {
  return (
    <StyledSelect name='chord' onChange={onChange} center={center}>
      {children}
    </StyledSelect>
  )
}
