<template>
  <div :class="['dropdown', {'is-opened': isOpened}]" id="dropdown">
    <button
      class="dropdown__head"
      @click="isOpened = !isOpened"
    >
      <span class="dropdown__head-text">{{ activeItem.text }}</span>
      <slot name="icon" />
    </button>
    <ul class="dropdown__list">
      <li
        v-for="(item, index) in items"
        :key="`dropitem-${index}`"
        class="dropdown__item"
      >
        <nuxt-link
          v-if="optionTypes === 'links'"
          :to="item.params"
          class="dropdown__btn"
        >
          {{ item.text }}
        </nuxt-link>
        <button
          v-else
          @click="handleClick(item)"
          class="dropdown__btn"
          type="button"
        >
          {{ item.text }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    optionTypes: {
      type: String,
      default: 'links'
    },
    options: {
      type: Array,
      default: () => { return [] }
    },
    activeOption: {
      type: Object,
      default: () => { return null }
    }
  },
  data () {
    return {
      isOpened: false,
      activeItem: this.activeOption || this.options[0]
    }
  },
  computed: {
    items () {
      return this.options.filter(option => option.text !== this.activeItem.text)
    }
  },
  mounted () {
    document.addEventListener('click', this.clickOutside)
  },
  destroyed () {
    document.removeEventListener('click', this.clickOutside)
  },
  methods: {
    clickOutside (e) {
      let target = e.target

      while (target.tagName !== 'BODY') {
        if (target.id === 'dropdown') break
        target = target.parentNode
      }

      if (target.id !== 'dropdown') this.isOpened = false
    },
    handleClick (item) {
      this.activeItem = item
      if (item.handler) item.handler()
    }
  }
}
</script>

<style lang="scss">
@import "dropdown";
</style>