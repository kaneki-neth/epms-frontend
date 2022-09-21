<template>
  <Navbar/>
  <div class="box">
    <div class="box-content">
      <router-view/>
      </div>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style scoped>

</style>