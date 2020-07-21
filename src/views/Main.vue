<template>
  <div id="app">
    <NavBar />
    <div class="app-content">
      <Header />
      <router-view />
    </div>
  </div>
</template>


<script>
import NavBar from '../components/NavBar.vue'
import Header from '../components/Header.vue'

export default {
    name: 'Main', components: {NavBar,Header}
}
</script>