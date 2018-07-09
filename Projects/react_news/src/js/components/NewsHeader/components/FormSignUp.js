import React from 'react'
import InputField from './InputField'

class FormSignUp extends React.Component {
  state = {
    mail: '',
    name: '',
    password: ''
  }

  signUp = (e) => {
    e.preventDefault()
    fetch(`${this.props.apiUrl}auth/signup`, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.mail,  
        name: this.state.name, // min 2 symbols  
        password: this.state.password, // min 6 symbols  
        password_confirm: this.state.password
      })
    }).then(res => res.json())
  }
  
  handleMail = (e) => {
    this.setState({
      mail: e.target.value
    })
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  render () {
    const mailInput = {
      icon: 'mail',
      id: 'inputMailsignUp',
      type: 'email',
      change: this.handleMail,
      label: 'Your mail'
    }

    const passwordInput = {
      icon: 'lock',
      id: 'inputPasswordsignUp',
      type: 'password',
      change: this.handlePassword,
      label: 'Your password'
    }

    const nameInput = {
      icon: 'perm_identity',
      id: 'inputNamesignUp',
      type: 'text',
      change: this.handleName,
      label: 'Your name'
    }

    return (
      <form className="form" onSubmit={this.signUp}>
        <h3 className="form__title">Fill next fields, please</h3>
        <InputField config={mailInput} />
        <InputField config={passwordInput} />
        <InputField config={nameInput} />
        <button className="btn" type="submit">Sign up</button>
      </form>
    )
  }
}

export default FormSignUp