<template>
  <div class="box">
    <Navbar/>
      <div class="box-content">
        <LoginPage/>
      </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import LoginPage from '../components/LoginPage.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    LoginPage
  }
}
</script>
