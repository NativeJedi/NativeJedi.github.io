import React from 'react'
import Cookies from 'js-cookie'

class InputForm extends React.Component {
  state = {
    title: '',
    text: '',
    image: null
  }

  addArticle = (e) => {
    e.preventDefault()
    this.props.addArticle(`${this.props.apiUrl}article/create`, this.state.title, this.state.text, this.state.image)
    this.setState({
      title: ''
    })
    this.setState({
      text: ''
    })
  }

  handleTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleText = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  render() {
    return (
      <form className="input-form" action="#" onSubmit={this.addArticle}>
        <h3 className="input-form__title">Add your article</h3>
        <div className="input-field">
          <input value={this.state.title} id="articleText" onChange={this.handleTitle} type="text" />
          <label htmlFor="articleText">Enter your article title</label>
        </div>
        <div className="input-field">
          <textarea value={this.state.text} id="textarea1" className="materialize-textarea" onChange={this.handleText} />
          <label htmlFor="textarea1">Enter your article text</label>
        </div>
        <button className="btn" type="submit">Add article</button>
      </form>
    )
  }
}

export default InputForm