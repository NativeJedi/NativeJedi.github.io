import * as mutationTypes from '../types/mutations'

const state = {
  filter: process.browser ? JSON.parse(localStorage.getItem('filter')) || 'All' : 'All'
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