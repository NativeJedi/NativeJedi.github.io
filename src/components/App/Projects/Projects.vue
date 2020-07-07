<template>
  <section class="section section--dark" id="Projects">
    <div class="container">
      <h2 class="section-title">{{ $t('navigation.projects') }}</h2>
      <div class="projects">
        <div class="filters-wrap">
          <div v-if="activeFilter" :style="{width: `${activeFilter.size}px`, left: `${activeFilter.distance}px`}" class="filters-bg"/>
          <ul class="filters">
            <li v-for="filter in filters" :key="filter.name" class="filters__item">
              <button
                :data-filter="filter.id"
                class="filters__btn btn-default"
                type="button"
                @click="activeFilter = filter"
              >
                {{ filter.name }}
              </button>
            </li>
          </ul>
        </div>
        <ul class="projects-list">
          <li
            v-for="(project, index) in projects"
            :key="project.name"
            :class="['projects-list__item', 'mix', project.filter]"
          >
            <div
              class="projects-list__img"
              :style="{ backgroundImage: `url(\'${project.image}\')` }"
              data-aos="fade-up"
              :data-aos-delay="index * 100"
            />
            <main class="projects-list__content">
              <div class="projects-list__head">
                <h4 class="projects-list__title">{{ project.name }}</h4>
                <p class="projects-list__info">{{ project.subtitle }}</p>
              </div>
              <button type="button" class="projects-list__btn" @click="activeProject = project">{{ $t('projects.look') }}</button>
            </main>
          </li>
        </ul>
        <div class="projects-placeholder">In progress :)</div>
      </div>
    </div>
    <Popup v-if="activeProject" :project="activeProject" @close="activeProject = null"/>
  </section>
</template>

<script>
import Popup from '~/components/Popup'

export default {
  name: 'Projects',
  components: {
    Popup
  },
  data () {
    return {
      filters: [{
        name: this.$t('projects.all'),
        id: 'all',
        size: 0,
        distance: 0
      }, {
        name: 'js',
        id: '.js',
        size: 0,
        distance: 0
      }, {
        name: 'vue',
        id: '.vue',
        size: 0,
        distance: 0
      }, {
        name: 'react',
        id: '.react',
        size: 0,
        distance: 0
      }],
      activeFilter: null,
      activeProject: null
    }
  },
  computed: {
    projects () {
      return [{
        name: 'Astorun',
        filter: 'vue',
        image: require('~/static/images/astorun/logo.png'),
        images: [
          require('~/static/images/astorun/main.jpg'),
          require('~/static/images/astorun/bascet.jpg'),
          require('~/static/images/astorun/collection.jpg')
        ],
        subtitle: this.$t('projects.astorun.title'),
        description: this.$t('projects.astorun.description'),
        technologies: 'HTML, CSS, SCSS, Vue.js, Nuxt.js, Vuex, vue-i18n, Axios',
        tools: 'Webpack, NPM, Git, Photoshop',
        link: 'https://nativejedi.github.io/astorun/'
      }, {
        name: 'Any.cash',
        filter: 'vue',
        image: require('~/static/images/anycash/logo.jpg'),
        images: [
          require('~/static/images/anycash/main.jpg'),
          require('~/static/images/anycash/tarif.jpg'),
          require('~/static/images/anycash/bonus.jpg')
        ],
        subtitle: this.$t('projects.anycash.title'),
        description: this.$t('projects.anycash.description'),
        technologies: 'HTML, CSS, SCSS, Vue.js, Nuxt.js, Vuex, vue-i18n, Axios',
        tools: 'Webpack, NPM, Git, Symply, Jira',
        link: 'https://any.cash/ru/'
      }, {
        name: 'K2K',
        filter: 'js',
        image: require('~/static/images/k2k/logo.jpg'),
        images: [
          require('~/static/images/k2k/main.jpg'),
          require('~/static/images/k2k/personal.jpg'),
          require('~/static/images/k2k/credit.jpg')
        ],
        subtitle: this.$t('projects.k2k.title'),
        description: this.$t('projects.k2k.description'),
        technologies: 'HTML, CSS, SCSS, jQuery, jQuery UI, Ajax',
        tools: 'Gulp, NPM, Git, Photoshop, Trello',
        link: 'https://nativejedi.github.io/k2k/'
      }, {
        name: 'Express Finance',
        filter: 'js',
        image: require('~/static/images/express-finance/main.jpg'),
        images: [
          require('~/static/images/express-finance/tarif.jpg'),
          require('~/static/images/express-finance/personal.jpg'),
          require('~/static/images/express-finance/cart.jpg')
        ],
        subtitle: this.$t('projects.express-finance.title'),
        description: this.$t('projects.express-finance.description'),
        technologies: 'HTML, CSS, SCSS, jQuery, Ajax, Google map API',
        tools: 'Gulp, NPM, Git, Photoshop, Trello',
        link: 'https://nativejedi.github.io/express-finance/'
      }, {
        name: 'GNC',
        filter: 'js',
        image: require('~/static/images/gnc/main.jpg'),
        images: [
          require('~/static/images/gnc/first.jpg'),
          require('~/static/images/gnc/second.jpg'),
          require('~/static/images/gnc/third.jpg')
        ],
        subtitle: this.$t('projects.gnc.title'),
        description: this.$t('projects.gnc.description'),
        technologies: 'HTML, CSS, SCSS, jQuery, Ajax, Youtube API',
        tools: 'Gulp, NPM, Git, Photoshop, Trello',
        link: 'https://nativejedi.github.io/gnc/index.html'
      }, {
        name: 'MVC',
        filter: 'mvc vue js react',
        image: require('~/static/images/mvc/logo.png'),
        images: [
          require('~/static/images/mvc/vue.jpg'),
          require('~/static/images/mvc/vanilla.jpg')
        ],
        subtitle: this.$t('projects.mvc.title'),
        description: this.$t('projects.mvc.description')
      }]
    }
  },
  mounted () {
    const containerEl = document.querySelector('.projects-list')
    const mixer = mixitup(containerEl)
    this.calcFilter()
    window.addEventListener('resize', this.calcFilter)
    this.activeFilter = this.filters[0]
  },
  destroyed () {
    window.removeEventListener('resize', this.calcFilter)
  },
  methods: {
    calcFilter () {
      const filters = document.querySelectorAll('.filters__btn')
      Array.prototype.map.call(filters, (btn, index) => {
        const leftDist = btn.offsetLeft - btn.parentElement.parentElement.offsetLeft

        const width = btn.clientWidth

        this.filters[index].distance = leftDist
        this.filters[index].size = width
      })
    }
  }
}
</script>
<style lang="scss">
@import "projects";
</style>
