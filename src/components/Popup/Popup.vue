<template>
  <transition name="modal">
    <div class="overlay" @click.self="handleClose">
      <div class="popup">
        <header class="popup__header">
          <Carousel
            class="slider"
            :perPage="1"
            :navigationEnabled="true"
            :paginationEnabled="false"
            :loop="true"
            :paginationPosition="'bottom-overlay'"
          >
            <Slide
              v-for="(image, index) in project.images"
              :key="`slide-${index}`"
              class="slider__item"
            >
              <div class="slider__img" :style="{ backgroundImage: `url(${image})`}" />
            </Slide>
          </Carousel>
        </header>
        <main class="popup-content">
          <div class="popup-content__block" v-html="project.description" />
          <div v-if="project.technologies" class="popup-content__block">
            <strong>{{ $t('projects.technologies') }}</strong>
            <span v-html="project.technologies" />
          </div>
          <div v-if="project.tools" class="popup-content__block">
            <strong>{{ $t('projects.tools') }}</strong>
            <span v-html="project.tools" />
          </div>
        </main>
        <div class="popup__controlls">
          <a v-if="project.link" :href="project.link" target="_blank" class="popup__view">{{ $t('projects.view') }}</a>
          <button type="button" class="popup__close btn-default" aria-label="close popup" @click="handleClose" title="close" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Popup',
  props: {
    project: {
      type: Object,
      default: () => { return {} }
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
@import "popup";
</style>