import React from 'react'
import styled from 'styled-components'

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  padding: 0 5%;
  margin: 0 auto;
`

export default function Main({ children }) {
  return (
    <StyledMain>
      {children}
    </StyledMain>
  )
}
