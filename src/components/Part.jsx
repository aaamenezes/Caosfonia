import React from 'react'

const Part = props => {

  if ( props.notes.length > 0 ) {
    
    let currentNotes = []
    props.notes.forEach(note => {
      currentNotes.push(<span className='note'>{note}</span>)
    })

    return (
      <div className="part">
        <h3>{ props.title }</h3>
        <div className='content'>{ currentNotes }</div>
      </div>
    )
  } else {
    return false
  }
}

export default Part