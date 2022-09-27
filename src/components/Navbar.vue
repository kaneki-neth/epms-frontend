<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-light fixed-top">
        <div class="container">
            <a class="navbar-brand">Employees Performance Monitoring System</a>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto" v-if="!user">
                    <li class="nav-item">
                        <router-link :to="{ name: 'Login' }" class="nav-link">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'Register' }" class="nav-link">Register</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto" v-if="user">
                    <li class="nav-item">
                        <router-link :to="{ name: 'Dashboard' }" class="nav-link">Dashboard</router-link>
                    </li>
                    <li class="nav-item">
                        <a href="javascript:void(0)" @click="logout" class="nav-link">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  </div>
</template>

<script>
import axios from 'axios'
    
export default {
    name: 'Navbar',
    props: [
        'user'
    ],
    methods: {
        async logout() {
            try {
                const response = await axios.post('logout')
                localStorage.removeItem('token')
    
                // this.$router.push('/login')
                window.location.href = '/login'
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style scoped>
.navbar {
        background-color: #FFCB42;
    }
</style>