<template>
  <div class="welcome center-align">
      <h1>{{ msg }}</h1>
      <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      msg: 'Welcome to my portfolio site!'
    }
  }
}
</script>

<style scoped lang="scss">
h1 {
  display: none;
}

@media screen and (max-width:767px) {
  h2 {
    font-size: 2em;
    padding-top: 20vh;
    border-bottom: 0.08em double;
  }
}

// 画面サイズ768px以上
@media screen and (min-width:768px){
  h2 {
    padding-top: 32vh;
    border-bottom: 0.08em double;
  }
}
</style>
