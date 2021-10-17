import React, { useState } from 'react'
import Form from '../src/components/Form'
import pageWrapper from '../src/components/pageWrapper'

function Home() {
  const [ chord, setChord ] = useState('C')
  const [ acident, setAcident ] = useState('none')
  const [ terca, setTerca ] = useState('major')

  return (
    <>
      <h2>
        Qual será o acorde tom da sua música?
      </h2>
      <Form
        chord={chord}
        setChord={setChord}
        acident={acident}
        setAcident={setAcident}
        terca={terca}
        setTerca={setTerca}
      />
    </>
  )
}

export default pageWrapper(Home)
