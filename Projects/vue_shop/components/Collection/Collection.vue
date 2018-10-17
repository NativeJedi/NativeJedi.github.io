<template>
  <section class="section collection">
    <div class="container">
      <div class="collection__content">
        <div class="btn-group collection__button-bar">
          <button v-for="tab in tabs" @click="activeTab=tab.key" :key="`tab-${tab.key}`" :class="['btn-tab', {'is-active': activeTab===tab.key}]">{{ tab.text.toUpperCase() }}</button>
        </div>
        <div class="collection__container">
          <transition-group name="collection" mode="out-in">
            <collection-block v-for="tab in tabs" v-if="activeTab===tab.key" :key="`block-${tab.key}`" v-model="activeProduct" :tab="tab.key" @click="isModalShown = true"/>
          </transition-group>
        </div>
      </div>
    </div>
    <collection-modal
      :isOpened="isModalShown"
      :product="activeProduct"
      @closeModal="handleClose"
    />
  </section>
</template>

<script>
import CollectionModal from '~/components/Collection/CollectionModal'
import CollectionBlock from '~/components/Collection/CollectionBlock'

export default {
  name: 'Collection',
  layout: 'aside',
  components: {
    CollectionModal,
    CollectionBlock
  },
  data () {
    return {
      activeTab: 'man',
      activeProduct: {
        description: {
          title: '',
          text: ''
        },
        images: []
      },
      isModalShown: false
    }
  },
  computed: {
    tabs () {
      return [{
          key: 'man',
          text: this.$t('collection.man')
        }, {
          key: 'woman',
          text: this.$t('collection.woman')
        }, {
          key: 'kids',
          text: this.$t('collection.kids')
        }]
    }
  },
  methods: {
    handleClose () {
      this.activeProduct = {
        description: {
          title: '',
          text: ''
        },
        images: []
      }

      this.isModalShown = false
    }
  }
}
</script>

<style lang="scss">
@import "collection";
</style>
