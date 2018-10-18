<template>
  <div class="app" id="app">
    <div class="app__header">
      <img :class="['app__img', {'is-paused': isLogoPaused}]" src="./assets/logo.png" alt="vue-logo" @click="isLogoPaused = !isLogoPaused">
      <h1 class="app__title">Vue.js todo list</h1>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isLogoPaused: true
    }
  }
}
</script>

<style lang="scss">
@import "./assets/styles/layout/layout.scss";
</style>
