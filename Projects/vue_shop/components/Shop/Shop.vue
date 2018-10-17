<template>
  <section class="section shop">
    <div class="container">
      <h2 class="main-title">{{ $t('shop.title') }}</h2>
      <div class="shop__content">
        <slider>
          <slide v-for="product in hats" :key="product.id">
            <div :class="['product', {'is-active' : product.isSelected}]" @click="handleChoise(product.id, $event)">
              <img class="product__img" :src="getImgUrl(product.mainImage)" alt="hat">
              <checkbox
                class="product__checkbox"
                :id="product.id"
                :checked="product.isSelected"
              />
              <div class="product__overlay">
                <div class="btn-group product__buttons">
                  <button class="btn-main" @click="showDescription(product.description)">{{ $t('buttons.description') }}</button>
                  <button class="btn-main" @click="showGallery(product.images)">{{ $t('buttons.look') }}</button>
                </div>
              </div>
            </div>
          </slide>
        </slider>
        <slider>
          <slide v-for="product in sweetshots" :key="product.id">
            <div :class="['product', {'is-active' : product.isSelected}]" @click="handleChoise(product.id, $event)">
              <img class="product__img" :src="getImgUrl(product.mainImage)" alt="hat">
              <checkbox
                class="product__checkbox"
                :id="product.id"
                v-model="product.isSelected"
                :value="product.isSelected"
              />
              <div class="product__overlay">
                <div class="btn-group product__buttons">
                  <button class="btn-main" @click="showDescription(product.description)">{{ $t('buttons.description') }}</button>
                  <button class="btn-main" @click="showGallery(product.images)">{{ $t('buttons.look') }}</button>
                </div>
              </div>
            </div>
          </slide>
        </slider>
        <slider>
          <slide v-for="product in pants" :key="product.id">
            <div :class="['product', {'is-active' : product.isSelected}]" @click="handleChoise(product.id, $event)">
              <img class="product__img" :src="getImgUrl(product.mainImage)" alt="hat">
              <checkbox
                class="product__checkbox"
                :id="product.id"
                v-model="product.isSelected"
                :value="product.isSelected"
              />
              <div class="product__overlay">
                <div class="btn-group product__buttons">
                  <button class="btn-main" @click="showDescription(product.description)">{{ $t('buttons.description') }}</button>
                  <button class="btn-main" @click="showGallery(product.images)">{{ $t('buttons.look') }}</button>
                </div>
              </div>
            </div>
          </slide>
        </slider>
        <button @click="handleBuy" class="btn-main btn-main--danger">{{ $t('buttons.buy') }}</button>
      </div>
    </div>
    <shop-description-modal :isOpened="isDescriptionOpened" @closeModal="closeModal" :description="productDescription" />
    <shop-gallery-modal :isOpened="isGalleryOpened" @closeModal="closeModal" :images="galleryImages" />
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Slider from '~/components/Slider'
import Checkbox from '~/components/Shop/Checkbox'
import Modal from '~/components/Modal'
import ShopDescriptionModal from '~/components/Shop/ShopDescriptionModal'
import ShopGalleryModal from '~/components/Shop/ShopGalleryModal'

export default {
  name: 'Shop',
  layout: 'aside',
  components: {
    Slider,
    Checkbox,
    Modal,
    ShopDescriptionModal,
    ShopGalleryModal
  },
  data () {
    return {
      isDescriptionOpened: false,
      isGalleryOpened: false,
      galleryImages: [],
      productDescription: {}
    }
  },
  computed: {
    ...mapGetters(['hats', 'sweetshots', 'pants', 'selectedProducts'])
  },
  methods: {
    getImgUrl (imgName) {
      return require(`@/assets/images/${imgName}`)
    },
    handleChoise (id, e) {
      const name = e.target.tagName
      if (name === 'BUTTON') return

      this.selectProduct(id)
    },
    handleBuy () {
      if (!this.selectedProducts.length) return

      this.$router.push('bascet')
    },
    showDescription (description) {
      this.isDescriptionOpened = true
      this.productDescription = description
    },
    showGallery (images) {
      this.isGalleryOpened = true
      this.galleryImages = images
    },
    closeModal () {
      this.isDescriptionOpened = false
      this.isGalleryOpened = false
    },
    ...mapActions(['selectProduct'])
  }
}
</script>

<style lang="scss">
@import "shop";
</style>
