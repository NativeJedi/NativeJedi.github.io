<template>
  <div>
    <no-ssr>
      <carousel
        class="slider"
        :perPage="slidesToShow"
        :navigationEnabled="true"
        :paginationEnabled="false"
        :navigationNextLabel="'<span class=\'slider__arrow slider__arrow--next\' />'"
        :navigationPrevLabel="'<span class=\'slider__arrow slider__arrow--prev\' />'"
        :loop="true"
      >
        <slot></slot>
      </carousel>
    </no-ssr>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    slidesToShow: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="scss">
@import "slider";
</style>
