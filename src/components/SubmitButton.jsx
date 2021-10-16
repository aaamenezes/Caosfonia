import React from 'react'

const SubmitButton = props => {

  const classes = `submit ${props.backgroundColor}`

  return (
    <a href={props.url} className={classes}>{props.text}</a>
  )
}

export default SubmitButton