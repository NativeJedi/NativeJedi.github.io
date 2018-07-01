import React from 'react'
import Modal from 'react-modal'
import Article from '../Article/'
import InputForm from '../InputForm/'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class News extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalIsOpened: false,
      removingId: 0
    }
  }

  componentDidMount() {
    fetch(this.props.config.url + this.props.config.key)
      .then(res => res.json())
      .then(result => {
        const articlesList = result.response.results.map(item => {
          const article = {
            title: item.webTitle,
            text: '',
            apiUrl: `${item.apiUrl}?show-blocks=body&${this.props.config.key}`,
            id: item.id,
            date: item.webPublicationDate,
            comments: [{
              text: "It's very nice task!",
              id: 0
            },
            {
              text: 'This is cool task!',
              id: 1
            }]
          }
          return article
        })

        this.props.loadArticles(articlesList)
      })
  }

  openModal = (index) => {
    const id = index;

    this.setState({
      modalIsOpened: true,
      removingId: id
    })
  }

  closeModal = () => {
    this.setState({
      modalIsOpened: false
    })
  }

  removeArticle = () => {
    this.props.removeArticle(this.state.removingId);

    this.closeModal();
  }

  switchRemoveButtonsVisibility = () => {
    this.setState((prev) => {
      return {
        isRemoveVisible: !prev.isRemoveVisible
      }
    })
    this.props.switchButtons(!this.props.isRemoveVisible)
  }

  render() {
    const context = this
    const events = {
      open: context.openModal,
      close: context.closeModal
    }
    
    const articleArray = this.props.articles.map((item) => {
      return (
        <Article key={item.id} article={item} events={events} />
      )
    })

    return (
      <div className="news">
        <h1 className="news__title">Whats new tooday?</h1>
        <button className={this.props.isRemoveVisible ? 'switcher' : 'switcher is-active'} onClick={this.switchRemoveButtonsVisibility}>Hide remove buttons</button>
        <React.Fragment>
          {articleArray}
        </React.Fragment>
        <InputForm />
        <Modal
          isOpen={this.state.modalIsOpened}
          onRequestClose={this.closeModal}
          style={customStyles}
          ariaHideApp={false}
        >
          <div className="modal">
            <h4 className="modal__title">Are you sure?</h4>
            <button className="btn btn--apply" onClick={this.removeArticle}>Yes</button>
            <button className="btn btn--cancel" onClick={this.closeModal}>No</button>
          </div>
        </Modal>
      </div>
    )
  }
}

export default News
