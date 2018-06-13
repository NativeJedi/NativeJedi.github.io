<template>
  <li class="news-item" @click="getNewsText">
    <h4 class="news-item__title">{{ article.webTitle }}</h4>
    <div class="news-item__text" v-bind:class="{active: isOpen}" v-html="markup"/>
  </li>
</template>

<script>
export default {
  name: 'NewsItem',
  props: {
    article: Object,
    configKey: String
  },
  data() {
    return {
      markup: '',
      isOpen: false,
      isLoaded: false
    }
  },

  methods: {
    getNewsText: function() {
      if (this.isLoaded) {
        this.isOpen = !this.isOpen
        return
      }
      const apiUrl = `${this.article.apiUrl}?show-blocks=body&${this.configKey}`
      fetch(apiUrl)
        .then(res => res.json())
        .then(result => {
          this.isLoaded = true
          const data = result.response.content.blocks.body
          data.forEach(item => {
            this.markup += item.bodyHtml
          })
        })
        .then(() => {
          this.isOpen = true
        })
    }
  }
}
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}
.news-item {
  text-align: left;
  list-style: none;
  border: 1px solid #000;

  &:not(:last-child) {
    border-bottom: none;
  }

  &__title {
    padding: 10px 20px;
    margin: 0;
    cursor: pointer;
  }

  &__text {
    max-height: 0;
    transition: max-height 0.6s;
    overflow-y: scroll;

    img {
      max-width: 100%;
      object-fit: cover;
    }

    &.active {
      max-height: 400px;
    }
  }
}
</style>
