<script setup>
import { defineProps } from 'vue';
import { useUserStore } from '@/stores/user.js';

defineProps({
    inputInfo: {
        type: Object,
        required: true
    }
})

const useUser = useUserStore()
</script>

<template>
    <input :type="inputInfo.type" :placeholder="inputInfo.placeholder" :id="inputInfo.id" v-model="useUser.user[inputInfo.id]" class="input_default">
</template>

<style scoped>
.input_default {
    width: 300px;
    padding: 10px 20px 10px 20px;
    outline: none;
    font-size: 1.1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    color: #4d4c4c;
}
.input_default::placeholder {
    position: relative;
    font-size: 16px;
    bottom: 1px;
}
</style>