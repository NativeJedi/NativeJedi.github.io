<template>
  <div class="todo-description">
    <h2 class="todo-description__title">Todo description (id: {{ todo.id }})</h2>
    <p class="todo-description__field"><span>Text:</span> {{ todo.text }}</p>
    <p class="todo-description__field"><span>Visibility:</span> {{ todo.isVisible }}</p>
    <p class="todo-description__field"><span>Done:</span> {{ todo.isChecked }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      getTodo: 'GET_TODO'
    }),
    todo () {
      return this.getTodo(this.$route.params.id)
    }
  }
}
</script>

<style lang="scss">
@import "id";
</style>
