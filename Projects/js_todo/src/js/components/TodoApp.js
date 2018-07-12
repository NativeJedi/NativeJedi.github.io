HTMLElement.prototype.appendChildren = function (...args) {
  for (let i = 0; i < args.length; i++) {
    this.appendChild(args[i]);
  }
};

class TodoApp {
  constructor(config) {
    this.form = config.form;
    this.input = config.input;
    this.list = config.list;

    if (!JSON.parse(localStorage.getItem('todos'))) {
      localStorage.setItem('todos', JSON.stringify([]));
    }

    if (!localStorage.getItem('activeTab')) {
      localStorage.setItem('activeTab', 'all');
    }

    this.todos = JSON.parse(localStorage.getItem('todos'));
    this.filter = config.filter;

    this.form.addEventListener('submit', (e) => {
      this.addTodo(e);
    });
    
    this.filter.all.addEventListener('click', () => {
      this.filterAll();
    });
    this.filter.completed.addEventListener('click', () => {
      this.filterCompleted();
    });
    this.filter.uncompleted.addEventListener('click', () => {
      this.filterUncompleted();
    });

    this.handleEditClick = (id) => {
      const inp = document.getElementById(id);
      inp.disabled = false;
    };

    this.render();
  }

  // Todo handlers
  checkHandler(id) {
    const todo = this.todos.filter(item => item.id === id)[0];
    todo.isChecked = !todo.isChecked;
    this.render();
  }

  addTodo(e) {
    e.preventDefault();

    const deal = {
      text: this.input.value,
      isChecked: false,
      isVisible: true,
      id: this.todos.length || 0,
    };

    this.todos.push(deal);
    this.input.value = '';
    this.render();
  }

  removeTodo(id) {
    this.todos = [...this.todos.filter(item => item.id !== id)];
    this.render();
  }

  editTodo(e, id) {
    for (const item of this.todos) {
      if (item.id === id) {
        item.text = e.target.value;
      }
    }  
    this.render();
  }

  // Filter handlers
  filterAll() {
    for (const todo of this.todos) {
      todo.isVisible = true;
    }
    localStorage.setItem('activeTab', 'all');
    this.render();
  }

  filterCompleted() {
    for (const todo of this.todos) {
      if (!todo.isChecked) {
        todo.isVisible = false;
      } else {
        todo.isVisible = true;
      }
    }
    localStorage.setItem('activeTab', 'completed');
    this.render();
  }

  filterUncompleted() {
    for (const todo of this.todos) {
      if (todo.isChecked) {
        todo.isVisible = false;
      } else {
        todo.isVisible = true;
      }
    }
    localStorage.setItem('activeTab', 'uncompleted');
    this.render();
  }
  
  // render methods
  switchActiveTab() {
    function removeClasses(filter) {
      for (const key in this.filter) {
        if (Object.prototype.hasOwnProperty.call(this.filter, key)) {
          const element = this.filter[key];
          if (filter === key) {
            element.classList.add('is-active');
          } else {
            element.classList.remove('is-active');
          }
        }
      }
    }
    
    switch (localStorage.getItem('activeTab')) {
      case 'all':
        removeClasses.call(this, 'all');
        break;
      
      case 'completed':
        removeClasses.call(this, 'completed');
        break;

      case 'uncompleted':
        
        removeClasses.call(this, 'uncompleted');
        break;
      
      default:          
        removeClasses.call(this, 'all');
        break;
    }
  }

  render() {
    this.list.innerHTML = '';
    this.switchActiveTab();
    for (const todo of this.todos) {
      if (!todo.isVisible) continue;
      const li = document.createElement('li');
      li.classList.add('todo-list__item');

      const checkbox = document.createElement('input');
      checkbox.classList.add('todo-list__checkbox');
      checkbox.type = 'checkbox';
      checkbox.id = `deal-${todo.id}`;
      checkbox.checked = todo.isChecked;
      checkbox.addEventListener('change', () => {
        this.checkHandler(todo.id);
      });

      const textInput = document.createElement('input');
      textInput.classList.add('todo-list__text');
      textInput.type = 'text';
      textInput.id = `text-${todo.id}`;
      textInput.disabled = true;
      textInput.value = todo.text;
      textInput.addEventListener('blur', (e) => {
        this.editTodo(e, todo.id);
      });

      const editLabel = document.createElement('label');
      editLabel.classList.add('todo-list__edit');
      editLabel.htmlFor = `text-${todo.id}`;
      editLabel.innerHTML = '<i class="material-icons">edit</i>';
      editLabel.addEventListener('click', () => {
        this.handleEditClick(`text-${todo.id}`);
      });

      const label = document.createElement('label');
      label.classList.add('todo-list__label');
      label.htmlFor = `deal-${todo.id}`;
      label.appendChildren(textInput, editLabel);

      const removeBtn = document.createElement('button');
      removeBtn.classList.add('todo-list__remove');
      removeBtn.type = 'button';
      removeBtn.innerHTML = '<i class="material-icons">delete_forever</i>';
      removeBtn.addEventListener('click', () => {
        this.removeTodo(todo.id);
      });

      this.list.appendChildren(li);
      li.appendChildren(checkbox, label, removeBtn);
    }
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}

export default TodoApp;