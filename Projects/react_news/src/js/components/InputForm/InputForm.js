import React from 'react'

class InputForm extends React.Component {
  state = {
    title: '',
    text: ''
  }

  addArticle = (e) => {
    e.preventDefault()

    const article = {
      title: this.state.title,
      apiUrl: null,
      text: this.state.text,
      _id: this.props.articles.length + 1,
      date: new Date(),
      comments: []
    }

    this.props.addArticle(article)
    this.setState({
      title: '',
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
          <input id="articleText" onBlur={this.handleTitle} type="text" />
          <label htmlFor="articleText">Enter your article title</label>
        </div>
        <div className="input-field">
          <textarea id="textarea1" className="materialize-textarea" onBlur={this.handleText} />
          <label htmlFor="textarea1">Enter your article text</label>
        </div>
        <button className="btn" type="submit">Add article</button>
      </form>
    )
  }
}

export default InputForm