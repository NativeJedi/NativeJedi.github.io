<template>
  <div class="sidemenu-container">
    <button
      @click="isMenuActive = !isMenuActive"
      :class="['btn-menu', {'is-active': isMenuActive}]"
    >
      <span class="btn-menu__wrap">
        <span class="btn-menu__item btn-menu__item--top" />
        <span class="btn-menu__item btn-menu__item--mid" />
        <span class="btn-menu__item btn-menu__item--bot" />
      </span>
      <span class="btn-menu__text">{{ isMenuActive ? $t('buttons.close') : $t('buttons.menu') }}</span>
    </button>
    <aside :class="['sidemenu', { 'is-active': isMenuActive }]">
      <nav @click="handleNavClick($event.target)" class="navigation">
        <nuxt-link :to="localePath('index')" class="navigation__link"><span class="navigation__text">{{ $t('links.mainpage') }}</span></nuxt-link>
        <nuxt-link :to="localePath('shop')" class="navigation__link"><span class="navigation__text">{{ $t('links.shop') }}</span></nuxt-link>
        <nuxt-link :to="localePath('collection')" class="navigation__link"><span class="navigation__text">{{ $t('links.collection') }}</span></nuxt-link>
        <nuxt-link :to="localePath('contacts')" class="navigation__link"><span class="navigation__text">{{ $t('links.contacts') }}</span></nuxt-link>
      </nav>
      <div class="btn-group">
        <nuxt-link :to="switchLocalePath('ua')" :class="['btn-local', {'is-active': $store.state.i18n.locale === 'ua'}]">UA</nuxt-link>
        <nuxt-link :to="switchLocalePath('ru')" :class="['btn-local', {'is-active': $store.state.i18n.locale === 'ru'}]">RU</nuxt-link>
        <nuxt-link :to="switchLocalePath('en')" :class="['btn-local', {'is-active': $store.state.i18n.locale === 'en'}]">EN</nuxt-link>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
  data () {
    return {
      isMenuActive: false
    }
  },
  methods: {
    handleNavClick (target) {
      if (!target.classList.contains('navigation__link') && !target.classList.contains('navigation__text')) return
      this.isMenuActive = !this.isMenuActive
    }
  }
}
</script>

<style lang="scss">
@import "sidemenu";
</style>
