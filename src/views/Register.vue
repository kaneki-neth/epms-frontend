<template>
  <div class="box">
    <Navbar/>
      <div class="box-content">
        <RegisterPage/>
      </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import RegisterPage from '../components/RegisterPage.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    RegisterPage
  }
}
</script>
