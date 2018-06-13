<template>
  <div class="todo">
    <h1>{{ title }}</h1>
    <form class="todo__form" v-on:submit.prevent="onSubmit">
      <input type="text" class="todo__input" placeholder="Input your deal..." v-model="newTodo">
      <button type="submit" class="todo__btn">Enter</button>
    </form>
    <ul id="todoList">
      <li is="TodoItem" class="todo-item" v-for="(todo, index) in todos" :key="todo.id" :todo="todo" :index="index" v-show="todo.isVisible" @onRemove="removeItem"></li>
    </ul>
    <todo-footer @filterAll="displayAll" @filterUncomplited="displayUncomplited" @filterComplited="displayComplited"/>
  </div>
</template>

<script>
import TodoItem from './TodoItem'
import TodoFooter from './TodoFooter'

export default {
  name: 'TodoList',
  components: {
    TodoItem,
    TodoFooter
  },
  data() {
    return {
      title: 'Simple Todo list with Vue',
      btnTitle: 'Push to add a deal',
      todos: [],
      newTodo: ''
    }
  },
  methods: {
    onSubmit: function() {
      if (!this.newTodo) return

      this.todos.push({
        id: this.todos.length,
        text: this.newTodo,
        active: false,
        isVisible: true
      })

      this.newTodo = ''
    },

    removeItem: function(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1)
    },

    displayAll: function() {
      this.todos.forEach(element => {
        element.isVisible = true
      })
    },

    displayUncomplited: function() {
      this.todos.forEach(element => {
        if (element.active) {
          element.isVisible = false
        } else {
          element.isVisible = true
        }
      })
    },

    displayComplited: function() {
      this.todos.forEach(element => {
        if (element.active) {
          element.isVisible = true
        } else {
          element.isVisible = false
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

* {
  box-sizing: border-box;
}

.todo {
  max-width: 500px;
  margin: 2rem auto;
  &__form {
    display: flex;
    justify-content: space-between;
  }
  &__input {
    width: calc(100% - 120px);
    padding: 5px 20px;
    border-radius: 5px;
    border: 2px solid #ccc;
    font-size: 18px;
    &:focus {
      outline: none;
      color: #01aef0;
      border-color: #01aef0;
      & + button {
        color: #01aef0;
        border-color: #01aef0;
      }
      &::placeholder {
        color: currentColor;
      }
    }
  }
  &__btn {
    width: 100px;
    padding: 0 10px;
    background-color: transparent;
    border: 2px solid #ccc;
    color: #ccc;
    border-radius: 5px;
    font-size: 14px;
    transition: all 0.3s;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      color: #01aef0;
      border-color: #01aef0;
      box-shadow: 0 0 10px #01aef0;
      text-shadow: 0 0 1px #01aef0;
    }
  }
}
</style>
