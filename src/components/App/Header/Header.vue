<template>
  <header class="header" id="Home">
    <div class="container header__container">
      <h1 class="header__title">{{ $t('main.greetings') }} <span class="caption">{{ $t('myname') }}</span></h1>
      <h2 class="header__suptitle">{{ $t('main.proffession') }}</h2>
    </div>
    <Navigation />
  </header>
</template>

<script>
import Navigation from './Navigation'

export default {
  name: 'Header',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
@import "header";
</style>