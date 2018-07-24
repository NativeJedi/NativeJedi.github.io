<template>
  <li :class="todo.isChecked ? 'todo-item is-active' : 'todo-item'">
    <checkbox
      :todoId="todo.id"
      v-model="todo.isChecked"
    />
    <textarea
      class="todo-item__input-edit"
      type="text"
      disabled="true"
      :id="`edit-${todo.id}`"
      v-model="todo.text"
      @blur="handleBlur"
      ref="input"
    />
    <span class="todo-item__text" ref="text">{{ todo.text }}</span>
    <div class="btn-group">
      <button class="btn-default btn-edit" @click="handleEdit">edit</button>
      <button class="btn-default btn-delete material-icons" @click="removeTodo" title="Remove todo">close</button>
    </div>
  </li>
</template>

<script>
import Checkbox from '../Checkbox'
export default {
  name: 'TodoItem',
  components: {
    Checkbox
  },
  props: {
    todo: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      inputValue: this.todo.text,
      isChecked: this.todo.isChecked
    }
  },
  methods: {
    removeTodo: function () {
      this.$emit('removeTodo', this.todo.id)
    },
    handleEdit: function () {
      this.$refs.input.style.height = `${this.$refs.text.offsetHeight + 10}px`
      this.$refs.input.disabled = false
      this.$refs.input.focus()
    },
    handleBlur: function () {
      this.$refs.input.disabled = true
      if (!this.$refs.input.value) this.removeTodo()
    }
  }
}
</script>

<style lang="scss">
@import 'todo-item';
</style>
