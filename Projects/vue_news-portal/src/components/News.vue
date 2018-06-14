<template>
  <div class="news">
    <img  class= "news__img" src="../assets/logo.png">
    <h1 class="news__title">A simple news portal with Vue.js</h1>
    <div class="news__body">
      <button class="news__btn" @click="getNews">{{ buttonText }}</button>
      <ul class="news__list">
        <NewsItem v-for="item in results" :key="item.id" :article="item" :config-key="configKey" />
      </ul>
    </div>
  </div>
</template>

<script>
import NewsItem from './NewsItem'

const config = {
  key: 'api-key=184a93b7-1452-43b2-b9f4-0ae555113560',
  url: 'https://content.guardianapis.com/search?'
}

export default {
  name: 'News',
  components: { NewsItem },
  data() {
    return {
      configKey: config.key,
      url: config.url,
      isLoaded: false,
      results: []
    }
  },
  computed: {
    buttonText: function() {
      return this.isLoaded ? 'Refresh' : 'Send request'
    }
  },

  methods: {
    getNews: function() {
      fetch(this.url + this.configKey)
        .then(res => res.json())
        .then(result => {
          this.results = [...result.response.results]
          this.isLoaded = true
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.news {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  &__img {
    max-width: 200px;
  }

  &__btn {
    position: relative;
    min-width: 150px;
    padding: 5px 20px;
    border: 2px solid #41b883;
    background-color: transparent;
    color: #41b883;
    font-weight: bold;
    cursor: pointer;
    overflow: hidden;
    box-sizing: border-box;
    transition: all 0.3s;
    &:focus {
      outline: none;
    }

    &:hover {
      color: #fff;
      padding-left: 40px;
      &:after {
        transform: translateX(0);
      }
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #41b883;
      transform: translateX(-100%);
      transition: transform 0.4s;
      z-index: -1;
    }
  }
}
</style>
