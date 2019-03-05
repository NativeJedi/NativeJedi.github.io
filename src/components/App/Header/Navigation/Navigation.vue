<template>
  <div :class="['navigation', { 'is-floating': isFloating }]" id="navigation">
    <div class="container navigation__container">
      <nav :class="['nav', {'is-mobile-visible': isNavigation}]" id="nav">
        <ul class="nav__list">
          <li class="nav__item" v-for="section in sections" :key="section.id" @click="isNavigation = false">
            <a :class="['nav__link', {'is-active': activeSection === section.id}]" :href="`#${section.id}`" @click.prevent="scrollTo(section.id)">{{ section.name }}</a>
          </li>
        </ul>
      </nav>
      <Dropdown :options="dropOptions" :activeOption="activeOption">
        <i slot="icon" class="dropdown__icon fas fa-chevron-down" />
      </Dropdown>
      <button
        class="mobile-btn btn-default"
        type="button"
        aria-label="menu"
        name="menu"
        @click="isNavigation = !isNavigation"
      />
    </div>
    <span class="progress" :style="{ width: `${progress}%` }" />
  </div>
</template>

<script>
import Dropdown from '~/components/Dropdown'

export default {
  name: 'Navigation',
  components: {
    Dropdown
  },
  data () {
    return {
      isFloating: false,
      isNavigation: false,
      activeSection: 'Home',
      progress: 0,
      sections: [{
        id: 'Home',
        name: this.$t('navigation.home'),
        scrollStart: 0,
        height: 0
      }, {
        id: 'Cases',
        name: this.$t('navigation.cases'),
        scrollStart: 0,
        height: 0
      }, {
        id: 'About',
        name: this.$t('navigation.about'),
        scrollStart: 0,
        height: 0
      }, {
        id: 'Projects',
        name: this.$t('navigation.projects'),
        scrollStart: 0,
        height: 0
      }]
    }
  },
  computed: {
    dropOptions () {
      return [{
        id: 'en',
        text: 'EN',
        params: this.switchLocalePath('en')
      }, {
        id: 'ru',
        text: 'RU',
        params: this.switchLocalePath('ru')
      }]
    },
    activeOption () {
      return this.dropOptions.find(item => item.id === this.$i18n.locale)
    },
    navHeight () {
      return document.getElementById('navigation').offsetHeight
    }
  },
  mounted () {
    if (window.outerWidth >= 768) window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('scroll', this.scrollProgress)
    window.addEventListener('resize', this.resizeHandler)
    this.getSectionsRect()
  },
  destroyed () {
    if (window.outerWidth >= 768) window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('scroll', this.scrollProgress)
    window.removeEventListener('resize', this.resizeHandler)
  },
  methods: {
    resizeHandler () {
      this.handleScroll()
      this.scrollProgress()
      this.getSectionsRect()
    },
    handleScroll () {
      if (window.outerWidth < 768) return
      this.isFloating = window.scrollY > window.innerHeight
      this.sections.map(section => {
        if (window.scrollY >= section.scrollStart && window.scrollY <= section.scrollEnd) this.activeSection = section.id
      })
    },
    scrollTo (to, duration = 500) {
      let element = document.documentElement
      let start = element.scrollTop
      let change = document.getElementById(to).offsetTop - start - this.navHeight
      let currentTime = 0
      let increment = 20

      let animateScroll = function () {        
        currentTime += increment
        let val = easeInOutQuad(currentTime, start, change, duration)
        element.scrollTop = val
        if (currentTime < duration) setTimeout(animateScroll, increment)
      }

      animateScroll()

      function easeInOutQuad (t, b, c, d) {
        t /= d/2
        if (t < 1) return c/2*t*t + b
        t--
        return -c/2 * (t*(t-2) - 1) + b
      }
    },
    getSectionsRect() {
      this.sections.map(item => {
        let section = document.getElementById(item.id)
        item.scrollStart = section.offsetTop - this.navHeight
        item.scrollEnd = section.clientHeight + section.offsetTop - this.navHeight
      })
    },
    scrollProgress() {
      const currentState = document.body.scrollTop || document.documentElement.scrollTop
      const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight - this.navHeight
      this.progress = (currentState / pageHeight) * 100
    }
  }
}
</script>

<style lang="scss">
@import "navigation";
</style>
