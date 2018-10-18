import React from 'react'
import Cookies from 'js-cookie'
import { connect } from 'react-redux';
import InputField from './InputField'
import { userLogin } from '../../../reducers/newsDuck'

class FormSignIn extends React.Component {
  state = {
    mail: '',
    password: ''
  }

  logIn = (e) => {
    e.preventDefault()
    const promise = new Promise((resolve, reject) => {
      this.props.userLogin(`${this.props.apiUrl}auth/signin`, this.state.mail, this.state.password)
    });
    promise.then(resolve => console.log(resolve))
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

    if (this.props.isUserFetching) {
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

export default connect(state => ({
  isFetching: state.newsBlock.isFetching,
  isUserFetching: state.newsBlock.isUserFetching
}), {
  userLogin
})(FormSignIn)