import React from 'react'
import Modal from 'react-modal'
import Article from './Article'

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

export const NewsContext = React.createContext()

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
      isLoaded: false,
      articles: [],
      modalIsOpened: false,
      removingId: 0,
      isRemoveVisible: true
    }
  }

  componentDidMount() {
    fetch(this.props.config.url + this.props.config.key)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            articles: result.response.results.map(item => {
              const article = {
                title: item.webTitle,
                apiUrl: `${item.apiUrl}?show-blocks=body&${this.props.config.key}`,
                id: item.id,
                date: item.webPublicationDate,
                isVisible: true
              }
              return article
            })
          })
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
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
    for (const item of this.state.articles) {
      if (item.id === this.state.removingId) {
        item.isVisible = false
      }
    }

    this.closeModal();
  }

  switchRemoveButtonsVisibility = () => {
    this.setState((prev) => {
      return {
        isRemoveVisible: !prev.isRemoveVisible
      }
    })
  }

  render() {
    const { error, isLoaded, items } = this.state
    const context = this
    const events = {
      open: context.openModal,
      close: context.closeModal
    }

    const articleArray = this.state.articles.map((item) => {
      if (item.isVisible) {
        return (
          <Article key={item.id} article={item} events={events} />
        )
      }

      return null
    })

    return (
      <div className="news">
        <NewsContext.Provider value={this.state} >
          <h1 className="news__title">Whats new tooday?</h1>
          <div className={this.state.isRemoveVisible ? 'switcher' : 'switcher is-active'} onClick={this.switchRemoveButtonsVisibility}>Hide remove buttons</div>
          <React.Fragment>
            {articleArray}
          </React.Fragment>
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
        </NewsContext.Provider>
      </div>
    )
  }
}

export default App
