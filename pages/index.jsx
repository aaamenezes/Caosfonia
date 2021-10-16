import React, { useState } from 'react'

import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

import Form from '../src/components/Form'
import Result from '../src/components/Result'

/*
INDEX

.submit {
  width: fit-content;
  padding: 20px;
  margin-bottom: 30px;
  font-weight: bold;
  text-decoration: none;
  border: none;
  color: $white;
  transition: $transition;
  border-radius: $radius;

  &.pink { background-color: $pink; }
  &.blue { background-color: $blue; }

  &:hover {
    transform: scale(1.05);
    box-shadow: 1px 1px 30px -15px $white;
    text-decoration: none;
  }
}
*/

/*
Global style

#root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: $black;

  > header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 5%;
  }

  footer {
    margin-top: auto;
    padding: 5%;
    background-color: $blue;
  }
}
*/

/*
Tema e global style

// Colors (átomos)

$black: #282C34;
$yellow: #FAF248;
$pink: #FB3052;
$blue: #3291B9;
$gray: #CCCCCC;
$white: #FAFAFA;

// Font size
$font-6: 6px;
$font-10: 10px;
$font-16: 16px;
$font-26: 26px;
$font-42: 42px;

// Reset

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Ubuntu', sans-serif;
  font-size: $font-16;
  color: $white;
}

// Transition (átomos)
$transition: .2s;

// Radius (átomos)
$radius: 5px;

// Tags HTML (átomos)

h1 {
  font-weight: 700;
  font-size: $font-42;
}

h2 {
  text-align: center;
  font-size: $font-26;
}

h2, h3, h4, h5, h6 {
  font-weight: 400;
}

p {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

a {
  color: $yellow;
}

input, select, option, textarea {
  font-weight: 700;
}
*/

const App = () => {

  const [ chord, setChord ] = useState('C')
  const [ acident, setAcident ] = useState('none')
  const [ terca, setTerca ] = useState('major')

  return (
    <React.Fragment>
      <Header />
      <main>
        <Form
          chord={chord}
          setChord={setChord}
          acident={acident}
          setAcident={setAcident}
          terca={terca}
          setTerca={setTerca}
        />
        <Result
          chord={chord}
          acident={acident}
          terca={terca}
        />
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default App