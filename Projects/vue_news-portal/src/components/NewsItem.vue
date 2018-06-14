<template>
  <li class="news-item" @click="getNewsText">
    <h4 class="news-item__title" v-bind:class="{active: isOpen}">{{ article.webTitle }}</h4>
    <div class="news-item__text" v-html="markup"/>
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
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    transition: all 0.4s;
    &.active {
      padding-left: 50px;
      color: #41b883;

      & + div {
        max-height: 400px;
      }
    }
  }

  &__text {
    position: relative;
    max-height: 0;
    margin: 0 10px;
    padding: 0 10px;
    transition: max-height 0.4s;
    overflow-y: scroll;
    overflow-x: hidden;
    box-sizing: content-box;
    font-size: 14px;
    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 2px;
      box-shadow: inset 10px 0 0 #41b883;
    }

    img {
      object-fit: cover;
    }
  }
}
</style>
