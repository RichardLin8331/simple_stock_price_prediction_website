<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<template>
  <div id="app">
    <NavBar></NavBar>
    
    <router-view/>
    <nav>
      <router-link to="/" >Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </div>
  
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

@font-face {
    font-family: sketch;
    src: url('~@/assets/fonts/Sketchzone.otf');

    

}
@font-face {
    

    font-family: tsd;
    src: url('~@/assets/fonts/tsd.otf');



}
@font-face {


    font-family: tss;
    src: url('~@/assets/fonts/tss.otf');

}
</style>
