import React, { useState } from 'react'
import PageHeader from '../src/components/PageHeader'
import Footer from '../src/components/Footer'

import Form from '../src/components/Form'
// import Result from '../src/components/Result'
import Main from '../src/components/Main'

export default function Home() {
  const [ chord, setChord ] = useState('C')
  const [ acident, setAcident ] = useState('none')
  const [ terca, setTerca ] = useState('major')

  return (
    <>
      <PageHeader />
      <Main>
        <Form
          chord={chord}
          setChord={setChord}
          acident={acident}
          setAcident={setAcident}
          terca={terca}
          setTerca={setTerca}
        />
        {
          /**
           * O componente abaixo é renderizado na página de resultado
           * Mover ele pra outro arquivo na pasta pages futuramente
           * <Result
              chord={chord}
              acident={acident}
              terca={terca}
            />
          */
        }
      </Main>
      <Footer />
    </>
  )
}
