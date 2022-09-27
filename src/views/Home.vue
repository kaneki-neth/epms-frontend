<template>
    <div class="home-box">
        <div>
            <h3 v-if="user">Hello, you are in home page ( {{ user.name }} user )</h3>
            <h3 v-if="!user">You are not logged in!</h3>
        </div>
    </div>  
</template>

<script>
export default {
    name: 'Home',
    props: [
        'user'
    ],
}
</script>