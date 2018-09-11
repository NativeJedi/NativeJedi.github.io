import Vue from 'vue'
import Vuex from 'vuex'
import persist from 'vuex-persist'

import * as modules from './modules'
import { rehydrateStore } from '@/utils'

Vue.use(Vuex)

export default () => new Vuex.Store({
  modules,
  plugins: [
    new persist({
      storage: process.browser ? window.localStorage : {},
      key: 'state',
      reducer: state => ({
        todos: state.todos.todos,
        filter: state.filters.filter
      }),
      restoreState: rehydrateStore
    }).plugin
  ]
})