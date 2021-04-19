<template>
  <div id="app">
    <HomePage v-if="id==0" />
    <App1 v-if="id!=0">
      <p slot="section-blog">{{ text }}</p>
    </App1>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue';
import App1 from './components/App1.vue';

export default {
  name: 'App',
  components: {
    App1,
    HomePage
  },
  computed:{
    text(){
        return this.$store.state.text
    },
    id(){
      return this.$store.state.idToDisplay
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
h1{
    margin-top: 0;
}
</style>
