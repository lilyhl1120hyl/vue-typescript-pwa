<template>
  <div id="app">
     <div v-if="$route.meta.main">
      <Header></Header>
        <router-view />  
      <Footer></Footer>
    </div>
    <div v-if="!$route.meta.main">
    <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

@Component({
  components:{
    Header,
    Footer
  }
})
export default class App extends Vue{
  
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
