<!-- <script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

    
</script> -->

<script>
import axios from 'axios'

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {
            try {
                const response = await axios.post('login', {
                    email: this.email,
                    password: this.password
                });
    
                localStorage.setItem('token', response.data.token)
                // this.$router.push('/home')
                window.location.href = '/home'
            } catch (error) {
                console.log(error)
            }
        }
    }
}

</script>



<template>        
<div class="login-box">    
    <div class="login-logo">
        <a><b>Admin</b>LTE</a>
    </div>

    <div class="card">
        <div class="card-body login-card-body">
            <p class="login-box-msg">Sign in to start your session</p>
                <form @submit.prevent="login">
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