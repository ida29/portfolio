<template>
  <ul id="menu">
    <div class="center-align">
      <img class="circle responsive-img" src="./../assets/frog.png">
    </div>
    <li v-for="item in items" :key="item.id">
      <div class="item center-align">
        <router-link :to="item.path">{{ item.val }}</router-link>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      msg: 'menu',
      items: [
        {id: 1, val: 'home', path: '/'},
        {id: 2, val: 'about', path: '/about'},
        {id: 3, val: 'works', path: '/works'}
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.item {
  padding-top: 0.4em;
  font-size: 1.6em;
}
</style>
