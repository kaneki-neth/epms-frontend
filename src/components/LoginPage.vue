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
            <form action="../../index3.html" method="post">
                <div class="input-group mb-3">
                    <input type="email" class="form-control" placeholder="Email">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-envelope"></span>
                            </div>
                        </div>
                </div>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Password">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                    </div>
                        <div class="row">
                            <div class="col-8">
                                <div class="icheck-primary">
                                    <input type="checkbox" id="remember" name="remember" value="remember">
                                    <label for="remember">
                                        Remember Me
                                    </label>
                                </div>
                            </div>

                            <div class="col-4">
                                <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                            </div>

                        </div>
            </form>

            <p class="mb-0">
                <a href="">I forgot my password</a>
            </p>
            <p class="mb-0">                
                <router-link :to="{ name: 'Register' }">Register a new account</router-link>
            </p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'LoginPage'
}

</script>

<style scoped>
.login-box {
    justify-content: center;
    align-items: center;
}
</style>