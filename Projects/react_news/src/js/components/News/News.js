import React from 'react'
import Modal from 'react-modal'
import Article from '../Article/'
import InputForm from '../InputForm/'
import NewsHeader from '../NewsHeader'

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
};

class News extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalIsOpened: false,
      removingSlug: '',
      apiUrl: 'https://mateacademy-react-server.herokuapp.com/api/v1/'
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.props.loadData(this.state.apiUrl)
  }

  openModal = (slug) => {
    this.setState({
      modalIsOpened: true,
      removingSlug: slug
    })
  }

  closeModal = () => {
    this.setState({
      modalIsOpened: false
    })
  }

  removeArticle = () => {
    this.props.removeArticle(`${this.state.apiUrl}article/remove/${this.state.removingSlug}`);
    this.closeModal();
  }

  switchRemoveButtonsVisibility = (e) => {
    e.stopPropagation()
    console.log(1)
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

    const articleArray = this.props.articles.map(item => {
      return (
        <Article key={item._id} article={item} events={events}>{item.title}</Article>
      )
    })

    const { isFetching } = this.props;

    if (isFetching) {
      return (
        <div className="progress progress-bar">
          <div className="indeterminate" />
        </div>
      )
    }

    return (
      <div className="news">
        <NewsHeader />
        <h1 className="news__title">Whats new tooday?</h1>
        {this.props.isUser && 
          <div className="switch">
            <label htmlFor="switchBtns">
              Off
              <input
                id="switchBtns"
                type="checkbox"
                onChange={this.switchRemoveButtonsVisibility}
              />
              <span className="lever" />
              On
            </label>
          </div>
        }
        <React.Fragment>
          {articleArray}
        </React.Fragment>
        {this.props.isUser && <InputForm />}
        <Modal
          isOpen={this.state.modalIsOpened}
          onRequestClose={this.closeModal}
          style={customStyles}
          ariaHideApp={false}
        >
          <div className="confirm">
            <h4 className="confirm__title">Are you sure?</h4>
            <button className="btn red waves-effect" onClick={this.removeArticle}>Yes</button>
            <button className="btn waves-effect" onClick={this.closeModal}>No</button>
          </div>
        </Modal>
      </div>
    )
  }
}

export default News
