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
      id: this.props.articles.length,
      date: new Date(),
      comments: []
    }

    this.props.addArticle(article)
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
        <div className="input-form__field">
          <div className="input-form__caption">Title:</div>
          <input className="input-form__input" type="text" id="title" onBlur={this.handleTitle} />
        </div>
        <div className="input-form__field">
          <div className="input-form__caption">Text:</div>
          <input className="input-form__input" type="text" id="text" onBlur={this.handleText} />
        </div>
        <button className="btn input-form__btn" type="submit">Add article</button>
      </form>
    )
  }
}

export default InputForm