<template>
  <div class="news">
    <img  class= "news__img" src="../assets/logo.png">
    <h1 class="news__title">A simple news portal with Vue.js</h1>
    <div class="news__body">
      <button class="news__btn" @click="getNews">Send request</button>
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
      results: []
    }
  },

  methods: {
    getNews: function() {
      fetch(this.url + this.configKey)
        .then(res => res.json())
        .then(result => {
          this.results = [...result.response.results]
          console.log(this.results)
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
}
</style>
