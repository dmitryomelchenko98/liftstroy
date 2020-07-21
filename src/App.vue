<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import LoginLayout from './layouts/LoginLayout.vue'
import MainLayout from './layouts/MainLayout.vue'

export default {
  name: 'app',components: {LoginLayout,MainLayout},
  computed:{
    layout(){
      return (this.$route.meta.layout || 'login') + '-layout' 
    }
  }
}
</script>

<style lang="scss">
@import "./assets/mixin/_mixin.scss";

@font-face {
    font-family: 'Roboto';
    src: local('Roboto Light'), local('Roboto-Light'), 
    url('./assets/fonts/Robotolight.woff2') format('woff2'), 
    url('./assets/fonts/Robotolight.woff') format('woff'), 
    url('./assets/fonts/Robotolight.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
}

html,body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}


body {
    font-family: 'Roboto';
    display: flex;
    justify-content: center;
    align-items: center;
}

#app {
  max-width: 1920px;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  overflow-x: auto;
  display: grid;
  grid-template-columns: 290px minmax(710px, calc(100% - 290px));
  grid-template-rows: 100%;
  .app-content {
    width: 100%;
    height: 100%;
    @include flex();
    flex-direction: column;
    justify-content: flex-start;
  }
}
</style>
