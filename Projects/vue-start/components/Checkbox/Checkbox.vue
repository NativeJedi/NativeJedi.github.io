<template>
  <div class="checkbox">
    <input
      class="checkbox__input"
      :id="`check-${todoId}`"
      type="checkbox"
      :checked="checked"
      @change="$emit('change', $event.target.checked)"
    >
    <label class="checkbox__label" :for="`check-${todoId}`" />
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    todoId: {
      type: String,
      default: 'todo'
    },
    checked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import "checkbox";
</style>
