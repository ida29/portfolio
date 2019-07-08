<template>
  <div class="works center-align">
    <h1>{{ msg }}</h1>
    <h2>{{ msg }}</h2>

    <div v-for="card in reverseCards" :key="card.id">
      <div class="col s12 m6">
        <div class="card">
          <div class="card-content black-text">
            <span class="card-title"><a :href="card.link">{{ card.title }}</a> ({{ card.year }})</span>
            <p id="info">{{ card.text }}</p>
            <p>{{ card.skill }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Works',
  data () {
    return {
      show: false,
      msg: 'Works',
      cards: [
        {
          id: 1,
          title: 'yuruc',
          year: '2018',
          text: 'C言語学習サイト(未完)',
          skill: 'Ruby on Rails / heroku / jQuery / wandbox API / Ace(editor) / Materialize',
          img_src: require('./../assets/dennis_ritchie.png'),
          link: 'https://yuruc.herokuapp.com'
        },
        {
          id: 2,
          title: 'portfolio',
          year: '2019',
          text: 'ポートフォリオサイトです。',
          skill: 'Vue.js / vue-cli / github-pages / Materialize',
          img_src: require('./../assets/frog.png'),
          link: 'https://ida29.github.io/portfolio/#/'
        }
      ]
    }
  },
  computed: {
    reverseCards () {
      return this.cards.slice().reverse()
    }
  }
}
</script>

<style scoped lang="scss">
h1 {
  display: none;
}

#card-title {
  font-size: 2em;
  padding-bottom: 0.3em;
}

#info {
  padding-bottom: 0.3em;
}

.card {
  height: 14em;
}

</style>
