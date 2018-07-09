import React from 'react'
import Modal from 'react-modal'
import Cookies from 'js-cookie'
import { customStyles } from '../News'
import FormSignIn from './components/FormSignIn'
import FormSignUp from './components/FormSignUp'

class NewsHeader extends React.Component {
  state = {
    loginIsOpened: false,
    registrationIsOpened: false
  }

  closeLogin = () => {
    this.setState({
      loginIsOpened: false,
    })
  }

  openLogin = () => {
    this.setState({
      loginIsOpened: true
    })
  }

  closeRegistration = () => {
    this.setState({
      registrationIsOpened: false
    })
  }

  openRegistration = () => {
    this.setState({
      registrationIsOpened: true
    })
  }

  logOut = () => {
    Cookies.remove('token')
  }
  
  render () {
    const self = this;

    const events = {
      closeLogin: self.closeLogin,
      closeRegistration: self.closeRegistration
    }

    return (
      <div className="news-header">
        {this.props.isUser ?
          <button onClick={this.logOut} className="btn btn-nav"><i className="material-icons right">exit_to_app</i>Logout</button> :
          <React.Fragment>
            <button className="btn btn-nav" onClick={this.openLogin}><i className="material-icons left">people</i>Login</button>
            <button className="btn btn-nav" onClick={this.openRegistration}>Registration</button>
          </React.Fragment>
        }
        <Modal
          isOpen={this.state.loginIsOpened}
          onRequestClose={this.closeLogin}
          style={customStyles}
          ariaHideApp={false}
        >
          <FormSignIn close={events.closeLogin} apiUrl={this.props.apiUrl} />
        </Modal>
        <Modal
          isOpen={this.state.registrationIsOpened}
          onRequestClose={this.closeRegistration}
          style={customStyles}
          ariaHideApp={false}
        >
          <FormSignUp close={events.closeRegistration} apiUrl={this.props.apiUrl} />
        </Modal>
      </div>
    )
  }
}

export default NewsHeader