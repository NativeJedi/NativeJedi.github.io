<template>
  <section class="section" id="Cases">
    <div class="container">
      <h2 class="section-title">{{ $t('navigation.cases') }}</h2>
      <ul class="cases">
        <li
          v-for="(item, index) in cases"
          :key="item.id"
          class="cases__item"
          data-aos="fade-flip"
          data-aos-duration="1000"
          :data-aos-delay="index * 200"
        >
          <button
            class="cases__btn btn-default"
            @click="handleFlip"
          >
            <div class="cases__flipper">
              <div class="cases__container cases__container--front">
                <div class="cases__icon">
                  <span v-for="icon in item.icons" :key="icon" :class="['cases__ico', icon]" />
                </div>
                <h3 class="cases__title">{{ $t(`cases.${item.id}.title`) }}</h3>
                <div class="cases__details">{{ $t('cases.details') }} <span class="fas fa-arrow-circle-right" /></div>
              </div>
              <div class="cases__container cases__container--back">
                <p>{{ $t(`cases.${item.id}.textUpper`) }}</p>
                <p>{{ $t(`cases.${item.id}.textLower`) }}</p>
                <span class="cases__icon-back fas fa-arrow-circle-left" />
              </div>
            </div>
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Cases',
  data () {
    return {
      flippedCases: []
    }
  },
  computed: {
    cases () {
      return [{
        id: 'responsive',
        icons: ['fas fa-mobile-alt', 'fas fa-desktop', 'fas fa-tablet-alt']
      }, {
        id: 'fast',
        icons: ['fas fa-bolt', 'fas fa-tachometer-alt', 'fas fa-rocket']
      }, {
        id: 'browser',
        icons: ['fab fa-firefox', 'fab fa-edge', 'fab fa-chrome']
      }, {
        id: 'code',
        icons: ['fab fa-node-js', 'fab fa-css3-alt', 'fab fa-html5']
      }]
    }
  },
  methods: {
    handleFlip (e) {
      let element = e.target
      for (let i = 0; i <= 5; i++) {
        if (element.classList.contains('is-flipped')) {
          element.classList.remove('is-flipped')
          return
        } else if (element.tagName === 'BUTTON') {
          element.classList.add('is-flipped')
          break
        } else if (element.tagName === 'BODY') break
        
        element = element.parentNode
      }
    }
  }
}
</script>

<style lang="scss">
@import "cases";
</style>