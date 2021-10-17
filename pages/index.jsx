import React from 'react'
import Form from '../src/components/Form'
import pageWrapper from '../src/components/pageWrapper'

function Home() {
  return (
    <>
      <h2>
        Qual será o acorde tom da sua música?
      </h2>
      <Form />
    </>
  )
}

export default pageWrapper(Home)
