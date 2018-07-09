import React from 'react'
import Modal from 'react-modal'
import Article from '../Article/'
import InputForm from '../InputForm/'
import NewsHeader from '../NewsHeader'

export const customStyles = {
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
      removingId: 0,
      apiUrl: 'https://mateacademy-react-server.herokuapp.com/api/v1/'
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.props.loadData(this.state.apiUrl)
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
        {this.props.isUser && <button className={this.props.isRemoveVisible ? 'switcher' : 'switcher is-active'} onClick={this.switchRemoveButtonsVisibility}>Hide remove buttons</button>}
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
