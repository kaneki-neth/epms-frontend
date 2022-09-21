<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-light fixed-top">
        <div class="container">
            <a class="navbar-brand">Employees Performance Monitoring System</a>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
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
            </div>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
.navbar {
        background-color: #FFCB42;
    }
</style>