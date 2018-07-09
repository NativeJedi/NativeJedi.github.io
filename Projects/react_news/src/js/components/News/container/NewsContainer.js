import { connect } from 'react-redux';
import { removeArticle, switchButtons, loadData } from '../../../reducers/newsDuck';
import News from '../News';


export default connect(state => ({
  articles: state.newsBlock.articles,
  isRemoveVisible: state.newsBlock.isRemoveVisible,
  isFetching: state.newsBlock.isFetching,
  isUser: state.newsBlock.isUser
}), {
  removeArticle,
  switchButtons,
  loadData
})(News);