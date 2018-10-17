<template>
  <modal class="modal--description" :isOpened="isOpened" @close="$emit('closeModal')">
    <header class="modal__header">
      <h3 class="modal__title">{{ description.title }}</h3>
    </header>
    <section class="modal__body">
      <div class="modal__content">{{ description.text }}</div>
    </section>
  </modal>
</template>

<script>
import Modal from '~/components/Modal'

export default {
  name: 'ShopDescriptionModal',
  components: {
    Modal
  },
  props: {
    isOpened: {
      type: Boolean,
      default: false
    },
    description: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
