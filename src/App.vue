<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import Navbar from './components/Navbar.vue'

// state or data
const user = ref(null)

// lifecycle hook
onMounted(() => {
  getUser()
})

// methods
const getUser = async () => {
  try {
    const response = await axios.get('current-user')
    user.value = response.data.user
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <Navbar :user="user" />
  <div class="box">
    <div class="box-content">
      <router-view :user="user" />
    </div>
  </div>
</template>
<!-- <template>
  <Navbar :user="user" />
  <div class="box">
    <div class="box-content">
      <router-view :user="user" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
        return {
            user: null
        }
  },
    
  async created() {
      const response = await axios.get('current-user');
      // console.log(response)

      this.user = response.data.user;
      // console.log(response.data);
      // const userDetail = JSON.parse(localStorage.getItem('user'))
      // this.user = userDetail.user
  }
}
</script> -->