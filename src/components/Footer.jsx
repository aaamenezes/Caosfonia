import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer `
  margin-top: auto;
  padding: 5%;
  background-color: ${ ({ theme }) => theme.color.blue };
`

export default function Footer() {
  return (
    <StyledFooter>
      <p>Feito ao som da playlist <a href="https://open.spotify.com/playlist/3Xp13ZRnrVrqVEr3NApJ05?si=V_CYq9PIRQSOmdsWi2SxRg">Letristas</a> por um Dev Jr</p>
      <p>Conhece uma música com um belo arranjo de acordes? Então <a href="https://github.com/aaamenezes" target="_blank">me envie a cifra dela</a> e ajude outras milhares de músicos aprimorando a base de músicas do Caosfonia!</p>
    </StyledFooter>
  )
}
