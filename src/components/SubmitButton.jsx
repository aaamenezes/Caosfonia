import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../utils/getBreakpoints'

const Submit = styled.a`
  ${ getBreakpoints({
    xs: css`
      grid-column: initial;
      width: fit-content;
      padding: 20px;
      margin: 0 auto 30px;
      font-weight: bold;
      text-decoration: none;
      border: none;
      border-radius: ${ ({ theme }) => theme.borderRadius };
      color: ${ ({ theme }) => theme.color.white };
      background-color: ${ ({ theme, color }) => theme.color[color] };
      transition: ${ ({ theme }) => theme.transition };
      cursor: pointer;
    `,
    md: css`
      grid-column: 1 / 4;
    `
  }) }

  &:hover {
    transform: scale(1.05);
    box-shadow: 1px 1px 30px -15px $white;
    text-decoration: none;
  }
`

export default function SubmitButton({ color, url, text }) {
  if (url) {
    return (
      <Submit href={url} color={color}>
        {text}
      </Submit>
    )
  }

  return (
    <Submit as='button' type='submit' color={color}>
      {text}
    </Submit>
  )
}
