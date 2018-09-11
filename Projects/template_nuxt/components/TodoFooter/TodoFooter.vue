<template>
  <div class="todo-footer">
    <span class="todo-footer__counter">{{ todoCount }} items</span>
    <div class="btn-group">
      <button :class="['btn', 'btn-tab', {'is-active': filter==='All'}]" @click="handleFilter('All')">All</button>
      <button :class="['btn', 'btn-tab', {'is-active': filter==='Completed'}]" @click="handleFilter('Completed')">Completed</button>
      <button :class="['btn', 'btn-tab', {'is-active': filter==='Uncompleted'}]" @click="handleFilter('Uncompleted')">Uncompleted</button>
    </div>
    <div class="todo-footer__controll">
      <button class="btn-default btn-edit" @click="handleComplete">{{ this.isCompleted ? 'uncomplete all' : 'complete all' }}</button>
      <button class="btn-default btn-edit" @click="handleCompleted">clear completed</button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapGetters } from 'vuex'

export default {
  name: 'TodoFooter',
  data () {
    return {
      todos: [],
      isCompleted: false
    }
  },
  created () {
    this.todos = [...this.storeTodos]
  },
  computed: {
    ...mapState({
      filter: state => state.filters.filter,
      storeTodos: state => state.todos.todos
    }),
    ...mapGetters({
      doneTodosCount: 'DONE_TODOS_COUNT'
    }),
    todoCount () {
      return this.todos.filter(todo => todo.isVisible).length
    }
  },
  methods: {
    ...mapMutations ({
      setFilter: 'SET_FILTER',
      filterTodo: 'FILTER_TODO',
      removeCompleted: 'REMOVE_COMPLETED',
      completeAll: 'COMPLETE_ALL'
    }),
    handleFilter: function (val) {
      this.setFilter(val),
      this.filterTodo(val)
    },
    handleCompleted () {
      this.removeCompleted()
    },
    handleComplete () {
      this.completeAll(this.isCompleted)
    }
  },
  watch: {
    todos: {
      handler: function (todos) {
        this.isCompleted = (this.doneTodosCount === this.todos.length)
      },
      deep: true
    }
  }
}
</script>

<style lang="scss">
@import "todo-footer";
</style>
