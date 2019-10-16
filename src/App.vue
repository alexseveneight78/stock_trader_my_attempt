<template>
  <div class="container">
    <app-header></app-header>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from './components/header/Header'
  export default {
    components: {
      appHeader: Header
    }
  }
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.view {
  outline: 1px solid salmon;
}
</style>
