import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`

export default function Header() {

  return (
    <StyledHeader>
      <h1>Caosfonia</h1>
    </StyledHeader>
  )
}
