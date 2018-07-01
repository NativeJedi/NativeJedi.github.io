import { connect } from 'react-redux';
import Article from '../Article';

export default connect(state => ({
  isRemoveVisible: state.newsBlock.isRemoveVisible
}), null)(Article);