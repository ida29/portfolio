<template>
    <div class="container-fulled" style="height: 100%;">
    <div class="row flex" style="height: 100%;">
      <div class="col s2" style="height: 100%;">
        <Menu/>
      </div>
      <div class="col s10" style="height: 100%;">
        <div id="app">
          <transition>
          <router-view/>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style lang="scss">
html,body {
  height: 100vh;
  width: 100vw;

  color: white;
  font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", sans-serif;

  background-image: linear-gradient(-90deg, #00E699, #205AF8);
}

main{
  margin:18px;
}

h3 {
  margin-bottom: 0.54em;
}

h1,h2,h3,h4,h5,h6 {
  line-height: 1.5em;
  font-weight: normal;
}

p {
  line-height: 1.65em;
  text-align: justify;
}

textarea {
  width: 100%;
}

pre {
  margin-top:1.5em;
}

ul, ol {
  padding-top: 0.4em;
  padding-bottom: 0.4em;
}

li {
  padding-top: 0.3em;
  padding-bottom: 0.3em;
}

// 画面サイズ767px以下
@media screen and (max-width:767px) {
  body {font-size: 10pt;}
  h1,h2,h3,h4,h5,h6 {letter-spacing: .1em;}
  h3 {font-size: 18pt;}
  h4 {font-size: 14pt;}
  p {letter-spacing: .05em;}
  ul, ol { padding-left: 1.0em;}

  // ul 左に詰める
  .ul_flush {
    list-style: none;
    padding-left: 0;
    display: table;
  }
  .ul_flush li:after {
    content: "";
    display: block;
    margin-bottom: 0.5em;
  }

  .ul_flush li {
    display: table-row;
  }
  .ul_flush li:before {
    content: "•";
    display: table-cell;
    padding-right: 0.4em;
  }

  li {
    margin-bottom: 0.5em;
  }

  // ol 左に詰める
  .ol_flush {
    list-style: none;
    padding-left: 0;
    display: table;
  }
  .ol_flush li:after {
    content: "";
    display: block;
    margin-bottom: 0.5em;
  }

  .ol_flush li {
    display: table-row;
    counter-increment: table-ol;
  }
  .ol_flush li:before {
    content: counter(table-ol) ".";
    display: table-cell;
    padding-right: 0.4em;
    text-align: right;
  }

  li {
    margin-bottom: 0.5em;
  }
}

// 画面サイズ768px以上
@media screen and (min-width:768px){
  body {font-size: 10.5pt;}
  h1,h2,h3,h4,h5,h6 {letter-spacing: .05em;}
  h3 {font-size: 18.5pt;}
  h4 {font-size: 16pt;}
  ul, ol { padding-left: 1.6em;}
  p {letter-spacing: .025em;}
}

.v-enter-active {
  transition: opacity .8s;
}
.v-enter {
  opacity: 0;
}

</style>
