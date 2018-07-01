import { connect } from 'react-redux';
import { loadArticles, removeArticle, switchButtons } from '../../../reducers/newsDuck';
import News from '../News';


export default connect(state => ({
  articles: state.newsBlock.articles,
  isRemoveVisible: state.newsBlock.isRemoveVisible
}), {
  loadArticles,
  removeArticle,
  switchButtons
})(News);