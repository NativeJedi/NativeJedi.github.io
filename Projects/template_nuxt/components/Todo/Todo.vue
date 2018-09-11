<template>
  <div class="todo">
    <todo-header v-model="inputValue" @change="addTodo"/>
    <transition-group name="fade" class="todo__list" tag="ul">
      <todo-item
        v-for="todo in todos"
        :key="todo.id"
        :id="todo.id"
        v-show="todo.isVisible"
      />
    </transition-group>
    <todo-footer />
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
      inputValue: ''
    }
  },
  computed: {
    ...mapState({
      todos: state => state.todos.todos,
      filter: state => state.filters.filter
    })
  },
  methods: {
    addTodo: function () {
      const todo = {
        text: this.inputValue,
        id: this.ID(),
        isChecked: false,
        isVisible: !(this.filter === 'Completed')
      }
      this.pushTodo({ todo })
    },
    ID () {
      return '_' + Math.random().toString(36).substr(2, 9)
    },
    removeCompleted: function () {
      this.todos = this.todos.filter(todo => !todo.isChecked)
      return !!this.todos.length
    },
    switchCompliting: function () {
      const flag = this.isCompleted
      this.todos = this.todos.map(todo => {
        flag ? todo.isChecked = false : todo.isChecked = true
        return todo
      })
    },
    ...mapMutations({
      pushTodo: 'PUSH_TODO',
      setTodos: 'SET_TODOS'
    })
  }
}
</script>

<style lang="scss">
@import "todo";
</style>
