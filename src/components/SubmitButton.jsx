import React from 'react'
import styled from 'styled-components'

const Submit = styled.a`
  grid-column: 1 / 4;
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

  &:hover {
    transform: scale(1.05);
    box-shadow: 1px 1px 30px -15px $white;
    text-decoration: none;
  }
`

export default function SubmitButton({ color, url, text }) {
  return (
    <Submit href={url} color={color}>
      {text}
    </Submit>
  )
}
