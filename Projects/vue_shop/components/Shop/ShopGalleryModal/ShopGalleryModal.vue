<template>
  <modal class="shop-gallery" :isOpened="isOpened" @close="$emit('closeModal')">
    <slider>
      <slide v-for="imageUrl in images" :key="imageUrl">
        <img :src="getImgUrl(imageUrl)">
      </slide>
    </slider>
  </modal>
</template>

<script>
import Modal from '~/components/Modal'
import Slider from '~/components/Slider'

export default {
  name: 'ShopGalleryModal',
  components: {
    Modal,
    Slider
  },
  props: {
    isOpened: {
      type: Boolean
    },
    images: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    getImgUrl (imgName) {
      return require(`@/assets/images/${imgName}`)
    }
  }
}
</script>

<style lang="scss">
@import "shop-gallery";
</style>
