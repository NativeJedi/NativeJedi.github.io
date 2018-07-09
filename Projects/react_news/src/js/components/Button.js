import React from 'react'

function Button(props) {
  return (
    <button onClick={props.click} className={['waves-effect waves-light btn-small', props.className]}>
      {props.text}
      <i className="material-icons icon">keyboard_arrow_right</i>
    </button>
  )
}

export default Button
