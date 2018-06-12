<template>
  <div class="todo">
    <h1>{{ title }}</h1>
    <form class="todo__form" v-on:submit.prevent="onSubmit">
      <input type="text" class="todo__input" placeholder="Input your deal..." v-model="newTodo">
      <button type="submit" class="todo__btn">Add</button>
    </form>
    <ul id="todoList">
      <li is="TodoItem" class="todo-item" v-for="todo in todos" v-bind:key="todo.id" :todos="todos" :todo="todo" v-show="todo.isVisible"></li>
    </ul>
    <todo-footer :todos="todos" />
  </div>
</template>

<script>
  import TodoItem from './TodoItem';
  import TodoFooter from './TodoFooter';

  console.log(TodoFooter)
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
        newTodo: '',
      };
    },
    methods: {
      onSubmit: function() {
        this.todos.push({
          id: this.todos.length,
          text: this.newTodo,
          active: false,
          isVisible: true
        })
        this.newTodo = '';
      },
    }
  };
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
    border-radius: 5px;
    font-size: 18px;
  }
}
</style>
