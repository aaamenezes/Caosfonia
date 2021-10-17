import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`

export default function PageHeader() {
  return (
    <Header>
      <h1>Caosfonia</h1>
    </Header>
  )
}
