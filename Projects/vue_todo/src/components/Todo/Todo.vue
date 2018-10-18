<template>
  <div class="todo">
    <todo-header v-model="inputValue" @change="addTodo"/>
    <transition-group name="fade" class="todo__list" tag="ul">
      <todo-item
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        v-show="todo.isVisible"
        @removeTodo="removeTodo"
      />
    </transition-group>
    <todo-footer
      v-model="filter"
      @switch="handleFilter"
      @removeCompleted="removeCompleted"
      @completeAll="switchCompliting"
      :count="todoCount"
      :isCompleted="isCompleted"
    />
  </div>
</template>

<script>
import TodoHeader from '../TodoHeader'
import TodoItem from '../TodoItem'
import TodoFooter from '../TodoFooter'
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'Todo',
  components: {
    TodoHeader,
    TodoItem,
    TodoFooter
  },
  data () {
    return {
      inputValue: '',
      filter: this.lsGet('filter') || 'All'
    }
  },
  watch: {
    todos: {
      handler: function (todos) {
        this.setTodos({ todos })
      },
      deep: true
    }
  },
  created () {
    console.log(this.todos)
  },
  computed: {
    todoCount () {
      let todos = this.todos.filter(item => item.isVisible)
      return todos.length
    },
    isCompleted () {
      let todos = this.todos.filter(item => item.isChecked)
      return !!todos.length
    },
    ...mapState({
      todos: state => state.todos.todos
    })
  },
  methods: {
    addTodo: function () {
      const todo = {
        text: this.inputValue,
        id: this.todos.length,
        isChecked: false,
        isVisible: !(this.filter === 'Completed')
      }
      this.pushTodo({ todo })
    },
    removeTodo: function (id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    removeCompleted: function () {
      this.todos = this.todos.filter(todo => !todo.isChecked)
      return !!this.todos.length
    },
    handleFilter: function () {
      switch (this.filter) {
        case 'All':
          this.todos = this.todos.map(item => {
            item.isVisible = true
            return item
          })
          break
        case 'Completed':
          this.todos = this.todos.map(item => {
            item.isVisible = item.isChecked
            return item
          })
          break
        case 'Uncompleted':
          this.todos = this.todos.map(item => {
            item.isVisible = !item.isChecked
            return item
          })
          break
        default:
          this.todos = this.lsGet()
          break
      }
      this.lsSet(this.filter, 'filter')
    },
    switchCompliting: function () {
      const flag = this.isCompleted
      this.todos = this.todos.map(todo => {
        flag ? todo.isChecked = false : todo.isChecked = true
        return todo
      })
    },
    lsGet: function (STORAGE_KEY = 'todos') {
      return JSON.parse(localStorage.getItem(STORAGE_KEY))
    },
    lsSet: function (todos, STORAGE_KEY = 'todos') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    },
    ...mapMutations({
      pushTodo: 'todos/pushTodo',
      setTodos: 'todos/setTodos'
    })
  }
}
</script>

<style lang="scss">
@import 'todo';
</style>
