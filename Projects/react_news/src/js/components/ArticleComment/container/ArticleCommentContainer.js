import { connect } from 'react-redux';
import { removeComment } from '../../../reducers/newsDuck';
import ArticleComment from '../ArticleComment';


export default connect(state => ({
  articles: state.newsBlock.articles,
}), {
  removeComment
})(ArticleComment);