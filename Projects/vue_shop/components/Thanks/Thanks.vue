<template>
  <div class="section thanks">
    <div class="container">
      <nuxt-link :to="localePath('index')" class="logo-link" :title="$t('links.tomain')">
        <img class="logo-link__img" src="~assets/images/logo1.png" alt="logo">
      </nuxt-link>
      <div class="thanks__content">
        <p class="thanks__info">{{ $t('thanks.thanks') }}</p>
        <nuxt-link :to="localePath('shop')" class="thanks-link"><span class="thanks-link__text">{{ $t('thanks.more') }}</span></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Thanks'
}
</script>

<style lang="scss">
@import "thanks";
</style>
