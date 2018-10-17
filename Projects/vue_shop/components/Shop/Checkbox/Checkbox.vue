<template>
  <div class="checkbox">
    <input @change="changeHandle($event)" :id="id" type="checkbox" class="checkbox__input" :checked="checked">
    <label :for="id" class="checkbox__label">
      <slot></slot>
    </label>
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
    id: {
      type: String,
      default: 'check-1'
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changeHandle (e) {
      this.$emit('change', e.target.checked)
    }
  }
}
</script>

<style lang="scss">
@import 'checkbox';
</style>
