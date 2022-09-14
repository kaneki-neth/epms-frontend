<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ brown: theme==='brown' }">
            <h1>{{ header }}</h1>
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: [
        'header',
        'text',
        'theme'
    ],
    methods: {
        closeModal() {
            this.$emit('close-modal') 
    }
    }
}
</script>

<style scoped>
    .modal {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px
    }
    .backdrop {
        top: 0;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
    }
    .modal h1 {
        color: green;
        border: none;
        padding: 0;
    }
    /* .modal.red {
        background: crimson;
        color: white;
    } */
    .modal.brown {
        background: #472D2D;
        color: white;
    }
    .modal.sale h1 {
        color: white;
    }
</style>