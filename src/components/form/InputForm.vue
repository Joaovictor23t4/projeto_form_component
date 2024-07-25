<script setup>
import { useValidationStore } from '@/stores/validation';
import { useUserStore } from '@/stores/user';

defineProps({
    inputInfo: {
        type: Object,
        required: true
    }
})

const useValidation = useValidationStore();
const useUser = useUserStore();
</script>

<template>
    <input v-if="inputInfo.id != 'biography'" :type="inputInfo.type" :placeholder="inputInfo.placeholder" :id="inputInfo.id" v-model="useUser.user[inputInfo.id]" class="input_default" @change="useValidation.validateInput(inputInfo.id)">

    <textarea v-else id="text_area" cols="30" rows="10" v-model="useUser.user.biography" placeholder="Escreva uma pequena biografia sua." @change="useValidation.validateInput('biography')"></textarea>

    <p v-if="useValidation.inputValidations[inputInfo.id].message != ''" class="alertMessage">{{ useValidation.inputValidations[inputInfo.id].message }}</p>
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

#text_area {
    width: 630px;
    padding: 15px 20px 0 20px;
    font-size: 1.1rem;
    resize: none;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    color: #4d4c4c;
}
.alertMessage {
    width: 300px;
    margin-top: 10px;
    color: red;
}
</style>