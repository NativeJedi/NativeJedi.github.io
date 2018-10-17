<template>
  <div class="collection__block">
    <div class="collection__wrap" v-for="product in collection" :key="product.id" @click="$emit('click', product)">
      <div :class="['collection-product', {'is-active': activeProduct.id === product.id}]">
        <img :src="getImgUrl(product.mainImage)" :alt="product.id" class="collection-product__img">
        <div class="collection-product__info">
          <p class="collection-product__text">{{ $t('collection.clickInfo') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CollectionBlock',
  model: {
    prop: 'activeProduct',
    event: 'click'
  },
  props: {
    tab: String,
    activeProduct: {
      type: Object,
      default: () => { return {} }
    }
  },
  computed: {
    ...mapGetters(['man', 'woman', 'kids']),
    collection () {
      return this[`${this.tab}`]
    }
  },
  methods: {
    getImgUrl (imgName) {
      return require(`@/assets/images/${imgName}`)
    }
  }
}
</script>
