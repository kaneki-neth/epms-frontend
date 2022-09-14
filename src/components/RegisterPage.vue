<template>
<title>AdminLTE 3 | Registration Page</title>

<div class="register-box">
    <div class="register-logo">
        <a><b>Admin</b>LTE</a>
    </div>
<div class="card">
    <div class="card-body register-card-body">
        <p class="login-box-msg">Register a new membership</p>
            <form @submit.prevent="handleSubmit">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" v-model="name" placeholder="Full name">
                    <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-user"></span>
                        </div>
                    </div>
                </div>
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
                <div class="input-group mb-3">
                    <input type="password" class="form-control" v-model="password_confirm" placeholder="Confirm password">
                    <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-lock"></span>
                        </div>
                    </div>
                </div>
                <div class="row">                    
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary btn-block">Register</button>
                    </div>
                </div>
            </form>
        <router-link :to="{ name: 'Login'}">I already have an account</router-link>
    </div>

</div>
</div>
</template>

<script>
export default {
    name: 'RegisterPage',
    data() {
        return {
            name: "",
            email: "",
            password: "",
            password_confirm: "",
}
    },
    methods: {
        handleSubmit() {
            const data = {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirm: this.password_confirm
            }

            console.log(data)
        }
    }
}
    
</script>

<style scoped>
.register-box {
    justify-content: center;
    align-items: center;
}
</style>