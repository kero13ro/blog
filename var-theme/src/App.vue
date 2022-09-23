<template>
  <div id="app" :class="theme">
    <button @click="theme = 'default'">default</button>
    <button @click="theme = 'dark'">dark</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="box"></div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: () => ({
    theme: "default"
  })
}
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  padding: 20px;
  height: 100vh;
  color: var(--main);
  background-color: var(--contrast);

  h1 {
    color: var(--title);
  }
  a {
    color: var(--sub);
  }

  .box {
    width: 200px;
    height: 200px;
    background-image: var(--box-image);
  }
}

</style>
