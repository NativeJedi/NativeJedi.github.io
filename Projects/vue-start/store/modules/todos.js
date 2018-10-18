import * as mutationTypes from '../types/mutations'
import * as getterTypes from '../types/getters'

const state = {
  todos: process.browser ? JSON.parse(localStorage.getItem('todos')) || [] : []
}

const mutations = {
  [mutationTypes.PUSH_TODO] (state, { todo }) {
    state.todos = [...state.todos, todo]
  },
  [mutationTypes.SET_TODOS] (state, { todos }) {
    state.todos = [...todos]
  },
  [mutationTypes.REMOVE_TODO] (state, id) {
    state.todos = [...state.todos.filter(todo => todo.id !== id)]
  },
  [mutationTypes.EDIT_TODO] (state, { id, text }) {
    let todo = state.todos.find(todo => todo.id === id)
    todo.text = text
  },
  [mutationTypes.FILTER_TODO] (state, filter) {
    switch (filter) {
      case 'All':
        state.todos = state.todos.map(item => {
          item.isVisible = true
          return item
        })
        break
      case 'Completed':
        state.todos = state.todos.map(item => {
          item.isVisible = item.isChecked
          return item
        })
        break
      case 'Uncompleted':
        state.todos = state.todos.map(item => {
          item.isVisible = !item.isChecked
          return item
        })
        break
      default:
        state.todos = state.todos.map(item => {
          item.isVisible = true
          return item
        })
        break
    }
  },
  [mutationTypes.REMOVE_COMPLETED] (state) {
    state.todos = state.todos.filter(todo => !todo.isChecked)
  },
  [mutationTypes.COMPLETE_ALL] (state, isCompleted) {
    state.todos = state.todos.map(todo => {
      todo.isChecked = !isCompleted
      return todo
    })
  },
  [mutationTypes.CHECK_TODO] (state, id) {
    let todo = state.todos.find(todo => todo.id === id)
    todo.isChecked = !todo.isChecked
  }
}

const getters = {
  [getterTypes.GET_TODO]: state => id => {
    return state.todos.find(todo => todo.id === id)
  },
  [getterTypes.DONE_TODOS_COUNT]: state => {
    return state.todos.filter(todo => todo.isChecked).length
  }
}

export default {
  state,
  getters,
  mutations
}