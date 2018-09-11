import * as mutationTypes from '../types/mutations'

const state = {
  filter: JSON.parse(localStorage.getItem('filter')) || 'All'
}

const mutations = {
  [mutationTypes.SET_FILTER] (state, filter) {
    state.filter = filter
  }
}

export default {
  state,
  mutations
}