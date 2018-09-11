<template>
  <div class="app container" id="app">
    <div class="app__header">
      <img :class="['app__img', {'is-paused': isLogoPaused}]" src="~assets/logo.png" alt="vue-logo" @click="isLogoPaused = !isLogoPaused">
      <h1 class="app__title">Vue.js todo list</h1>
    </div>
    <Todo />
  </div>
</template>

<script>
import Todo from '@/components/Todo'

export default {
  components: {
    Todo
  },
  data () {
    return {
      isLogoPaused: true
    }
  }
}
</script>

<style lang="scss">
@import "~assets/styles/layout/layout.scss";
.container {
  min-height: 100vh;
}

/* .title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; 
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>

