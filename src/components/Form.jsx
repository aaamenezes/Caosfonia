import React, { useState, useEffect, useRef } from 'react'
import SubmitButton from './SubmitButton'

/*
@import './base';

.tom {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 30px 0;

  header {
    margin-bottom: 10px;
  }
  
  .input-group {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 5% 0;

    @media (max-width: 354px) {
      flex-direction: column;
      align-items: center;
    }
    
    select {
      padding: 10px;
      margin: 20px 0;
      background-color: $black;
      border: none;
      border-bottom: 2px solid $gray;
      transition: $transition;
      outline: none;
    }
    
    .group-radio {
      display: flex;
      margin: 20px 0 20px 10px;
      border: none;
      border-bottom: 2px solid $gray;
      font-weight: bold;
      cursor: pointer;
      
      input[type=radio] {
        display: none;
      }
      
      input[type=radio]:checked+.button {
        background-color: $blue;
        border-radius: $radius;
      }
      
      .button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        padding: 20px;
        background-color: transparent;
        transition: $transition;
        border-radius: $radius;
    
        &:hover {
          background-color: lighten($color: $black, $amount: 10);
        }
      }
    }
  }
}
*/

const Form = ({ chord, setChord, acident, setAcident, terca, setTerca }) => {

  // Exibir/ocultar acidents para as notas E, B, C, F
  const [ sustenidoDisplay, setSustenidoDisplay ] = useState('flex')
  const [ bemolDisplay, setBemolDisplay] = useState('flex')

  // Exibir/ocultar input:radios quando o usuário selecionar a nota random
  const [ groupRadioDisplay, setGroupRadioDisplay ] = useState('flex')
  const [ inputGroupJustifyContent, setInputGroupJustifyContent ] = useState('space-between')

  // Marcar check no acident none
  const checkAcidentNone = useRef(null)

  useEffect(() => {
    updateOptions()
    setAcident('none')
    checkAcidentNone.current.click()
  }, [chord])

  const updateOptions = () => {

    switch(chord) {

      case 'C':
      case 'F':
        setBemolDisplay('none')
        setSustenidoDisplay('flex')
        setGroupRadioDisplay('flex')
        setInputGroupJustifyContent('space-between')
        break
      case 'D':
      case 'G':
      case 'A':
        setSustenidoDisplay('flex')
        setBemolDisplay('flex')
        setGroupRadioDisplay('flex')
        setInputGroupJustifyContent('space-between')
        break
      case 'E':
      case 'B':
        setSustenidoDisplay('none')
        setBemolDisplay('flex')
        setGroupRadioDisplay('flex')
        setInputGroupJustifyContent('space-between')
        break
      case 'random':
        setGroupRadioDisplay('none')
        setInputGroupJustifyContent('center')
        break
    }
  }

  const auxAcident = event => {
    setAcident(event.target.previousSibling.value)
    event.target.previousSibling.checked = true
  }
  
  const auxTerca = event => {
    setTerca(event.target.previousSibling.value)
    event.target.previousSibling.checked = true
  }

  return (
    <React.Fragment>
      <div className='tom'>

        <header><h2>Qual será o acorde tom da sua música?</h2></header>

        <div className="input-group" style={{ justifyContent: inputGroupJustifyContent }}>

          <select name='chord' onChange={event => setChord(event.target.value)}>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="G">G</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="random">Aleatório</option>
          </select>

          <div className='group-radio' style={{ display: groupRadioDisplay }}>

            <input type="radio" name="acident" value='none' defaultChecked ref={checkAcidentNone}/>
            <div className='button' onClick={event => auxAcident(event)}> </div>

            <input type="radio" name="acident" value='sustenido' />
            <div className='button' onClick={event => auxAcident(event)} style={{ display: sustenidoDisplay }}>#</div>

            <input type="radio" name="acident" value='bemol' />
            <div className='button' onClick={event => auxAcident(event)} style={{ display: bemolDisplay }}>b</div>
          </div>

          <div className='group-radio' style={{ display: groupRadioDisplay }}>
            <input type="radio" name="terca" value='major' defaultChecked />
            <div className='button' onClick={event => auxTerca(event)}>M</div>
            <input type="radio" name="terca" value='minor' />
            <div className='button' onClick={event => auxTerca(event)}>m</div>
          </div>

        </div>
      </div>

      <SubmitButton url={'/result'} text='Criar sequência de acordes para a minha música!' backgroundColor='pink' />

    </React.Fragment>
  )
}

export default Form