import React from 'react'

const InputField = props => {
  return (
    <div className="input-field">
      {props.config.icon && <i className="material-icons prefix">{props.config.icon}</i>}
      <input
        id={props.config.id}
        type={props.config.type}
        onChange={props.config.change}
      />
      {props.config.label && <label htmlFor={props.config.id}>{props.config.label}</label>}
    </div>
  )
}

export default InputField