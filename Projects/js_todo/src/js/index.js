import TodoApp from './components/TodoApp';

window.onload = function () {
  const todoConfig = {
    form: document.querySelector('.todo-form'),
    input: document.querySelector('.todo-form__input'),
    list: this.document.querySelector('.todo-list'),
    filter: {
      all: document.querySelector('#filterAll'),
      completed: document.querySelector('#filterCompleted'),
      uncompleted: document.querySelector('#filterUncompleted'),
    },
  };

  todoConfig.input.addEventListener('blur', (e) => {
    if (e.target.value) {
      e.target.classList.add('is-active');
    } else {
      e.target.classList.remove('is-active');
    }
  });

  // eslint-disable-next-line
  const todo = new TodoApp(todoConfig);
};