import React from 'react'
import styled from 'styled-components'

const Submit = styled.a`
  width: fit-content;
  padding: 20px;
  margin-bottom: 30px;
  font-weight: bold;
  text-decoration: none;
  border: none;
  color: $white;
  transition: ${ ({ theme }) => theme.transition };
  border-radius: ${ ({ theme }) => theme.borderRadius };
  background-color: ${ ({ backgroundColor }) => backgroundColor };

  &:hover {
    transform: scale(1.05);
    box-shadow: 1px 1px 30px -15px $white;
    text-decoration: none;
  }
`

export default function SubmitButton({ backgroundColor, url, text }) {
  return (
    <Submit href={url} backgroundColor={backgroundColor}>
      {text}
    </Submit>
  )
}
