import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useValidationStore = defineStore('validation', () => {
    const state = reactive({
        isLogged: false,
        isLoading: false
    });

    return {state};
});