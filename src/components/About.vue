<template>
  <div class="about center-align">
    <h1>About</h1>
    <h2>About</h2>

    <div v-for="card in cards" :key="card.id">
      <div class="col s12 m6 cards-container">
        <div class="card">
          <div class="card-content black-text">
            <span class="card-title">{{ card.title }}</span>
            <div v-for="info in card.infos" :key="info.id">
            <p>{{ info.val }}</p>
          </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'About',
      cards: [
        {
          id: 1,
          title: '基本情報',
          infos: [
            {id: 1, val: '伊田 悠人(Yuto Ida)'},
            {id: 3, val: 'エンジニア'},
            {id: 4, val: '芝浦工業大学 工学部 通信工学科 卒業'},
            {id: 2, val: '1992年生まれ'}
          ]
        },
        {
          id: 2,
          title: '職務経歴',
          infos: [
            {id: 1, val: '2015/04～現在 通信計測機メーカー'}
          ]
        },
        {
          id: 3,
          title: '趣味',
          infos: [
            {id: 1, val: '漫画'},
            {id: 2, val: '音楽'}
          ]
        },
        {
          id: 5,
          title: '✉️',
          infos: [
            {id: 1, val: 'y.ida898@gmail.com'}
          ]
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
h1 {
  display: none;
}

.card {
  height: 14em;
}
</style>
