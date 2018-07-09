import React from 'react'
import Cookies from 'js-cookie'
import InputField from './InputField'

class FormSignIn extends React.Component {
  state = {
    mail: '',
    password: '',
    isFetching: false
  }

  logIn = (e) => {
    e.preventDefault()
    this.setState({
      isFetching: true
    })
    fetch(`${this.props.apiUrl}auth/signin`, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.mail,
        password: this.state.password
      })
    }).then(res => res.json())
      .then(result => {
        Cookies.set('token', result.token)
      })
      .then(this.setState({
        isFetching: false
      }))
      .then(() => {
        this.props.close()
      })
  }
  
  handleMail = (e) => {
    this.setState({
      mail: e.target.value
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
      id: 'inputMail',
      type: 'email',
      change: this.handleMail,
      label: 'Your mail'
    }

    const passwordInput = {
      icon: 'lock',
      id: 'inputPassword',
      type: 'password',
      change: this.handlePassword,
      label: 'Your password'
    }

    if (this.state.isFetching) {
      return (
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-blue">
            <div className="circle-clipper left">
              <div className="circle" />
            </div>
            <div className="gap-patch">
              <div className="circle" />
            </div>
            <div className="circle-clipper right">
              <div className="circle" />
            </div>
          </div>
        </div>
      )
    }
    return (
      <form className="form" onSubmit={this.logIn}>
        <h3 className="form__title">Fill next fields, please</h3>
        <InputField config={mailInput} />
        <InputField config={passwordInput} />
        <button className="btn" type="submit">Enter</button>
      </form>
    )
  }
}

export default FormSignIn