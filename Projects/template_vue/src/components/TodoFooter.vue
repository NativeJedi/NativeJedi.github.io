<template>
  <div class="todo-footer">
    <button class="todo-footer__btn" @click="filterAll">All</button>
    <button class="todo-footer__btn" @click="filterComplited">Complited</button>
    <button class="todo-footer__btn" @click="filterUncomplited">Uncomplited</button>
  </div>
</template>

<script>
export default {
  name: 'TodoFooter',
  methods: {
    btnClick: function(e) {
      if (e.target.classList.contains('is-active')) return

      let btns = document.querySelectorAll('.todo-footer__btn')

      for (let btn of btns) {
        btn.classList.remove('is-active')
      }

      e.target.classList.add('is-active')
    },

    filterComplited: function(e) {
      this.btnClick(e)
      this.$emit('filterComplited')
    },

    filterUncomplited: function(e) {
      this.btnClick(e)
      this.$emit('filterUncomplited')
    },

    filterAll: function(e) {
      this.btnClick(e)
      this.$emit('filterAll')
    }
  }
}
</script>

<style scoped lang="scss">
.todo-footer {
  text-align: center;

  &__btn {
    font-size: 14px;
    margin: 0 10px;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s;

    &.is-active,
    &:focus {
      outline: none;
      color: green;
      border-color: green;
    }

    &:hover {
      box-shadow: 0 0 10px currentColor;
      text-shadow: 0 0 1px currentColor;
    }
  }
}
</style>
