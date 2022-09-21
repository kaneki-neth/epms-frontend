<template>
    <div class="home-box">
        <div>
            <h3 v-if="user">Hello, you are in home page</h3>
        </div>
    </div>  
</template>

<script>
    
import axios from 'axios'
export default {
    name: 'Home',
    data() {
        return {
            user: null
        }
    },
    async created() {
        const response = await axios.get('user')

        this.user = response.data
    }
}
</script>
