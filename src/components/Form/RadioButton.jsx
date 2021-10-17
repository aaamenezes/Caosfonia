import React from 'react'
import styled, { css } from 'styled-components'
import Label from './Label'

const StyledRadioButton = styled.button`
  display: ${ ({ show }) => !show && 'none' };
  border: none;
  border-radius: ${ ({ theme }) => theme.borderRadius };
  background-color: transparent;
  transition: ${ ({ theme }) => theme.transition };
  cursor: pointer;

  &:hover {
    color: ${ ({ theme }) => theme.color.pink };
  }

  ${ ({ active }) => active && (css`
    color: ${ ({ theme }) => theme.color.white };
    background-color: ${ ({ theme }) => theme.color.blue };
    border-radius: ${ ({ theme }) => theme.borderRadius };
  `)
}
`

export default function RadioButton({ onClick, htmlFor, text, show, active }) {
  return (
    <StyledRadioButton
      type='button'
      onClick={onClick}
      show={show}
      active={active}
    >
      <Label htmlFor={htmlFor}>
        {text}
      </Label>
    </StyledRadioButton>
  )
}
