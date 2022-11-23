<template>
  <div id="app">
    <img src="./assets/logo.png" alt="" />
    <!-- <HelloWorld /> -->
    <p>当前运行环境: {{ env }}</p>
    <p>当前请求接口地址: {{ api }}</p>
  </div>
</template>

<script>
import { currentEnv, API_URL } from '@/const'
// import HelloWorld from './components/HelloWorld'
export default {
  name: 'App',
  components: {
    // HelloWorld,
  },
  data() {
    return {
      env: currentEnv,
      api: API_URL,
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
