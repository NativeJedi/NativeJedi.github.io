<template>
  <li class="news-item" @click="getNewsText" >
    <h4 class="news-item__title" v-bind:class="{active: article.isOpen}">{{ article.title }}</h4>
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
      markup: ''
    }
  },
  created() {
    this.getRefs()
  },

  methods: {
    getNewsText: function() {
      this.$emit('getNewsText', this.article)
      if (this.article.isLoaded) return

      const apiUrl = `${this.article.apiUrl}?show-blocks=body&${this.configKey}`
      fetch(apiUrl)
        .then(res => res.json())
        .then(result => {
          this.article.isLoaded = true
          const data = result.response.content.blocks.body
          data.forEach(item => {
            this.markup += item.bodyHtml
          })
        })
    },

    getRefs: function() {
      // console.log(this.$refs)
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
      color: $main-color;

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
    overflow-x: hidden;
    box-sizing: content-box;
    font-size: 14px;
    @include scrollbar(5px, $main-color);

    p {
      margin: 0;
    }
    .gu-image {
      max-width: 100%;
      object-fit: cover;
    }
  }
}
</style>
