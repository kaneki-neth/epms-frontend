<script setup>
import axios from 'axios'
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const handleSubmit = async () => {
  const payload = {
    email: email.value,
    password: password.value
  }

  const { data } = await axios.post('login', payload)
  localStorage.setItem('token', data.access_token)
}
</script>

<template>
    <title>AdminLTE 3 | Log in</title>
    <!-- <body class="hold-transition login-page"> -->
        
<div class="login-box">
    
    <div class="login-logo">
        <a><b>Admin</b>LTE</a>
    </div>

    <div class="card">
        <div class="card-body login-card-body">
            <p class="login-box-msg">Sign in to start your session</p>
                <form @submit.prevent="handleSubmit()">
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" v-model="email" placeholder="Email">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-envelope"></span>
                                </div>
                            </div>
                    </div>
                        <div class="input-group mb-3">
                            <input type="password" class="form-control" v-model="password" placeholder="Password">
                                <div class="input-group-append">
                                    <div class="input-group-text">
                                        <span class="fas fa-lock"></span>
                                    </div>
                                </div>
                        </div>
                            <div class="row">
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary btn-block">Log In</button>
                                </div>

                            </div>
                </form>

            <!-- <p class="mb-0">
                <a href="">I forgot my password</a>
            </p> -->
            <p class="mb-0">                
                <router-link :to="{ name: 'Register' }">Register a new account</router-link>
            </p>
        </div>
    </div>
</div>
</template>

<style scoped>
.login-box {
    justify-content: center;
    align-items: center;
}
</style>