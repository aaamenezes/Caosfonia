import React, { useEffect } from 'react'
import styled from 'styled-components'
import pageWrapper from '../src/components/pageWrapper'
import Part from '../src/components/Part'
import SubmitButton from '../src/components/SubmitButton'
import getChords from '../src/utils/getChords'

const StyledResult = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 30px 0;
`

const ResultHeader = styled.header`
  margin-bottom: 10px;
`

const Chords = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 5% 0;
`

const SourceTitle = styled.h4`
  margin-bottom: 20px;
`

const SourceContent = styled.div`
  text-align: center;
`

function Result({ chord, acident, terca }) {
  const intro = []
  const verse1 = []
  const verse2 = []
  const prechorus = []
  const chorus = []
  const pass = []
  const final = []

  // Iniciar função ao carregar a página
  useEffect(() => {
    window.addEventListener('load', getChords(chord, acident, terca))
  }, [])

  return (
    <>
      <StyledResult>

        <ResultHeader>
          <h2>
            Os acordes da sua nova música são:
          </h2>
        </ResultHeader>

        <Chords>

          <Part title='Introdução' notes={intro} />
          <Part title='Verso 1' notes={verse1} />
          <Part title='Verso 2' notes={verse2} />
          <Part title='Pré-refrão' notes={prechorus} />
          <Part title='Refrão' notes={chorus} />
          <Part title='Passagem' notes={pass} />
          <Part title='Final' notes={final} />

          <div>
            <SourceTitle>A inspiração para a sua música foi:</SourceTitle>
            <SourceContent>
              <b>music.name</b>
              {' '}
              do artista
              {' '}
              <b>music.artist</b>
            </SourceContent>
          </div>

        </Chords>
      </StyledResult>

      <SubmitButton
        url='/'
        text='Gerar nova sequência de acordess...'
        backgroundColor='blue'
      />
    </>
  )
}

export default pageWrapper(Result)
