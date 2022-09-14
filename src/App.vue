<template>
  <div class="box">
    <Navbar/>
    <div class="box-content">
      <LoginPage/>
      </div>
    </div>
    <router-view/>
</template>

<script>
import LoginPage from './components/LoginPage.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    LoginPage,
    Navbar
  }
}
</script>

<style scoped>

</style>