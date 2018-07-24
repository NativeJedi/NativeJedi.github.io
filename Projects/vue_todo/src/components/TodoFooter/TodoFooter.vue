<template>
  <div class="todo-footer">
    <span class="todo-footer__counter">{{ count }} items</span>
    <div class="btn-group">
      <button :class="['btn', 'btn-tab', {'is-active': filter==='All'}]" @click="handleFilter('All')">All</button>
      <button :class="['btn', 'btn-tab', {'is-active': filter==='Completed'}]" @click="handleFilter('Completed')">Completed</button>
      <button :class="['btn', 'btn-tab', {'is-active': filter==='Uncompleted'}]" @click="handleFilter('Uncompleted')">Uncompleted</button>
    </div>
    <div class="todo-footer__controll">
      <button class="btn-default btn-edit" @click="completeAll">{{ this.isCompleted ? 'uncomplete all' : 'complete all' }}</button>
      <button class="btn-default btn-edit" @click="removeCompleted">clear completed</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoFooter',
  model: {
    prop: 'filter',
    event: 'switch'
  },
  props: {
    filter: {
      type: String,
      default: 'All'
    },
    count: {
      type: Number,
      default: 0
    },
    isCompleted: {
      type: Boolean,
      default: null
    }
  },
  methods: {
    handleFilter: function (val) {
      this.$emit('switch', val)
    },
    removeCompleted: function () {
      this.$emit('removeCompleted')
    },
    completeAll: function () {
      this.$emit('completeAll')
    }
  }
}
</script>

<style lang="scss">
@import 'todo-footer';
</style>
