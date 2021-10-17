import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  margin-top: auto;
  padding: 5%;
  background-color: ${ ({ theme }) => theme.color.blue };
`

export default function Footer() {
  return (
    <StyledFooter>
      <p>Feito ao som de muito Spotify/Deezer por um Dev Jr</p>
      <p>
        Conhece uma música com um belo arranjo de acordes? Então
        {' '}
        <a
          href='https://twitter.com/aaamenezes'
          target='_blank'
          rel='noreferrer'
        >
          me envie a cifra dela
        </a>
        {' '}
        e ajude outros artistas aprimorando a base de músicas do Caosfonia!
      </p>
    </StyledFooter>
  )
}
