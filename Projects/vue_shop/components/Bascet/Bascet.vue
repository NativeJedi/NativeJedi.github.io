<template>
  <div class="bascet">
    <div class="container">
      <div class="bascet-slider">
        <slider
          :slidesToShow="2"
        >
          <slide v-for="product in selectedProducts" :key="product.id">
            <div class="bascet-product">
              <img class="bascet-product__img" :src="getImgUrl(product.mainImage)">
            </div>
          </slide>
        </slider>
      </div>
      <main-form @submit="submitHandler"/>
      <ul class="social-list">
        <li class="social-list__item">
          <a href="#" class="social-list__link">
            <fa :icon="['fab', 'vk']" />
          </a>
        </li>
        <li class="social-list__item">
          <a href="#" class="social-list__link">
            <fa :icon="['fab', 'facebook-square']" />
          </a>
        </li>
        <li class="social-list__item">
          <a href="#" class="social-list__link">
            <fa :icon="['fab', 'instagram']" />
          </a>
        </li>
        <li class="social-list__item">
          <a href="#" class="social-list__link">
            <fa :icon="['fab', 'youtube']" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MainForm from '~/components/MainForm'
import Slider from '~/components/Slider'
import { mapGetters } from 'vuex'

export default {
  name: 'Bascet',
  layout: 'aside',
  components: {
    MainForm,
    Slider
  },
  created () {
    if (!this.selectedProducts.length) this.$router.push('shop')
  },
  computed: {
    ...mapGetters(['selectedProducts'])
  },
  methods: {
    getImgUrl (imgName) {
      return require(`@/assets/images/${imgName}`)
    },
    submitHandler (params) {
      this.$router.push('thanks')
    }
  }
}
</script>

<style lang="scss">
@import "bascet";
</style>
