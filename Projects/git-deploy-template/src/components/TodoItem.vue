<template>
  <li>
    <label class="todo-item__label" v-bind:class="{'is-active': todo.active}" v-bind:for="'deal-' + todo.id" @click="onActive">
      <span class="todo-item__number">{{ this.index + 1 }}</span>{{ todo.text }}
    </label>
    <button class="todo-item__remove" @click="onRemove" />
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  data() {
    return {}
  },

  methods: {
    onRemove: function() {
      this.$emit('onRemove', this.todo)
    },
    onActive: function() {
      this.todo.active = !this.todo.active
    }
  },

  props: ['todo', 'index']
}
</script>

<style scoped lang="scss">
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;

  &__label {
    position: relative;
    display: block;
    width: calc(100% - 50px);
    padding: 5px 40px;
    cursor: pointer;
    font-size: 20px;
    &:before {
      content: '';
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translate(0, -50%);
      width: 20px;
      height: 20px;
      border-radius: 5px;
      border: 1px solid #ccc;
      text-align: center;
    }
    &.is-active {
      color: green;
      text-decoration: line-through;

      &:before {
        content: '\2713';
        border-color: green;
      }
    }
  }

  &__input {
    display: none;
  }

  &__remove {
    position: relative;
    width: 25px;
    height: 25px;
    padding: 3px 5px;
    font-size: 10px;
    background-color: transparent;
    border: 2px solid transparent;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.4s;
    &:after,
    &:before {
      content: '';
      width: 3px;
      height: 80%;
      position: absolute;
      top: 50%;
      left: 50%;
      background-color: #f06371;
    }

    &:after {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &:before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &:hover {
      border-color: #f06371;
      transform: scale(1.1) rotate(90deg);
    }
  }

  &__number {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 0 10px 0 20px;
    text-align: center;
    line-height: 20px;
    border: 1px solid currentColor;
    font-size: 0.8em;
    border-radius: 50%;
  }
}
</style>
