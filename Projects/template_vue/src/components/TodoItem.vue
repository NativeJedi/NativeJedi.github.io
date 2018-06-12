<template>
  <li>
    <label class="todo-item__label" 
      v-bind:class="{'is-active': todo.active}" 
      v-bind:for="'deal-' + todo.id"
      @click="onActive">
      <span class="todo-item__number">{{ numb }}</span>
      {{ todo.text }}
    </label>
    <button class="todo-item__remove" @click="onRemove">X</button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  
  data() {
    return {
    }
  },

  computed: {
    numb: function() {
      return this.todo.id + 1;
    }
  },

  methods: {
    onRemove: function() {
      this.todos.splice(this.todos.indexOf(this.todo), 1)
    },
    onActive: function() {
      this.todo.active = !this.todo.active;
    }
  },

  props: ['todos', 'todo'],
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
    font-weight: bold;

    &:before {
      content: "";
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translate(0, -50%);
      width: 15px;
      height: 15px;
      border-radius: 5px;
      border: 1px solid #ccc;
      text-align: center;
    }
    &.is-active {
      color: green;
      text-decoration: line-through;

      &:before {
        content: "\2713";
        border-color: green;
      }
    }
  }

  &__input {
    display: none;
  }

  &__remove {
    max-width: 20px;
    padding: 3px 5px;
    font-size: 10px;
    background-color: transparent;
    cursor: pointer;
  }

  &__number {
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 20px;
    text-align: center;
    line-height: 15px;
    border: 1px solid #000;
    font-size: 14px;
    border-radius: 50%;
  }
}
</style>

