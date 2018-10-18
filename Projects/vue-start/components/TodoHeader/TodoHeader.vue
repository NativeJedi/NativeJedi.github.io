<template>
  <form @submit.prevent="submitHandle" class="todo-header">
    <div class="input-field">
      <input
        v-model="input"
        :class="!!input.length ? 'input-field__input is-active' : 'input-field__input'"
        id="input-deal"
        type="text"
        required
      />
      <label class="input-field__label" for="input-deal">What's need to be done?</label>
      <i class="input-field__icon animated-icon material-icons">create</i>
    </div>
    <button class="btn btn--submit" type="submit">Enter</button>
  </form>
</template>

<script>
export default {
  name: 'TodoHeader',
  model: {
    prop: 'inputValue',
    event: 'change'
  },
  props: {
    inputValue: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      input: this.inputValue
    }
  },
  methods: {
    submitHandle: function () {
      if (!this.input) return
      this.$emit('change', this.input)
      this.input = ''
    }
  }
}
</script>

<style lang="scss">
@import 'todo-header';
</style>
