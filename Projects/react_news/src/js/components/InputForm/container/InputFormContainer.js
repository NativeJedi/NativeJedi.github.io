import { connect } from 'react-redux';
import { addArticle } from '../../../reducers/newsDuck'
import InputForm from '../InputForm';

export default connect(state => ({
  articles: state.newsBlock.articles,
  apiUrl: state.newsBlock.apiUrl
}), {
  addArticle
})(InputForm);
