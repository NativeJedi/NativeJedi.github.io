const state = {
  todos: JSON.parse(localStorage.getItem('todos')) || []
}

const getters = {
  getTodos: state => {
    return state.todos
  }
}

const mutations = {
  pushTodo (state, { todo }) {
    state.todos = [...state.todos, todo]
  },
  setTodos (state, { todos }) {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
