import { connect } from 'react-redux'
import NewsHeader from '../NewsHeader'

export default connect(state => ({
  apiUrl: state.newsBlock.apiUrl,
  isUser: state.newsBlock.isUser
}), null)(NewsHeader)