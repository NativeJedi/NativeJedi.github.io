import { connect } from 'react-redux';
import ArticleComment from '../ArticleComment';
import { removeComment } from '../../../reducers/newsDuck'

export default connect(state => ({
  apiUrl: state.newsBlock.apiUrl,
  isUser: state.newsBlock.isUser,
}), {
  removeComment
})(ArticleComment);