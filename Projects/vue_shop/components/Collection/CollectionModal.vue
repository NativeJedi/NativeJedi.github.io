<template>
  <modal class="collection-modal modal--description" v-if="product" :isOpened="isOpened" @close="handleClose">
    <header class="collection-modal__header modal__header">
      <h3 class="collection-modal__title modal__title">{{ product.description.title }}</h3>
    </header>
    <section v-if="isOrder" class="modal__body">
      <div class="modal__content">
        <main-form @submit="submitHandler" :buttons="buttons" />
      </div>
    </section>
    <section v-else class="collection-modal__body modal__body">
      <slider class="collection-modal__slider">
        <slide class="collection-modal__slide" v-for="imageUrl in product.images" :key="imageUrl">
          <img :src="getImgUrl(imageUrl)">
        </slide>
      </slider>
      <div class="collection-modal__content modal__content">{{ product.description.text }}</div>
      <button class="btn-main btn-main--danger" @click="isOrder=true">{{ $t('buttons.order') }}</button>
    </section>
  </modal>
</template>

<script>
import Modal from '~/components/Modal'
import Slider from '~/components/Slider'
import MainForm from '~/components/MainForm'

export default {
  name: 'CollectionModal',
  components: {
    Modal,
    Slider,
    MainForm
  },
  props: {
    isOpened: {
      type: Boolean,
      default: false
    },
    product: {
      type: Object,
      default: () => {
        return {
          description: {
            title: '',
            text: ''
          },
          images: []
        }
      }
    }
  },
  data () {
    return {
      isOrder: false
    }
  },
  computed: {
    buttons () {
      return [{ text: this.$t('buttons.back'), handler: this.returnHandle }]
    }
  },
  methods: {
    handleClose () {
      this.isOrder = false
      this.$emit('closeModal')
    },
    returnHandle () {
      this.isOrder = false
    },
    getImgUrl (imgName) {
      return require(`@/assets/images/${imgName}`)
    },
    submitHandler (params) {
      this.$router.push('thanks')
    }
  }
}
</script>
