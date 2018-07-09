import { connect } from 'react-redux';
import { removeComment } from '../../../reducers/newsDuck';
import ArticleComment from '../ArticleComment';


export default connect(state => ({
  apiUrl: state.newsBlock.apiUrl,
}), {
  removeComment
})(ArticleComment);