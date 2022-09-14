<template>
    <button @click='onClick()' :style="{ background: color }"></button>
</template>

<script>
export default {
    name: 'Button',
    methods: {
        onClick() {
            this.$emit('btn-click')
        }
    }
    }
</script>