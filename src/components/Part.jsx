import React from 'react'
import styled from 'styled-components'

const StyledPart = styled.div`
  margin-bottom: 50px;

  h3 {
    margin-bottom: 20px;
  }
`

const Note = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  margin-right: 5px;
  margin: 0 5px 5px 0;
  border-radius: 50%;
  font-weight: 700;
  font-family: ${ ({ theme }) => theme.fontMono };
  color: ${ ({ theme }) => theme.color.pink };
  background-color: ${ ({ theme }) => theme.color.white };
`

export default function Part({ notes, title }) {
  return notes.length > 0
    ? (
      <StyledPart>
        <h3>{ title }</h3>
        <div>
          { notes.map(note => <Note>{note}</Note>) }
        </div>
      </StyledPart>
    )
    : null
}
