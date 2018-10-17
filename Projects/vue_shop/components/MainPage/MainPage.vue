<template>
  <section class="main">
    <div class="container">
      <nuxt-link :to="localePath('index')" class="logo-link" title="to main page">
        <img class="logo-link__img" src="~assets/images/logo.png" alt="logo">
      </nuxt-link>
      <nav class="main-nav">
        <nuxt-link :to="localePath('shop')" class="main-nav__link"><span class="main-nav__text">{{ $t('links.shop') }}</span></nuxt-link>
        <nuxt-link :to="localePath('collection')" class="main-nav__link"><span class="main-nav__text">{{ $t('links.collection') }}</span></nuxt-link>
        <nuxt-link :to="localePath('contacts')" class="main-nav__link"><span class="main-nav__text">{{ $t('links.contacts') }}</span></nuxt-link>
      </nav>
      <div class="btn-group">
        <nuxt-link :to="switchLocalePath('ua')" :class="['btn-main-local', {'is-active': $store.state.i18n.locale === 'ua'}]">UA</nuxt-link>
        <nuxt-link :to="switchLocalePath('ru')" :class="['btn-main-local', {'is-active': $store.state.i18n.locale === 'ru'}]">RU</nuxt-link>
        <nuxt-link :to="switchLocalePath('en')" :class="['btn-main-local', {'is-active': $store.state.i18n.locale === 'en'}]">EN</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MainPage'
}
</script>

<style lang="scss">
@import "mainpage";
</style>
