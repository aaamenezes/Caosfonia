import React from 'react'
import styled from 'styled-components'

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5%;
`

export default function Main({ children }) {
  return (
    <StyledMain>
      {children}
    </StyledMain>
  )
}
